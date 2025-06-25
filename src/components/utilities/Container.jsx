import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div className={`  mx-auto w-full lg:w-[85%] px-[20px] lg:px-[0] ${className}`}>
      {children}
    </div> 
  )
}

export default Container
