import React from 'react';
import { Link } from 'react-router-dom';
import Section from './utilities/Section';
import Container from './utilities/Container';
import Heading from './utilities/Heading';
import Pera from './utilities/Pera';

const ContactSection = ({ className = '', onOpen }) => {
  return (
    <Section
      id="letsTalk"
      className={`overflow-hidden bg-[var(--background-secondary)] mt-[40px] md:mt-[80px] ${className}`}
    >
      <Container>
        <Heading animation="fade-right" className="uppercase !text-center">
          Looking to elevate the aesthetic of your space?
        </Heading>
        <Pera animation="fade-left" className="!text-center mt-[10px] md:!text-[16px]">
          Have a question for us? Let’s talk.
        </Pera>
        <Link
          to="/contact-us"
          className="block w-fit mx-auto mt-[15px] text-[var(--text-primary)] text-[10px] 2xl:text-[12px] tracking-[1px] 2xl:font-semibold leading-tight uppercase bg-[white] hover:bg-[var(--text-primary)] hover:text-white transition-colors duration-300 border border-[var(--text-primary)] py-[14px] 2xl:py-[12px] px-[30px] 2xl:px-[40px] rounded data-[animation=fade-up]:animate-in-out"
          data-animation="fade-up"
        >
          CONTACT US
        </Link>
      </Container>
    </Section>
  );
};

export default ContactSection;