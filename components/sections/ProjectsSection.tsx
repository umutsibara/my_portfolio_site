"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block font-mono text-xs text-[#13B9FD] tracking-widest uppercase mb-4">
            // Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 section-title inline-block">
            Projelerim
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-6">
            Her proje, gerçek problemi çözen, yayınlanmış veya canlı bir ürün. Kod kalitesi kadar
            kullanıcı deneyimi de önceliğim.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
