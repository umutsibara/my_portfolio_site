"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PhoneFrameProps {
  children?: ReactNode;
  title?: string;
}

export default function PhoneFrame({ children, title }: PhoneFrameProps) {
  return (
    <div className="relative w-[200px] mx-auto">
      {/* Phone outer shell */}
      <div
        className="relative rounded-[30px] p-2 shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #1a1f2e, #0d1117)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Top notch */}
        <div className="flex justify-center mb-2">
          <div className="w-20 h-4 bg-[#0B0E14] rounded-full flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
        </div>

        {/* Screen */}
        <div
          className="rounded-[22px] overflow-hidden bg-gradient-to-br from-[#0D1117] to-[#161B28] min-h-[300px] flex flex-col"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 py-2 text-[10px] text-slate-500 font-mono">
            <span>9:41</span>
            <span>▌▌▌ 📶</span>
          </div>

          {/* App content */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 gap-3">
            {children ?? (
              <div className="flex flex-col items-center gap-3 w-full">
                {/* Mock app UI */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#13B9FD] to-[#7F52FF] flex items-center justify-center text-xl">
                  📱
                </div>
                <p className="text-xs font-semibold text-white text-center">{title}</p>
                {/* Mock list items */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-full h-10 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#13B9FD]" />
                    <div className="flex-1 h-2 bg-white/10 rounded-full" />
                  </div>
                ))}
                <div className="w-full h-9 rounded-lg flex items-center justify-center text-[10px] font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #13B9FD, #7F52FF)" }}>
                  Demo View
                </div>
              </div>
            )}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-16 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Glow reflection */}
      <div
        className="absolute inset-0 rounded-[30px] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(19,185,253,0.05) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
