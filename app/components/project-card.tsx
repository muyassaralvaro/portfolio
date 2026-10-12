"use client";

import Image from "next/image";
import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion } from "motion/react";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  delay = 0,
  index = 1,
  onOpen,
}: {
  project: Project;
  delay?: number;
  index?: number;
  onOpen: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const preview = project.images[0];

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${y * 10}deg)
      rotateY(${-x * 10}deg)
      translateY(-4px)
    `;
  }

  function resetTilt() {
    if (cardRef.current) {
      cardRef.current.style.transform = "none";
    }
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    onOpen(project);
  }

  const indexBadge = String(index).padStart(2, "0");

  return (
    <motion.a
      href={`/projects/${project.slug}`}
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-label={`View ${project.title} details`}
      className="group block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div
        ref={cardRef}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-base-content/15"
        style={{ transition: "transform 180ms ease-out, box-shadow 300ms ease" }}
      >
        <span className="absolute right-3.5 top-3.5 z-10 font-mono text-xs font-bold text-base-content/60">
          {indexBadge}
        </span>

        {preview && (
          <div className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden ${project.slug === "nourish" ? "bg-gradient-to-br from-[#071b29] via-[#0a5d85] to-[#b9e7f2]" : "bg-base-200"}`}>
            {project.slug === "nourish" ? (
              <div className="relative h-[90%] overflow-hidden rounded-2xl border-4 border-white/80 bg-[#071b29] shadow-2xl" style={{ aspectRatio: "430 / 932" }}>
                <Image src={preview.src} alt={preview.alt} fill sizes="100px" className="object-contain" />
              </div>
            ) : (
              <Image src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" loading={index === 1 ? "eager" : "lazy"} className="h-full w-full object-cover object-top" />
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-bold leading-snug text-base-content transition group-hover:text-blue-500">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-base-content/70">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-base-200 px-2.5 py-1 text-[11px] font-medium text-base-content/75"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
