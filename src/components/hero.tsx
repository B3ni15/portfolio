import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

import { site } from "@/config/site";

import { EASE_APPLE, staggerChild, staggerParent } from "./motion";
import { Magnetic } from "./magnetic";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Finom parallax: a tartalom lassabban úszik ki, mint a görgetés.
  const yShift = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 90]);
  const fade = useTransform(scrollY, [0, 460], [1, reduce ? 1 : 0]);

  return (
    <section className="relative flex min-h-[100svh] items-center pt-28 sm:pt-32" id="hero">
      <motion.div
        className="mx-auto w-full max-w-5xl"
        style={{ y: yShift, opacity: fade }}
      >
        <motion.div
          animate="show"
          className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left"
          initial="hidden"
          variants={staggerParent(0.09, 0.15)}
        >
          <Avatar />

          <div className="min-w-0 flex-1">
            <motion.div variants={staggerChild}>
              <StatusPill />
            </motion.div>

            <motion.h1
              className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl md:text-[4.25rem]"
              variants={staggerChild}
            >
              <span className="text-gradient">Szia, {site.name}</span>
              <br />
              <span className="accent-gradient">vagyok.</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg"
              variants={staggerChild}
            >
              {site.intro}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
              variants={staggerChild}
            >
              <Magnetic>
                <a
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-500 ease-apple-out hover:scale-[1.03] active:scale-[0.98]"
                  href="#contact"
                >
                  Írj nekem
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-apple-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-[900ms] ease-apple-out group-hover:translate-x-full" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/85 transition-all duration-500 ease-apple-out hover:bg-white/[0.09] hover:text-white active:scale-[0.98]"
                  href="https://github.com/B3ni15"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        <ScrollHint />
      </motion.div>
    </section>
  );
}

function Avatar() {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();

    ry.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 18);
    rx.set((-(e.clientY - (r.top + r.height / 2)) / r.height) * 18);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      className="relative shrink-0 [perspective:1000px]"
      variants={staggerChild}
      onPointerLeave={reset}
      onPointerMove={onMove}
    >
      <motion.div
        className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56"
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      >
        {/* Lüktető glória */}
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }}
          className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(94,120,255,0.5),transparent_70%)] blur-2xl"
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Forgó gradiens gyűrű */}
        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#5E78FF,#8A5CFF,#22D3EE,#5E78FF)] opacity-70 blur-[2px]"
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-white/15">
          <img
            alt={`${site.name} profilképe`}
            className="h-full w-full object-cover"
            loading="eager"
            src={site.avatar}
          />
        </div>

        {/* Integető kéz */}
        <motion.img
          alt=""
          animate={reduce ? undefined : { rotate: [0, 16, -6, 14, 0] }}
          className="absolute -bottom-2 -right-2 h-12 w-12 origin-bottom drop-shadow-xl sm:h-14 sm:w-14"
          src="/hi.png"
          style={{ transform: "translateZ(40px)" }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

function StatusPill() {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-white/70">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      Elérhető új projektekre · {site.location}
    </span>
  );
}

function ScrollHint() {
  return (
    <motion.a
      animate={{ opacity: 1 }}
      className="mt-16 hidden items-center gap-2 text-xs text-white/40 transition-colors hover:text-white/70 md:inline-flex"
      href="#about"
      initial={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 1, ease: EASE_APPLE }}
    >
      <motion.span
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDownRight className="h-4 w-4" />
      </motion.span>
      Görgess tovább
    </motion.a>
  );
}
