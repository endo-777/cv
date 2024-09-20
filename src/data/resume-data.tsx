import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Phupha Noppakun",
  initials: "PHU",
  location: "Bangkok, Thailand, GMT",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "I'm new graduate and looking for a job. I'm a fast leaner can learn something new and have problem solving skill.",
  summary: `Hi. My name is Phupha Noppakun  my nickname is phu. I love to learn something new  because it was fun. I’m a fast learner. I’m also have social skill i know how to work with people. My hobby is Simracing.`,
  avatarUrl: "https://avatars.githubusercontent.com/endo-777",
  contact: {
    email: "phupha.works@gmail.com",
    tel: "+66910465891",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/endo-777",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/phupha-noppakun",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Thai-Nichi Institute of Technology",
      degree: "Bachelor's Degree in Information Technology",
      start: "2016",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Optimized Solution Co., Ltd.",
      link: "https://www.optimized.co.th/th/",
      badges: ["Hybrid"],
      title: "System Engineer (Intern)",
      logo: "",
      start: "11/2023",
      end: "02/2024",
      description: "Leading the development of Customer Relationship Management Application. Technologies: Microsoft SharePoint, Microsoft Power Platform",
    },
  ],
  skills: [
    "Java",
    "Microsoft Power Platform",
    "Data Science / Python / R / Power BI",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Problem Solving",
    "Fast Learner",
  ],
  projects: [
    {
      title: "MechaZone",
      techStack: ["HTML", "CSS", "Bootstrap"],
      description: "Personal website to bring you into the custom keyboard rabbit hole",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/endo-777/MechaZone",
      },
    },
    {
      title: "My Portfolio",
      techStack: ["React", "Node.js", "Styled Components"],
      description: "My portfolio project includes a shopping feature and dynamic product in cart.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/endo-777/ReactFinalProject",
      },
    },
    {
      title: "CRM",
      techStack: ["Project Manager", "Microsoft SharePoint", "Microsoft Power Platform", "HTML"],
      description: "Web application that helps manage customer relationships under SLA agreement.",
      logo: "",
    },
  ],
} as const;
