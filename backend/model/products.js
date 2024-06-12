// const productList = [
//   {
//     id: 1,
//     name: "Shirt",
//     price: 29.99,
//     description: "A synthentic shirt",
//     category: "Clothes",
//     image:
//       "https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg",
//   },
//   {
//     id: 2,
//     name: "Office Supply Collect",
//     price: 199.99,
//     description: "Collection of Office Supply",
//     category: "Office Supply",
//     image: "https://m.media-amazon.com/images/I/81K5l37CaGL._AC_SX679_.jpg",
//   },
//   {
//     id: 3,
//     name: "Jeans blue",
//     price: 15.99,
//     description: "Good Jeans",
//     category: "Clothes",
//     image:
//       "https://images.jackjones.com/12202489/3796886/003/jackjones-jjieddiejjoriginalcj911pcwloosefitjeans-blue.jpg?v=2ce2e6e522a942d33678d692585eb9fc&format=webp&width=1280&quality=90&key=25-0-3",
//   },
//   {
//     id: 4,
//     name: "Jeans navy blue",
//     price: 15.99,
//     description: "Female Jeans",
//     category: "Clothes",
//     image:
//       "https://www.instyle.com/thmb/3EsIDyohSwXbEF8dzoJodlGAy4A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mom-Jeans-outfit-GettyImages-1414681198-86c62167bddd4780a0b3f1d119bfd54a.jpg",
//   },
//   {
//     id: 5,
//     name: "Stapler",
//     price: 10,
//     description: "A red stapler",
//     category: "Office Supply",
//     image:
//       "https://as1.ftcdn.net/v2/jpg/00/41/02/14/1000_F_41021477_hxrSdNLKvM6bSXhHvy3VNzy6j0KF0PgY.jpg",
//   },
// ];

const fetchAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM products", (err, rows) => {
      if (err) {
        reject(new Error("Failed to fetch products."));
      } else {
        resolve(rows);
      }
    });
  });
};

const fetchProductById = (id) => {
  if (!id) throw new Error("Product ID is required");
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM products WHERE id = ${id}`, (err, row) => {
      if (err) {
        reject(new Error("Failed to fetch product."));
      } else {
        resolve(row);
      }
    });
  });
};

module.exports = { fetchAllProducts, fetchProductById };
