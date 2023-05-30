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
  currentPage,
  totalItems,
  itemsPerPage,
  prevPage,
  nextPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationItems = getPaginationItems(currentPage, totalPages);

  return (
    <div className='pagination'>
      <button
        className='pagination__button'
        disabled={!prevPage}
        onClick={() => onPageChange(prevPage)}
      >
        Prev
      </button>

      {paginationItems.map((paginationItem) => (
        <button
          key={paginationItem.pageNumber}
          className={paginationItem.className}
          onClick={() => onPageChange(paginationItem.pageNumber)}
        >
          {paginationItem.pageNumber}
        </button>
      ))}

      <button
        className='pagination__button'
        disabled={!nextPage}
        onClick={() => onPageChange(nextPage)}
      >
        Next
      </button>
    </div>
  );
};
