import blog1 from "../blog/blog-1.webp"
import blog2 from "../blog/blog-2.webp"
import blog3 from "../blog/blog-3.webp"
import { Code2, Database, Globe, Cpu, Brain, Cloud } from 'lucide-react';


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
    title: "Doctor Booking System",
    description: "his is a real-world MERN stack application for booking and managing doctor appointments. Users\n" +
        " can find doctors, check availability, and schedule appointments easily.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Javascript", "TailwindCSS", "NodeJs", "MongoDB", "Redux", "JWT"],
    category: "Applications",
    link: "https://github.com/chamika-damith/Doctor-Appointment-Booking-Frontend.git",
    exteranllink: "https://doctor-appointment-booking-frontend-seven.vercel.app/"
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
    technologies: ["Reactjs", "Stripe", "Typescript", "Firebase"],
    category: "Web development",
    link: "https://github.com/chamika-damith/earpod-web.git",
    exteranllink: "https://earpod-web.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "Modern and minimalist portfolio design for creative professionals",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Framer Motion", "TailwindCSS"],
    category: "Web development",
    link: "www.chamikadamith.me",
  },
  {
    title: "Slon Booking Website",
    description: "A user-friendly salon booking website for easy appointment scheduling, real-time availability, and automated confirmations, enhancing convenience for customers and efficient management for salon owners.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Typescript", "TailwindCSS", "NodeJs", "MongoDB", "Redux", "JWT"],
    category: "Applications",
    link: "https://github.com/chamika-damith/salon-booking-client-website",
    exteranllink: "https://salon-booking-client-website.vercel.app/"
  },
  {
    title: " Seafarers Clinic System",
    description: "This application is for managing seafarers' clinic appointments, patients, and medical reports.\n" +
        " Admin can schedule appointments, track patient records, and generate medical reports efficiently.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Typescript", "TailwindCSS", "Java", "Mysql", "Redux", "JWT"],
    category: "Applications",
    link: "https://github.com/chamika-damith/SeafarersClinicSystem.git",
    exteranllink: "https://seafarers-clinic-system.vercel.app/"
  },
  {
    title: "Proposed crop monitoring system Frontend",
    description: "Real-time monitoring crop and manage fields,staff,vehicle,equipment",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["HTML", "Javascript", "TailwindCSS"],
    category: "Web development",
    link: "https://github.com/chamika-damith/Proposed-crop-monitoring-system-frontend.git"
  },
  {
    title: "saas product landing page",
    description: "A SaaS product landing page is a focused and visually engaging webpage designed to showcase the features, benefits, and value proposition of a software-as-a-service offering. It includes key elements",
    image: "https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [ "ReactJs" , "Tailwind CSS", "Framer motion"],
    category: "Web development",
    link: "https://github.com/chamika-damith/saas-product-landing-page",
    exteranllink: "https://saas-product-landing-page-indol.vercel.app/"
  },
  {
    title: "POS System",
    description: "A Point of Sale system for retail environments managing product data, inventory, sales, and customer information.",
    image: "https://images.unsplash.com/photo-1742836531226-a5c750d5a1fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["ReactJs", "Javascript", "TailwindCSS", "Java", "Mysql", "Hibernate", "JWT"],
    category: "Applications",
    link: "https://github.com/chamika-damith/react-pos-system",
    exteranllink: "https://react-pos-system-phi.vercel.app/pos"
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
    excerpt: "Revolutionizing Web Development: A Deep Dive into Bolt.New AI",
    date: "Nov 30, 2024",
    image: blog1,
    slug: "future-of-web-development",
    link: "https://medium.com/@chamikadamith9/revolutionizing-web-development-a-deep-dive-into-bolt-new-ai-7bc8b4607488",
  },
  {
    title: "Mastering Java & Spring",
    excerpt: "Java Bean vs POJO vs Spring Bean | Are you confused too ? Understanding the Differences",
    date: "Oct 26, 2024",
    image: blog2,
    slug: "Mastering-Java-&-Spring",
    link: "https://medium.com/@chamikadamith9/java-bean-vs-pojo-vs-spring-bean-are-you-confused-too-understanding-the-differences-6ad89241a8dc",
  },
  {
    title: "Java & Spring boot RESTful API",
    excerpt: "Understanding RESTful APIs in Java: A Beginner’s Guide to REST Principles and Building Your First API",
    date: "Oct 26, 2024",
    image: blog3,
    slug: "Java-&-Spring-boot-RESTful-API",
    link: "https://medium.com/@chamikadamith9/understanding-restful-apis-in-java-a-beginners-guide-to-rest-principles-and-building-your-first-f424b8610c0d",
  },
];

export const technologies = [
  {
    icon: Code2,
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks",
    delay: 0.1
  },
  {
    icon: Database,
    name: "Backend Systems",
    description: "Designing scalable server architectures and APIs",
    delay: 0.2
  },
  {
    icon: Globe,
    name: "Web Technologies",
    description: "Creating seamless web experiences with cutting-edge tools",
    delay: 0.3
  },
  {
    icon: Cpu,
    name: "System Architecture",
    description: "Developing robust and efficient system architectures",
    delay: 0.4
  },
  {
    icon: Brain,
    name: "AI Integration",
    description: "Implementing intelligent solutions with machine learning",
    delay: 0.5
  },
  {
    icon: Cloud,
    name: "Cloud Computing",
    description: "Leveraging cloud platforms for scalable applications",
    delay: 0.6
  }
];