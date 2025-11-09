"use client";

import { motion } from "framer-motion";

interface CaseContextProps {
  role: string;
  overview: string;
  context: string;
}

export default function CaseContext({ role, overview, context }: CaseContextProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-12 space-y-8">

      {/* Role */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xs tracking-widest uppercase text-muted-foreground">
          Role
        </h3>

        <p className="mt-1 text-lg md:text-xl font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          {role}
        </p>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.05 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center md:text-left">
          Project Overview
        </h3>

        {overview.split('\n\n').map((para, i) => (
          <p key={i} className="text-muted-foreground text-base md:text-lg leading-relaxed text-center md:text-left">
            {para}
          </p>
        ))}
      </motion.div>

      {/* Context */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center md:text-left">
          Context & Problem
        </h3>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center md:text-left">
          {context}
        </p>
      </motion.div>

    </section>
  );
}
