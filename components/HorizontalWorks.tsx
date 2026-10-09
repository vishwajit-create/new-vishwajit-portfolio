"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import {
  HairSalonAppThumbnail,
  MonitorBotThumbnail,
  BlogspotThumbnail,
  KshitijSonalThumbnail,
  UrbanHairPlazaThumbnail,
  UHPCoreThumbnail,
} from "./ProjectThumbnails";

interface Project {
  number: string;
  title: string;
  role: string;
  year: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  tags: string[];
  iframeUrl?: string;
  accentGradient: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "HairSalonApp",
    role: "Full Stack Lead",
    year: "2025",
    description:
      "Full-featured hair salon booking and customer service application built with TypeScript, featuring real-time appointment scheduling and responsive interfaces.",
    liveUrl: "https://hairsalonapp-puce.vercel.app",
    iframeUrl: "https://hairsalonapp-puce.vercel.app",
    githubUrl: "https://github.com/vishwajit-create/hairsalonapp",
    tags: ["TypeScript", "Next.js", "Booking Engine", "Vercel"],
    accentGradient: "from-cyan-500/20 to-blue-500/5",
  },
  {
    number: "02",
    title: "Monitor Bot",
    role: "Python Engineer",
    year: "2025",
    description:
      "Automated health-check Python bot that continuously pings deployed web applications to prevent idle sleeping on Railway and Render cloud platforms.",
    githubUrl: "https://github.com/vishwajit-create/monitor-website",
    tags: ["Python", "Automation", "Keep-Alive", "Render", "Railway"],
    accentGradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    number: "03",
    title: "Blogspot",
    role: "Full Stack Developer",
    year: "2024",
    description:
      "Dynamic blogging web platform with responsive layout, modern card designs, and instant cloud deployment on Vercel.",
    liveUrl: "https://project-4tmsy.vercel.app",
    iframeUrl: "https://project-4tmsy.vercel.app",
    githubUrl: "https://github.com/vishwajit-create/Blogspot",
    tags: ["JavaScript", "HTML/CSS", "Blog Engine", "Vercel"],
    accentGradient: "from-purple-500/20 to-pink-500/5",
  },
  {
    number: "04",
    title: "Kshitij Sonal Portal",
    role: "Backend & Web Dev",
    year: "2024",
    description:
      "Personal academic portfolio platform for Researcher & Economist Kshitij Sonal, engineered with Node.js, Express, and structured research publications.",
    githubUrl: "https://github.com/vishwajit-create/kshitij-sonal-website",
    tags: ["Node.js", "Express", "Academic Web", "REST API"],
    accentGradient: "from-amber-500/20 to-orange-500/5",
  },
  {
    number: "05",
    title: "Urban Hair Plaza",
    role: "Frontend Engineer",
    year: "2024",
    description:
      "Commercial salon digital storefront with interactive service catalogs, modern aesthetics, and mobile-first responsive architecture.",
    githubUrl: "https://github.com/vishwajit-create/urban-hairplaza",
    tags: ["HTML5", "CSS3", "JavaScript", "Client Portal"],
    accentGradient: "from-blue-500/20 to-indigo-500/5",
  },
  {
    number: "06",
    title: "UHP Core Logic",
    role: "Systems Architect",
    year: "2024",
    description:
      "Core business logic, request pipelines, and database state handlers powering the Urban Hair Plaza ecosystem.",
    githubUrl: "https://github.com/vishwajit-create/UHP-Project",
    tags: ["JavaScript", "Backend Logic", "State Management"],
    accentGradient: "from-rose-500/20 to-pink-500/5",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[78vh] w-[88vw] md:w-[58vw] flex flex-col justify-between border-l border-[var(--card-border)] pl-8 md:pl-16 pr-4 transition-colors duration-500 hover:bg-white/[0.02] overflow-hidden shrink-0 select-none"
    >
      {/* Spotlight follower gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 0.18 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent) 0%, transparent 80%)`,
        }}
      />

      {/* Preview Screen Container */}
      <div className="w-full h-[52vh] relative overflow-hidden bg-[var(--secondary)] rounded-lg border border-[var(--card-border)] z-10 flex flex-col">
        {/* Browser Top Bar */}
        <div className="h-8 bg-black/40 border-b border-[var(--card-border)] px-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[10px] text-[var(--foreground)] opacity-40 truncate max-w-[200px]">
            {project.liveUrl || project.githubUrl}
          </span>
          <div className="w-8" />
        </div>

        {/* Live Preview / Mockup Screen */}
        <div className="relative w-full flex-1 overflow-hidden bg-black/30">
          {project.number === "01" && <HairSalonAppThumbnail />}
          {project.number === "02" && <MonitorBotThumbnail />}
          {project.number === "03" && <BlogspotThumbnail />}
          {project.number === "04" && <KshitijSonalThumbnail />}
          {project.number === "05" && <UrbanHairPlazaThumbnail />}
          {project.number === "06" && <UHPCoreThumbnail />}
        </div>
      </div>

      {/* Card Info Bottom */}
      <div className="mt-6 z-10">
        <div className="flex justify-between items-end border-b border-[var(--card-border)] pb-4">
          <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-sm md:text-base text-[var(--foreground)] opacity-40 mb-1">
            {project.number}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-4 gap-4">
          <div className="max-w-md font-mono">
            <span className="text-xs uppercase text-[var(--accent)] tracking-wider block font-bold">
              [ {project.role} ]
            </span>
            <p className="mt-1 text-xs md:text-sm font-sans normal-case text-[var(--foreground)] opacity-70 line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end">
            <span className="font-mono text-xs text-[var(--foreground)] opacity-40 mr-2">
              {project.year}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--secondary)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--secondary)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all"
              title="GitHub Repo"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal percentage
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="work" ref={containerRef} className="relative h-[380vh]">
      {/* Sticky viewport window */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-20">
          {/* Leading Title Card */}
          <div className="flex flex-col justify-center min-w-[85vw] md:min-w-[38vw] shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3 block">
              Portfolio Matrix
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-[var(--foreground)]">
              Selected
            </h2>
            <h2 className="text-6xl sm:text-7xl md:text-[11vw] font-serif italic leading-[0.85] tracking-tight text-[var(--accent)]">
              Works
            </h2>
            <p className="mt-8 font-mono text-xs md:text-sm uppercase text-[var(--foreground)] opacity-50 max-w-sm border-l-2 border-[var(--accent)] pl-4 leading-relaxed">
              (2024 — 2026)
              <br />
              Crafting technical structures with
              <br />
              creative brutality.
            </p>
          </div>

          {/* Project Cards */}
          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.number} project={proj} />
          ))}

          {/* Spacer at the end */}
          <div className="min-w-[20vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
