import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import chiaraImg from '../../assets/profileCards/chiara.png';

const WhoWeAre = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const member = {
        name: "Chiara",
        roleTitle: "The Designer",
        tagline: "Frontend Developer",
        description: "Optimizing user interfaces for speed, accessibility, and seamless user experience. Focused on performance, smooth interactions, and building interfaces that feel effortless to use.",
        bulletPoints: [
            "Scalable UI Designs",
            "UI Performance Optimization",
            "User Experience Engineering"
        ],
        handle: "Chiara Canque",
        status: "Online",
        avatarUrl: chiaraImg,
        contactText: "Let's Talk",
        githubUrl: "https://github.com/Scyn4pse",
        behindGlowColor: "rgba(99, 102, 241, 0.4)"
    };

    return (
        <section id="who-we-are" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">About Me</motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">Frontend Developer</motion.h3>
                        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-4xl mx-auto px-4">
                            A passionate BSIT graduate bridging the gap between design and functionality. I build high-performance applications with a strong focus on user experience, optimization, and robust system architecture.
                        </motion.p>
                    </div>

                    <div className="flex justify-center max-w-5xl mx-auto">
                        <motion.div variants={itemVariants}>
                            <ProfileCard
                                name={member.name}
                                title={member.tagline}
                                roleTitle={member.roleTitle}
                                tagline={member.tagline}
                                description={member.description}
                                bulletPoints={member.bulletPoints}
                                handle={member.handle}
                                status={member.status}
                                avatarUrl={member.avatarUrl}
                                contactText={member.contactText}
                                githubUrl={member.githubUrl}
                                showUserInfo
                                enableTilt={true}
                                enableMobileTilt={false}
                                showBehindGlow
                                behindGlowColor={member.behindGlowColor}
                                onContactClick={() => {
                                    const element = document.querySelector('#contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAre;
