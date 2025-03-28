import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <div className="mt-2 flex justify-center">
      <nav className="flex items-center justify-center py-2 px-8 bg-[#0F1015]/80 backdrop-blur-md shadow-lg rounded-full border border-gray-700/50 max-w-lg w-full">
        <div className="flex items-center justify-center gap-6 w-full">
          <a href="#" className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">Projects</a>
          <div className="flex-grow"></div>
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  );
};