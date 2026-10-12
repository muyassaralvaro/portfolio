"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./project-card";
import type { Project } from "../data/projects";

export default function ProjectShowcase({
  projects,
}: {
  projects: Project[];
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-w-0 w-full">
      <div className="grid min-w-0 w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
              delay={index * 0.2}
              onOpen={setSelectedProject}
            />
          ))
        ) : (
          <p className="col-span-full rounded-xl border border-dashed border-base-content/25 p-8 text-center text-base-content/70">
            No projects to show yet.
          </p>
        )}
      </div>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      const scrollY = window.scrollY;
      dialog.showModal();
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }
    if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
    >
      {project ? (
        <div className="modal-box max-h-[90dvh] max-w-4xl overflow-y-auto p-0 text-base-content" tabIndex={0}>
          <header className="relative flex items-start justify-between gap-5 p-5 pb-2 sm:p-8 sm:pb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
                {project.category} <span aria-hidden="true">·</span> {project.period}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-2 pr-10 text-2xl font-black leading-tight sm:text-3xl"
              >
                {project.title}
              </h2>
            </div>
            <form method="dialog">
              <button
                aria-label="Close project details"
                className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl"
              >
                ×
              </button>
            </form>
          </header>

          <div className="space-y-6 px-5 pb-6 sm:px-8 sm:pb-8">
            <p className="max-w-3xl text-base leading-7 text-base-content/80">
              {project.summary}
            </p>

            <div className={project.slug === "nourish" ? "grid gap-4 sm:grid-cols-2" : "grid gap-4"}>
              {project.images.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-xl border border-base-content/10 bg-base-200">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes={project.slug === "nourish" ? "(max-width: 640px) 85vw, 360px" : "(max-width: 900px) 90vw, 820px"}
                    className="h-auto w-full"
                  />
                  <figcaption className="px-3 py-2 text-xs text-base-content/65">{shot.alt}</figcaption>
                </figure>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="font-bold">Highlights</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-base-content/80">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-base-content/10 bg-base-200 px-3 py-1.5 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-base-content/10 pt-5">
              <span className="text-sm text-base-content/60">{project.role}</span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-ghost btn-sm"
                >
                  Close
                </button>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Visit live site <span aria-hidden="true">↗</span>
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600"
                >
                  Read case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <form method="dialog" className="modal-backdrop">
        <button aria-label="Close project details">close</button>
      </form>
    </dialog>
  );
}
