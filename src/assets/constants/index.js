import blog1 from "../blog/blog-1.jpg"
import blog2 from "../blog/blog-2.jpg"
import blog3 from "../blog/blog-3.jpg"

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
    title: "AI Image Generator",
    description: "A modern AI-powered image generation platform using stable diffusion models",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "TailwindCSS", "Gemini API"],
    category: "Applications",
    link: "https://example.com/ai-image-generator"
  },
  {
    title: "E-Commerce Website",
    description: "Responsive Dashboard and products view",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Figma"],
    category: "UI design",
    link: "https://www.figma.com/design/ryKAvzllH0zapEshbfBvgY/Untitled?node-id=0-1&t=QkR519N4v1CxCnLO-1"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, checkout, and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    category: "Web development",
    link: "https://example.com/ecommerce"
  },
  {
    title: "Portfolio",
    description: "Modern and minimalist portfolio design for creative professionals",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Framer Motion", "TailwindCSS"],
    category: "UI design",
    link: "www.chamikadamith.me",
  },
  {
    title: "Linkedin Clone",
    description: "Linkedin Clone Implementation Main Features in Linkedin",
    image: "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React","Firebase"],
    category: "Applications",
    link: "https://github.com/chamika-damith/Linkedin-Clone-ReactJs.git",
  },
  {
    title: "Proposed crop monitoring system Backend",
    description: "Real-time monitoring crop and manage fields,staff,vehicle,equipment",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Java", "Spring boot", "Mysql", "JWT"],
    category: "Applications",
    link: "https://github.com/chamika-damith/Proposed-crop-monitoring-system-backend.git"
  },
  {
    title: "Proposed crop monitoring system Frontend",
    description: "Real-time monitoring crop and manage fields,staff,vehicle,equipment",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["HTML", "Javascript", "TailwindCSS"],
    category: "Web development",
    link: "https://github.com/chamika-damith/Proposed-crop-monitoring-system-frontend.git"
  },
];

export const CONTACT = {
  address: "Panadura, SriLanka ",
  phoneNo: "+94 78 576 5111 ",
  email: "chamikadamith9@gmail.com",
};

export const BLOGPOST = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies shaping the web development landscape.",
    date: "June 15, 2023",
    image: blog1,
    slug: "future-of-web-development",
  },
  {
    title: "Mastering React Hooks",
    excerpt: "A deep dive into React Hooks and how they can simplify your component logic.",
    date: "May 22, 2023",
    image: blog2,
    slug: "mastering-react-hooks",
  },
  {
    title: "The Art of Responsive Design",
    excerpt: "Techniques and best practices for creating truly responsive web experiences.",
    date: "April 10, 2023",
    image: blog3,
    slug: "art-of-responsive-design",
  },
];