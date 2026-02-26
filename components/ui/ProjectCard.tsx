"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/data/projects";
import PhoneFrame from "./PhoneFrame";
import TerminalView from "./TerminalView";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const techColors: Record<string, string> = {
  Flutter: "#13B9FD",
  Kotlin: "#7F52FF",
  Firebase: "#FFCA28",
  "Gemini API": "#4285F4",
  Supabase: "#3ECF8E",
  "Next.js": "#FFFFFF",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  Python: "#3776AB",
  FastAPI: "#009688",
  Riverpod: "#00B4AB",
  Dart: "#0175C2",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const glowBlue = "0 0 40px rgba(19,185,253,0.25), 0 0 80px rgba(19,185,253,0.1)";
  const glowPurple = "0 0 40px rgba(127,82,255,0.25), 0 0 80px rgba(127,82,255,0.1)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 transition-all duration-500 cursor-default"
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(19,185,253,0.05) 0%, rgba(127,82,255,0.05) 100%)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? project.glowColor === "blue"
            ? "1px solid rgba(19,185,253,0.35)"
            : "1px solid rgba(127,82,255,0.35)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hovered
          ? project.glowColor === "blue"
            ? glowBlue
            : glowPurple
          : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider"
          style={{
            background:
              project.category === "ai"
                ? "rgba(127,82,255,0.15)"
                : "rgba(19,185,253,0.15)",
            color: project.category === "ai" ? "#7F52FF" : "#13B9FD",
            border:
              project.category === "ai"
                ? "1px solid rgba(127,82,255,0.3)"
                : "1px solid rgba(19,185,253,0.3)",
          }}
        >
          {project.category === "ai" ? "AI Project" : "Mobile App"}
        </span>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
        {/* Text content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium"
                style={{
                  background: `${techColors[tech] ?? "#ffffff"}15`,
                  color: techColors[tech] ?? "#94a3b8",
                  border: `1px solid ${techColors[tech] ?? "#ffffff"}25`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual demo */}
        <div className="flex justify-center">
          {project.type === "phone" ? (
            <motion.div
              animate={hovered ? { scale: 1.02, rotateY: 3 } : { scale: 1, rotateY: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PhoneFrame title={project.title} />
            </motion.div>
          ) : (
            <div className="w-full">
              <TerminalView lines={project.demoData ?? []} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
