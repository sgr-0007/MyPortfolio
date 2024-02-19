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
    typescript,
    angular
} from "../assets/icons";

export const skills = [

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    }
    
];

export const experiences = [
    {
        title: "Trainee Java Developer",
        company_name: "Excel Business Solutions",
        iconBg: "#accbe1",
        date: "Dec 2018 - Mar 2019",
        points: [
            "Collaborated with a Senior Engineer to resolve 40% of critical business logic and SQL query bugs in",
            "Spring MVC app within 2 sprints, improving application stability.",
            "Independently fixed a complex SQL query issue, reducing data loading time by 15%, enhancing user experience.",
        ],
    },
    {
        title: "Junior Software Developer",
        company_name: "e2e Rosh IT Solutions India Private Limited",
        iconBg: "#fbc3bc",
        date: "Mar 2019 - Nov 2019",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."],
    },
    {
        title: "Software Developer Engineer",
        company_name: "Epiroc",
        iconBg: "#b7e4c7",
        date: "Nov 2019 - May 2021",
        points: [
            "Developing and maintaining workshop management system using Asp.net webforms.",
            "Participated in integrating and orchestrating the interface system for a global planning system, focusing on ASP.NET Core APIs and function apps.", 
            " Additionally, utilized Azure Service Bus and explored Azure Storage for seamless integration.",
        ],
    },
    {
        title: "Senior Software Developer",
        company_name: "e2e Rosh IT Solutions India Private Limited",
        iconBg: "#a2d2ff",
        date: "May 2021 - Aug 2023",
        points: [
            "Boosted task completion by 65% at Dynapac and reduced workshop turnaround time by 15% at Rock Drill Services through custom management systems.",
            "Improved workshop efficiency at Rock Drill Services (200+ jobs) by implementing a Workshop Management System (Asp.NET, ADO.NET, MS SQL), lowering data entry errors by 35% and turnaround time by 15%.",
            "Increased employee participation in Pfizer’s compliance program by 35% using a custom system built with React, Asp.NET Web API, MS SQL, and SSRS, raising awareness scores by 20%.",
            "Modernized financial processes for Tobacco Board India (20+ branches) with a financial package (Angular, Java Spring Boot, MS SQL, SSRS), processing transactions 70% faster.",
            "Gathered user feedback through usability testing, identified key pain points, and improved user satisfaction by 60% by incorporating feedback into UI/UX design and functionality",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        name: 'Real Estate Management System',
        description: 'Developed a purpose-driven mobile application, exemplified by a feature-rich Todo List app that seamlessly integrates geolocation, image capturing, reminders, and deep linking, all designed with Material Design principles and following MVVM architecture for a polished user experience.',
        link: 'https://github.com/sgr-0007/realEstTodo',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Language Model for Text Generation',
        description: 'Developed a Java word prediction model using a custom hash table and n-gram techniques (up to trigrams) for probabilistic word sequence analysis.',
        link: 'https://github.com/sgr-0007/MyLanguageModel',
    }
];