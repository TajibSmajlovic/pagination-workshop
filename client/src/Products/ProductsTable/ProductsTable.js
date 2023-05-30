import { useEffect, useState } from "react";

import "./ProductsTable.css";
import { Table, Pagination } from "../../lib/components";

const pageSize = 10;

const columns = [
  { label: "Title", key: "title" },
  { label: "Description", key: "description" },
  { label: "Price", key: "price" },
  {
    label: "Uploaded At",
    key: "uploadedAt",
  },
];

export const ProductsTable = () => {
  const [response, setResponse] = useState({
    data: [],
    page: {},
  });

  // declare the state using useState hook that will be a number to keep track of the current page
  //    initial should will be 1

  // Update the url variable to include the page size and current page number as query parameters
  // example of how url should look like: http://localhost:3001/api/products?pageSize=10&page=1
  const url = "http://localhost:3001/api/products";

  // useEffect bellow is responsible for fetching the products from the API
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);
      const responseJson = await response.json();

      setResponse(responseJson);
    }

    fetchProducts();
  }, [url]);

  return (
    <div className='products-table-wrapper'>
      <Table columns={columns} data={response.data} />
      {/* {
      render <Pagination /> component with the following props:
        currentPage: This should be set to the page state variable that is declared above
        itemsPerPage: This should be set to the same value as the pageSize variable that is used in the API url
          itemsPerPage is used to calculate the total number of pages that will be rendered as buttons in the pagination component
        totalItems: This should be set to the total number of items available from the API response (hint: response.totalItems)
        nextPage: This should be set to the next property of the page object from the API response, if it exists
          nextPage is used to determine whether the next button should be disabled or not
        prevPage: This should be set to the prev property of the page object from the API response, if it exists
          prevPage is used to determine whether the previous button should be disabled or not
        onPageChange: This should be set to a function that updates the currentPage state variable to the selected page number
      } */}
    </div>
  );
};
