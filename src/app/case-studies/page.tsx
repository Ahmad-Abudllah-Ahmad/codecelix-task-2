"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/common/TextReveal";
import BackgroundLines from "@/components/common/BackgroundLines";
import Image from "next/image";

const caseStudies = [
    {
        title: "Quantum Ledger",
        category: "FinTech / Cryptography",
        description: "Architecting a secure, high-throughput decentralized ledger for institutional investors.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
        color: "bg-blue-600"
    },
    {
        title: "Neural Vision",
        category: "AI / Healthcare",
        description: "Building an AI-driven diagnostics tool for early cancer detection with 99.8% accuracy.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
        color: "bg-purple-600"
    },
    {
        title: "EcoSphere API",
        category: "SaaS / Sustainability",
        description: "Scalable data ingestion engine for tracking real-time carbon offsets across supply chains.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        color: "bg-emerald-600"
    },
    {
        title: "Orbit OS",
        category: "Aerospace / Embedded",
        description: "Mission-critical operating system for the next generation of satellite constellations.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
        color: "bg-amber-600"
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-32 pb-40 px-6 relative overflow-hidden">
            <BackgroundLines />
            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-blue-500 font-mono text-sm uppercase tracking-widest block mb-4"
                        >
                            Our Work
                        </motion.span>
                        <div className="text-5xl md:text-7xl font-bold tracking-tightest">
                            <TextReveal text="SELECTED" className="inline" /> <TextReveal text="PROJECTS." className="inline text-blue-500 italic" />
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex space-x-4"
                    >
                        {["All", "AI", "FinTech", "SaaS", "Health"].map((cat) => (
                            <button key={cat} className="px-5 py-2 border border-gray-900 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all">
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </header>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 bg-zinc-900">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={`${study.image}&w=1000&q=75`}
                                        alt={study.title}
                                        fill
                                        className="object-cover"
                                        priority={i < 2}
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="px-8 py-3 bg-white text-black font-bold rounded-full scale-90 group-hover:scale-100 transition-transform">
                                        View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2 block">
                                        {study.category}
                                    </span>
                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-400 max-w-sm leading-relaxed">
                                        {study.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
