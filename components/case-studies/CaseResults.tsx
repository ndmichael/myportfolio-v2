"use client";

import { motion } from "framer-motion";

export default function CaseResults({ results }: { results: string }) {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 lg:px-28 pt-12">
      <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-muted-foreground leading-relaxed whitespace-pre-line"
      >
        {results}
      </motion.p>
    </section>
  );
}
