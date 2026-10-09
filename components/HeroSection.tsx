"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const TYPEWRITER_WORDS = [
  "Python Bot Builder 🤖",
  "Full-Stack Web Dev 🌐",
  "SQL & Database Architect 🗄️",
  "Open Source Contributor 💡",
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[textIndex];
    const typingSpeed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 px-4 md:px-8">

      {/* Radial ambient glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[85vw] h-[45vh] bg-[var(--accent)] opacity-5 blur-[140px] rounded-full translate-y-10" />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--secondary)]/50 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] opacity-80">
            Open to Internships & Opportunities
          </span>
        </motion.div>

        {/* Small Intro label */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-[var(--foreground)] mb-3"
        >
          hi, I am
        </motion.h2>

        {/* Big Name Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="select-none tracking-tight leading-none mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-black uppercase text-[var(--foreground)] tracking-tighter">
            Vishwajit{" "}
            <span className="font-serif italic font-normal text-[var(--accent)] tracking-normal">
              Kumar
            </span>
          </h1>
        </motion.div>

        {/* Typewriter text badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-sm md:text-lg text-[var(--foreground)] opacity-90 mb-6 bg-[var(--card-bg)]/80 px-4 py-1.5 rounded-lg border border-[var(--card-border)] shadow-sm inline-flex items-center gap-1"
        >
          <span>&gt; {displayedText}</span>
          <span className="w-2 h-5 bg-[var(--accent)] inline-block animate-pulse" />
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl"
        >
          {["Python 🐍", "Web Dev 🌐", "Bot Builder 🤖", "SQL 🗄️", "TypeScript 📘", "Open Source 💡"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-md border border-[var(--card-border)] bg-[var(--secondary)]/40 text-[var(--foreground)] opacity-70 hover:opacity-100 hover:border-[var(--accent)] transition-all cursor-default"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-[var(--accent)] text-black font-mono text-xs md:text-sm uppercase font-bold tracking-wider hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <span>Explore Works</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[var(--card-border)] bg-[var(--secondary)] text-[var(--foreground)] font-mono text-xs md:text-sm uppercase tracking-wider hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </a>

          <a
            href="https://github.com/vishwajit-create"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-full border border-[var(--card-border)] bg-[var(--secondary)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all flex items-center gap-2"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Coordinates & Scroll prompt */}
      <div className="absolute bottom-6 w-full max-w-7xl px-6 md:px-12 flex justify-between items-end pointer-events-none font-mono text-[10px] md:text-xs text-[var(--foreground)] opacity-40 uppercase">
        <div>
          <span>BASED IN INDIA</span>
          <br />
          <span>STUDENT DEVELOPER &amp; BOT ARCHITECT</span>
        </div>
        <div className="text-right flex items-center gap-1.5 animate-bounce">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
}
