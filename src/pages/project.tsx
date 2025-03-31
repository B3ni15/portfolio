import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import React from "react";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";

interface CardComponentProps {
  name: string;
  description: string;
  link: string;
  img: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ name, description, link, img }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h1 className="text-large uppercase font-bold"><a href={link}>{name}</a></h1>
        <small className="text-default-500">{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={270}
        />
        <br />
        <Link
          isExternal
          className={buttonStyles({ variant: "shadow", radius: "full", color: "primary" })}
          href={link}>
          Link
        </Link>
      </CardBody>
    </Card>
  );
};

export default function ProjectPage() {
  const Projects = [
    {
      name: "HunTools Bot",
      description: "A multifunctional Discord bot with several features.",
      link: "https://huntools-bot.xyz",
      image: "/huntools.webp",
    },
    {
      name: "DaChats",
      description: "A Fun Social Media Platform to chat with your friends.",
      link: "https://dachats.online",
      image: "https://dagames.online/navLogo.svg",
    },
    // {
    //   name: "Lirium Bot",
    //   description: "Customizable. Fast. New.",
    //   link: "https://lirium.cc/",
    //   image: "https://lirium.cc/assets/lirium.svg",
    // }
  ];

  const ProjectList = Projects.map((project, index) => (
    <CardComponent key={index} name={project.name} description={project.description} link={project.link} img={project.image} />
  ));


  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Projects</h1>
          <main className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ProjectList}
            </div>

          </main>
        </div>
      </section>
    </DefaultLayout>
  );
}   