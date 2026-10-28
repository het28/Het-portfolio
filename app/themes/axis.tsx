"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  activityData,
  contactCards,
  education,
  experiences,
  navLinks,
  pinnedProjects,
  profile,
  publications,
  skillGroups,
  socialLinks,
  spokenLanguages,
} from "../portfolio-data";
import { assetPath } from "../shared";
import { classicLines } from "./reading-notes";

const ticker =
  "Algorithmic fairness  ·  Graph neural networks  ·  Recommender systems  ·  Bias detection  ·  Knowledge graphs  ·  Large language models  ·  ";

const cut = "polygon(18% 0, 100% 8%, 84% 100%, 0 76%)";
const seal = "#722F37";

function ext(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function Me({ name }: { name: string }) {
  return name === "Het Darshan Mehta" ? <strong className="bg-[#f7f1e8] px-1 text-[#722F37]">{name}</strong> : <>{name}</>;
}

function Go({ href, children }: { href: string; children: React.ReactNode }) {
  const outside = ext(href);
  return (
    <a
      href={href}
      target={outside ? "_blank" : undefined}
      rel={outside ? "noreferrer" : undefined}
      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em] underline decoration-black/30 underline-offset-4 hover:bg-[#722F37] hover:text-[#f7f1e8]"
    >
      {children}
      {outside ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
    </a>
  );
}

function Ticker() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-black bg-[#722F37] pt-[env(safe-area-inset-top)] text-[#f7f1e8]">
      <div className="flex h-10 items-center overflow-hidden">
      <div className="signal-marquee flex w-max shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
        <span className="whitespace-nowrap px-4">{ticker.repeat(4)}</span>
        <span className="whitespace-nowrap px-4">{ticker.repeat(4)}</span>
      </div>
      </div>
    </div>
  );
}

function Spine() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 top-[calc(2.5rem+env(safe-area-inset-top))] z-30 hidden w-12 items-center justify-center border-r border-black bg-[#f3efe6] md:flex">
      <p className="rotate-180 font-mono text-[0.62rem] uppercase tracking-[0.42em] [writing-mode:vertical-rl]">
        Het Darshan Mehta · {profile.location}
      </p>
    </div>
  );
}

function HmMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g fill="currentColor">
        <rect x="3" y="6" width="2.6" height="20" />
        <rect x="10.4" y="6" width="2.6" height="20" />
        <rect x="3" y="14.2" width="10" height="2.6" />
        <rect x="16.6" y="6" width="2.6" height="20" />
        <rect x="26.2" y="6" width="2.6" height="20" />
        <polygon points="16.6,6 19.2,6 23.2,16 20.6,16" />
        <polygon points="26.2,6 28.8,6 23.2,16 20.6,16" />
      </g>
    </svg>
  );
}

function Top() {
  return (
    <header className="sticky top-[calc(2.5rem+env(safe-area-inset-top))] z-40 -mx-4 mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-black bg-[#f3efe6] px-4 py-3 md:mx-0">
      <a href={assetPath("") || "/"} className="flex items-center gap-2 text-sm font-semibold tracking-tight">
        <img src={assetPath("favicon.svg")} alt="" className="h-7 w-7" />
        {profile.name}
      </a>
      <nav className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] sm:gap-x-4 sm:text-[0.68rem] sm:tracking-[0.14em]">
        {navLinks.map((link) => (
          <a key={link.href} href={assetPath(link.href.replace(/^\//, ""))} className="py-1 hover:bg-[#722F37] hover:text-[#f7f1e8]">
            {link.label}
          </a>
        ))}
        <a href={assetPath(profile.resumePath)} target="_blank" rel="noreferrer" className="bg-[#722F37] px-2 py-1 text-[#f7f1e8]">
          CV
        </a>
      </nav>
    </header>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#f3efe6] pb-28 text-[#1c1614]">
      <HmMark className="pointer-events-none fixed bottom-10 right-28 z-0 hidden w-44 text-[#722F37] opacity-[0.14] md:block" />
      <Ticker />
      <Spine />
      <div className="relative z-10 overflow-x-clip px-4 pt-[calc(3rem+env(safe-area-inset-top))] md:pl-16 md:pr-8">{children}</div>
    </div>
  );
}

function Row({ index, label, children, id }: { index: string; label: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="grid scroll-mt-24 grid-cols-[3.1rem_minmax(0,1fr)] border-b border-black">
      <div className="border-r border-black bg-[#722F37] px-2 py-5 text-[#f7f1e8]">
        <p className="font-mono text-[0.65rem]">{index}</p>
        <div className="mt-3 space-y-1.5">
          {Array.from({ length: 5 }).map((_, mark) => (
            <span key={mark} className="block h-px bg-[#f7f1e8]" style={{ width: mark % 2 ? "55%" : "100%" }} />
          ))}
        </div>
      </div>
      <div className="min-w-0 px-4 py-5 sm:px-6">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">{label}</p>
        <div className="mt-3">{children}</div>
      </div>
    </section>
  );
}

function Sticker({ children, className = "", ink = false }: { children: React.ReactNode; className?: string; ink?: boolean }) {
  const tone = ink
    ? "border-black bg-[#f7f1e8] text-black shadow-[3px_3px_0_#722F37]"
    : "border-[#722F37] bg-[#f7f1e8] text-[#722F37] shadow-[3px_3px_0_#1c1614]";
  return (
    <span className={`pointer-events-none absolute z-20 inline-flex select-none items-center gap-1 border px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] ${tone} ${className}`}>
      {children}
    </span>
  );
}

function ScaleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M12 3v13M5 20h14M8 8 5 15h6L8 8zm8 0-3 7h6l-3-7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function Drift({ children, distance, className = "" }: { children: React.ReactNode; distance: number; className?: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 480], [0, distance]);
  return (
    <motion.span style={reduce ? undefined : { y }} className={`block ${className}`}>
      {children}
    </motion.span>
  );
}

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [14, -22]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2.5, -1]);
  const fairY = useTransform(scrollYProgress, [0, 1], [8, -28]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
      <motion.div style={reduce ? undefined : { y, rotate }} className="relative">
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -left-3 top-4 h-full w-full" style={{ background: seal, clipPath: cut }} />
          <img
            src={assetPath("portrait-coat.jpg")}
            alt={profile.name}
            className="relative z-10 w-full"
            style={{ clipPath: cut }}
          />
          <motion.div style={reduce ? undefined : { y: fairY }} className="absolute left-1 top-8 z-20">
            <Sticker className="relative -rotate-12">
              <ScaleMark /> Fair
            </Sticker>
          </motion.div>
          <Sticker className="bottom-10 right-1 z-20 rotate-6">Both sides</Sticker>
          <Sticker className="right-6 top-0 z-20 rotate-[14deg]" ink>
            Hi
          </Sticker>
          <Sticker className="-left-1 bottom-8 z-20 -rotate-3" ink>
            In print
          </Sticker>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Crook({ children, turn = -1.2, className = "" }: { children: React.ReactNode; turn?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 92%", "start 60%"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [turn + 3.5, turn]);
  const y = useTransform(scrollYProgress, [0, 1], [14, 0]);
  return (
    <motion.div ref={ref} style={reduce ? { rotate: turn } : { rotate, y }} className={className}>
      {children}
    </motion.div>
  );
}

function FairnessScene() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 45%"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-4.5, -1.4]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <section ref={ref} className="border-b border-black py-14">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">On fairness</p>
      <motion.blockquote style={reduce ? { rotate: -1.4 } : { rotate, y }} className="mt-4 max-w-3xl origin-left">
        <p className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          “Fairness is a very subjective state. Different people have different definitions and understandings of fairness from different angles.”
        </p>
        <footer className="mt-5 text-sm leading-6">
          <span className="block font-semibold">Yao Wu, Jian Cao, and Guandong Xu</span>
          <span className="block text-black/55">ACM Transactions on Knowledge Discovery from Data, 2023</span>
        </footer>
        <a href="https://doi.org/10.1145/3604558" target="_blank" rel="noreferrer" className="mt-2 inline-flex font-mono text-[0.68rem] uppercase tracking-[0.12em] underline decoration-black/30 underline-offset-4">
          DOI 10.1145/3604558
        </a>
      </motion.blockquote>
    </section>
  );
}

function PaperPick({
  progress,
  index,
  paper,
}: {
  progress: MotionValue<number>;
  index: number;
  paper: (typeof publications)[number];
}) {
  const reduce = useReducedMotion();
  const x = useTransform(progress, [0, 1], [index === 0 ? -28 : 32, 0]);
  const y = useTransform(progress, [0, 1], [index === 0 ? -10 : 16, 0]);
  const rotate = useTransform(progress, [0, 1], [index === 0 ? -3 : 4, index === 0 ? -0.8 : 1.2]);

  return (
    <motion.article style={reduce ? undefined : { x, y, rotate }} className="relative border border-black bg-white p-4">
      <Sticker className={index === 0 ? "-left-2 -top-3 -rotate-6" : "-right-2 -top-3 rotate-3"} ink={index === 1}>
        {paper.publicationType === "Journal Article" ? "Journal" : "First author"}
      </Sticker>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-black/45">{paper.publicationType}</p>
      <h3 className="mt-2 text-2xl font-semibold leading-7 tracking-tight">{paper.title}</h3>
      <p className="mt-3 text-sm text-black/55">{paper.venue}</p>
      {paper.link ? (
        <div className="mt-4">
          <Go href={paper.link}>Open</Go>
        </div>
      ) : null}
    </motion.article>
  );
}

function RecommendShelf() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 48%"] });
  const picks = publications
    .filter((paper) => paper.authors[0] === "Het Darshan Mehta" && paper.section !== "student-supervision")
    .sort((a, b) => a.order - b.order);

  return (
    <section ref={ref} className="relative overflow-x-clip border-b border-black py-14">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Recommendations</p>
      <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Papers I led.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6">The Springer journal article, and the Festival of Learning workshop paper from Seoul.</p>
      <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
        {picks.map((paper, index) => (
          <PaperPick key={paper.title} progress={scrollYProgress} index={index} paper={paper} />
        ))}
      </div>
    </section>
  );
}

function placeOf(venue: string) {
  const text = venue.toLowerCase();
  if (text.includes("maai") || text.includes("festival of learning")) return { city: "Seoul, South Korea", note: "COEX · Room 325 · 27 June 2026", meet: "Festival of Learning", led: true };
  if (text.includes("paris")) return { city: "Paris, France", note: "NeurIPS · PALM", meet: "PALM workshop", led: false };
  if (text.includes("perugia")) return { city: "Perugia, Italy", note: "AIxIA · oral", meet: "XAI.it", led: false };
  if (text.includes("palermo")) return { city: "Palermo, Italy", note: "CLiC-it", meet: "Computational linguistics", led: false };
  if (text.includes("gothenburg")) return { city: "Gothenburg, Sweden", note: "UMAP · ExUM", meet: "Explainable user modeling", led: false };
  if (text.includes("bolzano")) return { city: "Bolzano, Italy", note: "AIxIA 2024", meet: "Italian workshop on XAI", led: false };
  return null;
}

function RouteMark({ live, light }: { live: boolean; light?: boolean }) {
  const ink = light ? "bg-[#f7f1e8]" : "bg-[#1c1614]";
  return (
    <span className="mb-3 flex items-center">
      {[0, 1, 2, 3, 4].map((dot) => (
        <span key={dot} className="flex items-center">
          {dot > 0 ? (
            <motion.span initial={false} animate={{ scaleX: live ? 1 : 0 }} transition={{ delay: dot * 0.05, duration: 0.28 }} className={`h-px w-3.5 origin-left ${ink}`} />
          ) : null}
          <motion.span initial={false} animate={{ scale: live ? 1 : 0.2, opacity: live ? 1 : 0.25 }} transition={{ delay: dot * 0.05 }} className={`h-1.5 w-1.5 rounded-full ${ink}`} />
        </span>
      ))}
    </span>
  );
}

function CitePanel({ citation }: { citation: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-3">
      <button type="button" onClick={() => setOpen((value) => !value)} className="font-mono text-[0.68rem] uppercase tracking-[0.12em] underline decoration-black/30 underline-offset-4" aria-expanded={open}>
        {open ? "Close cite" : "Cite"}
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="cite"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 border border-black bg-white p-3">
              <pre className="whitespace-pre-wrap font-mono text-[0.72rem] leading-5">{citation}</pre>
              <button type="button" onClick={copyCitation} className="mt-3 border border-black bg-[#f3efe6] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] transition hover:bg-[#722F37] hover:text-[#f7f1e8]">
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function PaperRow({ paper, index }: { paper: (typeof publications)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const place = placeOf(paper.venue);
  const shown = Boolean(place) && (open || Boolean(reduce));

  return (
    <article
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("a, button")) return;
        setOpen((value) => !value);
      }}
      className="relative grid gap-3 border-t border-black py-5 first:border-t-0 md:grid-cols-[3rem_minmax(0,1fr)]"
    >
      <p className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</p>
        <div className={shown ? "md:pr-60" : ""}>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-black/45">{paper.publicationType}</p>
        <h3 className="mt-1 max-w-2xl text-xl font-semibold leading-7 tracking-tight">{paper.title}</h3>
        <p className="mt-2 text-sm leading-6">
          {paper.authors.map((author, authorIndex) => (
            <span key={author}>
              {authorIndex ? ", " : ""}
              <Me name={author} />
            </span>
          ))}
        </p>
        <p className="mt-1 text-sm text-black/55">{paper.venue}</p>
        {place ? <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#722F37]">{place.city}</p> : null}
        <div className="mt-3 flex flex-wrap gap-4">
          {paper.link ? <Go href={paper.link}>Open</Go> : null}
          {paper.doi ? <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-black/45">DOI {paper.doi}</span> : null}
        </div>
        {paper.citation ? <CitePanel citation={paper.citation} /> : null}
      </div>
      {place ? (
        <motion.div
          initial={false}
          animate={shown ? { opacity: 1, y: 0, rotate: place.led ? -2.5 : 1.6 } : { opacity: 0, y: 14, rotate: place.led ? 8 : -6 }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 24 }}
          className={`pointer-events-none absolute right-0 top-4 z-10 hidden w-52 border border-black p-3 md:block ${place.led ? "bg-[#722F37] text-[#f7f1e8]" : "bg-[#f7f1e8] text-[#1c1614]"} ${shown ? "" : "md:invisible"}`}
        >
          <span className={`absolute -top-1.5 left-5 h-3 w-3 rounded-full border ${place.led ? "border-[#f7f1e8] bg-[#f3efe6]" : "border-black bg-[#f3efe6]"}`} />
          <RouteMark live={shown} light={place.led} />
          <p className="text-2xl font-semibold leading-tight tracking-tight">
            {place.city.split(", ")[0]},
            <br />
            {place.city.split(", ").slice(1).join(", ")}
          </p>
          <p className={`mt-2 font-mono text-[0.62rem] uppercase leading-4 tracking-[0.12em] ${place.led ? "text-[#f7f1e8]/80" : "text-black/55"}`}>{place.note}</p>
        </motion.div>
      ) : null}
    </article>
  );
}

function Papers({ items }: { items: typeof publications }) {
  return (
    <div>
      {items.map((paper, index) => (
        <PaperRow key={paper.title} paper={paper} index={index} />
      ))}
    </div>
  );
}

const seats = [
  { id: "person", label: "One person" },
  { id: "group", label: "A group" },
  { id: "metric", label: "The metric" },
] as const;

type Seat = (typeof seats)[number]["id"];

const surveyNotes = [
  {
    line: "Bias can be counted. Debiasing has a goal and a metric, and that count can meet a demographic standard of fairness.",
    who: "Yao Wu, Jian Cao, and Guandong Xu",
    where: "ACM Transactions on Knowledge Discovery from Data, 2023",
    href: "https://doi.org/10.1145/3604558",
    seats: {
      person: "The lists can look even across a demographic cut and still hand you the wrong thing.",
      group: "This is the reading in which a parity count is allowed to stand for fair.",
      metric: "Name the cut and the metric, and the standard can be checked. The sentence ends there.",
    },
  },
  {
    line: "Once a definition is chosen, fairness in recommendation splits into group, individual, or hybrid, and each of those can be measured.",
    who: "Yunqi Li, Hanxiong Chen, Shuyuan Xu, Yingqiang Ge, Juntao Tan, Shuchang Liu, and Yongfeng Zhang",
    where: "ACM Transactions on Intelligent Systems and Technology, 2023",
    href: "https://doi.org/10.1145/3610302",
    seats: {
      person: "Someone already chose. What reaches you is only what that choice is able to see.",
      group: "Group is one of the three, and it is a measurement of the lists, not the whole of fair.",
      metric: "The work is the choice. After it, group, individual, or hybrid can be computed.",
    },
  },
  {
    line: "Group fairness is statistical parity between protected groups. Individual fairness is similar treatment for similar people.",
    who: "Yashar Deldjoo, Dietmar Jannach, Alejandro Bellogín, Alessandro Difonzo, and Dario Zanzonelli",
    where: "User Modeling and User-Adapted Interaction, 2023",
    href: "https://doi.org/10.1007/s11257-023-09364-z",
    seats: {
      person: "Similar to whom, and similar on what, decides whether you and the next person are treated alike.",
      group: "Parity here is a rate compared across groups. It never looks at one person alone.",
      metric: "These are two calculations. Writing one of them down leaves the other unwritten.",
    },
  },
  {
    line: "Fairness is a social construct. People create it and accept it. It is not an objective property of the data.",
    who: "Yao Wu, Jian Cao, and Guandong Xu",
    where: "ACM Transactions on Knowledge Discovery from Data, 2023",
    href: "https://doi.org/10.1145/3604558",
    seats: {
      person: "What counts as fair for you was accepted somewhere else, then applied to the list you see.",
      group: "A comparison across groups is fair only after people have accepted that comparison.",
      metric: "The data will not pick the definition. Acceptance comes before any number you compute.",
    },
  },
  {
    line: "Clearing one bias can satisfy one fairness standard and leave another unmet. A fair result on the chosen definition does not mean the bias is gone.",
    who: "Yao Wu, Jian Cao, and Guandong Xu",
    where: "ACM Transactions on Knowledge Discovery from Data, 2023",
    href: "https://doi.org/10.1145/3604558",
    seats: {
      person: "The list can pass the published test and still be skewed in what you are offered.",
      group: "One gap can close while another cut, under another standard, stays open.",
      metric: "A passing number belongs to the definition you chose. Another bias can remain in the data.",
    },
  },
  {
    line: "A general definition of a fair recommendation is difficult to fix, because the people affected do not want the same thing.",
    who: "Yashar Deldjoo, Dietmar Jannach, Alejandro Bellogín, Alessandro Difonzo, and Dario Zanzonelli",
    where: "User Modeling and User-Adapted Interaction, 2023",
    href: "https://doi.org/10.1007/s11257-023-09364-z",
    seats: {
      person: "Your fair list and someone else's can both be honest, and still conflict.",
      group: "A definition one affected group would accept can be the one another group would refuse.",
      metric: "There is no single wording to lock. The disagreement is why the definition stays open.",
    },
  },
  {
    line: "Some fairness requirements cannot be satisfied together. The metric has to be chosen for the problem, with the cost to accuracy in view.",
    who: "Yunqi Li, Hanxiong Chen, Shuyuan Xu, Yingqiang Ge, Juntao Tan, Shuchang Liu, and Yongfeng Zhang",
    where: "ACM Transactions on Intelligent Systems and Technology, 2023",
    href: "https://doi.org/10.1145/3610302",
    seats: {
      person: "The requirement that protects one thing can make the recommendations less fitting for you.",
      group: "Two requirements on the same lists can block each other. One of them is the one you drop.",
      metric: "You choose the requirement for this problem, and you name the accuracy you are willing to spend.",
    },
  },
  {
    line: "Group fairness and individual fairness can pull apart. Parity for a group can treat a similar person unfairly.",
    who: "Yashar Deldjoo, Dietmar Jannach, Alejandro Bellogín, Alessandro Difonzo, and Dario Zanzonelli",
    where: "User Modeling and User-Adapted Interaction, 2023",
    href: "https://doi.org/10.1007/s11257-023-09364-z",
    seats: {
      person: "You can match someone else and still be the person the parity adjustment moves.",
      group: "The group rate can look even because one person was treated unlike their peers.",
      metric: "Optimising the group number can break the individual one. The group rate is paid for by a person.",
    },
  },
];

const fairnessFacts = [...surveyNotes, ...classicLines];

function shuffleIds(ids: number[], avoid: number) {
  const next = [...ids];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  if (next[0] === avoid && next.length > 1) {
    [next[0], next[1]] = [next[1], next[0]];
  }
  return next;
}

function Reading() {
  const reduce = useReducedMotion();
  const [deck, setDeck] = useState<{ current: number | null; rest: number[] }>({ current: null, rest: [] });
  const [marks, setMarks] = useState<Partial<Record<number, Seat>>>({});
  const fact = deck.current === null ? null : fairnessFacts[deck.current];
  const mark = deck.current === null ? undefined : marks[deck.current];

  useEffect(() => {
    const order = shuffleIds(
      fairnessFacts.map((_, index) => index),
      -1,
    );
    const [current, ...rest] = order;
    setDeck({ current, rest });
  }, []);

  function another() {
    setDeck((currentDeck) => {
      const source = currentDeck.rest.length
        ? currentDeck.rest
        : shuffleIds(
            fairnessFacts.map((_, index) => index),
            currentDeck.current ?? -1,
          );
      const [current, ...rest] = source;
      return { current, rest };
    });
  }

  return (
    <div>
      <div className="relative min-h-52">
        {fact ? (
            <motion.article
              key={deck.current}
              initial={reduce ? false : { opacity: 0, y: 16, rotate: -1.4 }}
              animate={{ opacity: 1, y: 0, rotate: deck.current !== null && deck.current % 2 ? 0.5 : -0.4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="border border-black bg-white p-4 sm:p-5"
            >
              <p className={`max-w-2xl font-semibold leading-snug tracking-tight ${fact.line.length > 180 ? "text-xl" : "text-2xl"}`}>{fact.line}</p>
              <p className="mt-4 text-sm">
                <span className="font-semibold">{fact.who}</span>
                <span className="text-black/55"> · {fact.where}</span>
              </p>
              {fact.href ? (
                <a href={fact.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex font-mono text-[0.68rem] uppercase tracking-[0.12em] underline decoration-black/30 underline-offset-4">
                  {fact.href.replace("https://doi.org/", "DOI ")}
                </a>
              ) : null}
              <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.14em]">Who does this bind?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {seats.map((item) => {
                  const chosen = mark === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={chosen}
                      onClick={() =>
                        setMarks((current) => ({
                          ...current,
                          [deck.current as number]: item.id,
                        }))
                      }
                      className={`border border-black px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] ${chosen ? "bg-[#722F37] text-[#f7f1e8]" : "bg-white hover:bg-[#1c1614] hover:text-[#f7f1e8]"}`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              {mark ? <p className="mt-4 max-w-2xl border-t border-black pt-3 text-sm leading-6">{fact.seats[mark]}</p> : null}
            </motion.article>
        ) : null}
      </div>
      <button type="button" onClick={another} className="mt-4 border border-black bg-[#1c1614] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#f7f1e8]">
        Next
      </button>
    </div>
  );
}

export function AxisHome() {
  return (
    <Frame>
      <Top />
      <section className="relative grid items-end gap-8 border-b border-black py-6 md:grid-cols-[minmax(0,1.15fr)_minmax(14rem,20rem)]">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] sm:text-[0.68rem] sm:tracking-[0.18em]">PhD researcher · {profile.location}</p>
          <h1 className="mt-4 text-[clamp(3.4rem,12vw,7.4rem)] font-semibold leading-[0.78] tracking-[-0.07em]">
            <Drift distance={-10}>Het</Drift>
            <Drift distance={-26} className="pl-[14%]">
              Darshan
            </Drift>
            <Drift distance={-44}>Mehta</Drift>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium leading-snug tracking-tight sm:text-2xl">{profile.tagline}</p>
          <p className="mt-4 max-w-xl text-sm leading-7">{profile.summary}</p>
          <div className="mt-5 flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <Go key={item.label} href={item.href}>
                {item.label}
              </Go>
            ))}
          </div>
        </div>
        <Portrait />
      </section>
      <FairnessScene />
      <RecommendShelf />
      <Row id="path" index="01" label="Path">
        <div className="relative space-y-6">
          <Sticker className="left-[40%] top-0 rotate-6" ink>Since 2022</Sticker>
          {experiences.map((item) => (
            <article key={item.role} className="border-t border-black pt-4 first:border-t-0 first:pt-0">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em]">{item.period}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-1 text-sm">
                {item.organization}
                <span className="text-black/50"> · {item.location}</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-6">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Row>
      <Row id="reading" index="02" label="Reading">
        <Reading />
      </Row>
      <Row id="practice" index="03" label="Practice">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            {skillGroups.map((group) => (
              <p key={group.title} className="mt-3 text-sm leading-6 first:mt-0">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em]">{group.title}</span>
                <br />
                {group.skills.join(" · ")}
              </p>
            ))}
          </div>
          <div>
            {education.map((item) => (
              <article key={item.degree} className="mt-4 border-t border-black pt-3 first:mt-0 first:border-t-0 first:pt-0">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em]">{item.period}</p>
                <h3 className="mt-1 font-semibold leading-6">{item.degree}</h3>
                <p className="text-sm text-black/60">
                  {item.school} · {item.location}
                </p>
              </article>
            ))}
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em]">{spokenLanguages.join(" · ")}</p>
          </div>
        </div>
      </Row>
      <Row id="contact" index="04" label="Contact">
        <div className="relative">
        <Sticker className="left-[46%] top-0 rotate-3" ink>Say hello</Sticker>
        <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight">{profile.availability}</p>
        <a href={`mailto:${profile.email}`} className="mt-4 block break-words text-[clamp(1.35rem,4.5vw,3rem)] font-semibold leading-none tracking-[-0.04em] hover:bg-[#722F37] hover:text-[#f7f1e8]">
          {profile.email}
        </a>
        <div className="mt-5 flex flex-wrap gap-4">
          {contactCards
            .filter((card) => card.value !== profile.email && card.label !== "Phone")
            .map((card) => {
              const text = card.label === "ORCID" ? `ORCID ${card.value}` : card.value;
              return card.href ? (
                <a key={card.label} href={card.href} className="font-mono text-xs uppercase tracking-[0.12em] underline">
                  {text}
                </a>
              ) : (
                <span key={card.label} className="font-mono text-xs uppercase tracking-[0.12em]">
                  {text}
                </span>
              );
            })}
        </div>
        </div>
      </Row>
    </Frame>
  );
}

export function AxisActivities() {
  return (
    <Frame>
      <Top />
      <section className="relative border-b border-black py-8">
        <Sticker className="right-8 top-16 -rotate-6" ink>Save the date</Sticker>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Activities</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
          <Drift distance={-8}>Organisation</Drift>
          <Drift distance={-18} className="pl-[12%]">and Activities</Drift>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7">{activityData.intro}</p>
      </section>
      <Row index="01" label="Organisations">
        <div className="grid gap-8 md:grid-cols-2">
          {activityData.organisations.map((item, index) => (
            <Crook key={item.title} turn={index === 0 ? -0.6 : 0.7}>
            <article className={`relative border border-black p-5 ${index === 0 ? "bg-[#722F37] text-[#f7f1e8]" : "bg-white"}`}>
              <Sticker className={index === 0 ? "-right-3 -top-3 rotate-6" : "-left-3 -top-3 -rotate-6"}>{index === 0 ? "Workshop" : "Local"}</Sticker>
              <Sticker className={index === 0 ? "bottom-3 right-3 -rotate-3" : "-bottom-3 right-4 rotate-6"}>{index === 0 ? "ECIR" : "7–8 Dec"}</Sticker>
              <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em]">{item.role}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-8 tracking-tight">
                <a href={item.link} target="_blank" rel="noreferrer" className="underline decoration-current/30">
                  {item.title}
                </a>
              </h2>
              <p className="mt-3 text-sm leading-6">{item.detail}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {item.people.map((person) => (
                  <li key={person.name}>
                    <Me name={person.name} /> · {person.affiliation}
                    {person.note ? <span className="mt-1 block opacity-75">{person.note}</span> : null}
                  </li>
                ))}
              </ul>
            </article>
            </Crook>
          ))}
        </div>
      </Row>
      <Row index="02" label="Programme Committees (PC Member)">
        <ul className="space-y-3 text-sm">
          {activityData.programCommittees.map((item) => (
            <li key={item.title}>
              <Go href={item.link}>{item.title}</Go>
            </li>
          ))}
        </ul>
      </Row>
      <Row index="03" label="Reviewing">
        <ul className="space-y-4 text-sm">
          {activityData.reviewing.map((item) => (
            <li key={item.title}>
              {item.link ? <Go href={item.link}>{item.title}</Go> : <p className="font-semibold">{item.title}</p>}
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-black/45">{item.role}</p>
            </li>
          ))}
        </ul>
      </Row>
      <Row index="04" label="Teaching">
        <ul className="space-y-4 text-sm">
          {activityData.teaching.map((item) => (
            <li key={item.title}>
              <p className="font-semibold">{item.title}</p>
              <p className="text-black/55">{item.role}</p>
            </li>
          ))}
        </ul>
      </Row>
    </Frame>
  );
}

export function AxisPublications() {
  const own = [...publications].filter((paper) => paper.section !== "student-supervision").sort((a, b) => a.order - b.order);
  const supervised = publications.filter((paper) => paper.section === "student-supervision").sort((a, b) => a.order - b.order);

  return (
    <Frame>
      <Top />
      <section className="relative border-b border-black py-8">
        <Sticker className="bottom-4 right-10 rotate-3" ink>Peer reviewed</Sticker>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Publications</p>
        <h1 className="mt-3 text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
          <Drift distance={-8}>My</Drift>
          <Drift distance={-20} className="pl-[18%]">Publications</Drift>
        </h1>
      </section>
      <Row index="01" label="Own papers">
        <Papers items={own} />
      </Row>
      <Row index="02" label="Student supervision">
        <Papers items={supervised} />
      </Row>
    </Frame>
  );
}

export function AxisProjects() {
  return (
    <Frame>
      <Top />
      <section className="relative border-b border-black py-8">
        <Sticker className="bottom-3 left-[46%] -rotate-2" ink>Shipped</Sticker>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Projects</p>
        <h1 className="mt-3 text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
          <Drift distance={-8}>Applied</Drift>
          <Drift distance={-18} className="pl-[16%]">AI Systems</Drift>
        </h1>
      </section>
      {pinnedProjects.map((project, index) => (
        <Row key={project.title} index={String(index + 1).padStart(2, "0")} label={project.tech}>
          <Crook turn={index % 2 === 0 ? -0.8 : 1.1} className="relative">
            {index === 0 ? <Sticker className="-left-1 -top-4 -rotate-6">For you</Sticker> : null}
            {index === 1 ? <Sticker className="right-2 -top-4 rotate-6"><ScaleMark /> Fair</Sticker> : null}
          <h2 className={`text-4xl font-semibold tracking-tight ${index < 2 ? "mt-4" : ""}`}>{project.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6">{project.description}</p>
          {project.link ? (
            <div className="mt-4">
              <Go href={project.link}>Open</Go>
            </div>
          ) : null}
          </Crook>
        </Row>
      ))}
    </Frame>
  );
}
