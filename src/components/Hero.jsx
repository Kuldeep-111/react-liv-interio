"use client";
import React, { useRef, useState } from "react";
import Overlay from "./utilities/Overlay";
import Heading from "./utilities/Heading";
import Breadcrumb from "./utilities/BreadCrumb";
import CustomImage from "./utilities/CustomImage";
import useIsMobile from "./utilities/useIsMobile";

const Hero = ({
  video = false,
  imageSrc = "/assets/images/about-us/desktop/banner.webp",
  mobileSrc = "/assets/images/about-us/mobile/banner.webp",
  title,
  parent,
}) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      videoRef.current.play();
      setIsMuted(newMuted);
    }
  };
  const isMobile = useIsMobile();

  return (
    <section
      className="relative w-full h-[100vh] md:h-screen overflow-hidden"
      aria-label="Background media showing Liv Interio interiors"
      role="img"
    >
      {video ? (
        <>
          {/* Always show fallback image as background */}
        {isMobile && 
          <img
            src="/assets/banner-mb.webp"
            alt="Video Poster"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? "opacity-0" : "opacity-100"
            }`}
          />}
          

          {/* Video overlay */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={
              isMobile
                ? "/assets/videos/Livinterio-mobile.mp4"
                : "/assets/videos/Livinterio-desktop.mp4"
            }
            autoPlay
            loop
            muted={isMuted}
            onLoadedData={() => setIsVideoLoaded(true)}
            playsInline
          />

          {/* Mute/unmute button */}
          <button
            className="z-51 absolute md:right-[25px] md:left-[inherit] left-[25px] bottom-[65px] md:bottom-[25px]"
            onClick={handleUnmute}
          >
            <img
              src={
                isMuted
                  ? "/assets/icons/mute.webp"
                  : "/assets/icons/volume.webp"
              }
              alt="Sound Icon"
              className="w-[20px] h-[20px]"
            />
          </button>
        </>
      ) : (
        <>
          <CustomImage
            src={imageSrc}
            mobileSrc={mobileSrc}
            alt="Hero background"
            className="object-cover w-full h-full"
          />
          <div className="z-3 absolute top-0 left-0 w-full h-full flex items-center justify-center p-5">
            <div>
              <Heading className="uppercase text-white !text-center">
                {title}
              </Heading>
              <Breadcrumb title={title} parent={parent} />
            </div>
          </div>
        </>
      )}

      <Overlay className={`${!video && "opacity-40"}`} />
    </section>
  );
};

export default Hero;
