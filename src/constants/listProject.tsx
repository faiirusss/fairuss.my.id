import { Icons } from "@/components/icons";

export const LIST_PROJECTS = [
  {
    title: "Berbanjar",
    href: "https://Berbanjar.com",
    dates: "2024",
    active: true,
    description:
      "an educational platform that provides open digital learning materials that can be accessedby anyone.",
    technologies: ["Laravel", "PHP", "Mysql", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://berbanjar.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/berbanjar.webp",
    // [, "/berbanjar2.webp", "/berbanjar3.webp"],
  },
  {
    title: "DMS",
    href: "https://github.com/faiirusss/BE-DMS",
    dates: "2024",
    active: true,
    description: "Document management system for internal use.",
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
    title: "Inventory Management",
    href: "https://github.com/faiirusss/kampoeng-radjoet",
    dates: "2024",
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
];
