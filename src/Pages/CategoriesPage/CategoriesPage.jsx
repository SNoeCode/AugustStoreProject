import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Category.css";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  const handleReadMore = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleShowLess = () => {
    setShowModal(false);
    currentProduct(null);
  };

  return (
    <div className={`category-page ${category ? category + "-page" : ""}`}>
      <button onClick={() => navigate("/")} className="back-button">
        Back
      </button>
      {category && (
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      )}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="card">
              <div className="card-content">
                <h2 className="product-title">{product.title}</h2>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              <p>
                {product.description.slice(0, 50)}...
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleReadMore(product);
                  }}
                  className="read-more-link"
                >
                  Read More....
                </a>
              </p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
      {showModal && currentProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">{currentProduct.title}</h2>
            <p className="product-price">${currentProduct.price}</p>
            <span>
              <img src={currentProduct.image} alt={currentProduct.title} />
              <button className="buy-now-button">Buy Now</button>
            </span>
            {currentProduct.description}
            <a href="#" onClick={handleShowLess}>
              ....Read Less
            </a>

            <div className="rating-container">
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Typography component="legend">Product Rating</Typography>
                <Rating
                  name="read-only"
                  value={currentProduct.rating.rate}
                  size="large"
                  readOnly
                />
              </Box>
            </div>

            <div className="button-container-cart">
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
