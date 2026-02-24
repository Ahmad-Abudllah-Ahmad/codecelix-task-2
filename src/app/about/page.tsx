"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, Globe, Award } from "lucide-react";
import TextReveal from "@/components/common/TextReveal";
import BackgroundLines from "@/components/common/BackgroundLines";
import Counter from "@/components/common/Counter";
import Image from "next/image";

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "We only partner with startups that are solving real, fundamental problems for humanity."
    },
    {
        icon: Zap,
        title: "Speed as a Feature",
        description: "In Silicon Valley, speed is the only advantage. We build fast, without breaking things."
    },
    {
        icon: Shield,
        title: "Elite Engineering",
        description: "Our standards are set by the best design and engineering patterns in the world."
    }
];

const stats = [
    { label: "Successful Exits", value: 12 },
    { label: "Talent Network", value: 500 },
    { label: "Lines of Code", value: 1000000 },
    { label: "Coffee Consumed", value: 8400 }
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-40 px-6 relative overflow-hidden">
            <BackgroundLines />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-mono text-sm uppercase tracking-widest block mb-4"
                    >
                        Our Identity
                    </motion.span>
                    <div className="text-4xl md:text-7xl font-bold tracking-tightest mb-12 max-w-4xl">
                        <TextReveal text="WE ARE" className="inline" /> <span className="text-blue-500">THE ARCHITECTS</span> <TextReveal text="OF TOMORROW." className="inline" />
                    </div>
                    <div className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        <TextReveal text="Codecelix was founded on a simple premise: elite software shouldn't be reserved for the fortune 500. We bring the world's best engineering talent to the world's most ambitious startups." />
                    </div>
                </header>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-40">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-10 rounded-[2.5rem] group hover:border-blue-500/50 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <value.icon className="text-blue-500" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-y border-zinc-800">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-6xl font-bold mb-4 flex justify-center items-baseline">
                                <Counter value={stat.value} />
                                {stat.value > 1000 && <span className="text-2xl ml-1">+</span>}
                            </div>
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Vision Section */}
                <div className="mt-40 grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">The Visionary Edge.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We don't just build products; we build legacies. Every line of code we write and every pixel we place is designed to scale your startup from its first round to its eventual IPO.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=75&w=200"
                                    alt="Founder"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold">Ahmad Abdullah</p>
                                <p className="text-xs text-blue-500 font-mono uppercase tracking-widest">Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] overflow-hidden aspect-square glass p-2"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=1000"
                            alt="Innovation"
                            fill
                            className="object-cover rounded-[2.5rem] p-2"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
