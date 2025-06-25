import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Section from "./utilities/Section";
import Container from "./utilities/Container";
import Heading from "./utilities/Heading";
import { Link } from "react-router-dom";
import CustomImage from "./utilities/CustomImage";

const whatWeDoItems = [
  {
    imageSrc: "/assets/images/services/desktop/consultancy.webp",
    mobileSrc: "/assets/images/services/mobile/consultancy.webp",
    imgAlt: "Consultancy image",
    icon: "/assets/images/whatwedo/consultany.webp",
    icon2: "/assets/images/whatwedo/consultany-white.webp",
    alt: "Consultancy Icon",
    label: "Consultancy",
    link: "consultancy",
  },
  {
    imageSrc: "/assets/images/services/desktop/turnkey.webp",
    mobileSrc: "/assets/images/services/mobile/turnkey.webp",
    imgAlt: "Turnkey Solutions",
    icon: "/assets/images/whatwedo/turnkey.webp",
    icon2: "/assets/images/whatwedo/turnkey-white.webp",
    alt: "Turnkey Solutions Icon",
    label: "Turnkey Solutions",
    link: "turnkey-solution",
  },
  {
    imageSrc: "/assets/images/services/desktop/residentail.webp",
    mobileSrc: "/assets/images/services/mobile/residentail.webp",
    imgAlt: "Residential Design",
    icon: "/assets/images/whatwedo/residential.webp",
    icon2: "/assets/images/whatwedo/residential-white.webp",
    alt: "Residential Design Icon",
    label: "Residential Design",
    link: "residential-design",
  },
  {
    imageSrc: "/assets/images/services/desktop/office.webp",
    mobileSrc: "/assets/images/services/mobile/office.webp",
    imgAlt: "Office Interiors",
    icon: "/assets/images/whatwedo/office.webp",
    icon2: "/assets/images/whatwedo/office-white.webp",
    alt: "Office Interiors Icon",
    label: "Office Interiors",
    link: "office-interiors",
  },
];

const WhatWeDoSection = ({ services, onCategorySelect }) => {
  const { category } = useParams();

  const getInitialCategory = () => {
    if (services && category) {
      return (
        whatWeDoItems.find((item) => item.link === category) ||
        whatWeDoItems[0]
      );
    }
    return whatWeDoItems[0];
  };

  const [selectedCategory, setSelectedCategory] = useState(getInitialCategory);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (services && category) {
      const matched = whatWeDoItems.find((item) => item.link === category);
      if (matched) {
        setSelectedCategory(matched);
        // if (onCategorySelect) onCategorySelect(matched.link);
      }
    }
  }, [category, services]);

  const handleSelect = (item) => {
    setSelectedCategory(item);
    if (onCategorySelect) onCategorySelect(item.link);
  };

  return (
    <Section className="py-[60px] bg-[var(--background-secondary)] overflow-hidden">
      <Container>
        {!services && (
          <Heading
            animation="fade-up"
            className="uppercase mb-[30px] lg:mb-[40px] 2xl:mb-[60px] !text-center"
          >
            What We Do
          </Heading>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
          {/* Left Column */}
          <div
            className="md:col-span-4 flex items-center"
            data-aos="fade-right"
          >
            <ul className="w-full">
              {whatWeDoItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="pt-[24px] first:pt-0"
                >
                  <div
                    className={`flex items-center gap-[25px] p-[12px] 2xl:p-[16px] border-b border-[var(--text-primary)] ${
                      selectedCategory.link === item.link
                        ? "bg-[var(--text-primary)] rounded-[5px]"
                        : "bg-transparent"
                    }`}
                  >
                    <img
                      src={
                        selectedCategory.link === item.link
                          ? item.icon2
                          : item.icon
                      }
                      alt={item.alt}
                      width={35}
                      height={36}
                      className="object-contain w-[20px] 2xl:w-[30px] h-[21px] lg:h-[26px] 2xl:h-[31px]"
                    />
                    {services ? (
                      <button
                        onClick={() => handleSelect(item)}
                        className={`text-[#804B1D] text-center !text-[16px] 2xl:!text-[18px] 2xl:!text-[22px] font-normal not-italic leading-none tracking-[1px] capitalize rounded transition-all duration-300 ${
                          selectedCategory.link === item.link
                            ? "text-white"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={`/services?category=${item.link}`}
                        className={`text-[#804B1D] text-center !text-[16px] 2xl:!text-[18px] 2xl:!text-[22px] font-normal not-italic leading-none tracking-[1px] capitalize rounded transition-all duration-300 ${
                          selectedCategory.link === item.link
                            ? "text-white"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8" data-aos="fade-left">
            <div className="relative w-full h-[300px] lg:h-[425px] 2xl:h-[550px]">
              <CustomImage
                src={
                  services
                    ? selectedCategory.imageSrc
                    : hoveredItem?.imageSrc || whatWeDoItems[0].imageSrc
                }
                mobileSrc={
                  services
                    ? selectedCategory.mobileSrc
                    : hoveredItem?.mobileSrc || whatWeDoItems[0].mobileSrc
                }
                alt={
                  services
                    ? selectedCategory.imgAlt
                    : hoveredItem?.imgAlt || whatWeDoItems[0].imgAlt
                }
                className="object-cover rounded-[10px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhatWeDoSection;
