import React from 'react'

const Heading = ({ children, className = '',animation }) => {
  return (
    <h1 {...(animation ? { 'data-aos': animation } : {})} className={`text-[var(--text-primary)] text-center md:text-left text-[20px]  lg:text-[22px] 2xl:text-[30px] tracking-[2px] ${className}`}>
      {children} 
    </h1>
  )
}

export default Heading
