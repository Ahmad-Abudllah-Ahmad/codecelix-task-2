"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundLines() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-60"
            >
                {/* Fast Flowing "Shooting" Lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.path
                        key={`flow-${i}`}
                        d={`M${-500 + i * 200} ${100 + i * 120}C${0 + i * 200} ${200 + i * 50} ${400 + i * 200} ${0 + i * 100} ${900 + i * 200} ${150 + i * 80}`}
                        stroke={i % 2 === 0 ? "url(#gradient1)" : "url(#gradient2)"}
                        strokeWidth="2"
                        animate={{
                            x: [-200, 1440 + 200],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.5,
                        }}
                    />
                ))}

                {/* Slow Background Waves */}
                <motion.path
                    d="M-200 150C200 300 500 0 800 150C1100 300 1400 150 1700 300"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    animate={{
                        x: [-100, 100, -100],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M1600 750C1300 600 1000 800 700 650C400 500 100 750 -200 600"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    animate={{
                        x: [100, -100, 100],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Dense Connection Lines */}
                {[...Array(4)].map((_, i) => (
                    <motion.path
                        key={`dense-${i}`}
                        d={`M${i * 400} 0L${1440 - i * 400} 800`}
                        stroke="rgba(59, 130, 246, 0.1)"
                        strokeWidth="1"
                        animate={{
                            opacity: [0, 0.2, 0],
                            pathLength: [0, 1, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            delay: i * 3,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Bright Glowing Orbs */}
                <motion.circle
                    cx="25%"
                    cy="35%"
                    r="3"
                    fill="#3B82F6"
                    className="blur-xl"
                    animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 35, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="75%"
                    cy="65%"
                    r="3"
                    fill="#6366F1"
                    className="blur-2xl"
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 40, 1],
                        x: [0, -60, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="rgba(99, 102, 241, 0.7)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
