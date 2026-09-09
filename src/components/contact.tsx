import type { Social } from "@/config/site";
import type { IconType } from "react-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from "react-icons/fi";
import { FaDiscord, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { socials } from "@/config/site";
import { Reveal, StaggerGroup, staggerChild } from "./motion";
import { SectionLabel } from "./about";
import { Magnetic } from "./magnetic";

const icons: Record<string, IconType> = {
  email: FiMail,
  discord: FaDiscord,
  github: FaGithub,
  instagram: FaInstagram,
  x: FaXTwitter,
};

export function Contact() {
  return (
    <section className="scroll-mt-28 py-24 sm:py-32" id="contact">
      <Reveal>
        <SectionLabel>Kapcsolat</SectionLabel>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="section-title mt-4 max-w-3xl text-balance">
          Van egy ötleted? <span className="accent-gradient">Beszéljünk róla.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55">
          Nyitott vagyok freelance munkára, közös projektre vagy csak egy jó beszélgetésre.
          Emailben és Discordon válaszolok a leggyorsabban.
        </p>
      </Reveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.07}>
        {socials.map((s) => (
          <ContactRow key={s.key} social={s} />
        ))}
      </StaggerGroup>

      <Reveal delay={0.12}>
        <div className="mt-10 flex justify-center">
          <Magnetic>
            <a
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-500 ease-apple-out hover:scale-[1.03] active:scale-[0.98]"
              href="mailto:contact@devbeni.lol"
            >
              <FiMail className="h-4 w-4" />
              Email küldése
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-[900ms] ease-apple-out group-hover:translate-x-full" />
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}

function ContactRow({ social }: { social: Social }) {
  const [copied, setCopied] = useState(false);
  const Icon = icons[social.key] ?? FiMail;

  const copy = async () => {
    if (!social.copy) return;
    try {
      await navigator.clipboard.writeText(social.copy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // A vágólap megtagadható – ilyenkor marad a linkre kattintás.
    }
  };

  return (
    <motion.div
      className="glass group relative flex items-center gap-4 rounded-3xl p-5 transition-all duration-500 ease-apple-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
      variants={staggerChild}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/70 transition-all duration-500 ease-apple-out group-hover:scale-105 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>

      <a
        className="min-w-0 flex-1"
        href={social.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="text-xs uppercase tracking-[0.16em] text-white/35">
          {social.label}
        </div>
        <div className="truncate text-sm font-medium text-white/85">{social.value}</div>
        <span className="absolute inset-0 rounded-3xl" />
      </a>

      {social.copy ? (
        <button
          aria-label={`${social.label} másolása`}
          className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-300 hover:bg-white/[0.12] hover:text-white active:scale-90"
          type="button"
          onClick={copy}
        >
          <AnimatePresence initial={false} mode="wait">
            {copied ? (
              <motion.span
                key="ok"
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                initial={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <FiCheck className="h-4 w-4 text-emerald-400" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                initial={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <FiCopy className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      ) : (
        <FiArrowUpRight className="relative z-10 h-5 w-5 shrink-0 text-white/25 transition-all duration-500 ease-apple-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      )}
    </motion.div>
  );
}
