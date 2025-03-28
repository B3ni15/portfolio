import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-[#0F1015] overflow-hidden">
      <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />
      <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />

      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 relative z-10">
        {children}
      </main>
    </div>
  );
}