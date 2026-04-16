"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";

import type { Project } from "@/data/site";
import { MediaPlate } from "@/components/MediaPlate";

export function ProjectCard({ project }: { project: Project }) {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [hoverShift, setHoverShift] = useState(14);
  const cursorLabel = `${project.title} / ${project.year} / ${project.discipline}`;
  const homeMedia = {
    ...project.heroMedia,
    fit: "cover" as const,
    display: "full" as const
  };

  useEffect(() => {
    let cancelled = false;

    const measureCursor = async () => {
      if (typeof window === "undefined" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
      }

      const cursor = cursorRef.current;

      if (!cursor) {
        return;
      }

      await document.fonts.ready;

      const { measureNaturalWidth, prepareWithSegments } = await import("@chenglou/pretext");

      if (cancelled) {
        return;
      }

      const styles = window.getComputedStyle(cursor);
      const font = [styles.fontStyle, styles.fontVariant, styles.fontWeight, styles.fontSize, styles.fontFamily].join(" ");
      const prepared = prepareWithSegments(cursorLabel, font);
      const width = measureNaturalWidth(prepared);

      if (cancelled) {
        return;
      }

      setHoverShift(Math.min(20, Math.max(12, Math.round(width * 0.025))));
    };

    void measureCursor();

    return () => {
      cancelled = true;
    };
  }, [cursorLabel]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article className="work-item">
      <Link
        href={`/work/${project.slug}` as Route}
        className="work-item__link"
        aria-label={`${project.title}, ${project.year}, ${project.discipline}`}
      >
        <div
          className="work-item__media-wrap"
          onPointerMove={handlePointerMove}
          style={{ "--hover-shift": `${hoverShift}px` } as CSSProperties}
        >
          <MediaPlate
            tone={project.heroTone}
            label={project.heroLabel}
            className="work-item__media"
            media={homeMedia}
          />
          <span ref={cursorRef} className="work-item__cursor" aria-hidden="true">
            {cursorLabel}
          </span>
        </div>
        <div className="work-item__caption project-meta">
          <div className="project-meta__title">
            <p className="work-item__caption-title">
              {project.title}, {project.year}
            </p>
          </div>
          <p className="project-meta__discipline">{project.discipline}</p>
        </div>
      </Link>
    </article>
  );
}
