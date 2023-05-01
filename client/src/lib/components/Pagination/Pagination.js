import { useState } from "react";

import "./Pagination.css";

const getPaginationItems = (currentPaginationItem, totalPaginationItems) => {
  const pages = [];

  for (let i = 1; i <= totalPaginationItems; i++) {
    pages.push({
      pageNumber: i,
      className: `pagination__button ${
        currentPaginationItem === i ? "pagination__button--active" : ""
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
