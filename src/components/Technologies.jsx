import { motion, useAnimation } from 'framer-motion';
import { FaJava, FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const iconVariants = (delay) => ({
    initial: { y: -10 },
    animate: {
        y: 10,
        transition: {
            delay: delay,
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
    hover: { scale: 1.3, transition: { duration: 0.3 } },
});

function Technologies() {
    const controls = useAnimation(); 
    const [ref, inView] = useInView({ threshold: 0.7 }); 

    useEffect(() => {
        if (inView) {
            controls.start("visible"); 
        } else {
            controls.start("hidden"); 
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="pb-24"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                },
            }}
        >
            <motion.h2
                ref={ref} 
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -50 }}
                animate={controls} 
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1 }}
            >
                Technologies
            </motion.h2>

            <motion.div className="flex flex-wrap items-center justify-center gap-16">
                {/* React */} 
                <motion.div
                    title="React"
                    variants={iconVariants(0)}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                {/* Next.js */} 
                <motion.div
                    title="Nextjs"
                    variants={iconVariants(0.8)} 
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>

                {/* MongoDB */}
                <motion.div
                    title="Mongodb"
                    variants={iconVariants(0.6)}  
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <SiMongodb className="text-7xl text-green-800" />
                </motion.div>

                {/* MySQL */}
                <motion.div
                    title="Mysql"
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <SiMysql className="text-7xl text-blue-500" />
                </motion.div>

                {/* Node.js */}
                <motion.div
                    title="Nodejs"
                    variants={iconVariants(0.2)} 
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <FaNode className="text-7xl text-green-500" />
                </motion.div>

                {/* Java */}
                <motion.div
                    title="Java"
                    variants={iconVariants(0.5)} 
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <FaJava className="text-7xl text-orange-400" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Technologies;
