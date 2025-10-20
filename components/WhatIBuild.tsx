"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import AnimatedMeshGradient from "@/components/AnimatedMeshGradient";

export default function WhatIBuild() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* 🔮 Animated Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatedMeshGradient />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          What I Build
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          I build real-world digital products — spanning SaaS, APIs, realtime systems, ML, and cloud-native platforms.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card/40 border border-border backdrop-blur-lg p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className={`w-8 h-8 ${p.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
