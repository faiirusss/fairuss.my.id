import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy, Project } from "@/constants/listProject";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const CASE_STUDY_SECTIONS: { key: keyof Omit<CaseStudy, "gallery">; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "challenges", label: "Challenges" },
  { key: "outcome", label: "Outcome" },
];

function hasAnyCaseStudyContent(caseStudy?: CaseStudy): boolean {
  if (!caseStudy) return false;
  if (caseStudy.gallery && caseStudy.gallery.length > 0) return true;
  return CASE_STUDY_SECTIONS.some(({ key }) => {
    const value = caseStudy[key];
    return typeof value === "string" && value.trim().length > 0;
  });
}

export function ProjectDetail({ project }: { project: Project }) {
  const heroImage = project.coverImage ?? project.image;
  const showEmptyState = !hasAnyCaseStudyContent(project.caseStudy);
  const sections = CASE_STUDY_SECTIONS.filter(({ key }) => {
    const value = project.caseStudy?.[key];
    return typeof value === "string" && value.trim().length > 0;
  });
  const gallery = project.caseStudy?.gallery ?? [];

  let delayIndex = 0;
  const nextDelay = () => BLUR_FADE_DELAY * ++delayIndex;

  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 pt-10 md:pt-0">
      <BlurFade delay={nextDelay()}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="size-4" />
          Projects
        </Link>
      </BlurFade>

      <section className="space-y-4">
        <BlurFade delay={nextDelay()}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {project.title}
          </h1>
        </BlurFade>
        <BlurFade delay={nextDelay()}>
          <time className="font-sans text-sm text-muted-foreground">
            {project.dates}
          </time>
        </BlurFade>
        <BlurFade delay={nextDelay()}>
          <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
            {project.description}
          </Markdown>
        </BlurFade>
        {project.technologies.length > 0 && (
          <BlurFade delay={nextDelay()}>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </BlurFade>
        )}
        {project.links.length > 0 && (
          <BlurFade delay={nextDelay()}>
            <div className="flex flex-row flex-wrap items-start gap-2">
              {project.links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge className="flex gap-2 px-3 py-1 text-xs">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          </BlurFade>
        )}
      </section>

      {heroImage && (
        <BlurFade delay={nextDelay()}>
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={heroImage}
              alt={project.title}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </BlurFade>
      )}

      {showEmptyState && (
        <BlurFade delay={nextDelay()}>
          <p className="text-sm italic text-muted-foreground">
            Case study coming soon.
          </p>
        </BlurFade>
      )}

      {sections.map(({ key, label }) => (
        <BlurFade key={key} delay={nextDelay()}>
          <section className="space-y-3">
            <h2 className="text-xl font-bold">{label}</h2>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {project.caseStudy?.[key] as string}
            </Markdown>
          </section>
        </BlurFade>
      ))}

      {gallery.length > 0 && (
        <BlurFade delay={nextDelay()}>
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Gallery</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {gallery.map((item, idx) => (
                <figure key={idx} className="space-y-1">
                  <div className="overflow-hidden rounded-md border">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={500}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  {item.caption && (
                    <figcaption className="text-xs text-muted-foreground">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        </BlurFade>
      )}
    </main>
  );
}
