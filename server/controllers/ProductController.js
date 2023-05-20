const productService = require("../services/ProductService");

exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);
    const skip = (page - 1) * pageSize;
    const totalFetchedItemsCount = page * pageSize;

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
      page: {
        next: totalFetchedItemsCount < allProductsCount ? page + 1 : null,
        prev: skip !== 0 ? page - 1 : null,
      },
      totalItems: allProductsCount,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
