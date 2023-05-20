const productService = require("../services/ProductService");

const {
  generatePaginationVariables,
  generatePaginationPageResponse,
} = require("../utils/pagination");

exports.getAllProducts = async (req, res) => {
  try {
    const { page, pageSize, skip, totalFetchedItemsCount } =
      generatePaginationVariables(req);

    const products = await productService.getAllProducts(pageSize, skip);
    const allProductsCount = await productService.getAllProductsCount();

    const data = products.map((product) => ({
      id: product._id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      uploadedAt: new Date(product.createdAt).toLocaleDateString(),
    }));

    const response = {
      data,
      page: generatePaginationPageResponse(
        totalFetchedItemsCount,
        allProductsCount,
        page,
        skip
      ),
      totalItems: allProductsCount,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
