"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import TextReveal from "@/components/common/TextReveal";
import BackgroundLines from "@/components/common/BackgroundLines";
import Image from "next/image";

const blogPosts = [
    {
        title: "Engineering the Future: Silicon Valley Design Patterns",
        excerpt: "Exploring the intersection of elite engineering and human-centric design in the world's most successful startups.",
        date: "Feb 14, 2026",
        author: "Ayaz Mughal",
        category: "Product",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
    },
    {
        title: "Scaling Next.js Apps to 10M+ Users: Lessons from the Trenches",
        excerpt: "Performance optimization strategies for high-traffic applications using Vercel, Redis, and Edge functions.",
        date: "Feb 08, 2026",
        author: "Muhammad Abdullah",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
        title: "The Physics of Motion Design in Web UI",
        excerpt: "How applying real-world physics to digital animations creates more intuitive and premium user experiences.",
        date: "Jan 30, 2026",
        author: "Ahmad Abdullah",
        category: "Design",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
    }
];

export default function BlogPage() {
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
                        Insights
                    </motion.span>
                    <div className="text-4xl md:text-7xl font-bold tracking-tightest mb-8">
                        <TextReveal text="THE" className="inline" /> <TextReveal text="LOG." className="inline text-blue-500 italic" />
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-20">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer grid md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-900">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={`${post.image}&q=75&w=1000`}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority={i === 0}
                                    />
                                </motion.div>
                            </div>
                            <div>
                                <div className="flex items-center space-x-4 mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <span className="text-blue-500">{post.category}</span>
                                    <span>•</span>
                                    <div className="flex items-center">
                                        <Calendar size={12} className="mr-1.5" />
                                        {post.date}
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-500 transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-800 mr-3 flex items-center justify-center text-[10px] font-bold">
                                            {post.author.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium">{post.author}</span>
                                    </div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center text-sm font-bold group-hover:text-blue-500"
                                    >
                                        Read More <ArrowRight size={16} className="ml-2" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Section */}
                <section className="mt-40 p-12 md:p-24 bg-zinc-950 border border-gray-900 rounded-[3rem] text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            JOIN THE <span className="text-blue-500 italic">INNER CIRCLE</span>.
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
                            Get the latest insights on product, design, and engineering delivered straight to your inbox. No spam, just value.
                        </p>
                        <form className="max-w-md mx-auto flex flex-col md:row items-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-8 py-4 bg-gray-900 border border-gray-800 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
                                required
                            />
                            <button className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
