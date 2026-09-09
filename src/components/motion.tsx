import type { ReactNode } from "react";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Apple-szerű mozgás: lágy indulás, hosszú kifutás, semmi pattogás.
 */
export const EASE_APPLE = [0.16, 1, 0.3, 1] as const;
export const SPRING = { type: "spring", stiffness: 220, damping: 30, mass: 0.9 } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span";
};

/** Görgetésre finoman felúszó és élesedő tartalom. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(12px)" }}
      transition={{ duration: 0.9, delay, ease: EASE_APPLE }}
      viewport={{ once, amount: 0.25, margin: "0px 0px -10% 0px" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    >
      {children}
    </Comp>
  );
}

/** Szülő: gyerekenként lépcsőzött belépés. */
export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE_APPLE },
  },
};

/** Görgetésre induló, lépcsőzött lista/rács. */
export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={staggerParent(stagger, delay)}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="show"
    >
      {children}
    </motion.div>
  );
}
