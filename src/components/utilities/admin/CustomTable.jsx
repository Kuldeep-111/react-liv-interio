import React from 'react'

const CustomTable = ({children}) => {
  return (
    <table className='w-full'>
      {children} 
    </table> 
  )
}

export default CustomTable
