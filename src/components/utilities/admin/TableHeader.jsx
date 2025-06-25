import React from 'react'

const TableHeader = ({children}) => {
  return (
    <th className='uppercase font-montserrat text-[12px] tracking-[1px] border border-[#e5e7eb] text-center py-[10px] px-[7px]'>
      {children}
    </th>  
  )
}

export default TableHeader
