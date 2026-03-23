import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 right-0 w-80 md:w-96 bg-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageSquare size={16} className="text-white" />
                                </div>
                                <span className="text-white font-bold">Chiara's Assistant</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="h-80 p-4 overflow-y-auto bg-dark flex flex-col gap-3">
                            <div className="self-start bg-secondary text-slate-300 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm border border-white/5">
                                Hi there! 👋 How can I help you create something amazing today?
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-secondary border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-dark border border-slate-700 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-primary"
                            />
                            <button className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-sky-600 transition-colors"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
