"use client";

import { motion } from "framer-motion";

interface SkillGauge {
  title: string;
  pct: number;
  icon: string;
  tags: string[];
  color: string;
}

const SKILL_GAUGES: SkillGauge[] = [
  {
    title: "Python",
    pct: 85,
    icon: "🐍",
    tags: ["Automation", "Scripting", "Bots", "Keep-Alive"],
    color: "#00f0ff",
  },
  {
    title: "Web Dev",
    pct: 80,
    icon: "🌐",
    tags: ["Next.js", "React", "HTML5", "Tailwind CSS"],
    color: "#3b82f6",
  },
  {
    title: "SQL & DB",
    pct: 78,
    icon: "🗄️",
    tags: ["PostgreSQL", "MySQL", "SQLite", "Schemas"],
    color: "#10b981",
  },
  {
    title: "TypeScript",
    pct: 72,
    icon: "📘",
    tags: ["Node.js", "Express", "REST APIs", "Types"],
    color: "#f59e0b",
  },
  {
    title: "Dev Tools",
    pct: 75,
    icon: "🔧",
    tags: ["Git", "GitHub", "Linux", "VS Code"],
    color: "#a855f7",
  },
  {
    title: "Data & Logic",
    pct: 68,
    icon: "📊",
    tags: ["Pandas", "NumPy", "Jupyter", "Webhooks"],
    color: "#ec4899",
  },
];

export default function SkillsSection() {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[var(--foreground)] pb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2 block">
            Capabilities
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[var(--foreground)]">
            Skills
          </h2>
        </div>

        <div className="mt-6 md:mt-0 text-left md:text-right font-mono">
          <p className="text-xs md:text-sm text-[var(--foreground)] opacity-60 uppercase tracking-widest">
            // Technical Stack &amp; Metrics
          </p>
        </div>
      </div>

      {/* Ring Gauges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SKILL_GAUGES.map((skill, idx) => {
          const strokeOffset = circumference - (skill.pct / 100) * circumference;

          return (
            <div
              key={skill.title}
              className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]/80 backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300 shadow-lg"
            >
              {/* Circular SVG Ring */}
              <div className="relative w-28 h-28 my-2">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-[var(--foreground)] opacity-10"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={skill.color}
                    strokeWidth="5"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: strokeOffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl mb-0.5">{skill.icon}</span>
                  <span className="text-xs font-mono font-bold text-[var(--foreground)]">
                    {skill.pct}%
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-2 mb-3">
                {skill.title}
              </h4>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                {skill.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--card-border)] bg-[var(--secondary)] text-[var(--foreground)] opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--secondary)]/40 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>[01]</span>
            <span className="font-bold">Languages</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "C++"].map((l) => (
              <span
                key={l}
                className="px-3 py-1 rounded-md text-xs font-mono border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:border-[var(--accent)] transition-all"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--secondary)]/40 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>[02]</span>
            <span className="font-bold">Databases</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma"].map((db) => (
              <span
                key={db}
                className="px-3 py-1 rounded-md text-xs font-mono border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:border-[var(--accent)] transition-all"
              >
                {db}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--secondary)]/40 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>[03]</span>
            <span className="font-bold">Frameworks &amp; Tools</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "Node.js", "Express", "Git", "GitHub", "Vercel", "Railway", "Linux"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:border-[var(--accent)] transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
