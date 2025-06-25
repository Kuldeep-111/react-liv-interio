import React from 'react'

const Overlay = ({className}) => {
  return (
    <div className={`absolute z-1 top-0 left-0 w-full h-full bg-black opacity-18 ${className}`}></div>
  )
}

export default Overlay
