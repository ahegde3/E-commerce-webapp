const { fetchAllProducts, fetchProductById } = require("../model/products");

//return all products.
const getAllProducts = async () => {
  return await fetchAllProducts();
};

//returns a product that is having the matching id.
const getProductById = async (id) => {
  return await fetchProductById(id);
};

module.exports = { getAllProducts, getProductById };
