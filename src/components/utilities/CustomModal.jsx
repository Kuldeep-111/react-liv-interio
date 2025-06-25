import React from 'react';
import Overlay from './Overlay';

const CustomModal = ({ children, onClose, className = '' }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 px-[20px]">
      <Overlay className="opacity-40" />
      <div className={`relative bg-[var(--text-primary)] rounded-lg p-2 max-w-lg w-full z-101 ${className}`}>
        <button
          onClick={onClose}
          className="absolute right-[-20px] top-[-20px] w-[35px] h-[35px] 2xl:w-[50px] 2xl:h-[50px] bg-[var(--background-primary)] flex items-center justify-center rounded-full border border-[var(--text-primary)]"
        >
          <img
            src="/assets/icons/close.webp"
            alt="close icon"
            width={20}
            height={20} 
            className="w-[15px] invert h-[15px] 2xl:w-[20px] 2xl:h-[20px]"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
