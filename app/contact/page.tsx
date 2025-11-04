"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const text = encodeURIComponent(
      `New Contact Message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const phoneNumber = "2348080000000"; // update to your real WhatsApp number

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    setTimeout(() => setLoading(false), 900);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl p-10 rounded-2xl
        bg-background/60 backdrop-blur-xl border border-border shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center mb-3">Contact Me</h1>
        <p className="text-muted-foreground text-center mb-8">
          Have a project or idea? Let’s bring it to life.
        </p>

        {/* CONTACT DETAILS */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <Link
            href="mailto:michael@example.com"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <Mail className="w-5 h-5 text-foreground" /> michael@example.com
          </Link>

          <div className="flex gap-5 mt-2">
            <Link href="https://github.com/" target="_blank" className="hover:opacity-70 transition">
              <Github className="w-6 h-6 text-foreground" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank" className="hover:opacity-70 transition">
              <Linkedin className="w-6 h-6 text-foreground" />
            </Link>
            <Link href="https://twitter.com/" target="_blank" className="hover:opacity-70 transition">
              <Twitter className="w-6 h-6 text-foreground" />
            </Link>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 mx-auto">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background
              focus:ring-2 focus:ring-primary/40 outline-none"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background
              focus:ring-2 focus:ring-primary/40 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background
              focus:ring-2 focus:ring-primary/40 outline-none resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full py-5 text-base font-semibold rounded-xl
            bg-gradient-to-r  from-indigo-500 via-purple-500 to-cyan-400 text-white
            hover:opacity-90 transition"
          >
            {loading ? "Opening WhatsApp..." : "Send Message via WhatsApp"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
