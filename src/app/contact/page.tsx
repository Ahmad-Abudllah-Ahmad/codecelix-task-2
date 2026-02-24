"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import TextReveal from "@/components/common/TextReveal";
import BackgroundLines from "@/components/common/BackgroundLines";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-40 px-6 relative overflow-hidden">
            <BackgroundLines />
            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-blue-500 font-mono text-sm uppercase tracking-widest block mb-4"
                    >
                        Get in touch
                    </motion.span>
                    <div className="text-4xl md:text-7xl font-bold tracking-tightest mb-8">
                        <TextReveal text="LET'S BUILD THE" className="inline" /> <TextReveal text="FUTURE." className="inline text-blue-500 italic" />
                    </div>
                </header>

                <div className="grid md:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Our Nest</h3>
                                <div className="flex items-start">
                                    <MapPin className="text-blue-500 mr-4 mt-1" size={24} />
                                    <div>
                                        <p className="text-xl font-medium">Silicon Valley HQ</p>
                                        <p className="text-gray-400 mt-2">101 University Ave, Palo Alto<br />CA 94301, USA</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Direct Line</h3>
                                <div className="flex items-start">
                                    <Phone className="text-blue-500 mr-4 mt-1" size={24} />
                                    <div>
                                        <p className="text-xl font-medium">+1 (650) 555-0123</p>
                                        <p className="text-gray-400 mt-2">Mon - Fri: 9am - 6pm PST</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Digital Inbox</h3>
                                <div className="flex items-start">
                                    <Mail className="text-blue-500 mr-4 mt-1" size={24} />
                                    <div>
                                        <p className="text-xl font-medium">hello@codecelix.ai</p>
                                        <p className="text-gray-400 mt-2">Expect a response within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-10 md:p-12 rounded-[2.5rem] relative"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                <select className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                    <option className="bg-black">New Project</option>
                                    <option className="bg-black">Partnership</option>
                                    <option className="bg-black">Career</option>
                                    <option className="bg-black">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Tell us about your next big idea..."
                                ></textarea>
                            </div>

                            <button className="group w-full py-5 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                                Send Message
                                <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
