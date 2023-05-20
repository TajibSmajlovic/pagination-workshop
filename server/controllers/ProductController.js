const productService = require("../services/ProductService");

exports.getAllProducts = async (req, res) => {
  try {
    // create page and pageSize variables from query params
    // hint: use parseInt() to convert string to number
    // hint: use req.query to access query params

    // calculate the value of skip, which is the number of items to skip before returning the result, by multiplying page-1 and pageSize
    // hint: (page - 1) * pageSize

    // calculate the total number of items fetched so far by multiplying skip and pageSize

    // modify getAllProducts() function from the productService to accept pageSize and skip as parameters
    const products = await productService.getAllProducts();

    // fetch the total number of products in the database
    // hint: use getAllProductsCount() method from productService

    // mapping the products entities fetched from the database to the new array of objects containing only the properties we need on the client
    const data = products.map((product) => ({
      id: product._id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      uploadedAt: new Date(product.createdAt).toLocaleDateString(),
    }));

    // Update the response object:
    //    1. add new object property called page which is an object with two properties:
    //    - next: the next property is calculated by adding 1 to the current page number if the total number of items fetched so far
    //            is less than the total number of items in the database, otherwise it is null
    //    - prev: the prev property is calculated by subtracting 1 from the current page number if the skip is greater than 0, otherwise it is null
    //   2. add new object property called totalItems which is the total number of items in the database

    const response = {
      data,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
