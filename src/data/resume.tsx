import { Icons } from "@/components/icons";
import { LIST_PROJECTS } from "@/constants/listProject";
import { Code, HomeIcon, Mail, UserRound } from "lucide-react";

export const DATA = {
  name: "Fairus",
  initials: "FS",
  url: "https://fairuss.my.id/",
  location: "Bandung, Id",
  locationLink: "https://www.google.com/maps/place/bandung",
  description: "Software Engineer",
  summary:
    "Freshgraduate Software Engineer at Universitas Pendidikan Indonesia. passionate in building scalable & high performance web applications.",
  avatarUrl: "profile2.webp",
  navbar: {
    page: {
      Home: {
        label: "Home",
        href: "/",
        icon: HomeIcon,

        home: true,
      },
      Project: {
        label: "Projects",
        href: "/projects",
        icon: Code,

        home: false,
      },
      Contact: {
        label: "Contact",
        href: "/contact",
        icon: Mail,

        home: false,
      },
    },
  },

  contact: {
    email: "fairussalimi863.com",
    tel: "+625327919191",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/faiirusss",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fairussalimi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fairuslmi",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT. Bridgestone Tire Indonesia",
      badges: [],
      href: "-",
      location: "Karawang",
      title: "Fullstack Web Developer Intern",
      logoUrl: "bridgestone.jpg",
      start: "Sep 2024",
      end: "Dec 2024",
      description: "-.",
    },
    {
      company: "Berbanjar",
      href: "berbanjar.com",
      badges: [],
      location: "Remote",
      title: "Frontend Web Developer",
      logoUrl: "",
      start: "Jul 2024",
      end: "Sep 2024",
      description: "-.",
    },
    {
      company: "PT. LEN Industri (Persero)",
      href: "https://splunk.com",
      badges: [],
      location: "Bandung",
      title: "Web Developer Intern",
      logoUrl: "len.jpg",
      start: "Feb 2024",
      end: "May 2024",
      description: "-.",
    },
    {
      company: "Kampoeng Radjoet",
      href: "merajutasakita.com",
      badges: [],
      location: "Bandung",
      title: "Fullstack Web developer",
      logoUrl: "kampoengradjoet.jpg",
      start: "Oct 2023",
      end: "Jun 2024",
      description: "-.",
    },
    // {
    //   company: "Kampoeng Radjoet",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "Bandung",
    //   title: "Web Developer",
    //   logoUrl: "kampoengradjoet.jpg",
    //   start: "Oct 2023",
    //   end: "Jan 2024",
    //   description: "-.",
    // },
  ],
} as const;
