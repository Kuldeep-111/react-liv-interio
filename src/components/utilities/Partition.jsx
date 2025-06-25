import React from 'react';

const Partition = ({ className = '' }) => {
  return (
    <div className={` h-[0.7px] w-[100%] z-10 pointer-events-none ${className}`} >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
    </div>
  );
};

export default Partition;
