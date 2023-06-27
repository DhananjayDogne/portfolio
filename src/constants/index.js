import {
    mobile,
    backend,
    creator,
    web,
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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    internpe,
    bharatintern,
    promptopia,
    amazon_clone,
    google_clone,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Next.js Developer",
      icon: creator,
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
      title: "React.js Developer",
      company_name: "InternPe",
      icon: internpe,
      iconBg: "#383E56",
      date: "Jun 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Bharat Intern",
      icon: bharatintern,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Promptopia",
      description:
        "Web-based platform that allows users to Create, Edit, and Manage there Prompts and Can Share Prompts , providing a convenient and efficient solution for sharing of daily prompts.",
      tags: [
        {
          name: "nextjs",
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
        {
          name:"react",
          color:"text-red-700",
        }
      ],
      image: promptopia,
      source_code_link: "https://github.com/DhananjayDogne/Promptopia",
      deploylink:"https://promptopia-six-xi.vercel.app",
    },
    {
      name: "Amazon Clone",
      description:
        "Web application that enables users for Oline Shopping .User can SignIn/SignOutbuy , Track there Orders ,male Payment for product from this Amazing fully working website .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name:"firebase",
          color:"text-red-700",
        }
        
      ],
      image: amazon_clone,
      source_code_link: "https://github.com/DhananjayDogne/amazon-clone",
      deploylink:"https://challenge-7ffc6.web.app",
    },
    {
      name: "Google Clone",
      description:
        "A Google Clone With Search Functionality that allows users to Search and give Search Results.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: google_clone,
      source_code_link: "https://github.com/DhananjayDogne/GoogleClone",
      deploylink:"https://clone-bb3b1.web.app/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };