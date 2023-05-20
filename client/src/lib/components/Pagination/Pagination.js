import { useState } from "react";

import "./Pagination.css";

const getPaginationItems = (currentPage, totalPages) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push({
      pageNumber: i,
      className: `pagination__button ${
        currentPage === i ? "pagination__button--active" : ""
      }`,
    });
  }

  return pages;
};

export const Pagination = ({
  totalItems,
  itemsPerPage,
  prevPage,
  nextPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationItems = getPaginationItems(currentPage, totalPages);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className='pagination'>
      <button
        className='pagination__button'
        disabled={!prevPage}
        onClick={() => handleClick(prevPage)}
      >
        Prev
      </button>

      {paginationItems.map((paginationItem) => (
        <button
          key={paginationItem.pageNumber}
          className={paginationItem.className}
          onClick={() => handleClick(paginationItem.pageNumber)}
        >
          {paginationItem.pageNumber}
        </button>
      ))}

      <button
        className='pagination__button'
        disabled={!nextPage}
        onClick={() => handleClick(nextPage)}
      >
        Next
      </button>
    </div>
  );
};
