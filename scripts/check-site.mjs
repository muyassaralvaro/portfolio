// Run with the site serving locally: node scripts/check-site.mjs [origin]
import assert from "node:assert/strict";

const origin = process.argv[2] ?? "http://localhost:3000";
const site = "https://muyassaralvaro.my.id";
const sitemap = await fetch(new URL("/sitemap.xml", origin));
assert.equal(sitemap.status, 200);
const paths = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(([, url]) => new URL(url).pathname);
assert.equal(paths.length, 7);

const descriptions = new Set();
const titles = new Set();
for (const path of paths) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, path);
  const head = (await response.text()).split("</head>")[0];
  const canonical = head.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const description = head.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  const title = head.match(/<title>([^<]+)<\/title>/i)?.[1];
  assert.equal(new URL(canonical).origin, site, path);
  assert.equal(new URL(canonical).pathname, path, path);
  assert.ok(description, path);
  assert.ok(title, path);
  assert.ok(head.includes('property="og:description"'), path);
  assert.ok(head.includes(`property="og:image" content="${site}/og-image.jpg"`), path);
  assert.ok(head.includes('name="twitter:card" content="summary_large_image"'), path);
  descriptions.add(description);
  titles.add(title);
}
assert.equal(descriptions.size, paths.length);
assert.equal(titles.size, paths.length);

const robots = await fetch(new URL("/robots.txt", origin));
assert.equal(robots.status, 200);
assert.ok((await robots.text()).includes(`${site}/sitemap.xml`));
const image = await fetch(new URL("/og-image.jpg", origin));
assert.equal(image.status, 200);
assert.equal(image.headers.get("content-type"), "image/jpeg");
console.log(`Checked ${paths.length} pages, sitemap, robots, and share image.`);
