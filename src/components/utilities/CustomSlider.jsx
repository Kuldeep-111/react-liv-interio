"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import Pera from "./Pera";
import Heading from "./Heading";

export default function CustomSlider({ data }) {
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      !isSwiperReady
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();

      setIsSwiperReady(true);
    }
  }, [isSwiperReady]);

  return (
    <div className="relative mt-[30px] lg:mt-[50px] 2xl:mt-[90px] px-4">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="max-w-[90%] md:max-w-[700px] mx-auto"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="pb-[20px] 2xl:pb-[30px] px-[10px] md:px-0">
            <Pera animation="fade-up" className="!text-justify md:!text-center">{item.desc}</Pera>
            <Heading animation="fade-up" className="font-montserrat !text-center !text-[22px] !font-[900] mt-[10px] lg:mt-[20px] 2xl:mt-[50px] mb-[10px]">{item.name}</Heading>
            <Pera animation="fade-up" className=" !text-center mb-[10px] lg:mb-[20px] 2xl:mb-[50px] !font-[600]">{item.location}</Pera>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev/Next Buttons */}
      <div className="flex justify-between absolute w-full md:w-[90%] top-[20%] md:top-[10%] left-0 md:left-[5%]">
        <button
          ref={prevRef}
          data-aos="fade-right"
          className="border-[2px] hover:bg-[var(--background-primary)] border-[#b99a7c] rounded-[10px] w-[30px] lg:w-[35px] 2xl:w-[50px] h-[30px] lg:h-[35px] 2xl:h-[50px] flex items-center justify-center"
        >
          <img src="/assets/icons/left-arrow.svg" alt="left arrow" width={35} height={0} className="w-[15px] lg:w-[20px] 2xl:w-[35px]"/>
        </button>
        <button
          ref={nextRef}
          data-aos="fade-left"
          className="border-[2px] hover:bg-[var(--background-primary)] border-[#b99a7c] rounded-[10px] w-[30px] lg:w-[35px] 2xl:w-[50px] h-[30px] lg:h-[35px] 2xl:h-[50px]  flex items-center justify-center"
        >
          <img src="/assets/icons/right-arrow.svg" alt="left arrow" width={35} height={0} className="w-[15px]  lg:w-[20px] 2xl:w-[35px]"/>
        </button>
      </div>
    </div>
  );
}
