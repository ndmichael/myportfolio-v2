import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20">
      <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
        All Projects
      </h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-20">
        A deeper look into the systems, APIs, and design decisions behind each project.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} index={i} />
        ))}
      </div>
    </section>
  );
}
