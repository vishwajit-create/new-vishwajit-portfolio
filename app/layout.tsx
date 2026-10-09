import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vishwajit Kumar | Creative Developer & Bot Engineer",
  description:
    "Student Developer & Bot Engineer passionate about Python, Web Development, and building real-world digital architectures.",
  authors: [{ name: "Vishwajit Kumar" }],
  keywords: [
    "Vishwajit Kumar",
    "Portfolio",
    "Creative Developer",
    "Python Developer",
    "Web Developer",
    "Bot Builder",
    "Full Stack",
    "Software Engineer",
  ],
  openGraph: {
    title: "Vishwajit Kumar | Creative Developer",
    description: "Crafting technical structures with creative brutality.",
    url: "https://vishwajit-portfolio.vercel.app",
    siteName: "Vishwajit Kumar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${dmSerif.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
