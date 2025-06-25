import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div data-aos="fade-right" className="flex items-center justify-start space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-[12px] px-3 py-1 hover:bg-whit disabled:opacity-50"
      >
        Prev 
      </button>

      {visiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={`text-[12px] px-3 py-1 hover:bg-white hover:text-black ${
            currentPage === page ? 'bg-black text-white' : '' 
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-[12px] px-3 py-1 hover:bg-whit disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

// Helper: Generate array of visible page numbers (like [1, 2, 3, 4])
const getVisiblePages = (currentPage, totalPages) => {
  const maxPagesToShow = 3;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxPagesToShow - 1);

  if (end - start < maxPagesToShow - 1) {
    start = Math.max(1, end - maxPagesToShow + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

export default Pagination;
