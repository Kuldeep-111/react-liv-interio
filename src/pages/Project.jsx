
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getProjectImages } from "../components/utilities/getProjectImages";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/utilities/Section";
import Container from "../components/utilities/Container";
import Heading from "../components/utilities/Heading";
import Pera from "../components/utilities/Pera";
import Button from "../components/utilities/Button";
import CustomImage from "../components/utilities/CustomImage";
import ContactSection from "../components/ContactSection";
import CustomModal from "../components/utilities/CustomModal";
import { useOutletContext } from "react-router-dom";

const data = [
  {
    title: "parx laureate Cedar",
    desc: "Rooted in nature, rising in style — Cedar Tower redefines modern warmth.",
    location: "sector 108 Noida",
    images: getProjectImages("parx-laureate", 11),
  },
  {
    title: "sunworld arista",
    desc: "Designing joyful spaces where every corner feels like home.",
    location: "sector 168 Noida",
    images: getProjectImages("sunworld-arista", 16),
  },
  {
    title: "ELITE GOLF GREENS",
    desc: "Where soft tones meet timeless elegance — welcome to the Beige House.",
    location: "sector 79 Noida",
    images: getProjectImages("elite-golf-greens", 17),
  },
  {
    title: "IENERGIZER OFFICE",
    location: "sector 60 Noida",
    desc: "Elevating workspaces with smart design and professional elegance.",
    images: getProjectImages("ienergizer-office", 8),
  },
  {
    title: "ATS Happy trails",
    desc: "Crafting personalized spaces that tell your unique story.",
    location: "Noida Extension",
    images: getProjectImages("ats-happy-trails", 10),
  },
  {
    title: "CLEO COUNTY",
    desc: "Elegant living, thoughtfully crafted — interiors that echo Cleo County’s charm.",
    location: "sector 121 Noida",
    images: getProjectImages("cleo-county", 9),
  },
];

const Project = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState([]);
  const { openModal } = useOutletContext(); 
  
  const formatSlidesForLightbox = (images) =>
    images.map((item) => ({
      src: item.src,
      mobileSrc: item.mobileSrc,
      alt: item.alt,
    }));

  return (
    <>
      <Helmet>
        <title>Liv Interio - Interior Design Excellence</title>
      </Helmet>
      <Hero
        imageSrc="/assets/images/projects/desktop/banner.webp"
        mobileSrc="/assets/images/projects/mobile/banner.webp"
        title="Our Projects"
      />

      {data.map((item, projectIndex) => (
        <Section
          key={item.title}
          className="relative overflow-hidden before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]"
        >
          <Container className="lg:!w-[85%] 2xl:!w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px]">
              <div className="md:col-span-4" data-aos="fade-up-right">
                <Heading className="uppercase mt-[0px] md:mt-[50px]  2xl:!text-[24px]">
                  {item.title}
                </Heading>
                <Pera className="text-[14px] mb-  [10px] md:!mb-[20px] capitalize">
                  {item.location}
                </Pera>
                <Pera className="!text-[12px] 2xl:!text-[13px]">
                  {item.desc}
                </Pera>
                <Button
                  href="/project"
                  className="bg-white mt-[30px] md:mt-[50px] 2xl:mt-[70px] w-fit block text-[var(--text-primary)]"
                  onOpen={openModal}
                  button={true}
                >
                  Explore project
                </Button>
              </div>
              <div className="md:col-span-8" data-aos="fade-up-left">
                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="customSwiper"
                  >
                    {item.images.map((img, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="pb-[30px] 2xl:pb-[50px]"
                        onClick={() => {
                          setLightboxImages(
                            formatSlidesForLightbox(item.images)
                          );
                          setLightboxIndex(idx);
                        }}
                      >
                        <div className="relative w-full h-[300px] md:h-[400px] 2xl:h-[450px] rounded-[15px] overflow-hidden cursor-pointer">
                          <CustomImage
                            src={img.src}
                            mobileSrc={img.mobileSrc}
                            alt={img.alt}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={lightboxImages}
        index={lightboxIndex}
      />

      <ContactSection onOpen={openModal} />
      
    </>
  );
};

export default Project;
