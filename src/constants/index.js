import {
    backend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
    php,
    docker
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "docker",
      icon: docker,
    },
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
  
  const testimonials = [
    {
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      image: "",
    }
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };  