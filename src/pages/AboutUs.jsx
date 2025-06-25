
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/utilities/Section";
import Container from "../components/utilities/Container";
import Heading from "../components/utilities/Heading";
import Pera from "../components/utilities/Pera";
import Counter from "../components/utilities/Counter";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CustomModal from "../components/utilities/CustomModal";


const AboutUS = ({ openModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openContentModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeContentModal = () => setIsModalOpen(false);

  const descModal = [
    {
      desc: "Meet Manmeet Kaur – Interior Designer | Creating Inspired Spaces with Purpose and Elegance. She's a visionary interior designer who believes that every space tells a story—and it's her mission to bring that story to life with creativity, clarity, and an impeccable sense of style. With a professional background rooted in both aesthetics and functionality, Manmeet combines artistic vision with practical expertise to design interiors that are beautiful, livable, and deeply personal. With over 8 years in the industry, She has worked across a diverse range of projects, including luxury residences, commercial spaces, hospitality venues, and bespoke renovations. Her approach is collaborative, thoughtful, and highly detail-oriented. She takes the time to truly understand her clients' needs, personalities, and aspirations, then translates that insight into designs that reflect individuality while maintaining a cohesive and elegant flow.",
    },
    {
      desc: " What Sets Her Apart: Tailored Design Philosophy: She does not believe in one-size-fits-all design. Every project begins with a blank canvas and a thorough exploration of the client's vision and lifestyle.",
    },
    {
      span: "Balance of Form and Function:",
      desc: "Aesthetics are important, but so is the way a space lives and breathes. She ensures that her interiors not only look stunning but are also intuitive and practical to use.",
    },
    {
      span: "Innovative Use of Materials:",
      desc: "From natural textures and rich fabrics to sustainable and modern finishes, she curates materials that elevate each design while supporting environmental consciousness.",
    },
    {
      span: "Meticulous Attention to Detail:",
      desc: " Whether it's custom millwork, lighting design, or spatial flow, She obsesses over the details that truly define a high-end, professionally curated space. From initial sketches to the final reveal, Manmeet Kaur guides each client through a seamless, stress-free process—ensuring their vision is not only realized but elevated beyond expectation.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Liv Interio - Interior Design Excellence</title>
      </Helmet>
      <Hero imageSrc="/assets/images/about-us/desktop/banner.webp" mobileSrc="/assets/images/about-us/mobile/banner.webp" title="About Us" />
      <Section className="!pb-0 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
            <div className="md:col-span-6">
              <div>
                <Heading
                  animation="fade-right"
                  className="uppercase !text-left md:!text-[24px]"
                >
                  About
                  <span className="inline-block  w-full max-w-[150px] h-[1px] bg-[var(--text-primary)]"></span>
                </Heading>
                <Heading
                  animation="fade-left"
                  className="uppercase !text-left ms-[70px] md:ms-[100px] mt-[10px] md:mt-[20px]"
                >
                  Liv Interio
                </Heading>
              </div>
            </div>
            <div className="md:col-span-6">
              <Pera animation="fade-up" className="!text-justify md:!text-left">
                Founded in 2018, Liv Interio is a boutique interior design
                studio that brings thoughtful design, refined aesthetics, and
                exceptional functionality to residential and commercial spaces.
                With over 8 years of expertise and 50+ completed projects, our
                work is guided by a passion to create environments that speak to
                the soul and serve everyday living with grace and elegance.
              </Pera>
              <div className="flex items-center justify-start gap-[50px] md:gap-[100px] pb-[15px] md:pb-[30px] mt-[30px] md:mt-[40px] border-b border-[var(--text-primary)]">
                {[
                  { title: 8, em: "Years", subtitle: " Experience" },
                  { title: 50, em: "+", subtitle: "Projects" },
                ].map((item, index) => (
                  <h4
                    key={index}
                    className="text-[var(--text-primary)] text-[22px] lg:text-[26px] 2xl:text-[32px] "
                  >
                    <span
                      data-aos="fade-up"
                      className="block font-[700] font-montserrat"
                    >
                      {" "}
                      <Counter target={parseInt(item.title)} /> {item.em}
                    </span>
                    <span
                      data-aos="fade-up"
                      className="block font-[700] font-montserrat"
                    >
                      {item.subtitle}
                    </span>
                  </h4>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <AboutSection
        onOpen={openContentModal}
        aboutUS={true}
        title="MS. MANMEET KAUR"
        designation="Principal Designer"
        className="!before:content-none before:hidden"
      />

      <ContactSection className="!mt-0" onOpen={openModal} />
      {isModalOpen && (
        <CustomModal
          onClose={closeContentModal}
          className="!max-w-[95%] !bg-[var(--background-primary)] p-[25px] md:!p-[40px]"
        >
          <div className="max-h-[80vh] overflow-auto ">
            {descModal.map((item, index) => (
              <Pera key={index} className="mb-[10px] text-start">
                <span className="font-bold">{item.span}</span> {item.desc}
              </Pera>
            ))}
          </div>
        </CustomModal>
      )}
    </>
  );
};

export default AboutUS;
