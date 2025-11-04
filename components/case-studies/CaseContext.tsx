"use client";

import { motion } from "framer-motion";

interface ContextProps {
  problem: string;
  audience: string;
  goals: string[];
}

export default function CaseContext({ problem, audience, goals }: ContextProps) {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-28 bg-muted/30 backdrop-blur-md rounded-2xl mx-auto my-10 max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-primary"
      >
        The Challenge
      </motion.h2>
      <p className="text-muted-foreground mb-6">{problem}</p>

      <h3 className="font-semibold text-lg mb-2 text-foreground">Target Audience:</h3>
      <p className="text-muted-foreground mb-6">{audience}</p>

      <h3 className="font-semibold text-lg mb-2 text-foreground">Project Goals:</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        {goals.map((goal, i) => (
          <li key={i}>{goal}</li>
        ))}
      </ul>
    </section>
  );
}
