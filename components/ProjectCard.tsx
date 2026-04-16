import Link from "next/link";
import type { Route } from "next";

import type { Project } from "@/data/site";
import { MediaPlate } from "@/components/MediaPlate";

export function ProjectCard({ project }: { project: Project }) {
  const hoverLabel = `${project.title} / ${project.year} / ${project.discipline}`;
  const homeMedia = {
    ...project.heroMedia,
    fit: "cover" as const,
    display: "full" as const
  };

  return (
    <article className="work-item">
      <Link
        href={`/work/${project.slug}` as Route}
        className="work-item__link"
        aria-label={`${project.title}, ${project.year}, ${project.discipline}`}
      >
        <div className="work-item__media-wrap">
          <span className="work-item__cursor" aria-hidden="true">
            {hoverLabel}
          </span>
          <MediaPlate
            tone={project.heroTone}
            label={project.heroLabel}
            className="work-item__media"
            media={homeMedia}
          />
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
