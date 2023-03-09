import React, { useState, useEffect } from 'react';
import '../styles/Pagination.css'

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [displayPages, setDisplayPages] = useState<number[]>([]);

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  useEffect(() => {
    const calculateDisplayPages = () => {
      const maxPagesToShow = 5;
      const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
      let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      if (endPage - startPage < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      setDisplayPages(pages);
    };

    calculateDisplayPages();
  }, [currentPage, totalPages]);

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>
      {displayPages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination__button ${pageNumber === currentPage ? 'pagination__button--active' : ''}`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pagination__button" onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
