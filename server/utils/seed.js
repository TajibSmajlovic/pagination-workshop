const ProductModel = require("../models/product.js");

// creating an array of 100 products
const products = Array.from({ length: 100 }, (_, index) => ({
  title: `Product ${index + 1}`,
  description: `This is product ${index + 1}`,
  price: (index + 1) * 10,
  image: "https://picsum.photos/600",
  createdAt: new Date(),
}));

exports.seedDatabase = async () => {
  await ProductModel.deleteMany({});
  await ProductModel.insertMany(products);
};
