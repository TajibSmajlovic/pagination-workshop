// !IMPORTANT: don't forget to import this file in ProductController.js file and use the functions in the controller once you finish the implementation

exports.generatePaginationVariables = (req) => {
  // assign a values to page and pageSize variables from query params
  // hint: use parseInt() to convert string to number
  // hint: use req.query to access query params
  const page = null;
  const pageSize = null;

  // calculate the value of skip, which is the number of items to skip before returning the result, by multiplying page-1 and pageSize
  const skip = null;

  // calculate the total number of items fetched so far by adding skip and pageSize
  const totalFetchedItemsCount = null;

  return {
    page,
    pageSize,
    skip,
    totalFetchedItemsCount,
  };
};

exports.generatePaginationPageResponse = (
  totalFetchedItemsCount,
  allItemsCount,
  page,
  skip
) => {
  let next = null;
  let prev = null;

  // check if the total number of items fetched (totalFetchedItemsCount argument) so far is less than the total number of items
  // in the database (allItemsCount argument)
  //    if it is, then update the next variable by adding 1 to the current page number (page argument)

  // check if the skip variable is greater than 0
  //    if it is, then update the prev variable by subtracting 1 from the current page number (page argument)

  return {
    next,
    prev,
  };
};
