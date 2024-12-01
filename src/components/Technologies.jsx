import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Brain, Cloud } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';

export default function Technologies() {
  const technologies = [
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <TechnologyCard 
              key={tech.name} 
              {...tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}