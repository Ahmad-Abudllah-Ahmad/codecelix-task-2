"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Shield, Database, Cloud, BarChart } from "lucide-react";
import TextReveal from "@/components/common/TextReveal";
import BackgroundLines from "@/components/common/BackgroundLines";

const services = [
    {
        title: "Product Strategy",
        description: "Deep research and UX strategy to define the target audience and roadmap for your MVP.",
        icon: <Zap className="w-8 h-8 text-blue-500" />,
        features: ["User Personas", "Market Analysis", "Feature Prioritization"]
    },
    {
        title: "UI/UX Design",
        description: "Elite visual design systems that win awards and convert users at scale.",
        icon: <Monitor className="w-8 h-8 text-indigo-500" />,
        features: ["High-Fidelity UI", "Motion Design", "Design Systems"]
    },
    {
        title: "Full-Stack Dev",
        description: "Next.js, Go, and Python microservices built to handle Silicon Valley scale.",
        icon: <Database className="w-8 h-8 text-emerald-500" />,
        features: ["API Architectures", "Real-time Engines", "Performance Tuning"]
    },
    {
        title: "Security & Audit",
        description: "Penetration testing and security audits for mission-critical applications.",
        icon: <Shield className="w-8 h-8 text-red-500" />,
        features: ["Threat Modeling", "Compliance Audits", "Data Encryption"]
    },
    {
        title: "Cloud Infrastructure",
        description: "AWS and GCP infrastructure as code that scales from zero to millions.",
        icon: <Cloud className="w-8 h-8 text-sky-500" />,
        features: ["Kubernetes", "CI/CD Pipelines", "Serverless Systems"]
    },
    {
        title: "Data Analytics",
        description: "BI tools and data pipelines that provide actionable insights for founders.",
        icon: <BarChart className="w-8 h-8 text-orange-500" />,
        features: ["ML Integration", "Predictive Modeling", "Dashboard Design"]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-40 px-6 relative overflow-hidden">
            <BackgroundLines />
            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-mono text-sm uppercase tracking-widest block mb-4"
                    >
                        Capabilities
                    </motion.span>
                    <div className="text-4xl md:text-7xl font-bold tracking-tightest mb-8 max-w-4xl">
                        <TextReveal text="SOLVING THE" className="inline" /> <span className="text-blue-500">HARD</span> <TextReveal text="PROBLEMS." className="inline" />
                    </div>
                    <div className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        <TextReveal text="We don't do generic. We do bespoke engineering and design that gives your startup a permanent competitive advantage." />
                    </div>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-10 bg-zinc-950 border border-gray-900 rounded-3xl hover:border-blue-500 transition-colors group"
                        >
                            <div className="mb-8 p-4 bg-gray-900/50 rounded-2xl w-max group-hover:bg-blue-500/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
