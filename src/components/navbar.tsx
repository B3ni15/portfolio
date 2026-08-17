import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

import { EASE_APPLE } from "./motion";

const sections = [
  { id: "hero", label: "Kezdés" },
  { id: "about", label: "Rólam" },
  { id: "projects", label: "Projektek" },
  { id: "contact", label: "Kapcsolat" },
] as const;

export function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Scroll-spy: a viewport felső harmadában lévő szekció az aktív.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5"
      initial={{ y: -80, opacity: 0 }}
      transition={{ duration: 1, ease: EASE_APPLE, delay: 0.15 }}
    >
      <nav
        aria-label="Fő navigáció"
        className={`glass flex items-center gap-1 rounded-full p-1.5 transition-all duration-500 ease-apple-out ${
          scrolled ? "bg-white/[0.07] shadow-2xl" : "shadow-none"
        }`}
      >
        {sections.map(({ id, label }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              aria-current={isActive ? "true" : undefined}
              className="relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 sm:px-5 sm:text-sm"
              type="button"
              onClick={() => go(id)}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/[0.12] ring-1 ring-inset ring-white/15"
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  />
                )}
              </AnimatePresence>
              <span
                className={`relative z-10 ${isActive ? "text-white" : "text-white/55 hover:text-white/85"}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}

export default Navbar;
