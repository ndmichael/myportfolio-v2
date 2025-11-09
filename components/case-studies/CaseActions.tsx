"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ButtonGradient";

interface CaseActionsProps {
  github?: string;
  live?: string;
}

export default function CaseActions({ github, live }: CaseActionsProps) {
  if (!github && !live) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-8 pb-8 border-t border-white/10"
      >
        <div className="flex flex-wrap gap-4">
          {github && (
            <PrimaryButton href={github}>
              View GitHub
            </PrimaryButton>
          )}

          {live && (
            <PrimaryButton href={live}>
              View Live Project
            </PrimaryButton>
          )}
        </div>
      </motion.div>
    </section>
  );
}
