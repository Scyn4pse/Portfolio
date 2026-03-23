import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Antigravity from './Antigravity';

const Hero = () => {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Particle Animation - Local to Hero section with cursor detection */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-auto">
                <Canvas camera={{ position: [0, 0, 35], fov: 40 }}>
                    <Suspense fallback={null}>
                        <Antigravity count={300} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "out" }}
                >
                    <h2 className="text-primary font-medium tracking-wider mb-4 uppercase">
                        Creative Software Developer
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            BUILDING
                        </span>
                        <br />
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: '200% auto' }}
                        >
                            FUTURE
                        </motion.span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I am a Frontend Developer. Crafting immersive digital experiences
                        with robust performance and stunning visuals.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <a
                            href="#featured-works"
                            onClick={(e) => handleScroll(e, '#featured-works')}
                            className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-slate-200 transition-all hover:scale-105 pointer-events-auto"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, '#contact')}
                            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm pointer-events-auto"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>


            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
