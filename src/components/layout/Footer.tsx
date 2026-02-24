import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-900 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        CODECELIX<span className="text-blue-500">.</span>
                    </Link>
                    <p className="mt-6 text-gray-400 max-w-sm leading-relaxed">
                        Leading the next wave of Silicon Valley innovation through elite research, design, and prototyping.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Company</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                        <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Work</Link></li>
                        <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Connect</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col md:row items-center justify-between text-gray-500 text-xs">
                <p>© 2026 Codecelix Inc. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
