import { motion } from "framer-motion";

import { facts, stack } from "@/config/site";

import { Reveal, StaggerGroup, staggerChild } from "./motion";

const marquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Rust",
  "Python",
  "Flutter",
  "Swift",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "WebSocket",
];

export function About() {
  return (
    <section className="scroll-mt-28 py-24 sm:py-32" id="about">
      <Reveal>
        <SectionLabel>Rólam</SectionLabel>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="section-title mt-4 max-w-3xl text-balance">
          Olyan dolgokat építek, amiket{" "}
          <span className="accent-gradient">én magam is használnék.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
          Középiskola mellett kezdtem kódolni, azóta a hobbiból napi rutin lett. A
          front-endtől a szerverekig végigviszem a projekteket: tervezés, megvalósítás,
          üzemeltetés. Ami igazán érdekel, az a részletek csiszolása — a betöltési idő, a
          finom animáció, az érthető hibaüzenet.
        </p>
      </Reveal>

      {/* Számok */}
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {facts.map((f) => (
          <motion.div
            key={f.label}
            className="glass rounded-3xl p-6 transition-transform duration-500 ease-apple-out hover:-translate-y-1"
            variants={staggerChild}
          >
            <div className="text-4xl font-semibold tracking-tightest text-white">
              {f.value}
            </div>
            <div className="mt-1 text-sm text-white/45">{f.label}</div>
          </motion.div>
        ))}
      </StaggerGroup>

      {/* Stack */}
      <StaggerGroup className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.09}>
        {stack.map((group) => (
          <motion.div
            key={group.group}
            className="glass group relative overflow-hidden rounded-3xl p-6"
            variants={staggerChild}
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/75 transition-colors duration-300 hover:border-white/25 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </StaggerGroup>

      {/* Végtelen futószalag */}
      <div className="mask-fade-x relative mt-10 overflow-hidden py-2">
        <div className="flex w-max animate-marquee gap-3">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-sm text-white/45"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/35">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/40" />
      {children}
    </span>
  );
}
