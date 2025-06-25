import React from "react";
import Container from "./utilities/Container";
import Section from "./utilities/Section";
import Heading from "./utilities/Heading";
import Pera from "./utilities/Pera";
import Overlay from "./utilities/Overlay";

const designStep = [
  "Site Visit",
  "Questionnaire",
  "Mood board/Design Concept",
  "2D Layout",
  "2D Drawings",
  "3D Modelling & Renders",
  "Final Estimate",
  "Design Docket",
];

const DesigningSection = () => {
  return (
    <Section
      id="Designing"
      className="overflow-hidden relative bg-[url('/assets/images/designing/desinging-bg-mobile.webp')] md:bg-[url('/assets/images/designing/desinging-bg.webp')] bg-cover bg-center bg-no-repeat"
    >
        <Overlay className="!bg-[var(--background-primary)] opacity-80"/>
      <Container className="z-2 relative">
        <Heading animation="fade-right" className="uppercase !text-center">Designing Steps</Heading>
        <h4 data-aos='fade-up' className="text-center my-[20px] tracking-[2px] md:!text-[18px]">
          Design Is Thinking Made visuals
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
          <div className="md:col-span-6 flex items-center ">
            <Pera animation="fade-right" className="w-full md:w-[80%] mx-auto text-justify md:text-left ">
              At Liv Interio, every project begins with insightful site visits
              and a curated questionnaire to understand your space and
              aspirations. We then develop a captivating mood board and design
              concept, reflecting your taste through thoughtfully chosen
              textures and themes. With that vision in place, we map out a 2D
              layout followed by precise 2D drawings that define spatial flow
              and detail. Our team then brings your dream to life through
              stunning 3D modelling and renders, offering a lifelike preview of
              your space. Once the design is finalized, we present a transparent
              final estimate that balances luxury with clarity. To conclude,
              everything is beautifully packaged in a design docket—your
              personal guide to elegant living.
            </Pera>
          </div>
          <div className="md:col-span-6">
            <ul className="mt-[50px]">
              {designStep.map((step, index) => (
                <li
                  key={index}
                  className="flex items-center gap-[80px] mb-[30px]"
                  
                >
                  <span className="relative z-11 w-[30px] lg:w-[35px] 2xl:w-[40px] h-[30px] lg:h-[35px] 2xl:h-[40px] bg-[#804b1d] rounded-full flex items-center justify-center text-white text-center font-lato text-[12px] md:text-[14px] font-bold tracking-[1px] custom-lines">
                    {index + 1}
                  </span>

                  <span data-aos='fade-left' className="bg-[#fff] rounded-[5px] w-[calc(100%-80px)] md:w-auto px-[25px] py-[10px] font-montserrat text-[var(--text-primary)] font-[700] text-[12px] md:text-[14px] 2xl:text-[16px]">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default DesigningSection;
