import "./Products.css";
import { Tabs } from "../lib/components";
import { ProductsTable } from "./ProductsTable/ProductsTable";
import { ProductsCards } from "./ProductsCards/ProductsCards";

const tabs = [
  {
    id: "products-table",
    title: "Products Table",
    Component: ProductsTable,
  },
  {
    id: "products-cards",
    title: "Products Cards",
    Component: ProductsCards,
  },
];

export const Products = () => (
  <div className='products-wrapper'>
    <Tabs tabs={tabs} />
  </div>
);
