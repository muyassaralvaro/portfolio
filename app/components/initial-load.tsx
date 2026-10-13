"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ReadyContext = createContext(false);

export const usePageReady = () => useContext(ReadyContext);

export default function InitialLoad({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    // ponytail: Wait for first-viewport images for at most 4s; add retry UI if critical assets regularly exceed that.
    const images = Array.from(document.images).filter((image) => {
      const rect = image.getBoundingClientRect();
      return image.loading !== "lazy" || (rect.width > 0 && rect.height > 0 && rect.top < innerHeight && rect.bottom > 0);
    });
    const assets = Promise.allSettled([document.fonts.ready, ...images.map((image) => image.decode())]);
    const minimum = new Promise((resolve) => setTimeout(resolve, 450));
    const timeout = new Promise((resolve) => setTimeout(resolve, 4000));

    void Promise.all([minimum, Promise.race([assets, timeout])]).then(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (active) setReady(true);
      }));
    });

    return () => { active = false; };
  }, []);

  return (
    <ReadyContext.Provider value={ready}>
      {children}
      <div
        id="site-loading"
        role="status"
        aria-label="Loading portfolio"
        aria-hidden={ready}
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-200 text-base-content transition-opacity duration-200 ${ready ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        <span className="text-5xl font-black tracking-tight">A.M</span>
        <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em]">Loading portfolio</span>
        <span aria-hidden="true" className="mt-5 h-0.5 w-20 overflow-hidden rounded-full bg-base-content/15">
          <span className="loading-line block h-full w-full rounded-full bg-primary" />
        </span>
      </div>
    </ReadyContext.Provider>
  );
}
