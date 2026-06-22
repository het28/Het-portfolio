"use client";

import { motion } from "framer-motion";
import { activityData as activities } from "../portfolio-data";
import { CardLink, FloatingBlobs, PageIntro, SiteNav } from "../shared";

const groups = [
  { title: "Teaching", items: activities.teaching },
  { title: "Reviewer for Journals", items: activities.reviewing },
  { title: "Program Committees", items: activities.programCommittees },
];

export default function ActivitiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <FloatingBlobs />
      <SiteNav />
      <PageIntro eyebrow="Activities" title="Teaching and Reviewing">
        <p>{activities.intro}</p>
      </PageIntro>
      <section className="relative z-10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-2xl font-semibold text-white">{group.title}</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {group.items.map((item, index) => (
                  <motion.article
                    key={`${group.title}-${item.title}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.04 }}
                    className="glass-card theme-card rounded-3xl p-6"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-white/42">{item.role}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                    {item.link ? <CardLink href={item.link}>Open Activity</CardLink> : null}
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
