"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FullStackServiceThumbnail,
  PythonBotsServiceThumbnail,
  DatabaseServiceThumbnail,
  APIServiceThumbnail,
} from "./ServiceThumbnails";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "web",
    number: "01",
    title: "Full-Stack Web Development",
    subtitle: "React / Next.js / TypeScript / Tailwind",
    description:
      "Engineering modern, performant web platforms with seamless user experiences, solid architecture, and clean responsive interfaces.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
  },
  {
    id: "bots",
    number: "02",
    title: "Python Bots & Automation",
    subtitle: "Web Monitoring / Automation / Scripting",
    description:
      "Developing resilient Python automation bots—including uptime monitors to prevent cold starts on Render/Railway, data collectors, and background workers.",
    skills: ["Python", "AsyncIO", "Automation", "Webhooks", "Cloud Deployment"],
  },
  {
    id: "database",
    number: "03",
    title: "SQL & Database Architecture",
    subtitle: "PostgreSQL / MySQL / SQLite / Modeling",
    description:
      "Designing clean relational database schemas, writing optimized queries, managing migrations, and integrating reliable data access layers.",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Database Modeling", "Query Tuning"],
  },
  {
    id: "api",
    number: "04",
    title: "API Design & Backend Systems",
    subtitle: "Node.js / Express / Microservices",
    description:
      "Crafting secure, modular backend services with Node.js and Express, implementing authentication, webhooks, and third-party integrations.",
    skills: ["Node.js", "Express", "RESTful Architecture", "JSON APIs", "Git"],
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>("web");

  return (
    <section id="services" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[var(--foreground)] pb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2 block">
            Capabilities
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[var(--foreground)]">
            Services
          </h2>
        </div>

        <div className="mt-6 md:mt-0 text-left md:text-right font-mono">
          <p className="text-xs md:text-sm text-[var(--foreground)] opacity-60 uppercase tracking-widest">
            // What I build &amp; engineer
          </p>
          <p className="text-[11px] text-[var(--foreground)] opacity-40 mt-1">
            [Click to expand details]
          </p>
        </div>
      </div>

      {/* Accordion / List */}
      <div className="flex flex-col">
        {SERVICES.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <div
              key={item.id}
              className="border-b border-[var(--card-border)] last:border-b-2 last:border-[var(--foreground)]"
            >
              <div
                onClick={() => setActiveId(isOpen ? null : item.id)}
                className="group py-8 md:py-12 cursor-pointer flex flex-col transition-all duration-300"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="font-mono text-xs md:text-base text-[var(--foreground)] opacity-40 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-colors">
                      ({item.number})
                    </span>

                    <h3
                      className={`text-2xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight transition-all duration-300 ${
                        isOpen
                          ? "text-[var(--accent)]"
                          : "text-transparent text-stroke-sm group-hover:text-[var(--foreground)] group-hover:text-stroke-0"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden lg:block font-mono text-xs text-[var(--foreground)] opacity-40">
                      {item.subtitle}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Collapsible content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-4 pl-4 sm:pl-8 md:pl-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-4">
                          <p className="text-sm md:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-sans">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.skills.map((s) => (
                              <span
                                key={s}
                                className="px-2.5 py-1 rounded bg-[var(--secondary)] text-[var(--accent)] font-mono text-[11px] uppercase tracking-wider border border-[var(--card-border)]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-6">
                          {item.id === "web" && <FullStackServiceThumbnail />}
                          {item.id === "bots" && <PythonBotsServiceThumbnail />}
                          {item.id === "database" && <DatabaseServiceThumbnail />}
                          {item.id === "api" && <APIServiceThumbnail />}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
