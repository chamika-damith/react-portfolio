import project1 from "../projects/chat-application.webp";
import project2 from "../projects/connect4game.webp";
import project3 from "../projects/studiomanagement.webp";
import project4 from "../projects/library-management-systrm.webp";
import project5 from "../projects/bootstrap-web-pos.webp";
import project6 from "../projects/portfolio.webp";
import project7 from "../projects/react-pos.webp";
import project8 from "../projects/linkedin-clone.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Java, Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Java,  Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Google",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Chat Application",
    image: project1,
    description: "A fully functional chat application using Java socket programming for real-time communication between clients.",
    technologies: ["Java", "Socket Programming", "Multithreading"],
    category:"Applications",
  },
  {
    title: "Connect 4 Game",
    image: project2,
    description: "A Connect 4 game implemented in Java with an AI opponent using the Minimax algorithm for decision-making.",
    technologies: ["Java", "Minimax Algorithm", "AI"],
    category:"Applications",
  },
  {
    title: "Studio Management System (POS)",
    image: project3,
    description: "A Studio Management System designed as a Point of Sale (POS) application, allowing management of services, client bookings, and sales transactions.",
    technologies: ["Java", "JavaFX", "CSS", "MySQL"],
    category:"Applications",
  },
  {
    title: "Library Management System",
    image: project4,
    description: "A Library Management System for managing books, members, and transactions, implemented with Java, JavaFX, and Hibernate for database interaction.",
    technologies: ["Java", "JavaFX", "CSS", "MySQL", "Hibernate"],
    category:"Applications",
  },
  {
    title: "ThogaKade POS Website",
    image: project5,
    description: "A web-based Point of Sale (POS) system for managing sales, inventory, and customer transactions at ThogaKade, implemented using HTML, CSS, and Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    category:"Web development",
  },
  {
    title: "Portfolio",
    image: project6,
    description: "A personal portfolio website showcasing projects, skills, and experiences, built with React and styled using Tailwind CSS for a modern look.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category:"Web development",
  },
  {
    title: "React POS System",
    image: project7,
    description: "A web-based Point of Sale (POS) system built with React, providing features for managing sales, inventory, and customer transactions with a user-friendly interface.",
    technologies: ["React", "Tailwind CSS"],
    category:"Web development",
  },
  {
    title: "LinkedIn Clone",
    image: project8,
    description: "A social media platform clone inspired by LinkedIn, built with React. It features user profiles, connections, and a news feed to share updates.",
    technologies: ["React", "CSS", "Firebase"],
    category:"Web development",
  },
];

export const CONTACT = {
  address: "Panadura, SriLanka ",
  phoneNo: "+94 78 576 5111 ",
  email: "chamikadamith9@gmail.com",
};
