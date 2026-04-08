"use client";

import Link from "next/link";
import type { Route } from "next";
import type { PointerEvent as ReactPointerEvent } from "react";

import type { Project } from "@/data/site";
import { MediaPlate } from "@/components/MediaPlate";

export function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.slug === "silt";

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article className={`work-item${isFeatured ? " work-item--featured" : ""}`}>
      <Link href={`/work/${project.slug}` as Route} className="work-item__link">
        <div className="work-item__media-wrap" onPointerMove={handlePointerMove}>
          <MediaPlate
            tone={project.heroTone}
            label={project.heroLabel}
            className="work-item__media"
            media={project.heroMedia}
          />
          <span className="work-item__cursor" aria-hidden="true">
            {project.title} / {project.discipline}
          </span>
        </div>
      </Link>
    </article>
  );
}
