import React from "react";
import "./Home.css";
import { getProducts } from "../../config/api";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import cartContext from "../../context/cartContext";
import Box from "@mui/material/Box";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
const Home = (props) => {
  const navigate = useNavigate();
  const { addItem } = useContext(cartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [products, setProducts] = useState([]);
  const handleAddToCart = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
    };
    addItem(newItem);

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  const navigateToNewPage = (id) => {
    navigate(`/product-detail/${id}`);
    const handleAddToCart = (product) => {
      addToCart(product);
    };
  };

  return (
    <>
      <div className="home-page">
        <div className="banner">
          <h1>Welcome to Our Online Store</h1>
          <p>Find the best products here</p>
        </div>

        <div className="container">
          {products.map((item) => {
            item.quantity = 1;
            return (
              <div key={item.id} className="card">
                <h1>
                  <b>{item.title}</b>
                </h1>
                <img src={item.image} alt={item.title} className="img" />
                <h2>
                  <b>Price: ${item.price}</b>
                </h2>
                <div className="rating-container">
                  <Box
                    sx={{
                      "& > legend": {
                        mt: 2,
                        width: "auto",
                        color: "#cd74a0",
                        textAlign: "center",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <Typography component="legend">Product Rating</Typography>
                    <Rating
                      name="read-only"
                      value={item.rating.rate}
                      size="small"
                      readOnly
                    />
                  </Box>
                  <button
                    onClick={() => {
                      navigateToNewPage(item.id);
                      // navigate(`/product-detail/${id}`);
                    }}
                    className="button-1"
                  >
                    More Details
                  </button>
                </div>
                <button
                  className={`btn ${isAdded ? "added" : ""}`}
                  onClick={() => handleAddToCart(item)} // Pass the correct product here
                >
                  {isAdded ? "Added" : "Add to cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
