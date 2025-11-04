"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Top Gradient Separator Line */}
      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 w-full" />

      {/* Main Footer Section */}
      <div className="relative z-10 bg-gradient-to-b from-background/80 via-background/60 to-background/90 backdrop-blur-2xl border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-1"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Michael Ukeje
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer & System Architect
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 text-sm font-medium"
          >
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/case-studies"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6"
          >
            <SocialLink
              href="https://github.com/ndmichael"
              icon={<Github className="w-5 h-5" />}
            />
            <SocialLink
              href="https://linkedin.com/in/michaelukeje"
              icon={<Linkedin className="w-5 h-5" />}
            />
            <SocialLink
              href="mailto:michaelukeje.dev@gmail.com"
              icon={<Mail className="w-5 h-5" />}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-indigo-950/80 via-slate-950 to-cyan-950/70 border-t border-indigo-800/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center text-sm text-muted-foreground gap-3">
          <p className="text-indigo-300 font-semibold tracking-wide">
            © {year} Michael Ukeje
          </p>
          <p className="text-muted-foreground/80">
            Crafted with <span className="text-red-400">♥</span> using Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-xl bg-muted/10 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-cyan-400/20 hover:scale-110 transition-all duration-300"
    >
      {icon}
    </Link>
  );
}
