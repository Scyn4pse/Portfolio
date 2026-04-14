import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experienceRows = [
    {
        alvin: {
            year: "2025 - Present",
            role: "QA Engineer",
            company: "Talleco Job Target",
            description: "Ensures product quality through automated and manual testing, improving system reliability and release stability."
        },
        chiara: {
            year: "2025 - Present",
            role: "Freelance Software Developer",
            company: "Self-employed",
            description: "Works closely with clients to understand their goals, providing technical consultation and delivering tailored web solutions that align with their specific business needs."
        }
    },
    {
        alvin: null,
        chiara: {
            year: "2025 - 2026",
            role: "Junior Developer",
            company: "Cubeworks Technology Consulting and Solutions, Inc.",
            description: "Develops and maintains responsive web applications, focusing on performance optimization and clean user experience."
        }
    },
    {
        alvin: {
            year: "2025 - 2025",
            role: "QA Engineer Intern",
            company: "Talleco Job Target",
            description: "Assisted in writing test cases, identifying bugs, and supporting the QA team in delivering stable feature releases."
        },
        chiara: {
            year: "2025 - 2025",
            role: "Developer Intern",
            company: "Cubeworks Technology Consulting and Solutions, Inc.",
            description: "Supported development of internal and client projects, building UI components and assisting in feature implementation."
        }
    },
    {
        alvin: {
            year: "2024 - Present",
            role: "Freelance Software Developer",
            company: "Self-employed",
            description: "Built custom websites and small-scale systems for clients, focusing on functionality, usability, and performance."
        },
        chiara: null,
    },
    {
        alvin: {
            year: "2024 - 2024",
            role: "Alliance Jumpstart Program - Software Developer",
            company: "Alliance Software, Inc.",
            description: "Completed intensive training in software development, working on real-world projects and collaborative coding tasks."
        },
        chiara: null,
    },
    {
        alvin: null,
        chiara: {
            year: "2021 - 2025",
            role: "Volunteer Student Intern",
            company: "Cubeworks Technology Consulting and Solutions, Inc.",
            description: "Gained hands-on experience contributing to various web projects, assisting in frontend tasks and system improvements in real world environment for 4 years."
        }
    },
    {
        alvin: {
            year: "2019 - 2024",
            role: "Freelance Computer Technician",
            company: "Self-employed",
            description: "Provided computer repair, maintenance, and software troubleshooting services for individual and small business clients."
        },
        chiara: null,
    }
]


const WorkExperience = () => {
    // Use a ref for the section to track its scroll progress
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 0.7", "end 0.3"]
    });

    // Transform scroll progress to height for the line
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        <section id="experience" className="py-24 relative overflow-hidden" ref={targetRef}>
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Journey</motion.h2>
                    <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">Work Experience</motion.h3>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line Background (Dark) */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full" />

                    {/* Moving Line (Primary Color) with Shimmer */}
                    <motion.div
                        style={{
                            height: lineHeight,
                            backgroundImage: "linear-gradient(to bottom, #0ea5e9 0%, #0ea5e9 40%, #ffffff 50%, #6366f1 60%, #6366f1 100%)",
                            backgroundSize: "100% 300%"
                        }}
                        animate={{
                            backgroundPositionY: ["0%", "100%"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute left-[24px] md:left-1/2 top-0 w-1 -translate-x-1/2 rounded-full origin-top shadow-[0_0_25px_rgba(255,255,255,0.9),0_0_15px_rgba(14,165,233,0.6)]"
                    />

                    <div className="space-y-12 md:space-y-0">
                        {/* Label Row */}
                        <div className="hidden md:grid md:grid-cols-2 md:gap-24 mb-12">
                            <div className="text-right pr-4">
                                <h4 className="text-primary font-bold text-lg tracking-wide">ALVIN</h4>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="text-primary font-bold text-lg tracking-wide">CHIARA</h4>
                            </div>
                        </div>
                        {experienceRows.map((row, index) => (
                            <TimelineRow key={index} row={row} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Subcomponent for a timeline row containing Alvin (left) and/or Chiara (right)
const TimelineRow = ({ row, index }) => {
    return (
        <div className="relative md:grid md:grid-cols-2 md:gap-24 mb-12 last:mb-0">
            {/* Center Dot - only visible on Desktop */}
            <div className="absolute left-[24px] md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-4 border-slate-700 rounded-full z-20 hidden md:block">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-30% 0px -20% 0px" }}
                    className="w-full h-full bg-primary rounded-full shadow-[0_0_10px_#0ea5e9]"
                />
            </div>

            {/* Alvin's Side (Left) */}
            <div className="relative mb-8 md:mb-0 pl-14 md:pl-0">
                {row.alvin && (
                    <div className="absolute left-[24px] top-8 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-4 border-slate-700 rounded-full z-20 md:hidden block">
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-30% 0px -20% 0px" }} className="w-full h-full bg-primary rounded-full shadow-[0_0_10px_#0ea5e9]" />
                    </div>
                )}
                {row.alvin ? (
                    <ExperienceCard data={row.alvin} side="left" index={index} owner="alvin" />
                ) : (
                    <div className="hidden md:block" /> // Empty space if no experience for Alvin in this row
                )}
            </div>

            {/* Chiara's Side (Right) */}
            <div className="relative pl-14 md:pl-0">
                {row.chiara && (
                    <div className="absolute left-[24px] top-8 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-4 border-slate-700 rounded-full z-20 md:hidden block">
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-30% 0px -20% 0px" }} className="w-full h-full bg-primary rounded-full shadow-[0_0_10px_#0ea5e9]" />
                    </div>
                )}
                {row.chiara ? (
                    <ExperienceCard data={row.chiara} side="right" index={index} owner="chiara" />
                ) : (
                    <div className="hidden md:block" /> // Empty space if no experience for Chiara in this row
                )}
            </div>
        </div>
    );
};

const ExperienceCard = ({ data, side, index, owner }) => {
    const isLeft = side === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className={`w-full p-6 bg-secondary/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden`}
        >
            {/* Ambient background glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isLeft ? 'from-sky-500/5 to-transparent' : 'from-indigo-500/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-primary font-mono text-xs font-bold block tracking-wider opacity-80">{data.year}</span>
                    {owner && (
                        <span className="md:hidden text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded tracking-wide uppercase">
                            {owner}
                        </span>
                    )}
                </div>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{data.role}</h4>
                <h5 className="text-slate-300 font-medium text-sm mb-4">{data.company}</h5>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {data.description}
                </p>
            </div>

            {/* Decorative element */}
            <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`} />
        </motion.div>
    );
};

export default WorkExperience;
