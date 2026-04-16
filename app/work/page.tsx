import { ProjectCard } from "@/components/ProjectCard";

import { projects } from "@/data/site";

export default function WorkPage() {
  const mimeverse = projects.find((project) => project.slug === "mimeverse");
  const homepageProjects = projects.filter((project) => project.slug !== "mimeverse");

  if (mimeverse) {
    homepageProjects.splice(2, 0, mimeverse);
  }

  return (
    <div className="page page--work">
      <section className="shell section-gap work-list" id="work">
        <div className="work-list__items">
          {homepageProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
