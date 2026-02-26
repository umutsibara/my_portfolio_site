"use client";

import type { ReactNode } from "react";

interface BrowserFrameProps {
  children?: ReactNode;
  url?: string;
}

export default function BrowserFrame({ children, url }: BrowserFrameProps) {
  return (
    <div className="relative w-full max-w-[500px] mx-auto rounded-xl shadow-2xl overflow-hidden" 
      style={{
        background: "linear-gradient(145deg, #1a1f2e, #0d1117)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Browser Toolbar */}
      <div className="h-10 bg-[#161B28] border-b border-white/5 flex items-center px-4 gap-4">
        {/* Mac OS Controls */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[240px] h-6 bg-black/40 rounded-md border border-white/5 flex items-center justify-center px-3 text-[10px] text-slate-500 font-mono overflow-hidden whitespace-nowrap text-ellipsis">
            {url ?? "localhost:3000"}
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative aspect-[16/10] bg-[#0D1117] flex flex-col">
        {children ?? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500">
            <svg className="w-10 h-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-xs font-mono">Web content rendering...</span>
          </div>
        )}
      </div>
    </div>
  );
}
