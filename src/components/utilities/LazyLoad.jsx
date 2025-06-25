"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

const LazyLoad = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Load  when 10% of the section is visible
  });

  return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazyLoad;
