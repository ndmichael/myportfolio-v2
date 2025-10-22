"use client";

import { motion } from "framer-motion";

interface ResultsProps {
  results: string[];
  learnings?: string[];
}

export default function CaseResults({ results, learnings }: ResultsProps) {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-28 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-primary"
      >
        Results & Learnings
      </motion.h2>

      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      {learnings && (
        <>
          <h3 className="font-semibold text-lg mb-2 text-foreground">Key Learnings:</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            {learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
