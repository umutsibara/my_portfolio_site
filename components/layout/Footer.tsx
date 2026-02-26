"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-mono font-bold text-xs"
            style={{ background: "linear-gradient(135deg, #13B9FD, #7F52FF)" }}
          >
            US
          </div>
          <span className="text-sm text-slate-500 font-mono">
            umut<span className="text-[#13B9FD]">.dev</span>
          </span>
        </div>

        <p className="text-xs text-slate-600 font-mono">
          Built with Next.js 14 · Framer Motion · Three.js · GSAP
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
