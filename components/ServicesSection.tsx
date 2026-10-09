"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
  link: string;
  linkText: string;
  isExternal?: boolean;
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
    link: "https://hairsalonapp-puce.vercel.app",
    linkText: "Visit Live Project",
    isExternal: true,
  },
  {
    id: "bots",
    number: "02",
    title: "Python Bots & Automation",
    subtitle: "Web Monitoring / Automation / Scripting",
    description:
      "Developing resilient Python automation bots—including uptime monitors to prevent cold starts on Render/Railway, data collectors, and background workers.",
    skills: ["Python", "AsyncIO", "Automation", "Webhooks", "Cloud Deployment"],
    link: "https://github.com/vishwajit-create/monitor-website",
    linkText: "Visit Bot Code",
    isExternal: true,
  },
  {
    id: "database",
    number: "03",
    title: "SQL & Database Architecture",
    subtitle: "PostgreSQL / MySQL / SQLite / Modeling",
    description:
      "Designing clean relational database schemas, writing optimized queries, managing migrations, and integrating reliable data access layers.",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Database Modeling", "Query Tuning"],
    link: "#work",
    linkText: "Explore Database Systems",
    isExternal: false,
  },
  {
    id: "api",
    number: "04",
    title: "API Design & Backend Systems",
    subtitle: "Node.js / Express / Microservices",
    description:
      "Crafting secure, modular backend services with Node.js and Express, implementing authentication, webhooks, and third-party integrations.",
    skills: ["Node.js", "Express", "RESTful Architecture", "JSON APIs", "Git"],
    link: "https://github.com/vishwajit-create/kshitij-sonal-website",
    linkText: "Visit Backend Repo",
    isExternal: true,
  },
];

export default function ServicesSection() {
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
          <p className="text-[11px] text-[var(--accent)] opacity-80 mt-1">
            [Live Previews &amp; Direct Visit Links]
          </p>
        </div>
      </div>

      {/* Services Grid - Fully Visible on Scroll/Visit */}
      <div className="grid grid-cols-1 gap-12">
        {SERVICES.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group p-6 md:p-10 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/80 backdrop-blur-md hover:border-[var(--accent)] transition-all duration-500 shadow-xl relative overflow-hidden"
          >
            {/* Header row inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--card-border)] gap-4">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="font-mono text-base md:text-xl font-bold text-[var(--accent)]">
                  ({item.number})
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[var(--foreground)] opacity-40">
                  {item.subtitle}
                </span>
                <a
                  href={item.link}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="px-4 py-2 rounded-full border border-[var(--card-border)] bg-[var(--secondary)] text-[var(--accent)] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-black transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Content Split: Description on Left, Interactive Visual Mockup on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
              <div className="lg:col-span-5 space-y-5">
                <p className="text-sm md:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded bg-[var(--secondary)] text-[var(--foreground)] opacity-80 group-hover:opacity-100 group-hover:text-[var(--accent)] font-mono text-xs uppercase tracking-wider border border-[var(--card-border)] transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={item.link}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--accent)] hover:underline"
                  >
                    <span>Inspect capability details</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Directly visible Live Interactive Graphic Mockup */}
              <div className="lg:col-span-7">
                {item.id === "web" && <FullStackServiceThumbnail />}
                {item.id === "bots" && <PythonBotsServiceThumbnail />}
                {item.id === "database" && <DatabaseServiceThumbnail />}
                {item.id === "api" && <APIServiceThumbnail />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
