// import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#0F1015] min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-150px] sm:top-[-300px] left-[-150px] sm:left-[-300px] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />
        <div className="absolute bottom-[-150px] sm:bottom-[-300px] right-[-150px] sm:right-[-300px] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5E78FF]/30 to-transparent blur-3xl" />
      </div>

      {/* <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div> */}

      <main className="relative z-10 pt-16 sm:pt-24 pb-16 flex-grow">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {children}
        </div>
      </main>

      <footer className="relative z-10 mt-8 mx-auto max-w-7xl px-4 sm:px-6 py-4 text-center text-default-400 text-sm sm:text-base bg-[#0F1015]">
        © {new Date().getFullYear()} Balló Benedek. All rights reserved.
      </footer>
    </div>
  );
}