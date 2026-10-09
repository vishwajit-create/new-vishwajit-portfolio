"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight text-[var(--foreground)] mb-6">
            Redefining digital architecture through{" "}
            <span className="text-[var(--accent)] italic font-serif font-normal">
              logic
            </span>{" "}
            &amp; relentless execution.
          </h2>

          <div className="space-y-5 text-sm md:text-base text-[var(--foreground)] opacity-75 leading-relaxed font-sans max-w-xl">
            <p>
              I am a passionate student developer with a strong foundation in Python,
              modern web development, and database architecture. I build systems that
              solve real-world engineering challenges—ranging from uptime automation
              bots to full-stack web platforms.
            </p>
            <p>
              My expertise spans modern TypeScript, Next.js, responsive design,
              and backend services powered by Node.js and SQL databases. Always curious,
              always pushing technical boundaries.
            </p>
          </div>

          {/* Quick Details Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8 font-mono text-xs">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--secondary)]/60 border border-[var(--card-border)]">
              <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
              <div>
                <span className="block text-[10px] opacity-40 uppercase">Role</span>
                <span className="font-bold">Student Dev</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--secondary)]/60 border border-[var(--card-border)]">
              <MapPin className="w-4 h-4 text-[var(--accent)]" />
              <div>
                <span className="block text-[10px] opacity-40 uppercase">Location</span>
                <span className="font-bold">India</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--secondary)]/60 border border-[var(--card-border)] col-span-2 sm:col-span-1">
              <Zap className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="block text-[10px] opacity-40 uppercase">Status</span>
                <span className="font-bold text-emerald-400">Available</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex gap-10 border-t border-[var(--card-border)] pt-8">
            <div>
              <span className="font-mono text-[10px] uppercase opacity-40 tracking-wider block mb-1">
                Experience
              </span>
              <p className="text-3xl font-black text-[var(--foreground)] font-mono">
                3+ Years
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase opacity-40 tracking-wider block mb-1">
                Projects
              </span>
              <p className="text-3xl font-black text-[var(--foreground)] font-mono">
                10+ Done
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase opacity-40 tracking-wider block mb-1">
                Dedication
              </span>
              <p className="text-3xl font-black text-[var(--accent)] font-mono">
                100%
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column Brutalist Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 sm:w-80 aspect-[4/5] group">
            {/* Offset Brutalist Border */}
            <div className="absolute inset-0 border border-[var(--foreground)]/25 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 rounded-lg" />

            {/* Photo Container */}
            <div className="relative w-full h-full overflow-hidden rounded-lg bg-[var(--secondary)] border border-[var(--card-border)] shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/227098699?v=4"
                alt="Vishwajit Kumar"
                className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--accent)] mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-5 -left-5 bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-md shadow-2xl">
              <p className="font-serif italic text-[var(--accent)] text-lg leading-tight">
                &ldquo;Student
                <br />
                Developer&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
