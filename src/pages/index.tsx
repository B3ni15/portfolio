import { Link } from "@heroui/link";
//import { Snippet } from "@heroui/snippet";
//@ts-nocheckimport { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <img src="/Ellipse.svg" alt="Decorative graphic" className="w-96 h-96" />
          
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
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={siteConfig.links.docs}
              >
                Documentation
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