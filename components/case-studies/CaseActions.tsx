"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ButtonGradient";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-wrap gap-4 justify-center">
          {live && (
            <PrimaryButton href={live}>
              View Live Project
            </PrimaryButton>
          )}

          {github && (
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}