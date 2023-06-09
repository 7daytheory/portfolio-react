import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    chatApp,
    simon,
    summarize,
    threejs,
    php,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Developer",
      icon: reactjs,
    },
    {
      title: "Back End Developer",
      icon: php,
    },
    {
      title: "Database Management",
      icon: mongodb,
    },
    {
      title: "Designer",
      icon: figma,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "php",
      icon: php
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Quillsoft",
      iconBg: "#46b1c9",
      date: "Jan 2016 - March 2023",
      points: [
        "Created and overseeing growth of the CMS to ensure our tech support had all the data required to help users calling for support",
        "Worked on a PWA version of our main desktop app to keep up with use of chromebooks in school",
        "Developed a license management system that is currently in use by every school district that use our applications",
        "Give design input and make mock-ups that will improve UI/UX"
      ],
    },
    {
      title: "Developer",
      company_name: "Strategic Transitions Inc",
      iconBg: "#9ccd5d",
      date: "Jan 2012 - Dec 2015",
      points: [
        "Created their websites and a CMS system for the website",
        "Moved them from shipping CDs to a subscription-based model for their software",
        "Created the license management system which was used for all the companies’ applications and programs",
        "Give design input and make mock-ups that will improve UI/UX"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance Developer",
      iconBg: "#db4223",
      date: "Jan 2011 - Jan 2013",
      points: [
        "Designed and coded all the responsive websites for the company’s clients",
        "Liaison between clients and upper management on project requirements",
        "Recruit possible clients and meet with them to discuss initial steps",
      ],
    },
    {
      title: "BPMS Administrator",
      company_name: "NeXsys",
      icon: php,
      iconBg: "#5eb54a",
      date: "May 2010 - July 2010",
      points: [
        "Created Business Management Systems for large companies such as Wescam",
        "Visited companies that used BMS Systems to collect data and perform tests to fix bugs that may have been overlooked on installation",
        "Designed web components for the senior developer",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI Article Summarizer",
      description:
        "AI application that will sumarize and save articles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: summarize,
      source_code_link: "https://github.com/7daytheory/custom-ai",
    },
    {
      name: "Simon",
      description:
        "Digital version of the game Simon.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: simon,
      source_code_link: "https://github.com/7daytheory/simon",
    },
    {
      name: "Chat application",
      description:
        "Two-way chat application where you can talk to others",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://github.com/7daytheory/chat-app",
    },
  ];
  
  export { services, technologies, experiences, projects };  