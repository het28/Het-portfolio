"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import {
  contactCards,
  education,
  experiences,
  highlights,
  navLinks,
  profile,
  projects,
  publications,
  skillGroups,
  socialLinks,
} from "./portfolio-data";
import { CitationButton } from "./shared";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}/${path}`;
}

function linkPath(item: { href: string; isAsset?: boolean }) {
  return item.isAsset ? assetPath(item.href) : item.href;
}

function shouldOpenNewTab(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function shouldOpenNewTabItem(item: { href: string; isAsset?: boolean }) {
  return item.isAsset || shouldOpenNewTab(item.href);
}

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  const nameY = useTransform(scrollY, [0, 760], [74, -170]);
  const heroPanelY = useTransform(scrollY, [0, 760], [0, 58]);
  const heroPanelScale = useTransform(scrollY, [0, 760], [1, 0.94]);
  const heroPanelOpacity = useTransform(scrollY, [0, 760], [1, 0.72]);
  const imageScale = useTransform(scrollY, [0, 760], [0.94, 0.84]);
  const imageY = useTransform(scrollY, [0, 760], [0, 42]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-white via-slate-300 to-cyan-100"
      />
      <FloatingBlobs />
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center px-5 pb-20 pt-36 sm:px-8 sm:pt-28 lg:px-12">
        <motion.h1
          aria-hidden="true"
          style={{ y: nameY }}
          className="pointer-events-none absolute left-1/2 top-[12%] z-0 w-full -translate-x-1/2 select-none text-center text-[5rem] font-black uppercase leading-none tracking-normal text-white/[0.07] sm:text-[10rem] lg:text-[15rem] xl:text-[18rem]"
        >
          {profile.heroName}
        </motion.h1>

        <motion.div
          style={{ y: heroPanelY, scale: heroPanelScale, opacity: heroPanelOpacity }}
          initial={{ opacity: 0, y: 46, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="glass glass-card hero-device relative z-10 mx-auto min-h-[820px] w-full max-w-6xl overflow-hidden rounded-[2rem] p-6 sm:min-h-[660px] sm:p-8 lg:min-h-[690px]"
        >
          <div className="silk-bg absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(255,255,255,0.16),transparent_18rem),linear-gradient(120deg,rgba(255,255,255,0.14),transparent_38%,rgba(255,255,255,0.06)_64%,transparent)]" />
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ rotate: { duration: 38, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute -left-20 top-14 h-[32rem] w-[32rem] rounded-full border border-white/10 bg-white/[0.035]"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 0.96, 1] }}
            transition={{ rotate: { duration: 44, repeat: Infinity, ease: "linear" }, scale: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute -right-24 bottom-10 h-[34rem] w-[34rem] rounded-full border border-white/10 bg-black/10"
          />
          <motion.div
            animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.18, 0.34, 0.18] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-full w-1/3 -translate-x-1/2 rotate-12 bg-white/10 blur-3xl"
          />
          <p className="absolute left-1/2 top-10 z-20 w-full -translate-x-1/2 px-4 text-center text-[2.8rem] font-semibold uppercase leading-none tracking-normal text-white/88 sm:top-14 sm:text-[5.7rem] lg:text-[7.8rem]">
            Het Darshan Mehta
          </p>
          <div className="absolute left-4 right-4 bottom-[11rem] z-40 rounded-3xl border border-white/18 bg-black/28 p-4 text-center shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:left-auto sm:right-10 sm:top-auto sm:bottom-32 sm:max-w-[20rem] sm:border-0 sm:bg-transparent sm:p-0 sm:text-right sm:shadow-none sm:backdrop-blur-0">
            <p className="leading-tight text-white">
              <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/42 sm:block sm:text-xs">
                Het Darshan Mehta
              </span>
              <span className="block text-2xl font-semibold text-white sm:mt-3 sm:text-4xl">
                PhD Researcher
              </span>
              <span className="mt-2 block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/56 sm:mt-3 sm:text-xs sm:tracking-[0.18em] sm:text-white/50">
                {profile.tagline}
              </span>
              <span className="mt-2 block text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/40 sm:mt-3 sm:text-[0.7rem] sm:tracking-[0.18em] sm:text-white/36">
                Magdeburg / Braunschweig, Germany
              </span>
            </p>
          </div>
          <motion.div
            style={{ scale: imageScale, y: imageY }}
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.1 }}
            className="absolute inset-x-0 bottom-[17.5rem] z-30 mx-auto flex w-full max-w-[385px] justify-center sm:bottom-0 sm:max-w-[390px] lg:max-w-[420px]"
          >
            <motion.div
              whileHover={{ y: 8, scale: 0.985 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="relative aspect-[4/5] w-full cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-[42%] border border-cyan-200/16 bg-cyan-200/5"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-8 bottom-8 h-28 rounded-full bg-cyan-300/28 blur-3xl"
              />
              <img
                src={assetPath(profile.imagePath)}
                alt={profile.name}
                className="portrait-polish relative z-10 h-full w-full object-contain drop-shadow-[0_42px_100px_rgba(125,211,252,0.28)]"
              />
            </motion.div>
          </motion.div>
          <div className="hero-link-bar absolute bottom-6 left-1/2 z-40 flex w-[calc(100%-3rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-white/14 bg-white/10 p-3 backdrop-blur-2xl shadow-[0_-18px_60px_rgba(255,255,255,0.06)] sm:w-auto sm:rounded-full sm:p-2">
            {socialLinks.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const newTab = shouldOpenNewTab(item.href);
              return (
                <motion.a
                  key={item.label}
                  href={linkPath(item)}
                  target={newTab ? "_blank" : undefined}
                  rel={newTab ? "noreferrer" : undefined}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white/84 transition hover:bg-white/14 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </motion.a>
              );
            })}
          </div>
          <motion.a
            href="#research"
            aria-label="Scroll to research"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-3.5rem] left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/50 backdrop-blur-xl transition hover:text-white sm:block"
          >
            Scroll
          </motion.a>
        </motion.div>
      </section>

      <section className="relative z-10 px-5 pb-10 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="glass-card theme-card rounded-3xl p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.detail}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <Section id="research" eyebrow="Selected Work" title="Research & Publications">
        <div className="grid gap-5 lg:grid-cols-2">
          {publications.map((paper, index) => (
            <motion.article
              key={paper.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.012 }}
              className="glass-card theme-card rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center gap-3 text-cyan-100">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-100/70">
                  Publication
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-8 text-white">{paper.title}</h3>
              <p className="mt-3 text-sm font-medium text-cyan-100/80">{paper.venue}</p>
              <p className="mt-4 text-sm leading-7 text-white/66">{paper.description}</p>
              {paper.link ? (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-cyan-200/60 hover:bg-white/16"
                >
                  Open Link
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-6 text-sm text-white/45">Link can be added in portfolio-data.ts.</p>
              )}
              <CitationButton citation={paper.citation} />
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Career" title="Experience">
        <div className="relative space-y-4">
          <div className="absolute bottom-8 left-4 top-8 hidden w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/35 to-violet-200/0 md:block" />
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.52, delay: index * 0.05 }}
              className="glass-card theme-card relative rounded-3xl p-6 md:ml-10"
            >
              <div className="absolute -left-[2.9rem] top-7 hidden h-4 w-4 rounded-full border border-cyan-100/60 bg-ink shadow-[0_0_24px_rgba(125,211,252,0.7)] md:block" />
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-cyan-100/80">{item.organization}</p>
                </div>
                <p className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/66">
                  {item.period}
                </p>
              </div>
              <p className="mt-3 text-sm text-white/46">{item.location}</p>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-7 text-white/68">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Applied Systems" title="Projects">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.055 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card theme-card rounded-3xl p-6"
            >
              <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-white/66">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-cyan-100/85">{project.tech}</p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/10 transition hover:border-cyan-200/60 hover:bg-white/16"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Technical Depth" title="Skills">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
              className="glass-card theme-card rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, delay: index * 0.025 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/78 backdrop-blur-xl transition hover:border-cyan-200/55 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Academic Path" title="Education">
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={`${item.degree}-${item.school}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.52, delay: index * 0.05 }}
              className="glass-card theme-card rounded-3xl p-6"
            >
              <p className="text-sm text-cyan-100/70">{item.period}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-white">{item.degree}</h3>
              <p className="mt-3 text-white/68">{item.school}</p>
              <p className="mt-2 text-sm text-white/45">{item.location}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's Connect">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="glass-card theme-card rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/72">
                {profile.availability}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={linkPath(item)}
                      target={shouldOpenNewTabItem(item) ? "_blank" : undefined}
                      rel={shouldOpenNewTabItem(item) ? "noreferrer" : undefined}
                      aria-label={item.label}
                      whileHover={{ y: -4, scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-3 text-sm text-white transition hover:border-cyan-200/60 hover:bg-white/16"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <>
                    <Icon className="h-4 w-4 text-cyan-100" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/42">
                        {card.label}
                      </span>
                      <span className="mt-1 block text-sm text-white/74">{card.value}</span>
                    </span>
                  </>
                );

                return card.href ? (
                  <a
                    key={card.label}
                    href={linkPath(card)}
                    target={shouldOpenNewTabItem(card) ? "_blank" : undefined}
                    rel={shouldOpenNewTabItem(card) ? "noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-4 transition hover:border-cyan-200/55 hover:bg-white/16"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </Section>
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-4 sm:px-8">
      <nav className="glass mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 rounded-[1.5rem] px-5 py-3 md:flex-nowrap md:rounded-full">
        <a href="#" className="text-sm font-semibold tracking-normal text-white sm:text-base">
          {profile.name}
        </a>
        <div className="order-3 flex w-full items-center justify-center gap-1 overflow-x-auto text-xs text-white/72 md:order-none md:w-auto md:text-sm">
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
          className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/78 transition hover:border-cyan-200/55 hover:text-white"
        >
          CV
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 px-5 py-20 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0.82, y: 36, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-9"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-100/75">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}

function FloatingBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 46, -18, 0], y: [0, -28, 30, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-cyan-400/22 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -34, 28, 0], y: [0, 34, -24, 0], scale: [1, 0.94, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] top-36 h-96 w-96 rounded-full bg-violet-500/18 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 28, -24, 0], y: [0, -20, 24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/12 blur-3xl"
      />
    </div>
  );
}
