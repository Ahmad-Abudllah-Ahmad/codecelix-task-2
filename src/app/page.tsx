"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Counter from "@/components/common/Counter";
import TextReveal from "@/components/common/TextReveal";
import BackgroundLines from "@/components/common/BackgroundLines";
import Image from "next/image";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ y: y1, opacity }}
          className="relative z-10 text-center max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl sm:text-5xl md:text-9xl font-bold tracking-tightest leading-tight md:leading-none mb-8 flex flex-col items-center">
              <span className="overflow-hidden h-[1.1em] flex items-center">
                {"CRAFTING THE".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.03,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="overflow-hidden h-[1.1em] flex items-center">
                <span className="text-blue-500 italic flex">
                  {"NEXT GEN".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + i * 0.03,
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <span className="flex ml-4">
                  {"GENIUS.".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + i * 0.03,
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We build premium digital products for Silicon Valley's most ambitious startups.
              Our elite squad specializes in turning complex problems into elegant solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center group">
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 border border-gray-800 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all">
                View Our Work
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Dynamic Background Lines */}
        <BackgroundLines />
      </section>

      {/* Stats / Proof Section */}
      <section className="py-20 md:py-32 px-6 border-y border-gray-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between gap-10 md:gap-12">
          {[
            { label: "Founded", value: 2024, prefix: "", suffix: "" },
            { label: "Successful Rounds", value: 450, prefix: "$", suffix: "M+" },
            { label: "Portfolio Companies", value: 42, prefix: "", suffix: "" },
            { label: "Design Awards", value: 18, prefix: "", suffix: "" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <span className="text-3xl md:text-5xl font-mono font-bold mb-2">
                {stat.prefix}<Counter value={stat.value} />{stat.suffix}
              </span>
              <span className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Proposition with Parallax */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <TextReveal text="WE DON'T JUST BUILD APPS." className="inline" />
            <br />
            <TextReveal text="WE BUILD LEGACIES." className="inline text-blue-500" />
          </h2>
          <div className="text-gray-400 text-lg mb-12 leading-relaxed">
            <TextReveal
              text="Our approach is rooted in Silicon Valley's Move Fast and Break Things mantra—but with the precision of a Swiss watch. We obsess over every pixel, every line of code, and every user interaction."
            />
          </div>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">01</div>
              <span className="text-xl font-medium">Research-First Methodology</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">02</div>
              <span className="text-xl font-medium">Silicon Valley Standard UX</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">03</div>
              <span className="text-xl font-medium">Scalable Cloud Infrastructure</span>
            </li>
          </ul>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl overflow-hidden relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=75&w=1200"
              alt="Silicon Valley Engineering"
              fill
              className="object-cover opacity-30 mix-blend-overlay"
              priority
            />
          </motion.div>
          <motion.div
            style={{ y: useTransform(scrollY, [1200, 2000], [0, -100]) }}
            className="absolute -bottom-10 -left-10 p-8 glass rounded-2xl max-w-xs"
          >
            <p className="text-sm font-medium italic">"The most impressive design partner we've ever worked with. They speak the language of founders."</p>
            <div className="mt-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-700"></div>
              <div className="ml-3">
                <p className="text-xs font-bold">Sarah Chen</p>
                <p className="text-[10px] text-gray-500 uppercase">CTO, Nexus Aurora</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
