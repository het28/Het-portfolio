"use client";

import { motion } from "framer-motion";
import { activityData as activities } from "../portfolio-data";
import { CardLink, FloatingBlobs, PageIntro, SiteNav } from "../shared";

export default function ActivitiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <FloatingBlobs />
      <SiteNav />
      <PageIntro eyebrow="Activities" title="Organisation and Activities">
        <p>{activities.intro}</p>
      </PageIntro>
      <section className="relative z-10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-white">Organisations</h2>
            <div className="space-y-4">
              {activities.organisations.map((item, index) => (
                <motion.article key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.04 }} className="glass-card theme-card rounded-3xl p-5 sm:p-6">
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-xl font-semibold leading-8 text-white transition hover:text-cyan-100">
                    {item.title}
                  </a>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">{item.role}</p>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.detail}</p>
                  <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                    {item.people.map((person) => {
                      const isMe = person.name === "Het Darshan Mehta";
                      return (
                        <li key={person.name} className="text-sm leading-7 text-white/72">
                          <span className={isMe ? "font-semibold text-white underline decoration-cyan-200 decoration-2 underline-offset-4" : "text-white/88"}>
                            {person.name}
                          </span>
                          <span className="text-white/55"> · {person.affiliation}</span>
                          {person.note ? <span className="mt-1 block text-white/62">{person.note}</span> : null}
                        </li>
                      );
                    })}
                  </ul>
                  <CardLink href={item.link}>Visit website</CardLink>
                </motion.article>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-white">Program Committee</h2>
            <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="glass-card theme-card rounded-3xl p-5 sm:p-6">
              <ul className="space-y-4">
                {activities.programCommittees.map((item) => {
                  const [name, ...fullName] = item.title.split(": ");
                  return (
                    <li key={item.title}>
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-lg leading-8 text-white/80 transition hover:text-cyan-100 sm:text-xl">
                        <strong className="font-semibold text-white">{name}</strong>{fullName.length ? `: ${fullName.join(": ")}` : ""}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-white">Journal Reviewers</h2>
            <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="glass-card theme-card rounded-3xl p-5 sm:p-6">
              <ul className="space-y-4">
                {activities.reviewing.map((item) => (
                  <li key={item.title}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-xl font-semibold text-white transition hover:text-cyan-100">
                        {item.title}
                      </a>
                    ) : (
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    )}
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">{item.role}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-white">Teaching</h2>
            <div className="space-y-4">
              {activities.teaching.map((item, index) => (
                <motion.article key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.04 }} className="glass-card theme-card rounded-3xl p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">{item.role}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
