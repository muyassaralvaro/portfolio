"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";

export default function ProjectCard({
  imageTitle = "default",
  title,
  description,
}: {
  imageTitle?: string;
  title: string;
  description: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
        rotateX(${y * 25}deg)
        rotateY(${-x * 25}deg)
        scale(1.07)
        `;
  }

  function resetTilt() {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  }

  return (
    <a
      href="#"
      className="my-6 mx-2 inline-block cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div
        ref={cardRef}
        className="card card-sm w-60 bg-base-200 shadow-lg"
        style={{ transition: "transform 150ms ease-out" }}
      >
        <figure className="hover-gallery">
          {[1, 2, 3, 4, 5].map((number) => (
            <img
              key={number}
              alt={`Project View ${number}`}
              src={`img/projects/${imageTitle}/${number}.png`}
              style={{ aspectRatio: "4/5" }}
            />
          ))}
        </figure>

        <div className="card-body bg-white">
          <h1 className="card-title flex justify-between text-xl font-bold truncate ">
            {title}
          </h1>
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </a>
  );
}
