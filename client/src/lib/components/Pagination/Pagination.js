import { useState } from "react";

import "./Pagination.css";

const getPaginationItems = (currentPage, totalPages) => {
  // 1. Initialize an empty array called pages. This will be used to store the pagination items.
  //
  // 2. Use a for loop to iterate from 1 up to totalPages.
  //    On each iteration, create an object with two properties: pageNumber and className
  //  2.1 Set the value of pageNumber to the current iteration value of i
  //  2.2 Set the value of className to a string with the value of 'pagination__button'
  //    2.2.1 Use a ternary operator or if-else to add the "pagination__button--active" class
  //          to the className string if the current pageNumber is equal to the currentPage
  //          EXAMPLE: currentPage === i ? "pagination__button--active" : ""
  //
  // 3. Push the object to the pages array
  //
  // 4. After the for loop is complete, return the pages array
};

/**
 * Pagination component takes 3 props: totalItems, itemsPerPage, and onPageChange
 * @param totalItems - total number of items that need to be paginated
 * @param itemsPerPage - number of items to display per page
 * @param prevPage - the previous page number
 * @param nextPage - the next page number
 * @param onPageChange - function that will be called when a user clicks on a pagination button
 */
export const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  prevPage,
  nextPage,
  onPageChange,
}) => {
  // 2. Calculate the totalPages by dividing totalItems by itemsPerPage and rounding up to the nearest integer using Math.ceil()

  // 3. Use the getPaginationItems function to generate an array of pagination items, passing in the currentPage and totalPages variables as arguments.

  return (
    <div className='pagination'>
      {/* 5. Render a "Prev" button with the 'pagination__button' className and with the disabled attribute set to !prevPage (meaning the button is disabled
            if there is no previous page)
            5.1 Attach an onClick event listener that calls the handleClick function with prevPage as an argument.
      */}
      {/* 6. Use the map() method to iterate over the paginationItems array and render a button for each pagination item
            6.1 Give each button a key prop equal to its pageNumber value.
            6.2 Assign the button's className prop the value of paginationItem.className.
            6.3 Assign the button's onClick prop a function that calls the onPageChange function with the button's pageNumber as an argument.
            6.4 Finally, display the button's pageNumber as its content.
      */}
      {/* 7. Render a "Next" button with the 'pagination__button' className and with the disabled attribute set to !nextPage (meaning the button is disabled
            if there is no next page)
            7.1 Attach an onClick event listener that calls the handleClick function with nextPage as an argument.
      */}
    </div>
  );
};
