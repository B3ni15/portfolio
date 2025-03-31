import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";

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
      </CardBody>
    </Card>
  );
};

export default function ProjectPage() {
  const Projects = [
    {
      name: "Project 1",
      description: "Description of project 1",
      link: "https://example.com/project1",
      image: "https://heroui.com/images/hero-card-complete.jpeg",
    },
    {
      name: "Project 2",
      description: "Description of project 2",
      link: "https://example.com/project2",
      image: "https://heroui.com/images/hero-card-complete.jpeg",
    },
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