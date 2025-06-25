;
import React from 'react';

const TableData = ({ children, heading, colSpan, className }) => {
  return (
    <td
  colSpan={colSpan}
  className={`relative border border-[#e5e7eb] text-center p-[7px] text-[12px] 2xl:text-[14px] ${className}`}
> 
  {children}
 
  {heading && (
    <button className="group absolute right-[10px] top-[10px] bg-[#f4f4f4] hover:shadow-sm rounded-full p-[2px]">
      <img
        src="/assets/icons/tooltip.webp"
        alt="icon"
        width={25}
        height={25}
      />
      <div className="absolute right-0 top-[40px]  w-[300px] 2xl:w-[600px]  p-5 text-[12px] 2xl:text-[14px] bg-[#f4f4f4] rounded shadow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <img src="/assets/icons/tooltip-arrow.webp" alt='up-arrow' width={20} height={20} className='absolute right-[5px] top-[-10px]'/>
        {heading}
      </div>
    </button>
  )}
</td>

  );
};

export default TableData;
