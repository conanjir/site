import Link from "next/link";
import type { Route } from "next";

import type { Project } from "@/data/site";
import { MediaPlate } from "@/components/MediaPlate";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="work-item">
      <Link href={`/work/${project.slug}` as Route} className="work-item__link">
        <MediaPlate tone={project.heroTone} label={project.heroLabel} className="work-item__media" showMeta={false} />
        <div className="work-item__meta">
          <h2>{project.title}</h2>
          <p>{project.discipline}</p>
        </div>
      </Link>
    </article>
  );
}
