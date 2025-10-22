"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Nduka",
    role: "Product Manager, PayLink",
    text: "Working with Michael was seamless — his backend architecture and frontend logic brought our MVP to life faster than expected.",
    image: "/images/clients/james.jpg",
  },
  {
    name: "Amara Eze",
    role: "Founder, FinBuddy",
    text: "He combines technical depth with design thinking. Every feature was explained with clarity, built efficiently, and deployed without stress.",
    image: "/images/clients/amara.jpg",
  },
  {
    name: "David Okoro",
    role: "CTO, SmartRent",
    text: "Michael’s attention to scalability and user experience stands out. His codebase is clean, documented, and production-ready.",
    image: "/images/clients/david.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        What Clients Say
      </motion.h2>

      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Honest feedback from clients and collaborators who’ve worked with me on
        real-world projects.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-muted/30">
              <CardContent className="p-6">
                <Quote className="w-6 h-6 text-indigo-500 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
