import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getAllProducts } from "../api/products";
import Product from "../components/ProductCard";
import SearchBox from "../components/Searchbox";
import { toast } from "react-toastify";

export default function Home() {
  const [unfilteredProductList, setUnfilteredProductList] = useState([]); //keeps the original list of products.
  const [productList, setProductList] = useState([]); //keeps the list of products to be displayed after filtering.
  const navigate = useNavigate();

  //fetch all products when the page is rendered.
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (!res)
          toast.error("Failed to fetch products.", {
            position: "top-right",
          });
        setProductList(res);
        setUnfilteredProductList(res);
      })
      .catch((err) => {
        if (err.message === "Forbidden") {
          localStorage.removeItem("isLogged");
          localStorage.removeItem("token");
          navigate("/"); //redirect to login page because the token is not valid.
        }
      });
  }, []);

  const searchProducts = (keyword) => {
    if (!keyword) return;
    //filter the product based on the keyword matching name and category.
    const filteredProducts = unfilteredProductList.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.category.toLowerCase().includes(keyword.toLowerCase())
    );

    setProductList(filteredProducts);
  };

  return (
    <div>
      <Navbar />
      <div>
        <SearchBox searchProducts={searchProducts} />
      </div>
      <div style={{ margin: "50px" }}>
        {productList &&
          productList.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
