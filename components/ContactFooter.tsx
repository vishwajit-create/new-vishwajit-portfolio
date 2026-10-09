"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, X, CheckCircle2, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycby1Uc706O9LkJ9Uhyd5QhMNAR5bgJE5Lg31Iy5fxunHmRyuIrWsA_Y7l9UIxdjFWNX0dg/exec";

export default function ContactFooter() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [istTime, setIstTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setIstTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Backup to localStorage
      const existing = JSON.parse(localStorage.getItem("vk_msgs") || "[]");
      existing.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("vk_msgs", JSON.stringify(existing));

      // Post to Google Apps Script endpoint
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#3b82f6", "#ffffff"],
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setIsSuccess(false);
        setModalOpen(false);
      }, 4000);
    } catch (err) {
      console.warn("Submission error:", err);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setModalOpen(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative w-full min-h-screen bg-[var(--background)] flex flex-col justify-between border-t border-[var(--card-border)] overflow-hidden">
      {/* Massive Let's Talk CTA Section */}
      <div className="grow min-h-[55vh] flex flex-col justify-center items-center relative py-24 w-full px-4 z-10">
        <div
          onClick={() => setModalOpen(true)}
          className="flex flex-col justify-center items-center relative cursor-pointer group w-full select-none"
        >
          <div className="relative z-10 flex flex-col items-center transition-transform duration-500 group-hover:scale-105">
            <h2 className="text-[20vw] md:text-[14vw] leading-[0.8] font-black uppercase tracking-tighter text-[var(--foreground)] opacity-20 group-hover:opacity-40 transition-opacity">
              Let&apos;s
            </h2>
            <h2 className="text-[20vw] md:text-[14vw] leading-[0.8] font-serif italic text-[var(--accent)] opacity-85 group-hover:opacity-100 transition-opacity">
              Talk
            </h2>
          </div>

          {/* Floating Magnetic-style Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button
              aria-label="Open contact form"
              className="w-32 h-32 md:w-48 md:h-48 border border-[var(--accent)] text-[var(--accent)] bg-[var(--background)]/80 backdrop-blur-md rounded-full flex items-center justify-center text-xs md:text-sm font-mono tracking-widest uppercase group-hover:bg-[var(--accent)] group-hover:text-black font-bold group-hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer"
            >
              <span>Message Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--card-border)] bg-[var(--secondary)]/30 backdrop-blur-md relative z-20">
        {/* Socials Column */}
        <div className="col-span-1 md:col-span-6 p-8 border-b md:border-b-0 md:border-r border-[var(--card-border)] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-[var(--foreground)] opacity-40 uppercase tracking-widest block mb-4">
              (CONNECT &amp; SOCIALS)
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground)] opacity-70">
              <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Local Time:</span>
              <span className="text-[var(--accent)] font-bold">{istTime} (IST)</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs font-mono uppercase text-[var(--foreground)]">
            <a
              href="https://github.com/vishwajit-create"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vishwajit-kumar-b15285331"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:darbhanga619@gmail.com"
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Copyright Column */}
        <div className="col-span-1 md:col-span-6 p-8 flex flex-col justify-between text-left md:text-right gap-6">
          <span className="text-xs font-mono text-[var(--foreground)] opacity-40 uppercase tracking-widest">
            (COPYRIGHT)
          </span>

          <div className="flex justify-start md:justify-end items-center gap-4 my-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-bgm"))}
              className="text-xs font-mono font-bold uppercase text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors cursor-pointer py-1 px-2 rounded border border-[var(--card-border)] bg-[var(--secondary)]/40"
              aria-label="Toggle Background Music"
            >
              PLAY / PAUSE BGM
            </button>
          </div>

          <div className="text-xs md:text-sm font-mono uppercase text-[var(--foreground)] opacity-70">
            © 2026 Vishwajit Kumar
            <br />
            Crafted with logic &amp; creative brutality.
          </div>
        </div>

        {/* Bottom credits bar */}
        <div className="col-span-1 md:col-span-12 border-t border-[var(--card-border)] py-6 text-center">
          <p className="text-[var(--foreground)] opacity-40 font-mono text-xs uppercase tracking-[0.2em] hover:opacity-100 transition-opacity">
            Designed &amp; Developed with <span className="text-red-500">♥</span> by Vishwajit Kumar
          </p>
        </div>
      </div>

      {/* Interactive Contact Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-[var(--card-border)] text-[var(--foreground)] opacity-60 hover:opacity-100 hover:border-[var(--accent)] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                  Get In Touch
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--foreground)] mt-1">
                  Send a Message
                </h3>
                <p className="text-xs font-mono text-[var(--foreground)] opacity-60 mt-1">
                  Direct message to Vishwajit Kumar
                </p>
              </div>

              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-[var(--accent)] animate-bounce" />
                  <h4 className="text-xl font-bold uppercase text-[var(--foreground)]">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs font-mono text-[var(--foreground)] opacity-70 max-w-xs">
                    Your message has been recorded. I will get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--foreground)] opacity-60 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--secondary)] border border-[var(--card-border)] text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--foreground)] opacity-60 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--secondary)] border border-[var(--card-border)] text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--foreground)] opacity-60 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Collaboration / Hello"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--secondary)] border border-[var(--card-border)] text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--foreground)] opacity-60 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--secondary)] border border-[var(--card-border)] text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[var(--accent)] text-black font-mono text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
