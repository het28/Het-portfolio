"use client";

import { motion } from "framer-motion";
import { projects } from "../portfolio-data";
import { CardLink, FloatingBlobs, PageHero, SiteNav } from "../shared";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <FloatingBlobs />
      <SiteNav />
      <PageHero eyebrow="Projects" title="Applied AI Systems">
        <p>Research and engineering projects spanning LLMs, recommender systems, NLP, simulations, and accessibility.</p>
      </PageHero>
      <section className="relative z-10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="glass-card theme-card rounded-3xl p-6"
            >
              <p className="text-sm text-white/42">{project.tech}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">{project.description}</p>
              <CardLink href={project.link}>Open Project</CardLink>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
