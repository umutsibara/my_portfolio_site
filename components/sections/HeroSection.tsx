"use client";

import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import NeuronNetwork from "@/components/three/NeuronNetwork";

const codeSnippets = [
  { text: "fun buildFuture() {", x: "8%", y: "20%", delay: 0 },
  { text: "@Composable", x: "75%", y: "15%", delay: 0.3 },
  { text: "Widget build(ctx) =>", x: "5%", y: "70%", delay: 0.6 },
  { text: "Gemini.generate(prompt)", x: "70%", y: "75%", delay: 0.9 },
  { text: "async/await", x: "15%", y: "45%", delay: 1.2 },
  { text: ".riverpod", x: "80%", y: "45%", delay: 1.5 },
  { text: "Firebase.init()", x: "40%", y: "85%", delay: 0.4 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Network Canvas */}
      <div className="absolute inset-0 z-0 opacity-70">
        <NeuronNetwork />
      </div>

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: snippet.delay + 1, duration: 0.6 }}
          className="absolute hidden lg:block z-10 pointer-events-none"
          style={{ left: snippet.x, top: snippet.y }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            style={{ x: smoothX, y: smoothY }}
            className="font-mono text-xs px-3 py-1.5 rounded-md text-[#13B9FD]/70 border border-[#13B9FD]/15 bg-[#13B9FD]/5 backdrop-blur-sm whitespace-nowrap"
          >
            {snippet.text}
          </motion.div>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Profile Photo & Badge */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <div className="relative w-28 h-28 rounded-full p-1" style={{ background: "linear-gradient(135deg, #13B9FD, #7F52FF)" }}>
              <img
                src="/fotograf.jpg"
                alt="Muhammed Umut Şıbara"
                className="w-full h-full rounded-full object-cover border-2 border-[#0B0E14]"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#0B0E14] rounded-full p-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px]">
                  🚀
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium border border-[#13B9FD]/30 bg-[#13B9FD]/5 text-[#13B9FD]">
              <span className="w-2 h-2 rounded-full bg-[#13B9FD] animate-pulse" />
              Muhammed Umut Şıbara — Open to Work
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-white">
              Flutter &amp; Kotlin
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
              <span className="gradient-text">Android Developer</span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed"
          >
            <span className="text-[#7F52FF] font-medium">Kotlin</span> &amp;{" "}
            <span className="text-[#13B9FD] font-medium">Flutter</span> ile native-level mobil
            deneyimler inşa ediyorum. Blockchain entegrasyonundan AI destekli sistemlere,
            kurumsal stajdan Game Jam birinciliğine — geniş yelpazede Full Stack mobil
            geliştirici.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(19,185,253,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="relative group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg, #13B9FD 0%, #7F52FF 100%)" }}
            >
              <span className="relative z-10">Projeleri Keşfet</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="/Stajyer_MuhammedUmutSibara_AndroidDevelopper.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 hover:border-[#13B9FD]/50 transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 text-[#13B9FD] group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              CV İndir
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 pt-6 border-t border-white/5 w-full justify-center"
          >
            {[
              { label: "Tamamlanan Proje", value: "9" },
              { label: "GPA", value: "3.22" },
              { label: "Teknoloji", value: "15+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black gradient-text">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1 font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs font-mono">scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
