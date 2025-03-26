import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-6 bg-[#0F1015]/80 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-bold text-white">
            devbeni.lol
          </a>
        </div>
        <ThemeSwitch />
      </nav>
    </>
  );
};
