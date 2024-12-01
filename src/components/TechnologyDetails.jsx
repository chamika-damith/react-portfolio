import { motion } from 'framer-motion';
import { FaJava, FaNode,FaHtml5,FaCss3,FaPython,FaDocker,FaAws  } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb,SiTypescript,SiKubernetes,SiTensorflow,SiPytorch  } from "react-icons/si";
import { TbBrandNextjs,TbApi } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";



const techStacks = {
  "Frontend Development": [
    { icon: RiReactjsLine, name: "React", color: "from-green-400 to-blue-500" },
    { icon: TbBrandNextjs, name: "Next.js", color: "from-yellow-400 to-pink-500" },
    { icon: FaHtml5, name: "HTML5", color: "from-red-400 to-orange-500" },
    { icon: FaCss3 , name: "CSS3", color: "from-blue-400 to-purple-500" }
  ],
  "Backend Systems": [
    { icon: FaNode, name: "Node.js", color: "from-green-500 to-gray-500" },
    { icon: SiMongodb, name: "MongoDB", color: "from-teal-400 to-blue-500" },
    { icon: FaPython , name: "Python", color: "from-yellow-400 to-green-500" },
    { icon: FaJava, name: "Java", color: "from-orange-400 to-red-500" }
  ],
  "Web Technologies": [
    { icon: SiTypescript , name: "TypeScript", color: "from-blue-400 to-purple-500" },
    { icon: DiMysql, name: "Mysql", color: "from-pink-400 to-purple-500" },
    { icon: TbApi, name: "REST", color: "from-orange-400 to-yellow-500" }
  ],
  "System Architecture": [
    { icon: FaDocker , name: "Docker", color: "from-blue-400 to-green-500" },
    { icon: SiKubernetes , name: "Kubernetes", color: "from-teal-400 to-blue-500" },
    { icon: FaAws , name: "AWS", color: "from-yellow-400 to-orange-500" },
  ],
  "AI Integration": [
    { icon: SiTensorflow , name: "TensorFlow", color: "from-orange-400 to-yellow-500" },
    { icon: SiPytorch , name: "PyTorch", color: "from-red-400 to-orange-500" },
    { icon: AiFillOpenAI  , name: "OpenAI", color: "from-blue-400 to-indigo-500" },
  ],
  "Cloud Computing": [
    { icon: FaAws, name: "AWS", color: "from-yellow-400 to-orange-500" },
    { icon: IoLogoVercel, name: "Vercel", color: "from-black to-gray-500" }
  ]
};

export function TechnologyDetails({ category, isHovered }) {
  const technologies = techStacks[category] || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-lg"
    >
      <div className="flex gap-6 p-4">
        {technologies.map(({ icon: Icon, name, color }) => (
          <motion.div
            key={name}
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`p-2 bg-gradient-to-br ${color} rounded-full shadow-lg`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-white font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
