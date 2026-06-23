import { ProjectDetail } from "@/components/project-detail";
import { LIST_PROJECTS } from "@/constants/listProject";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return LIST_PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = LIST_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  const image = project.coverImage ?? project.image;
  return {
    title: `${project.title} — ${DATA.name}`,
    description: project.description,
    openGraph: image ? { images: [image] } : undefined,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = LIST_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
