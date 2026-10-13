import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BackLink from "./back-link";
import { getProject, projects } from "../../data/projects";
import { socialImage } from "../../data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const title = `${project.title} | Alvaro Muyassar`;
  const description = `${project.summary} Read the full case study by Alvaro Muyassar.`;
  const url = `/projects/${slug}`;

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Alvaro Muyassar", locale: "en_US", type: "website", images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 px-5 pb-20 pt-24 text-base-content sm:px-8 sm:pt-28">
        <article className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <BackLink className="inline-flex items-center gap-2 rounded-lg border border-base-content/15 bg-base-100 px-3.5 py-1.5 text-sm font-semibold shadow-xs transition hover:border-blue-500 hover:text-blue-500">
              Back
            </BackLink>
            <Link
              href="/projects"
              className="text-sm font-medium text-base-content/70 hover:text-base-content hover:underline"
            >
              All projects
            </Link>
          </div>

          <header className="mt-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
              {project.category} <span aria-hidden="true">·</span> {project.period}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-base-content/75">
              {project.summary}
            </p>
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-6 rounded-xl"
              >
                Visit site <span aria-hidden="true">↗</span>
              </a>
            )}
          </header>

          <dl className="my-10 grid gap-4 rounded-xl border border-base-content/10 bg-base-100 p-5 sm:grid-cols-2 sm:p-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-base-content/55">
                Role
              </dt>
              <dd className="mt-1 font-semibold">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-base-content/55">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-base-200 px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-black">What it does</h2>
              <div className="mt-4 space-y-4 leading-8 text-base-content/80">
                {project.whatItDoes.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black">How I built it</h2>
              <div className="mt-4 space-y-4 leading-8 text-base-content/80">
                {project.howBuilt.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-black">Screenshots</h2>
            <div className={project.slug === "nourish" ? "mx-auto grid max-w-4xl gap-4 sm:grid-cols-2" : "mx-auto grid max-w-6xl gap-6"}>
              {project.images.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-xl border border-base-content/10 bg-base-100 shadow-sm">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes={project.slug === "nourish" ? "(max-width: 640px) 90vw, 430px" : "(max-width: 1200px) 90vw, 1120px"}
                    className="h-auto w-full"
                  />
                  <figcaption className="px-4 py-3 text-sm text-base-content/65">{shot.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-base-content/10 pt-6">
            <BackLink className="btn btn-neutral rounded-xl">
              Back to previous page
            </BackLink>
            <Link
              href="/projects"
              className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600"
            >
              Browse all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
