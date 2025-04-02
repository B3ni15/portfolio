import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import { FaGithub, FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import GitHubCalendar from 'react-github-calendar'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="relative w-96 h-96">
            <img
              src="/Ellipse.svg"
              alt="Decorative background"
              className="absolute w-full h-full opacity-10"
            />
            <div className="relative w-52 h-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/pfp.png"
                alt="Profile picture"
                className="absolute w-full h-full z-10 object-cover"
              />
              <img src="/hi.png" alt="" className="absolute -bottom-7 -right-7 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 z-10 object-cover" />
            </div>
          </div>

          <div className="text-center md:text-left text-white">
            <div className="inline-block max-w-lg">
              <p className="tracking-tight inline text-4xl">Üdv, én <span className="font-semibold">Balló Benedek</span> vagyok.</p>
              <p className="tracking-tight text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#5E78FF] to-[#2C318E]">Fullstack Developer</p>

              <div className="md:w-1/2 my-2 text-lg lg:text-xl block max-w-full mt-4 !w-full">
                Sziasztok! Devbenike vagyok most ezért írok mivel tudja a faszom mi a gecimet írjak ide egyenlőre csak ezt a faszágot fogom ha nem zavar senkit. Igazából le is szarom szóval kaka fejek vagytok.
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start mt-6">
              <Link
                isExternal
                className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                href="https://github.com/B3ni15">
                <FaGithub className="h-5 w-5" /> Github
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "shadow", radius: "full", color: "primary" })}
                href="https://www.instagram.com/b3ni.ballo/">
                <FaInstagram className="h-5 w-5" /> Instagram
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "shadow", radius: "full", color: "primary" })}
                href="https://discord.com/users/801162422580019220">
                <FaDiscord className="h-5 w-5" /> Discord
              </Link>
              <Link
                isExternal
                className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                href="https://x.com/b3ni_15">
                <FaTwitter className="h-5 w-5" /> Twitter
              </Link>
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