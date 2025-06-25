import React from "react";
import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import InteriorSection from "../components/InteriorSection";
import PhilosophySection from "../components/PhilosophySection";
import LazyLoad from "../components/utilities/LazyLoad";
import { Helmet } from "react-helmet-async";
const TeamSection = lazy(() => import("../components/TeamSection"));
const WhatWeDoSection = lazy(() => import("../components/WhatWeDoSection"));
const DesigningSection = lazy(() => import("../components/DesigningSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const ChooseUsSection = lazy(() => import("../components/ChooseUsSection"));
const JourneySection = lazy(() => import("../components/JourneySection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ClientSection = lazy(() => import("../components/ClientSection"));

const Home = ({ openModal }) => {
  return (
    <>
      <Helmet>
        <title>Liv Interio - Interior Design Excellence</title>
        <meta
          name="description"
          content="Liv Interio offers exceptional interior design solutions blending creativity, functionality, and luxury."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
 

      <Hero video={true} />
      <InteriorSection onOpen={openModal} />
      
      <PhilosophySection onOpen={openModal} />

      
      <LazyLoad>
        <Suspense fallback={null}>
          <TeamSection />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <WhatWeDoSection />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <DesigningSection />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <ProjectsSection />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <ChooseUsSection />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <JourneySection />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
      </LazyLoad>
      <LazyLoad>
        <Suspense fallback={null}>
          <ClientSection />
        </Suspense>
      </LazyLoad>
    </>
  );
};

export default Home;
