import React from "react";
import Section from "./utilities/Section";
import Container from "./utilities/Container";

import Heading from "./utilities/Heading";
import Pera from "./utilities/Pera";
import Button from "./utilities/Button";

const PhilosophySection = ({ onOpen }) => {
  return (
    <Section
      id="aboutSection"
      className="relative overflow-hidden  before:absolute before:bottom-0 before:left-[7.5%] before:w-[85%] before:h-[0.5px] before:bg-[var(--text-primary)] "
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-[60px]">
          {/* Left side  - Image */}
          <div data-aos="fade-up" className="md:col-span-6">
            <img
              src="/assets/images/philosophy/1.png"
              alt="Philosophy"
              width={800}
              height={500}
              className="w-full max-w-full h-[300px] lg:h-[475px] 2xl:h-[575px] object-contain rounded-[10px]"
              
            />
          </div>

          {/* Right side - Content */}
          <div className="md:col-span-6">
            <Heading animation="fade-up" className="mb-[20px]">
              Our Philosophy
            </Heading>
            <Pera animation="fade-up" className="mb-[40px]">
              At Liv Interio, we believe in creating spaces that reflect the
              people who inhabit them. Every design begins with a deep
              understanding of our clients' lifestyles, dreams, and values. We
              strive to balance form and function, ensuring every corner tells a
              story while serving a purpose. With timeless elegance and
              contemporary sensibilities, our work transcends trends to create
              lasting impressions.
            </Pera>
            <Button animation="fade-up" href="/contact-us">
              View More
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PhilosophySection;
