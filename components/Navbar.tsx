"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import SoundController from "./SoundController";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "light");
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.setAttribute("data-theme", "dark");
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  const navItems = [
    { label: "work", href: "#work" },
    { label: "services", href: "#services" },
    { label: "skills", href: "#skills" },
    { label: "github", href: "#github" },
    { label: "about", href: "#about" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 ${
          isScrolled
            ? "backdrop-blur-md bg-[var(--background)]/75 border-b border-[var(--card-border)] py-3 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group font-mono text-lg md:text-xl font-bold tracking-tighter uppercase flex items-center gap-1 text-[var(--foreground)]"
          >
            <span className="group-hover:text-[var(--accent)] transition-colors">
              V
            </span>
            <span className="text-[var(--accent)]">.</span>
            <span className="group-hover:text-[var(--accent)] transition-colors">
              K
            </span>
          </a>

          {/* Desktop Nav Items pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--secondary)]/70 backdrop-blur-md p-1.5 px-3 rounded-full border border-[var(--card-border)] shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--accent)] hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <SoundController />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--secondary)]/60 text-[var(--foreground)] opacity-80 hover:opacity-100 hover:border-[var(--accent)] transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-yellow-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-blue-500" />
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg border border-[var(--card-border)] text-[var(--foreground)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden p-8 animate-fadeIn">
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-mono uppercase tracking-widest text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-[var(--card-border)] w-full flex flex-col items-center gap-4">
            <SoundController />
          </div>
        </div>
      )}
    </>
  );
}
