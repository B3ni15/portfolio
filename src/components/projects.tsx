import type { Project } from "@/config/site";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { projects } from "@/config/site";

import { Reveal, StaggerGroup, staggerChild } from "./motion";
import { SectionLabel } from "./about";

export function Projects() {
  return (
    <section className="scroll-mt-28 py-24 sm:py-32" id="projects">
      <Reveal>
        <SectionLabel>Projektek</SectionLabel>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="section-title mt-4 max-w-3xl text-balance">
          Amin mostanában <span className="accent-gradient">dolgoztam.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55">
          Válogatás a nyilvános munkáimból. A többi — és a napi commitok — a GitHub
          profilomon.
        </p>
      </Reveal>

      <StaggerGroup
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.07}
      >
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </StaggerGroup>

      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center">
          <a
            className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/80 transition-all duration-500 ease-apple-out hover:bg-white/[0.09] hover:text-white"
            href="https://github.com/B3ni15?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            Összes repó a GitHubon
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-apple-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(255,255,255,0.09), transparent 70%)`;

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();

    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.a
      className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-apple-out hover:-translate-y-1.5 hover:border-white/20"
      href={project.href}
      rel="noopener noreferrer"
      target="_blank"
      variants={staggerChild}
      onPointerMove={onMove}
    >
      {/* Kurzort követő fény a kártyán */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      {/* Színes akcentus csík */}
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {project.name}
          </h3>
          <p
            className={`mt-0.5 bg-gradient-to-r bg-clip-text text-sm text-transparent ${project.accent}`}
          >
            {project.tagline}
          </p>
        </div>
        <FiArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-500 ease-apple-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-white/55">
        {project.description}
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/50"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}
