"use client";

import { motion } from "motion/react";

export default function TimelinePoint({
  year,
  title,
  description,
  side,
  isFirst,
  isLast,
  keyword = [],
  delay = 0
}: {
  year: string;
  title: string;
  description: string;
  side: "start" | "end";
  isFirst: boolean;
  isLast: boolean;
  keyword: string[];
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 1, 0.5, 1], delay: delay }}
    >
      {!isFirst && <hr className="bg-dark dark:bg-white dark:opacity-40" />}
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-11 w-11  rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, x: side === "start" ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.4, 1, 0.5, 1], delay: delay + 0.25 }}
        className={
          side === "start"
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10"
        }
      >
        <time className="font-mono font-bold text-5xl">{year}</time>
        <div className="font-black text-xl">{title}</div>
        <div className="flex flex-col">
            {description}
            <div className={`flex flex-wrap flex-row gap-2 ${side === 'start' ? 'justify-end' : 'justify-start'} mt-2`}>
                {keyword.map((word, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-base-300 rounded-full px-3 py-1 border-2 border-gray-300 dark:border-white shadow-sm dark:shadow-md shadow-blue-400 dark:shadow-blue-300"
                  >
                    {word}
                  </span>
                ))}
            </div>
        </div>
      </motion.div>
      {!isLast && <hr className="bg-dark dark:bg-white dark:opacity-40" />}
    </motion.li>
  );
}
