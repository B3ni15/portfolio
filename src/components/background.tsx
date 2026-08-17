import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Réteges háttér: aurora foltok, finom rács, filmszemcse és egy
 * késleltetve követő fényfolt az egér után.
 */
export function Background() {
  const reduce = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.25);
  const sx = useSpring(x, { stiffness: 60, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 22, mass: 0.6 });

  const px = useTransform(sx, (v) => `${(v * 100).toFixed(2)}%`);
  const py = useTransform(sy, (v) => `${(v * 100).toFixed(2)}%`);
  const spotlight = useMotionTemplate`radial-gradient(36vh 36vh at ${px} ${py}, rgba(255,255,255,0.06), transparent 70%)`;

  useEffect(() => {
    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      {/* Aurora */}
      <div className="absolute -left-[20%] -top-[25%] h-[70vh] w-[70vh] animate-aurora-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(94,120,255,0.42),transparent_65%)] blur-3xl" />
      <div
        className="absolute -right-[18%] top-[8%] h-[62vh] w-[62vh] animate-aurora-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(138,92,255,0.34),transparent_65%)] blur-3xl"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute -bottom-[25%] left-[25%] h-[60vh] w-[60vh] animate-aurora-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_65%)] blur-3xl"
        style={{ animationDelay: "-13s" }}
      />

      {/* Rács */}
      <div
        className="absolute inset-0 opacity-[0.16] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Egeret követő fényfolt */}
      {!reduce && (
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      )}

      {/* Szemcse */}
      <div className="grain absolute inset-0 opacity-[0.035] mix-blend-overlay" />

      {/* Alsó elsötétítés a footerhez */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
