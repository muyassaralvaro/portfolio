"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function BackLink({ children, className }: { children: ReactNode; className: string }) {
  return (
    <Link
      href="/projects"
      className={className}
      onClick={(event) => {
        if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && window.history.length > 1) {
          event.preventDefault();
          window.history.back();
        }
      }}
    >
      <span aria-hidden="true">←</span> {children}
    </Link>
  );
}
