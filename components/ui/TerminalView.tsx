"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TerminalViewProps {
  lines: string[];
}

function getLineClass(line: string): string {
  if (line.startsWith("$")) return "text-[#13B9FD]";
  if (line.startsWith(">")) return "text-[#7F52FF]";
  if (line.startsWith("✅")) return "text-green-400";
  if (
    line.startsWith("🤖") ||
    line.startsWith("📌") ||
    line.startsWith("⏱️") ||
    line.startsWith("📊")
  )
    return "text-[#13B9FD]";
  if (line.trim() === "") return "min-h-[0.75rem] block";
  return "text-slate-300";
}

export default function TerminalView({ lines }: TerminalViewProps) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const startedRef = useRef(false);
  const indexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Guard: nothing to animate
    if (!lines || lines.length === 0) return;

    const tick = () => {
      if (indexRef.current >= lines.length) return;
      const line = lines[indexRef.current];
      // Only push defined strings
      if (typeof line === "string") {
        setDisplayed((prev) => [...prev, line]);
      }
      indexRef.current += 1;
      timerRef.current = setTimeout(tick, 70 + Math.random() * 60);
    };

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      tick();
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) obs.observe(containerRef.current);

    return () => {
      obs.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAnimating = startedRef.current && displayed.length < (lines?.length ?? 0);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl overflow-hidden font-mono text-xs"
      style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-[#161B28]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-slate-500 text-[11px]">terminal</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 min-h-[220px] max-h-[260px] overflow-y-auto space-y-0.5">
        {displayed.map((line, i) => {
          // Safety guard — should never happen, but prevents the crash
          if (typeof line !== "string") return null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.12 }}
            >
              <span className={`block leading-relaxed ${getLineClass(line)}`}>
                {line || "\u00A0"}
              </span>
            </motion.div>
          );
        })}
        {isAnimating && (
          <span className="inline-block text-[#13B9FD] cursor-blink">█</span>
        )}
      </div>
    </div>
  );
}
