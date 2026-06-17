"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { education, experiences, profile, skillGroups } from "../portfolio-data";
import { assetPath, FloatingBlobs, FloatingCharacter, PageHero, SiteNav } from "../shared";

export default function CVPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <FloatingBlobs />
      <FloatingCharacter />
      <SiteNav />
      <PageHero eyebrow="CV" title="Curriculum Vitae">
        <p>{profile.role}</p>
        <a
          href={assetPath(profile.resumePath)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan-100"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Open PDF
        </a>
      </PageHero>
      <section className="relative z-10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="glass-card theme-card rounded-3xl p-6"
              >
                <p className="text-sm text-white/42">{item.period} | {item.location}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-white/64">{item.organization}</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-white/62">
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            {education.map((item) => (
              <article key={item.degree} className="glass-card theme-card rounded-3xl p-6">
                <p className="text-sm text-white/42">{item.period}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.degree}</h3>
                <p className="mt-2 text-sm text-white/62">{item.school} | {item.location}</p>
              </article>
            ))}
            <h2 className="pt-4 text-2xl font-semibold text-white">Skills</h2>
            {skillGroups.map((group) => (
              <article key={group.title} className="glass-card theme-card rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{group.skills.join(", ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
