import { notFound } from "next/navigation";

import { MediaPlate } from "@/components/MediaPlate";
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
      <section className="shell section-gap project-sequence">
        <MediaPlate tone={project.heroTone} label={project.heroLabel} className="project-hero__media" videoSrc={project.heroVideoSrc} />
        {project.blocks.map((block, blockIndex) => {
          if (block.type === "full") {
            return (
              <div key={`${project.slug}-${blockIndex}`} className="sequence-item">
                <MediaPlate
                  tone={block.tone}
                  label={block.label}
                  caption={block.caption}
                  className={`project-block project-block--${block.height ?? "medium"}`}
                />
              </div>
            );
          }

          if (block.type === "pair") {
            return (
              <div key={`${project.slug}-${blockIndex}`} className="sequence-item">
                <div className="project-pair">
                  {block.items.map((item) => (
                    <MediaPlate key={item.label} tone={item.tone} label={item.label} caption={item.caption} className="project-pair__item" showMeta={false} />
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={`${project.slug}-${blockIndex}`} className="sequence-item">
              <MediaPlate
                tone={block.tone}
                label={block.label}
                caption={block.caption}
                className={`project-block project-block--${block.type}`}
              />
            </div>
          );
        })}
      </section>

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
