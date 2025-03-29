import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#0F1015] min-h-screen">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />
        <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />
      </div>

      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <main className="relative z-10 pt-24 pb-16 min-h-[calc(100vh-6rem)]">
        <div className="container mx-auto max-w-7xl px-6">
          {children}
        </div>
      </main>

      <footer className="fixed bottom-4 mx-auto max-w-7xl px-6 py-4 text-center text-default-400 left-0 right-0">
        © {new Date().getFullYear()} Balló Benedek. All rights reserved.
      </footer>
    </div>
  );
}