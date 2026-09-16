"use client";

import { motion } from "motion/react";

export default function Reveal({
  children,
  delay
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 1, 0.5, 1], delay: delay }}
    >
      {children}
    </motion.div>
  );
}