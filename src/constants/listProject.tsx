import { Icons } from "@/components/icons";

export interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  overview?: string;
  problem?: string;
  approach?: string;
  challenges?: string;
  outcome?: string;
  gallery?: GalleryImage[];
}

export interface Project {
  slug: string;
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video?: string;
  coverImage?: string;
  caseStudy?: CaseStudy;
}

export const LIST_PROJECTS: Project[] = [
  {
    slug: "berbanjar",
    title: "Berbanjar",
    href: "https://Berbanjar.com",
    dates: "2024",
    active: true,
    description:
      "An educational platform that provides open digital learning materials that can be accessed by anyone.",
    technologies: ["Laravel", "PHP", "Mysql", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://berbanjar.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/berbanjar.webp",
  },
  {
    slug: "dms",
    title: "DMS",
    href: "https://github.com/faiirusss/BE-DMS",
    dates: "2024",
    active: true,
    description:
      "Internal document management system for fast, structured, and secure file handling.",
    technologies: ["Laravel", "TailwindCSS", "Livewire", "Mysql"],
    links: [
      {
        type: "Source",
        href: "https://github.com/faiirusss/BE-DMS",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/bridgestone.webp",
    video: "",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    href: "https://github.com/faiirusss/kampoeng-radjoet",
    dates: "2023",
    active: true,
    description:
      "A web-based system for tracking, organizing, and managing stock efficiently in real time.",
    technologies: ["PHP", "JQuery", "Bootstrap", "Mysql"],
    links: [
      {
        type: "Source",
        href: "https://github.com/faiirusss/kampoeng-radjoet",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/inventory2.webp",
    video: "",
  },
  {
    slug: "merakit",
    title: "Merakit",
    href: "https://merajutasakita.com",
    dates: "2024",
    active: true,
    description:
      "A web-based cashier application developed to simplify and digitalize transaction processes for small and medium businesses.",
    technologies: ["Laravel", "TailwindCSS", "Livewire", "Mysql", "Filament"],
    links: [
      {
        type: "Website",
        href: "https://merajutasakita.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/merakit3.webp",
    video: "",
  },
  {
    slug: "project-management",
    title: "Project Management",
    href: "https://github.com/faiirusss/project-management",
    dates: "2024",
    active: true,
    description:
      "Web-based platform to organize, monitor, and track project progress efficiently.",
    technologies: ["PHP", "Laravel", "Bootstrap", "Mysql", "Linux"],
    links: [
      {
        type: "Source",
        href: "https://github.com/faiirusss/project-management",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/pmo.webp",
    video: "",
  },
];
