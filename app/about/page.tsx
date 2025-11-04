"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, Code2, Users } from "lucide-react";
import { PrimaryButton } from "@/components/ButtonGradient";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function AboutPage() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      
      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I’m a software engineer focused on building meaningful digital products —
          balancing great user experience with strong engineering discipline.
        </p>
      </motion.div>

      {/* STORY SECTION */}
      <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE (comes first on mobile) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="order-1 md:order-2 rounded-2xl h-64 bg-gradient-to-br
            from-indigo-500/30 via-purple-500/20 to-cyan-400/30 backdrop-blur-xl
            border border-border shadow-lg"
        />

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="order-2 md:order-1"
        >
          <h2 className="text-2xl font-semibold mb-4">My Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            I’ve worked across frontend, backend, and system architecture —
            building tools, platforms, and consumer-facing experiences.
            I enjoy designing systems that scale gracefully and writing code
            that stays clean over time. I value collaboration, thoughtful design,
            and making technology feel intuitive.
          </p>
        </motion.div>
      </div>

      {/* VALUES */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="mt-24"
      >
        <h2 className="text-2xl font-semibold text-center mb-10">
          What I Believe In
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="w-6 h-6 mb-3 text-primary" />,
              title: "Clarity First",
              text: "Great products start from understanding the problem deeply.",
            },
            {
              icon: <Code2 className="w-6 h-6 mb-3 text-primary" />,
              title: "Craft Matters",
              text: "Software should be reliable, maintainable, and thoughtfully built.",
            },
            {
              icon: <Users className="w-6 h-6 mb-3 text-primary" />,
              title: "Human Centered",
              text: "Technology is for people. Empathy leads to better products.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4 + index * 0.1}
              className="p-6 rounded-xl bg-background/40 backdrop-blur border border-border"
            >
              {item.icon}
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
        className="text-center mt-24"
      >
        <Link href="/contact">
          <PrimaryButton>Contact Me</PrimaryButton>
        </Link>
      </motion.div>
    </section>
  );
}
