"use client";

import { motion } from "framer-motion";
import {
  Database,
  FileCode,
  BrainCircuit,
  Wind,
  Puzzle,
  Circle,
} from "lucide-react";

const iconMap: Record<string, any> = {
  "Django": FileCode,
  "PostgreSQL": Database,
  "Scikit-learn": BrainCircuit,
  "Tailwind CSS": Wind,
  "Chrome Extension API": Puzzle,
};

export default function CaseStacks({ stack }: { stack: string[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-32 pt-14 text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 md:gap-4"
      >
        {stack.map((item, i) => {
          const Icon = iconMap[item] ?? Circle;
          return (
            <motion.div
              key={i}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full 
                         text-sm md:text-base 
                         bg-white/5 border border-white/10 backdrop-blur-md 
                         text-muted-foreground hover:text-foreground 
                         transition-all duration-300 hover:scale-[1.05] hover:bg-white/10"
            >
              <Icon className="w-4 h-4 text-foreground/70" />
              {item}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
