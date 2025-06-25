import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/utilities/Section";
import Container from "../components/utilities/Container";
import Heading from "../components/utilities/Heading";
import Form from "../components/utilities/Form";

const Contact = () => {

const detailsData = [
  {
    title: "ADDRESS",
    items: [
      {
        label: "C-67, 2nd Floor, Sector 63, Noida",
        link: "https://maps.app.goo.gl/MeK96x28vzsG7FHL9",
        target:"_blank"
      },
    ],
  },
  {
    title: "Phone",
    items: [
      { label: "+91-9071000645", link: "tel:+919071000645" },
      { label: "+91-8510021041", link: "tel:+918510021041" },
    ],
  },
  {
    title: "Email",
    items: [
      { label: "livinterio@gmail.com", link: "mailto:livinterio@gmail.com" },
    ],
  },
];

  return (
    <>
      <Helmet>
        <title>Liv Interio - Interior Design Excellence</title>
      </Helmet>
      <Hero
        imageSrc="/assets/images/contact-us/desktop/banner.webp"
        mobileSrc="/assets/images/contact-us/mobile/banner.webp"
        title="Contact Us"
      />
      <Section className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
            <div className="md:col-span-6">
              <div>
                <Heading animation="fade-right" className="uppercase !text-left md:!text-[24px]">
                  Get In Touch
                  <span className="inline-block ms-[20px] w-full max-w-[150px] h-[1px] bg-[var(--text-primary)]"></span>
                </Heading>
                <Heading animation="fade-left" className="uppercase !text-left ms-[70px] md:ms-[150px] mt-[10px] md:mt-[20px]">
                  With Us
                </Heading>
              </div>
              <Form animation="fade-up"  className="mt-[50px]" />
            </div>
            <div data-aos="fade-left" className="md:col-span-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1899.4106093918956!2d77.38296063872365!3d28.61793354845184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb4a775f2b25%3A0x51bb40e9351cf806!2sLiv%20Interio!5e1!3m2!1sen!2sin!4v1749038971601!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full border-0 rounded-[10px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-[var(--background-secondary)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
            {detailsData.map((section, index) => (
              <div data-aos="fade-up" className="md:col-span-4 text-center" key={index}>
                <Heading  className="uppercase pb-[20px] 2xl:!text-[18px]  px-[20px] mb-[25px] !text-center w-fit mx-auto border-b border-[var(--text-primary)]">
                  {section.title}
                </Heading>
                {section.items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="mx-[5px]">,</span>}
                    <a
                      href={item.link}
                      className="text-black hover:text-[var(--text-primary)] text-[14px] 2xl:text-[18px] 2xl:leading-[50px] tracking-[2px] lowercase "
                      target={item.target ? "_blank" : ""}
                    >
                      {item.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
