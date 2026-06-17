"use client";

import { motion } from "framer-motion";
import { publications } from "../portfolio-data";
import { CardLink, CitationButton, FloatingBlobs, FloatingCharacter, PageIntro, SiteNav } from "../shared";

export default function PublicationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <FloatingBlobs />
      <FloatingCharacter placement="intro" />
      <SiteNav />
      <PageIntro eyebrow="Publications" title="Selected Research Work">
        <p>Publications and workshop papers across recommender systems, knowledge graphs, fairness, and AI for education.</p>
      </PageIntro>
      <section className="relative z-10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {publications.map((paper, index) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="glass-card theme-card rounded-3xl p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-white/42">{paper.venue}</p>
              <h2 className="mt-3 text-xl font-semibold leading-8 text-white">{paper.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">{paper.description}</p>
              <CardLink href={paper.link}>Open Publication</CardLink>
              <CitationButton citation={paper.citation} />
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
