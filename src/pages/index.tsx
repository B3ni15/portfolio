import { Link } from "@heroui/link";
//import { Snippet } from "@heroui/snippet";
//@ts-nocheckimport { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
// Import github and instagramm with reacticons
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="relative w-96 h-96">
            <img
              src="/Ellipse.svg"
              alt="Decorative background"
              className="absolute w-full h-full"
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
          <div className="text-center md:text-left">
            <div className="inline-block max-w-lg">
              <span className={title()}>Make&nbsp;</span>
              <span className={title({ color: "blue" })}>beautiful&nbsp;</span>
              <br />
              <span className={title()}>
                websites regardless of your design experience.
              </span>
              <div className={subtitle({ class: "mt-4" })}>
                Beautiful, fast and modern React UI library.
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start mt-6">
              <Link
                isExternal
                className={buttonStyles({color: "primary", radius: "full", variant: "shadow" })} href={siteConfig.links.docs}>
                <FaGithub className="h-5 w-5" /> Documentation
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={siteConfig.links.github}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div> */}
      </section>
    </DefaultLayout>
  );
}