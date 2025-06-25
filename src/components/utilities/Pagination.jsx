import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [isThrottled, setIsThrottled] = useState(false);

  const getVisiblePages = () => {
    const maxPagesToShow = 3;
    const pages = [];

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);

      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push('...');

      pages.push(totalPages);
    }

    return pages;
  };

  const handleClick = (page) => {
    if (isThrottled || page === '...' || page === currentPage) return;

    setIsThrottled(true);
    onPageChange(page);
    setTimeout(() => setIsThrottled(false), 300); // throttle next clicks
  };

  return (
    <div data-aos="fade-right" className="flex items-center justify-start space-x-2 mt-6">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-[12px] px-3 py-1 hover:bg-white disabled:opacity-50"
      >
        Prev
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => handleClick(page)}
          className={`text-[12px] px-3 py-1 hover:bg-white hover:text-black ${
            currentPage === page ? 'bg-black text-white' : ''
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-[12px] px-3 py-1 hover:bg-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
