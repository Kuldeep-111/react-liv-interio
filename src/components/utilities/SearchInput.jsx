;
import React from 'react';

const SearchInput = ({ className,value, onChange, placeholder = "Search..." }) => {
  return (
    <div data-aos="fade-up" className={`w-full max-w-sm relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 pl-10 text-[var(--text-primary)] placeholder:text-[var(--text-primary)] border border-[var(--text-primary)] rounded-md  focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
      />
      
      <img src="/assets/icons/search.webp" alt='search icon' width={20} height={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
      
    </div>
  );
};

export default SearchInput;
