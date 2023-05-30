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
  });
  const [currentPage, setCurrentPage] = useState(1);

  const url = `http://localhost:3001/api/products?pageSize=${pageSize}&page=${currentPage}`;

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

      <Pagination
        currentPage={currentPage}
        itemsPerPage={pageSize}
        totalItems={response.totalItems}
        nextPage={response.page?.next}
        prevPage={response.page?.prev}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
