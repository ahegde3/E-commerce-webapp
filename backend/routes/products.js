const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../controller/products");


router.get("/", async (req, res) => {
  const { id } = req.query;

  try {
    let result;
    //based on input params decide which function to call
    if (id) result = await getProductById(id);
    else result = await getAllProducts();
    return res.json(result);
  } catch (e) {
    res.statusCode = 500;
    return res.json({ error: e });
  }
});

module.exports = router;
