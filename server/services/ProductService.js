const ProductModel = require("../models/product.js");

exports.getAllProductsCount = async () => {
  return await ProductModel.countDocuments();
};

// getAllProducts should accept two parameters: limit and skip
//    limit is the number of items to fetch
//    skip is the number of items to skip
// hint: use the limit() and skip() methods from mongoose
// example: ProductModel.find().limit(10).skip(10).exec();
exports.getAllProducts = async (limit, skip) => {
  return await ProductModel.find();
};
