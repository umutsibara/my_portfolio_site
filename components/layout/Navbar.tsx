"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projeler" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#experience", label: "Deneyim" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#13B9FD] to-[#7F52FF] opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white font-mono font-bold text-sm z-10">US</span>
          </div>
          <span className="font-mono text-sm font-medium text-slate-300 group-hover:text-white transition-colors hidden sm:block">
            umut<span className="gradient-text">.dev</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-slate-400 hover:text-white transition-colors group font-medium"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#13B9FD] to-[#7F52FF] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/Stajyer_MuhammedUmutSibara_AndroidDevelopper.pdf"
          download
          className="relative group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white overflow-hidden border border-[#13B9FD]/30 hover:border-[#13B9FD]/70 transition-all duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#13B9FD]/10 to-[#7F52FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg className="w-4 h-4 text-[#13B9FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="relative">CV İndir</span>
        </a>
      </div>
    </motion.nav>
  );
}
