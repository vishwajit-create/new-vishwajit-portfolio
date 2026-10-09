"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

interface UserData {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubStats() {
  const [user, setUser] = useState<UserData>({
    name: "Vishwajit Kumar",
    login: "vishwajit-create",
    avatar_url: "https://avatars.githubusercontent.com/u/227098699?v=4",
    bio: "Student Developer | Python | Web | SQL",
    public_repos: 8,
    followers: 0,
    following: 1,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/vishwajit-create")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setUser({
            name: data.name || "Vishwajit Kumar",
            login: data.login || "vishwajit-create",
            avatar_url: data.avatar_url || "https://avatars.githubusercontent.com/u/227098699?v=4",
            bio: data.bio || "Student Developer | Python | Web | SQL",
            public_repos: data.public_repos ?? 8,
            followers: data.followers ?? 0,
            following: data.following ?? 1,
          });
        }
      })
      .catch(() => {
        // Fallback already in state
      });
  }, []);

  return (
    <section id="github" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[var(--foreground)] pb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2 block">
            Open Source
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[var(--foreground)]">
            GitHub
          </h2>
        </div>

        <div className="mt-6 md:mt-0 text-left md:text-right font-mono">
          <p className="text-xs md:text-sm text-[var(--foreground)] opacity-60 uppercase tracking-widest">
            // Live Development Footprint
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Card */}
        <div className="lg:col-span-5 p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/90 backdrop-blur-md shadow-xl flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--accent)] opacity-10 blur-3xl pointer-events-none" />

          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[var(--accent)] mb-5 shadow-lg">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">
            {user.name}
          </h3>

          <a
            href="https://github.com/vishwajit-create"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--accent)] hover:underline mt-1 mb-4 flex items-center gap-1"
          >
            <span>@{user.login}</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <p className="text-sm text-[var(--foreground)] opacity-70 mb-8 max-w-xs font-sans">
            {user.bio}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 w-full pt-6 border-t border-[var(--card-border)] font-mono text-center">
            <div className="p-2 rounded bg-[var(--secondary)]/50">
              <span className="block text-xl font-bold text-[var(--foreground)]">
                {user.public_repos}
              </span>
              <span className="text-[10px] uppercase text-[var(--foreground)] opacity-40">
                Repos
              </span>
            </div>

            <div className="p-2 rounded bg-[var(--secondary)]/50">
              <span className="block text-xl font-bold text-[var(--foreground)]">
                {user.followers}
              </span>
              <span className="text-[10px] uppercase text-[var(--foreground)] opacity-40">
                Followers
              </span>
            </div>

            <div className="p-2 rounded bg-[var(--secondary)]/50">
              <span className="block text-xl font-bold text-[var(--foreground)]">
                {user.following}
              </span>
              <span className="text-[10px] uppercase text-[var(--foreground)] opacity-40">
                Following
              </span>
            </div>
          </div>

          <a
            href="https://github.com/vishwajit-create"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-black transition-all flex items-center justify-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Follow on GitHub</span>
          </a>
        </div>

        {/* Stats Cards Stream */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Stats Card */}
          <div className="p-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/80 backdrop-blur-md overflow-hidden flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=vishwajit-create&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&text_color=e2e8f0&title_color=00f0ff&icon_color=00f0ff"
              alt="GitHub Stats"
              className="w-full max-w-lg object-contain"
              loading="lazy"
            />
          </div>

          {/* Streak & Languages Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/80 backdrop-blur-md overflow-hidden flex items-center justify-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=vishwajit-create&theme=tokyonight&hide_border=true&background=00000000&stroke=00f0ff&ring=00f0ff&fire=f59e0b&currStreakLabel=e2e8f0"
                alt="GitHub Streak"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="p-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/80 backdrop-blur-md overflow-hidden flex items-center justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishwajit-create&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&text_color=e2e8f0&title_color=00f0ff"
                alt="Top Languages"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
