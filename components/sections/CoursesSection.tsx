"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { coursesData, generalGPA } from "@/lib/data/courses";

export default function CoursesSection() {
  const containerRef = useRef<HTMLElement>(null);

  const stats = [
    { label: "Genel Not Ortalaması", value: generalGPA },
    { label: "Öne Çıkan Ders Sayısı", value: coursesData.length.toString() },
  ];

  return (
    <section id="courses" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block font-mono text-xs text-[#7F52FF] tracking-widest uppercase mb-4">
            // Academic
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Önemli Eğitim <span className="gradient-text">Dersleri</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Üniversite eğitimim boyunca aldığım, yazılım ve teknoloji kariyerime doğrudan katkı sağlayan önemli bilgisayar bilimleri ve yazılım mühendisliği dersleri.
          </p>
        </motion.div>

        {/* GPA & Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 text-center backdrop-blur-sm hover:border-white/10 transition-colors"
            >
              <h3 className="text-slate-400 text-sm font-mono mb-2">{stat.label}</h3>
              <div className="text-4xl font-black text-white gradient-text flex justify-center items-center">
                {stat.value}
                {stat.label === "Genel Not Ortalaması" && <span className="text-lg text-slate-500 ml-2 font-normal">/ 4.00</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] ${
                course.highlight ? "neon-border-blue" : "hover:border-white/10"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-[#13B9FD] bg-[#13B9FD]/10 px-2.5 py-1 rounded-md">
                  {course.code}
                </span>
                <span className="font-mono text-xs text-white/50 border border-white/10 px-2 py-1 rounded-md">
                  Harf: <span className={course.grade.includes("A") ? "text-green-400" : "text-white"}>{course.grade}</span>
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#13B9FD] transition-colors line-clamp-2">
                {course.title}
              </h3>
              
              <div className="text-xs text-slate-400 mb-4 flex items-center gap-2">
                <span>{course.semester}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span>{course.ects} AKTS</span>
              </div>

              {course.projects && course.projects.length > 0 && (
                <div className="mb-4 flex flex-col gap-2">
                  {course.projects.map((project, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-[#13B9FD] hover:text-white transition-colors bg-[#13B9FD]/10 hover:bg-[#13B9FD]/20 px-3 py-2 rounded-lg w-fit border border-[#13B9FD]/20"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {project.title}
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] border border-white/10 px-3 py-2 rounded-lg w-fit"
                        >
                          <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {project.title}
                        </span>
                      )}
                      {project.description && (
                        <span className="text-[11px] leading-snug text-slate-400 mt-1 pl-1" title={project.description}>
                          {project.description}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {course.note && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-300 italic flex gap-2">
                    <span className="text-[#7F52FF] shrink-0">✦</span>
                    {course.note.replace("* ", "")}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
