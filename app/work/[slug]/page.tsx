import { notFound } from "next/navigation";

import { ProjectCarousel } from "@/components/ProjectCarousel";
import { projects } from "@/data/site";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  return (
    <div className="project-page">
      <ProjectCarousel project={project} />

      <section className="shell section-gap">
        <div className="project-meta">
          <div className="project-meta__title">
            <h1>{project.title}</h1>
            <p className="project-meta__date">{project.year}</p>
          </div>
          <p className="project-meta__discipline">{project.discipline}</p>
        </div>
        <div className="project-copy">
          <p>{project.intro}</p>
          <p>{project.application}</p>
        </div>
      </section>
    </div>
  );
}
