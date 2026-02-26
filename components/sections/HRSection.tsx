"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const metrics = [
  { label: "Performance", value: 98, color: "#13B9FD" },
  { label: "Accessibility", value: 100, color: "#7F52FF" },
  { label: "Best Practices", value: 100, color: "#34D399" },
  { label: "SEO", value: 100, color: "#FBBF24" },
];

export default function HRSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs text-[#13B9FD] tracking-widest uppercase mb-4">
            // Call to Action
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Birlikte <span className="gradient-text">İnşa Edelim</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Mobil uygulama, AI entegrasyonu veya full-stack proje için müsait.
            Haydi konuşalım.
          </p>
        </motion.div>

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-10 text-center space-y-8 mb-16"
          style={{
            background: "linear-gradient(135deg, rgba(19,185,253,0.06) 0%, rgba(127,82,255,0.06) 100%)",
            border: "1px solid rgba(19,185,253,0.2)",
          }}
        >
          {/* Social links */}
          <div className="flex justify-center gap-6">
            {[
              {
                href: "https://github.com/umutsibara",
                label: "GitHub",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/umut-şıbara-54855524a/",
                label: "LinkedIn",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: "mailto:umutsibara@gmail.com",
                label: "Email",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/8 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                  {item.icon}
                </div>
                <span className="text-xs font-mono">{item.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/Stajyer_MuhammedUmutSibara_AndroidDevelopper.pdf"
            download
            onClick={handleDownload}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 60px rgba(19,185,253,0.5), 0 0 120px rgba(127,82,255,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            animate={
              downloading
                ? { boxShadow: "0 0 80px rgba(19,185,253,0.8)" }
                : {}
            }
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg relative overflow-hidden mx-auto"
            style={{
              background: "linear-gradient(135deg, #13B9FD 0%, #7F52FF 100%)",
              boxShadow: "0 0 30px rgba(19,185,253,0.3)",
            }}
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
              <div className="shimmer absolute inset-0" />
            </div>
            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {downloading ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              )}
            </svg>
            <span className="relative z-10">
              {downloading ? "İndiriliyor..." : "CV&apos;yi İndir"}
            </span>
          </motion.a>
        </motion.div>

        {/* System Status / Lighthouse */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-400 uppercase tracking-widest">System Status: Optimized</span>
            </div>
            <span className="font-mono text-xs text-slate-600">Lighthouse v10</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                    <circle
                      cx="18" cy="18" r="15.9155" fill="none"
                      stroke={m.color} strokeWidth="2"
                      strokeDasharray={`${m.value} 100`}
                      strokeLinecap="round"
                      style={{ filter: `drop-shadow(0 0 4px ${m.color})` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{m.value}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
