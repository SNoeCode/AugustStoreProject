import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigateBack = () => {
    navigate("/");
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }
  const navigateToCart = () => {
    navigate("/cart");
  };
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="wrapper">
        <div className="btn">
          <button onClick={navigateBack}>Back</button>
        </div>
        <div className="outer">
          <div className="content" product-key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
          <img src={product.image} alt={product.title} width="300px" />

          <button>
            <a href="#"> </a>
          </button>

          <i
            className="fas fa-cart-
        plus fa-2x"
          >
            <a className="cart-btn" href="#"></a>
          </i>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
