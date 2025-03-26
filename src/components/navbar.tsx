import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-bold text-gray-800">
            Heroui
          </a>
        </div>
        <ThemeSwitch />
      </nav>
    </>
  );
};
