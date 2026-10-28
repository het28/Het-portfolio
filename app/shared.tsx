"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Check, Copy, ExternalLink, Quote } from "lucide-react";
import { navLinks, profile } from "./portfolio-data";

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}/${path}`;
}

function shouldOpenNewTab(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export type SiteTheme = "glass" | "bento" | "rail" | "reel" | "signal" | "axis";

const themeTrials: { id: SiteTheme; label: string; note: string }[] = [
  { id: "glass", label: "Glass", note: "Current site" },
  { id: "axis", label: "Axis", note: "Reference" },
];

const ThemeContext = createContext<{ theme: SiteTheme; setTheme: (theme: SiteTheme) => void }>({
  theme: "axis",
  setTheme: () => {},
});

export function useSiteTheme() {
  return useContext(ThemeContext).theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<SiteTheme>("axis");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme-lab");
    if (saved === "glass" || saved === "night") setTheme("glass");
    if (saved === "rail" || saved === "signal" || saved === "axis") setTheme("axis");
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (ready) window.localStorage.setItem("portfolio-theme-lab", theme);
  }, [ready, theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function ThemeLab() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-lab fixed bottom-[max(0.5rem,env(safe-area-inset-bottom))] left-2 z-[80] w-36 border border-[#1a1814]/15 bg-[#fffdf9] p-2 text-[#1a1814] shadow-[0_16px_40px_rgba(26,24,20,0.16)] sm:bottom-3 sm:left-auto sm:right-3 sm:w-44">
      <p className="mb-1 px-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[#1a1814]/55 sm:mb-2">Local trial</p>
      <div className="grid grid-cols-2 gap-1">
        {themeTrials.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTheme(item.id)}
            className={`px-3 py-2 text-sm font-medium transition ${theme === item.id ? "bg-[#1a1814] text-[#f6f3ee]" : "bg-[#1a1814]/5 text-[#1a1814] hover:bg-[#1a1814]/10"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SiteCursor() {
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const smoothCursorX = useSpring(cursorX, { stiffness: 320, damping: 32 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 320, damping: 32 });

  useEffect(() => {
    function moveCursor(event: PointerEvent) {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    }

    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{ x: smoothCursorX, y: smoothCursorY }}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[90] hidden h-9 w-9 border border-white/35 bg-white/10 mix-blend-screen backdrop-blur-sm md:block"
      />
      <motion.div
        style={{ x: smoothCursorX, y: smoothCursorY }}
        className="custom-cursor-glow pointer-events-none fixed left-[-2.1rem] top-[-2.1rem] z-[89] hidden h-28 w-28 bg-white/10 blur-2xl md:block"
      />
    </>
  );
}

export function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-4 sm:px-8">
      <nav className="glass mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 rounded-[1.5rem] px-4 py-3 sm:px-5 md:flex-nowrap md:rounded-full">
        <a href={assetPath("") || "/"} className="text-sm font-semibold tracking-normal text-white sm:text-base">
          {profile.name}
        </a>
        <div className="order-3 flex w-full items-center justify-center gap-1 overflow-x-auto whitespace-nowrap text-xs text-white/72 md:order-none md:w-auto md:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={assetPath(link.href.replace(/^\//, ""))}
              className="shrink-0 rounded-full px-2.5 py-2 transition hover:bg-white/12 hover:text-white md:px-3"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={assetPath(profile.resumePath)}
          target="_blank"
          rel="noreferrer"
          title="Open CV in a new tab"
          className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/78 transition hover:border-cyan-200/55 hover:text-white"
        >
          CV
          <ExternalLink className="h-3.5 w-3.5 opacity-55 transition group-hover:opacity-100" />
        </a>
      </nav>
    </header>
  );
}

export function FloatingBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 46, -18, 0], y: [0, -28, 30, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -34, 28, 0], y: [0, 34, -24, 0], scale: [1, 0.94, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] top-36 h-96 w-96 rounded-full bg-slate-300/12 blur-3xl"
      />
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative z-10 px-5 pb-8 pt-32 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-[34rem] overflow-hidden">
        <div className="silk-bg absolute inset-0 opacity-70" />
        <motion.div
          animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-full w-1/2 -translate-x-1/2 rotate-12 bg-white/10 blur-3xl"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/46">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        {children ? <div className="mt-5 max-w-3xl text-base leading-8 text-white/64">{children}</div> : null}
      </motion.div>
    </section>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative z-10 px-5 pb-10 pt-32 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="glass glass-card hero-device relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 sm:p-10"
      >
        <div className="silk-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(255,255,255,0.13),transparent_20rem),linear-gradient(120deg,rgba(255,255,255,0.1),transparent_38%,rgba(255,255,255,0.04)_64%,transparent)]" />
        <motion.div
          animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-full w-1/3 -translate-x-1/2 rotate-12 bg-white/10 blur-3xl"
        />
        <div className="relative z-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/46">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-6xl">{title}</h1>
          {children ? <div className="mt-5 max-w-3xl text-base leading-8 text-white/64">{children}</div> : null}
        </div>
      </motion.div>
    </section>
  );
}

export function CardLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) {
    return <div className="mt-5 text-sm text-white/38">Link can be added in app/portfolio-data.ts.</div>;
  }

  return (
    <a
      href={href}
      target={shouldOpenNewTab(href) ? "_blank" : undefined}
      rel={shouldOpenNewTab(href) ? "noreferrer" : undefined}
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-white/35 hover:bg-white/16"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export function CitationButton({ citation }: { citation?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!citation) {
    return null;
  }

  async function copyCitation() {
    await navigator.clipboard.writeText(citation ?? "");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="relative mt-5">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-white/35 hover:bg-white/16"
      >
        <Quote className="h-4 w-4" />
        Cite
      </button>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          className="mt-4 rounded-2xl border border-white/14 bg-black/45 p-4 text-sm leading-6 text-white/72 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        >
          <p className="whitespace-pre-wrap break-words font-mono text-xs">{citation}</p>
          <button
            type="button"
            onClick={copyCitation}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-cyan-100"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Citation"}
          </button>
        </motion.div>
      ) : null}
    </div>
  );
}
