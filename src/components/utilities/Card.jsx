
import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const Card = ({data,height,center,border=false}) => {
  return (
      <div className={`max-w-[400px] 2xl:max-w-[500px] mx-auto ${border ? 'border-b border-[var(--text-primary)]' : ''} b pb-[30px]`}>
        <div className={`relative w-full ${height}`}>
          <img
            src={data?.src}
            alt={data?.alt}
            className="w-full h-full object-cover rounded-[15px]"
            loading="lazy"
          />
        </div>
        <Heading className={`uppercase mt-[20px] mb-[10px] !text-[20px] ${center}`}>
          <Link href="/projects">
          {data?.title}
          </Link>
        </Heading>
        <p className={`uppercase text-[12px] md:text-[14px] text-center md:text-left tracking-[1px] ${center}`}>
          {data?.desc}
        </p>
      </div>
  );
};

export default Card;
