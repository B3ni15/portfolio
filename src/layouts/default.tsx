import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#0F1015] overflow-x-hidden">
      <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />
      <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />

      <div className="w-full fixed top-0 left-0 z-50 flex justify-center pt-2 px-4">
        <Navbar />
      </div>
  
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-28 md:pt-32 relative z-10">
        {children}
      </main>
    </div>
  );
}