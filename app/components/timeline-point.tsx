"use client";

import { motion } from "motion/react";

export default function TimelinePoint({
  year,
  title,
  organization,
  description,
  side,
  isFirst,
  isLast,
  keyword = [],
  delay = 0,
}: {
  year: string;
  title: string;
  organization?: string;
  description: string;
  side: "start" | "end";
  isFirst: boolean;
  isLast: boolean;
  keyword: string[];
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {!isFirst && <hr className="bg-base-content/20" />}
      <div className="timeline-middle z-10">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500 bg-base-100 ring-4 ring-blue-500/20" />
      </div>
      <div
        className={
          side === "start"
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10"
        }
      >
        <time className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
          {year}
        </time>
        <h3 className="mt-1 text-lg sm:text-xl font-bold leading-snug text-base-content">
          {title}
        </h3>
        {organization && (
          <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
            {organization}
          </p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-base-content/75 max-w-md">
          {description}
        </p>
        <div
          className={`mt-3 flex flex-wrap gap-1.5 ${
            side === "start" ? "md:justify-end" : "justify-start"
          }`}
        >
          {keyword.map((word, index) => (
            <span
              key={index}
              className="rounded-full border border-base-content/10 bg-base-200 px-2.5 py-1 text-xs text-base-content/80 shadow-2xs"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      {!isLast && <hr className="bg-base-content/20" />}
    </motion.li>
  );
}
