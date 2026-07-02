import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { GithubContributions } from "@/components/github-calendar";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SkillFan } from "@/components/skill-fan";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LIST_PROJECTS } from "@/constants/listProject";
import { LIST_SKILLS } from "@/constants/listSkils";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  // Derived from resume data; the ?? default only satisfies pop()'s string|undefined type.
  const ghUsername =
    DATA.contact.social.GitHub.url.split("/").filter(Boolean).pop() ?? "faiirusss";
  // Fanned card cluster — order + tilt/z mirror the "Tools I use" stack on rasmadibnu.com.
  const FEATURED_SKILLS = [
    { name: "Laravel", rotate: -18, z: 5 },
    { name: "Hermes Agents", rotate: -6, z: 6, scale: 1.4 },
    { name: "React", rotate: -6, z: 7 },
    { name: "PostgreSQL", rotate: -2, z: 8 },
    { name: "Docker", rotate: 4, z: 8 },
    { name: "Next.js", rotate: 5, z: 7 },
    { name: "MySQL", rotate: 12, z: 6 },
  ];
  const featuredSkills = FEATURED_SKILLS.flatMap(({ name, rotate, z, scale }) => {
    const skill = LIST_SKILLS.find((s) => s.name === name);
    return skill ? [{ ...skill, rotate, z, scale }] : [];
  });
  // Two marquee rows with distinct skill sets: languages/frontend on top, backend/tooling below.
  const TOP_ROW = [
    "React",
    "TypeScript",
    "Javascript",
    "PHP",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "Next.js",
    "Vue",
    "Figma",
    "Cursor",
    "Claude",
    "Codex",
  ];
  const skillsTop = TOP_ROW.flatMap((n) => {
    const s = LIST_SKILLS.find((x) => x.name === n);
    return s ? [s] : [];
  });
  const skillsBottom = LIST_SKILLS.filter(
    (s) => !TOP_ROW.includes(s.name) && s.name !== "Hermes Agents"
  );
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20 md:pt-0 pt-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <Avatar className="size-36 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="!mt-10">
        <div className="mx-auto w-full max-w-3xl">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  // description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-16">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Technology Stack</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                My everyday stack for building, connecting, and shipping production systems.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <SkillFan items={featuredSkills} />
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="mt-10 flex flex-col gap-4">
                <InfiniteMovingCards
                  items={skillsTop}
                  direction="left"
                  speed="normal"
                />
                <InfiniteMovingCards
                  items={skillsBottom}
                  direction="right"
                  speed="normal"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="github">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">GitHub Activity</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="w-full rounded-xl border bg-muted p-4 sm:p-6">
                <GithubContributions username={ghUsername} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <h2 className="text-xl font-bold">My Projects</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 max-w-[800px] mx-auto">
              {LIST_PROJECTS.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ProjectCard
                    key={project.title}
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
          </div>
        </div>
      </section>
    </main>
  );
}
