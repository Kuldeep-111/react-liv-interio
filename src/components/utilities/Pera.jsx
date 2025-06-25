import React from 'react'

const Pera = ({ children, className = '',animation }) => {
  return (
    <p  {...(animation ? { 'data-aos': animation } : {})} className={` 2xl:text-[13px] text-center md:text-left tracking-[1px] font-montserrat text-[#000] leading-[22px]  ${className} text-[13px]`}>
      {children}
    </p>
  )
}

export default Pera
