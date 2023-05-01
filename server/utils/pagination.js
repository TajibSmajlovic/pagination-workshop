exports.generatePaginationVariables = (req) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);
  const skip = (page - 1) * pageSize;
  const totalFetchedItemsCount = page * pageSize;

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

  if (totalFetchedItemsCount < allItemsCount) {
    next = page + 1;
  }

  if (skip !== 0) {
    prev = page - 1;
  }

  return {
    next,
    prev,
  };
};
