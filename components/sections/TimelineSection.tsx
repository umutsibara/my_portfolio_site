"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timelineEntries } from "@/lib/data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const typeColors = {
  work: { bg: "rgba(19,185,253,0.15)", color: "#13B9FD", label: "Deneyim" },
  education: { bg: "rgba(127,82,255,0.15)", color: "#7F52FF", label: "Eğitim" },
  project: { bg: "rgba(52,211,153,0.15)", color: "#34D399", label: "Proje" },
};

export default function TimelineSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block font-mono text-xs text-[#13B9FD] tracking-widest uppercase mb-4">
            // Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Deneyim &amp; <span className="gradient-text">Eğitim</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-top"
              style={{ background: "linear-gradient(180deg, #13B9FD, #7F52FF)" }}
            />
          </div>

          <div className="space-y-12 pl-16">
            {timelineEntries.map((entry, i) => {
              const style = typeColors[entry.type];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[46px] w-5 h-5 rounded-full border-2 border-[#0B0E14] flex items-center justify-center"
                    style={{ background: style.color, boxShadow: `0 0 12px ${style.color}66` }}
                  >
                    {entry.highlight && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl p-6 transition-all duration-300 hover:border-white/10 ${
                      entry.highlight ? "neon-border-blue" : ""
                    }`}
                    style={{
                      background: entry.highlight
                        ? "rgba(19,185,253,0.03)"
                        : "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{entry.title}</h3>
                        <p className="text-sm text-slate-400">{entry.company}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
                          style={{ background: style.bg, color: style.color }}
                        >
                          {style.label}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{entry.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">{entry.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-white/5 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
