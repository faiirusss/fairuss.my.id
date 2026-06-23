import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { LIST_PROJECTS } from "@/constants/listProject";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: `Projects — ${DATA.name}`,
  description: "A selection of things I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 pt-10 md:pt-0">
      <section className="space-y-2">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Projects
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-sm text-muted-foreground">
            A selection of things I&apos;ve built.
          </p>
        </BlurFade>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 max-w-[800px] mx-auto">
          {LIST_PROJECTS.map((project, id) => (
            <BlurFade
              key={project.slug}
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              <ProjectCard
                slug={project.slug}
                title={project.title}
                href={project.href}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
