"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import AnimatedMeshGradient from "@/components/AnimatedMeshGradient";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedProjects() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* 🔮 Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatedMeshGradient />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background backdrop-blur-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          What I’ve Built
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          A curated showcase of full-stack projects — spanning AI, SaaS, and system design.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
