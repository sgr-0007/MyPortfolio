import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: redux, name: "Redux", type: "State Management" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: express, name: "Express.js", type: "Backend" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
  ];
  

  export const experiences = [
    {
      title: "Senior Full Stack Developer (Freelancing)",
      company_name: "EpirocIT",
      iconBg: "#fcd5ce",
      date: "Jan 2025 – Present",
      points: [
        "Implemented React components with performance optimizations like code splitting and lazy loading.",
        "Refactored .NET 8 Minimal APIs, reducing response times by ~25%.",
        "Increased test coverage by 70% using Jest and React Testing Library.",
      ],
    },
    {
      title: "Senior Front-End Developer",
      company_name: "e2e Rosh IT Solutions India Pvt Ltd",
      iconBg: "#a2d2ff",
      date: "May 2021 - Sep 2023",
      points: [
        "Led Pfizer’s compliance platform development with SSR using Next.js, boosting engagement by 55%.",
        "Improved data fetching performance with TanStack Query and reduced network calls.",
        "Achieved 85% test coverage using Jest, RTL, and MSW.",
        "Optimized SEO and reduced TTI by 40% after migrating to SSR-based architecture.",
        "Built .NET 7 APIs for backend finance systems; integrated REST APIs for seamless frontend UX.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "e2e Rosh IT Solutions India Pvt Ltd",
      iconBg: "#b7e4c7",
      date: "Mar 2019 - May 2021",
      points: [
        "Designed Team Management System for 500+ employees using React and ASP.NET Core.",
        "Reduced workshop errors by 55% using React + Tailwind for component design.",
        "Improved state handling using Redux Toolkit; conducted UI/UX upgrades improving satisfaction by 60%.",
      ],
    },
    {
      title: "Trainee Java Developer",
      company_name: "Excel Business Solutions",
      iconBg: "#dee2ff",
      date: "Dec 2018 - Mar 2019",
      points: [
        "Fixed SQL bugs and improved app stability by 40%.",
        "Reduced data loading time by 15% via SQL optimization.",
      ],
    },
  ];
  

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sgr-0007',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sagar-somashekhar-965202150',
    }
];

export const projects = [
    {
      iconUrl: pricewise,
      theme: 'btn-back-red',
      name: 'Fracture Log',
      description: 'GPT-4 powered fracture analysis tool using RDF and Ontology, visualized via React and styled with Tailwind.',
      link: 'https://github.com/sgr-0007/Rdf-fractures',
    },
    {
      iconUrl: snapgram,
      theme: 'btn-back-blue',
      name: 'AgroCropProtocol',
      description: 'Blockchain-based crop insurance system leveraging Ethereum, ChainLink, and WorldCoin protocols.',
      link: 'https://github.com/sgr-0007/agro-secure-protocol-eth-brussel',
    },
    {
      iconUrl: threads,
      theme: 'btn-back-green',
      name: 'ImageCommerce',
      description: 'Image selling app with user authentication, image upload, payment processing, and product management using NextAuth, ImageKit, and Razorpay. Installation: Clone repo, run npm install, then npm run dev.',
      link: 'https://github.com/sgr-0007/imagekitcommerce',
    },
    {
      iconUrl: summiz,
      theme: 'btn-back-yellow',
      name: 'ZK Memory Organ',
      description: 'Privacy-first data store using ZK-SNARKs, IPFS, and PostgreSQL. Winner at ETH-Oxford Hackathon.',
      link: 'https://github.com/sgr-0007/zk_memory_oragan',
    },
    {
      iconUrl: estate,
      theme: 'btn-back-purple',
      name: 'E Waste Hub',
      description: 'Secure e-waste transaction platform with Device Registration, 3rd party recycling, Stripe integration and admin dashboard.',
      link: 'https://github.com/sgr-0007/electronicwastehub',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Intelligent Conversations',
        description: 'RAG-powered chatbot using LangChain and OpenAI that can query external data sources like PDFs.',
        link: 'https://github.com/sgr-0007/RAG-LangchainAI-Chatbot',
      },
  ];
  