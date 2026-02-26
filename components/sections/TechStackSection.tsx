"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data/skills";

const techIcons: Record<string, string> = {
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Gemini AI": "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
  Supabase: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  Riverpod: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
};

function SkillBadge({ name, color }: { name: string; color: string }) {
  const iconUrl = techIcons[name];
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-xl shrink-0 border border-white/5 bg-white/3 hover:border-white/15 transition-colors"
      style={{ minWidth: "140px" }}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt={name}
          className="w-6 h-6 object-contain"
          style={{ filter: name === "Next.js" || name === "iOS" ? "invert(1)" : "none" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}
      <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechStackSection() {
  const row1 = skills.slice(0, 8);
  const row2 = skills.slice(8);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block font-mono text-xs text-[#7F52FF] tracking-widest uppercase mb-4">
            // Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Çalıştığım <span className="gradient-text">Teknolojiler</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite marquee rows */}
      <div className="space-y-5">
        {/* Row 1 → left */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-5 animate-marquee"
            style={{ animationDuration: "25s" }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((skill, i) => (
              <SkillBadge key={i} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>

        {/* Row 2 → right */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-5 animate-marquee-reverse"
            style={{ animationDuration: "30s" }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((skill, i) => (
              <SkillBadge key={i} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0E14] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0E14] to-transparent z-10" />
    </section>
  );
}
