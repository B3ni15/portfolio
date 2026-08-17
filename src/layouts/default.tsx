import { Background } from "@/components/background";
import { Navbar } from "@/components/navbar";
import { site } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Background />

      {/* Finom fátyol: a felfelé úszó tartalom a navbar alatt tűnik el */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-32 bg-gradient-to-b from-ink-950 via-ink-950/85 to-transparent"
      />

      <Navbar />

      <main className="relative z-10 flex-grow">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-white/35 sm:flex-row sm:px-8">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="text-white/25">
            React · Tailwind · Framer Motion — Budapesten készült
          </span>
        </div>
      </footer>
    </div>
  );
}
