import DefaultLayout from "@/layouts/default";
import { FaGithub, FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl w-full">
          <div className="relative w-full max-w-[250px] h-[250px] sm:max-w-[320px] sm:h-[320px] md:max-w-[384px] md:h-[384px]">
            <img
              src="/Ellipse.svg"
              alt="Decorative background"
              className="absolute w-full h-full opacity-10"
            />
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/pfp.png"
                alt="Profile picture"
                className="w-full h-full z-10 object-cover rounded-full"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-7 sm:-right-7 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 z-10 object-cover">
                <img 
                  src="/hi.png" 
                  alt="" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left text-white">
            <div className="inline-block max-w-lg px-4 md:px-0">
              <p className="tracking-tight inline text-3xl sm:text-4xl">Üdv, én <span className="font-semibold">Balló Benedek</span> vagyok.</p>
              <p className="tracking-tight text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#5E78FF] to-[#2C318E]">Fullstack Developer</p>

              <div className="w-full my-2 text-base sm:text-lg lg:text-xl block max-w-full mt-4">
                Sziasztok! Devbenike vagyok most ezért írok mivel tudja a faszom mi a gecimet írjak ide egyenlőre csak ezt a faszágot fogom ha nem zavar senkit. Igazából le is szarom szóval kaka fejek vagytok.
              </div>
            </div>

            {/* Szociális média gombok javítva */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
                href="https://github.com/B3ni15">
                <FaGithub className="h-4 w-4" /> Github
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
                href="https://www.instagram.com/b3ni.ballo/">
                <FaInstagram className="h-4 w-4" /> Instagram
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
                href="https://discord.com/users/801162422580019220">
                <FaDiscord className="h-4 w-4" /> Discord
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
                href="https://x.com/b3ni_15">
                <FaTwitter className="h-4 w-4" /> Twitter
              </a>
            </div>
          </div>
        </div>
        
        {/* <div className="mt-12">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              <GitHubCalendar username="b3ni15" />
            </span>
          </Snippet>
        </div> */}
      </section>
    </DefaultLayout>
  );
}