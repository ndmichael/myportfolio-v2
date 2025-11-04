"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PrimaryButton } from "@/components/ButtonGradient";

export default function ContactCTA() {
  return (
    <section className="relative py-18 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Let’s Build Something Together
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          Have an idea, project, or position in mind?  
          I’m open to collaborations, contract roles, or building tailored solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
        >

          <Link href="/contact">
            <PrimaryButton>
                Contact Me
            </PrimaryButton>
          </Link>


          <Link
            href="/projects"
            className="px-8 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
