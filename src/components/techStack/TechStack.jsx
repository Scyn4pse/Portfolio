import React from 'react';
import { motion } from 'framer-motion';
import MagicBento from './MagicBento';
import {
    Code2,
    Globe,
    Server,
    Terminal,
    Cpu,
    Database,
    GitBranch
} from 'lucide-react';

const techStackData = [
    {
        title: 'Programming',
        label: 'Core',
        tags: ['C', 'C#', 'Java', 'JavaScript', 'PHP', 'Kotlin', 'Assembly', 'XML'],
        icon: <Terminal size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'Web Dev',
        label: 'Frontend',
        tags: ['React', 'Vite', 'Tailwind', 'HTML/CSS', 'ASP.NET', 'Laravel', 'Figma'],
        icon: <Globe size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'AI & ML',
        label: 'Intelligence',
        tags: ['Google AI Studio'],
        icon: <Cpu size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'Backend & Tools',
        label: 'Infrastructure',
        tags: ['Node.js', 'FastAPI', 'Firebase', 'MySQL', 'MongoDB', 'PostgreSQL', 'MSSQL Server'],
        icon: <Server size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'DevOps',
        label: 'Deployment',
        tags: ['IIS', 'Cloudflare', 'Nginx', 'Google Cloud Platform'],
        icon: <Code2 size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'Version Control',
        label: 'Collaboration',
        tags: ['GitHub', 'Git', 'Project Management'],
        icon: <GitBranch size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    }
];

const TechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="tech-stack" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Expertise</motion.h2>
                    <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">Technology Stack</motion.h3>
                    <motion.p variants={itemVariants} className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building high-performance, scalable applications across platforms.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <MagicBento
                        items={techStackData}
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={400}
                        particleCount={15}
                        glowColor="14, 165, 233" // Primary Sky Blue
                        cardVariants={itemVariants}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
