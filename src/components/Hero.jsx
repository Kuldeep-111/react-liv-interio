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
  mobileSrc = "imageSrc = '/assets/images/about-us/mobile/banner.webp'",
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
        {!isVideoLoaded && isMobile && (
        <img
          src="/assets/banner-mb.webp"
          alt="Video Poster"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
          <video
            ref={videoRef}
            className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
            // remove the cloudinary url later on
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
          <button
            className="z-51 absolute md:right-[25px] md:left-[inherit] left-[25px] bottom-[65px] md:bottom-[25px]"
            // className="z-51 absolute md:right-[25px] md:left-[inherit] left-[25px] bottom-[65px]"
            onClick={handleUnmute}
          >
            <img
              src={
                isMuted
                  ? "/assets/icons/mute.webp"
                  : "/assets/icons/volume.webp"
              }
              alt="Sound Icon"
              width={20}
              height={20}
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
