import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", transform: "translateX(0px)" });

  useEffect(() => {
    const path = location.pathname;
    if (path === "/about") setActiveTab("about");
    else if (path === "/projects") setActiveTab("projects");
    else setActiveTab("home");
  }, [location.pathname]);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeElement = document.querySelector(`[data-tab="${activeTab}"]`);
      if (activeElement && tabsRef.current) {
        const { width, left } = activeElement.getBoundingClientRect();
        const tabsLeft = tabsRef.current.getBoundingClientRect().left;
        const tabsRight = tabsRef.current.getBoundingClientRect().right;
        const tabsWidth = tabsRight - tabsLeft;
        const indicatorWidth = Math.min(width, tabsWidth / 3);
        const indicatorLeft = left - tabsLeft + (width - indicatorWidth) / 2;
        setIndicatorStyle({
          width: `${indicatorWidth}px`,
          transform: `translateX(${indicatorLeft}px)`,
        });
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "about") navigate("/about");
    else if (tab === "projects") navigate("/projects");
    else navigate("/");
  };

  return (
    <nav className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4">
      <div className="relative flex items-center justify-center py-2 px-6 bg-[#0F1015]/90 backdrop-blur-md shadow-lg rounded-full border border-gray-700/50 w-full max-w-xl">
        <div ref={tabsRef} className="flex items-center justify-center gap-4 relative h-10">
          <div className="absolute bottom-0 left-0 h-10 bg-gray-700/50 rounded-full transition-all duration-300 ease-in-out" style={indicatorStyle}/>

          <button
            data-tab="home"
            onClick={() => handleTabClick("home")}
            className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium ${activeTab === "home" ? "text-white" : "text-gray-400 hover:text-gray-300"} transition-colors`}>
            <FaHome className="text-base" />
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            data-tab="about"
            onClick={() => handleTabClick("about")}
            className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium ${activeTab === "about" ? "text-white" : "text-gray-400 hover:text-gray-300"} transition-colors`}>
            <FaClipboardList className="text-base" />
            <span className="hidden sm:inline">About</span>
          </button>

          <button
            data-tab="projects"
            onClick={() => handleTabClick("projects")}
            className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium ${activeTab === "projects" ? "text-white" : "text-gray-400 hover:text-gray-300"} transition-colors`}>
            <AiFillProject className="text-base" />
            <span className="hidden sm:inline">Projects</span>
          </button>
        </div>

        <ThemeSwitch/>
      </div>
    </nav>
  );
};