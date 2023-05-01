const ProductModel = require("../models/product.js");

exports.getAllProductsCount = async () => {
  return await ProductModel.countDocuments();
};

exports.getAllProducts = async (limit, skip) => {
  return await ProductModel.find().limit(limit).skip(skip).exec();
};
