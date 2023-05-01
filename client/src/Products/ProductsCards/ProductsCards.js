import { useState, useEffect } from "react";

import "./ProductsCards.css";
import { ProductCard } from "../../lib/components";

const pageSize = 10;
const scrollThreshold = 400;

export const ProductsCards = () => {
  const [products, setProducts] = useState([]);

  // declare the state using useState hook that will be a boolean to indicate whether there are more products to load
  //    initial value should be false

  // declare the state using useState hook that will be a number to keep track of the current page
  //    initial should will be 1

  // Update the url variable to include the page size and current page number
  const url = "http://localhost:3001/api/products";

  // handleScroll function will be executed every time the scroll event is triggered
  // it is passed as a callback to the onScroll event handler on the div element bellow
  const handleScroll = (e) => {
    // extract the properties scrollTop, clientHeight, and scrollHeight from the e.currentTarget object using destructuring
    // info: scrollTop is the distance from the top of the scroll area to the top of the content
    //       clientHeight is the height of the scroll area
    //       scrollHeight is the height of the content
    // Calculate the distance from the bottom of the scroll area to the bottom of the content by subtracting scrollTop and scrollThreshold from the scrollHeight
    //     hint: scrollHeight - scrollTop - scrollThreshold
    //     store the result in a variable called distanceToBottom
    // compare the calculated distance to clientHeight. If the calculated distance is less than clientHeight, open if statement
    //     Check if hasMore is true, and if so, increase the currentPage state by 1
    // Info: Finally, when the current page is incremented, the useEffect hook will be triggered, and the fetchProducts function will be executed to fetch the next set of products.
  };

  // useEffect bellow is responsible for fetching the products from the API
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);
      const { data, page } = await response.json();

      setProducts((prevState) => [...prevState, ...data]);

      // Update the hasMore state with the value of the page.next property
      //   page.next is number of the next page, or null if there are no more pages
      //   convert the page.next value to a boolean using the Boolean function: Boolean(page.next)
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
