import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  className = '',
  href = '',
  button = false,
  onOpen,
  animation = '',
}) => {
  const baseClasses = `text-[#000] leading-[10px] w-fit block mx-auto md:mx-0 text-[10px] 2xl:text-[12px] tracking-[1px] 2xl:font-[600] h-fit rounded bg-[#FBF6E5] hover:bg-[var(--text-primary)] hover:text-white transition-colors duration-300 uppercase border border-[var(--text-primary)] py-[14px] 2xl:py-[15px] px-[30px] 2xl:px-[40px] ${className}`;

  return button ? (
    <button data-aos={animation} onClick={onOpen} className={baseClasses}>
      {children}
    </button>
  ) : (
    <Link data-aos={animation} to={href} className={baseClasses}>
      {children}
    </Link>
  );
};

export default Button;
