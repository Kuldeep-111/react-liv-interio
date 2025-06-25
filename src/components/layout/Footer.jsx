import React from "react";
import { Link } from "react-router-dom";
import Section from "../utilities/Section";
import Container from "../utilities/Container";
import Pera from "../utilities/Pera";
import Heading from "../utilities/Heading";
import { useOutletContext } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import Button from "../utilities/Button";
// import ContactSection from "../ContactSection";

const whatWeDo = [
  { slug: "/services?category=consultancy", label: "Consultancy" },
  { slug: "/services?category=turnkey-solution", label: "Turnkey Solutions" },
  {
    slug: "/services?category=residential-design",
    label: "Residential Design",
  },
  { slug: "/services?category=office-interiors", label: "Office Interiors" },
];

const contactLink = [
  {
    link: "https://maps.app.goo.gl/MeK96x28vzsG7FHL9",
    target: "_blank",
    label: "C-67, 2nd Floor, Sector 63, Noida",
    icon: "/assets/icons/location.webp",
    alt: "Location",
  },
  {
    multiLinks: true,
    icon: "/assets/icons/phone.webp",
    alt: "Phone",
    links: [
      { link: "tel:+919071000645", label: "+91-9071000645" },
      { link: "tel:+918510021041", label: "+91-8510021041" },
    ],
  },
  {
    link: "mailto:livinterio@gmail.com",
    label: "livinterio@gmail.com",
    icon: "/assets/icons/mail.webp",
    alt: "Mail",
  },
];

const sociolMedia = [
  {
    link: "https://www.facebook.com/livinterio",
    icon: "/assets/icons/facebook.webp",
    alt: "Facebook",
  },
  {
    link: "https://www.instagram.com/liv.interio?igsh=MXFuOWU5ZGpwMnAyNQ==",
    icon: "/assets/icons/instagram.webp",
    alt: "Instagram",
  },
  {
    link: "https://www.youtube.com/@livinteriosocial",
    icon: "/assets/icons/youtube.webp",
    alt: "Youtube",
  },
  {
    link: "https://www.linkedin.com/company/liv-interio/",
    icon: "/assets/icons/linkedin.webp",
    alt: "LinkedIn",
  },
];

// Reusable Column Component
const FooterColumn = ({ title, items, whatWeDo = false, className = "" }) => (
  <div className={className}>
    <Heading className="font-montserrat font-[600] !text-left md:!text-left !text-[14px] mb-[25px] uppercase">
      {title}
    </Heading>
    <ul className="flex flex-col">
      {items.map((item, index) => {
        const href = item.link || item.slug || "#";
        return (
          <li
            key={item.slug || item.link || index}
            className="flex gap-[10px] items-center border-b border-[#ecebeb] last:border-none pb-[10px] mb-[10px]"
          >
            {item.icon && (
              <img src={item.icon} alt={item.alt} width={18} height={18} />
            )}
            {item.multiLinks ? (
              <>
                {item.links.map((data, index) => (
                  <a
                    key={index}
                    href={data.link}
                    target={item.target || "_self"}
                    rel="noopener noreferrer"
                  >
                    <Pera className="hover:text-[var(--text-primary)] !leading-[20px] !text-left !tracking-[2px] !text-[12px]">
                      {data.label}
                    </Pera>
                  </a>
                ))}
              </>
            ) : href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") ? (
              <a
                href={href}
                target={item.target || "_self"}
                rel="noopener noreferrer"
              >
                <Pera
                  className={`hover:text-[var(--text-primary)] !leading-[20px] !text-left !tracking-[2px] ${
                    whatWeDo ? "!text-[14px]" : "!text-[12px]"
                  }`}
                >
                  {item.content || item.label}
                </Pera>
              </a>
            ) : (
              <Link to={href}>
                <Pera
                  className={`hover:text-[var(--text-primary)] !leading-[20px] !text-left !tracking-[2px] ${
                    whatWeDo ? "!text-[14px]" : "!text-[12px]"
                  }`}
                >
                  {item.content || item.label}
                </Pera>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const Footer = ({openModal}) => {
  
  return (
    <Section as="footer" id="footer" className="!pb-[30px] overflow-hidden">
     
      <Container className="md:pb-0 !pb-[25px]">
       
<p onClick={openModal}  
        className="fixed md:hidden bottom-[0px] w-[100%] left-[0] text-center text-[12px] inline-block  text-white  uppercase z-[99]  p-[10px]  bg-[#804B1D] ">  Enquire Now </p>


         <a href="tel:+919071000645" className="fixed md:hidden bottom-[107px]  w-[35px] z-[99] rounded-full p-[10px]  bg-[#804B1D] right-[25px]">
          <img src="/assets/icons/call.webp" alt="phone icon" className="h-[100%] w-[100%]"/>
          </a>

        <a target="_blank" rel="noopener noreferrer" className="flex  hover:shadow-md transition-all w-[35px]    rounded-full md:w-[48px] items-center gap-2 fixed md:bottom-[50px] bottom-[60px] z-[99] right-[25px] md:right-[50px]" href="https://wa.me/+918510021041"><img src="/assets/images/whatsapp-icon.png" className="h-[100%] w-[100%]" alt="Whatsapp Icon"/></a>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-12"
        >
          <div className="sm:col-span-12 md:col-span-5">
            <div className="mb-4 text-left w-full">
              <img
                src="/assets/images/logo-black-2.webp"
                alt="Livinterio Logo"
                width={190}
                height={60}
                className="inline-block mt-[-10px] mb-[10px]"
              />
            </div>
            <Pera className="text-justify md:!text-left mb-[20px]">
              Livinterio.com is your trusted source for elegant, high-quality
              furniture and décor. Explore an ever-growing selection of modern,
              contemporary, and timeless pieces designed for every corner of
              your home.
            </Pera>
            <div className="w-full md:w-fit flex items-end justify-start gap-[5px]">
              {sociolMedia.map((data, index) => (
                <a
                  key={data.link}
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-[5px] border-transparent border hover:border-[var(--text-primary)] transition-all duration-300 ease-in-out"
                >
                  <img
                    src={data.icon}
                    alt={data.alt}
                    width={index === 2 || index === 3 ? 24 : 18}
                    height={index === 2 || index === 3 ? 24 : 18}
                  />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn
            title="What we do"
            items={whatWeDo}
            whatWeDo={true}
            className="sm:col-span-6 md:col-span-3"
          />
          <FooterColumn
            title="Contact Us"
            items={contactLink}
            className="sm:col-span-6 md:col-span-4"
          />
        </div>

        {/* copyright container */}
        <div className="flex flex-col md:flex-row md:justify-between justify-start flex-wrap md:flex-nowrap border-t border-[var(--text-primary)] mt-[10px] pt-[10px]">
          <Pera className="!md:text-[13px] !text-[12px] md:text-center text-start">
            © Copyright 2025 - LivInterio |<span className="md:inline-block"></span> Design by GTF Technologies
          </Pera>
          <div className="md:mt-[0] mt-[8px]"> 
            <Link
              to="/disclaimer"
              className="hover:text-[var(--text-primary)] font-montserrat text-[12px]"
            >
              Disclaimer
            </Link>{" "}
            |{" "}
            <Link
              to="/privacy-policy"
              className="hover:text-[var(--text-primary)] font-montserrat text-[12px]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
