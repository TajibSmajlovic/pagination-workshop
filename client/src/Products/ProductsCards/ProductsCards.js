import { useState, useEffect } from "react";

import "./ProductsCards.css";
import { ProductCard } from "../../lib/components";

const pageSize = 10;
const scrollThreshold = 400;

export const ProductsCards = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const url = `http://localhost:3001/api/products?pageSize=${pageSize}&page=${currentPage}`;

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop - scrollThreshold < clientHeight) {
      if (hasMore) {
        setCurrentPage((prevState) => prevState + 1);
      }
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);
      const { data, page } = await response.json();

      setHasMore(Boolean(page.next));
      setProducts((prevState) => [...prevState, ...data]);
    }

    fetchProducts();
  }, [url]);

  return (
    <div className='products' onScroll={handleScroll}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};
