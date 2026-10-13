import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { siteUrl } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", ...projects.map(({ slug }) => `/projects/${slug}`)]
    .map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
