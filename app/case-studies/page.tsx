"use client";

import { motion } from "framer-motion";
import AnimatedMeshGradient from "@/components/AnimatedMeshGradient";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatedMeshGradient />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background backdrop-blur-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          Case Studies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-20"
        >
          Explore deep dives into my most impactful builds — from architecture decisions and 
          API design to performance, scalability, and UI polish.
        </motion.p>

        {/* Grid of Case Studies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={i} {...study} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
