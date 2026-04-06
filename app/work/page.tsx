import { ProjectCard } from "@/components/ProjectCard";

import { projects } from "@/data/site";

export default function WorkPage() {
  return (
    <div className="page page--work">
      <section className="shell section-gap work-list" id="work">
        <div className="work-list__items">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
