import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useEmail from './useEmail';
import { validateContactForm } from './validation';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const { sendEmail, loading, success, error } = useEmail();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Web Development',
        message: ''
    });
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user types
        if (validationErrors[name]) {
            setValidationErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateContactForm(formData);
        setValidationErrors(errors);

        if (!isValid) return;

        const sent = await sendEmail({
            fullname: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            message: formData.message
        });

        if (sent) {
            setFormData({
                name: '',
                email: '',
                projectType: 'Web Development',
                message: ''
            });
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Get In Touch</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Create Something Amazing.</h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Have a project in mind? I am always looking for new challenges and opportunities to collaborate.
                            Send me a message and let's start the conversation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email Me</p>
                                    <p className="font-medium">canquechiara76@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="font-medium">Compostela, Cebu (Remote-Friendly)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-3xl border border-white/5 space-y-6">
                            {success && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        maxLength={120}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full bg-dark border rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all ${validationErrors.name ? 'border-red-500/50' : 'border-slate-700'}`}
                                        placeholder="Enter your name"
                                    />
                                    {validationErrors.name && <p className="text-red-400 text-xs ml-1">{validationErrors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        maxLength={120}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full bg-dark border rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all ${validationErrors.email ? 'border-red-500/50' : 'border-slate-700'}`}
                                        placeholder="Enter your email"
                                    />
                                    {validationErrors.email && <p className="text-red-400 text-xs ml-1">{validationErrors.email}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm ml-1">Project Type</label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all"
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Consulting">Consulting</option>
                                    <option value="Others..">Others..</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-slate-400 text-sm">Message</label>
                                    <span className={`text-xs ${formData.message.length >= 1000 ? 'text-red-400' : 'text-slate-500'}`}>
                                        Message ({formData.message.length}/1000)
                                    </span>
                                </div>
                                <textarea
                                    name="message"
                                    maxLength={1000}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className={`w-full bg-dark border rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all resize-none ${validationErrors.message ? 'border-red-500/50' : 'border-slate-700'}`}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                {validationErrors.message && <p className="text-red-400 text-xs ml-1">{validationErrors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-primary to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <Send size={20} />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
