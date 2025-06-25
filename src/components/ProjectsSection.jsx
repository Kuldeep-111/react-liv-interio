import React from "react";
import Section from "./utilities/Section";
import Container from "./utilities/Container";
import Heading from "./utilities/Heading";
import Pera from "./utilities/Pera";
import Button from "./utilities/Button";
import Card from "./utilities/Card";

const projects = [
  {
    title: "sunworld arista",
    desc: "(sec 168 Noida) ",
    src: "/assets/images/projects/desktop/sunworld-arista/project-1.webp",
    alt: "project 1",
  },
  {
    title: "ELITE GOLF GREENS",
    desc: "(Sec 79 Noida )",
    src: "/assets/images/projects/desktop/elite-golf-greens/23.webp",
    alt: "project 2",
  },
  {
    title: "CLEO COUNTY",
    desc: "(sec 121 Noida) ",
    src: "/assets/images/projects/desktop/cleo-county/project-3.webp",
    alt: "project 3",
  },
  {
    title: "IENERGIZER OFFICE",
    desc: "(Sec 60 Noida)",
    src: "/assets/images/projects/desktop/ienergizer-office/project-4.webp",
    alt: "project 4",
  },
];

const ProjectsSection = ({openModal}) => {
  return (
    <Section id="projectsSection" className="overflow-hidden">
      <Container>
        <Heading animation='fade-up' className="uppercase !text-center !leading-[40px] 2xl:!leading-[50px]">
          Each project tells a unique story of luxury crafted with precision and passion.
        </Heading>
        <div className="flex justify-between items-center lg:items-start flex-col lg:flex-row gap-[20px] lg:gap-[50px] mt-[10px] md:mt-[50px] mb-[30px]">
          <Heading animation='fade-up' className="uppercase md:!text-[22px]">
            Featured Projects
          </Heading>
          <Pera animation='fade-up' className="lg:max-w-[600px] ">
            Each project that we undertake has a story to tell. One that is
            actualised by our expertise, aesthetics, and attention to detail.
            they are all distinctive in their inception, design, and execution,
            all bearing a version of luxury that's unique to that space.
          </Pera>
          <Button animation='fade-up' href="/projects" className="inline-block text-[var(--text-primary)] text-nowrap w-fit">
            See All PRojects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px] ">
          {projects.map((data, index) => (
  <div
    key={data?.title}
    className="md:col-span-6"
    data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
  >
    <Card
      data={data}
      border={true}
      height="h-[400px] lg:h-[450px] 2xl:h-[600px]"
    />
  </div>
))}

        </div>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
