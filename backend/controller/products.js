const { productList } = require("../model/products");

//return all products.
const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(productList);
  });
};

//returns a product that is having the matching id.
const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) reject("Product ID is required");

    //search for the product with the matching id in the product list.
    const product = productList.find((product) => product.id === parseInt(id));
    if (product) {
      resolve(product);
    } else {
      reject("Product not found");
    }
  });
};

module.exports = { getAllProducts, getProductById };
