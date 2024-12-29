import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.2 }
  }
};

function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md  shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
              CD
            </a>
          </motion.div>

          <div className="flex items-center space-x-6">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chamika-damith/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/chamika-damith', label: 'GitHub' },
              { icon: Instagram, href: 'https://www.instagram.com/chamika.damith71/', label: 'Instagram' },
              { icon: Mail, href: 'mailto:chamikadamith9@gmail.com', label: 'Email' }
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-red-400 transition-colors dark:text-gray-100 dark:hover:text-red-500"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
