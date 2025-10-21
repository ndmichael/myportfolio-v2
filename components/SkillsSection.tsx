// "use client";

// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNode,
//   FaPython,
//   FaDocker,
//   FaBrain,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiMongodb,
//   SiFirebase,
//   SiLinux,
//   SiFastapi,
//   SiTailwindcss,
//   SiDjango,
//   SiPostgresql,
// } from "react-icons/si";

// const categories = [
//   {
//     title: "Frontend Development",
//     color: "from-sky-400 to-blue-500",
//     skills: [
//       { name: "React", icon: FaReact },
//       { name: "Next.js", icon: SiNextdotjs },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//     ],
//   },
//   {
//     title: "Backend Development",
//     color: "from-emerald-400 to-teal-500",
//     skills: [
//       { name: "Node.js", icon: FaNode },
//       { name: "FastAPI", icon: SiFastapi },
//       { name: "Django", icon: SiDjango },
//       { name: "Python", icon: FaPython },
//     ],
//   },
//   {
//     title: "Database & DevOps",
//     color: "from-orange-400 to-red-500",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql },
//       { name: "MongoDB", icon: SiMongodb },
//       { name: "Firebase", icon: SiFirebase },
//       { name: "Docker", icon: FaDocker },
//       { name: "Linux", icon: SiLinux },
//     ],
//   },
//   {
//     title: "Currently Exploring",
//     color: "from-indigo-400 to-purple-500",
//     skills: [
//       { name: "AI APIs", icon: FaBrain },
//       { name: "ML + Data Products", icon: SiFastapi },
//       { name: "Cloud Scaling", icon: FaDocker },
//     ],
//   },
// ];

// export default function SkillsSection() {
//   return (
//     <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-20 bg-background">
//       {/* Soft background mesh */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.06),transparent_70%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.06),transparent_70%)]" />

//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-bold text-center mb-16"
//       >
//         <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//           My Skills & Stack
//         </span>
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
//         {categories.map((cat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative w-full max-w-sm bg-card/30 border border-border rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
//           >
//             {/* Background parallax glow */}
//             <div
//               className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-3xl transition duration-700 bg-gradient-to-br ${cat.color}`}
//             />

//             <h3 className="text-xl font-bold mb-6 relative z-10 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
//               {cat.title}
//             </h3>

//             <ul className="space-y-4 relative z-10">
//               {cat.skills.map((skill, j) => {
//                 const Icon = skill.icon;
//                 return (
//                   <motion.li
//                     key={j}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: "spring", stiffness: 200 }}
//                     className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {Icon && <Icon className="w-5 h-5 text-primary/80" />}
//                     {skill.name}
//                   </motion.li>
//                 );
//               })}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { FaBrain, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiLinux,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    color: "from-sky-400 to-blue-500",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Database & DevOps",
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "Docker", icon: FaDocker },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    title: "Currently Exploring",
    color: "from-indigo-400 to-purple-500",
    skills: [
      { name: "AI APIs", icon: FaBrain },
      { name: "ML + Data Products", icon: FaBrain },
      { name: "Cloud Scaling", icon: FaDocker },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.08),transparent_70%),radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          I build and deploy end-to-end products — from fast, interactive UIs to secure, scalable backend systems and data-driven AI features.
        </motion.p>

        {/* Skills Grid — perfectly centered */}
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33%-1.25rem)] max-w-sm bg-card/30 border border-border rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
            >
              {/* Background parallax glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-3xl transition duration-700 bg-gradient-to-br ${cat.color}`}
              />

              <h3 className="text-xl font-semibold mb-5 text-primary/90 relative z-10 text-center">
                {cat.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {cat.skills.map((skill, j) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={j}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 border border-primary/10 px-3 py-2 rounded-full hover:text-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


