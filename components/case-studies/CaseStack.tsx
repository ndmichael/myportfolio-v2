"use client";

import { motion } from "framer-motion";

interface StackProps {
  stack: string[];
}

export default function CaseStack({ stack }: StackProps) {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-28 bg-card/30 border-t border-border backdrop-blur-lg">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10 text-primary"
      >
        Tech Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {stack.map((tech, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
