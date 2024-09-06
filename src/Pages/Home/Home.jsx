import React from "react";
import "./Home.css";
import { getProducts } from "../../config/api";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
// import LoadMoreButton from "../../Components/LoadMoreButton/LoadMoreButton";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const navigateToNewPage = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="banner">
          <h1>Welcome to Our Online Store</h1>
          <p>Find the best products here</p>
        </div>

        <div className="container">
          {products.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => {
                navigateToNewPage(item.id);
              }}
            >
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
                      color: "#fce276",
                      textAlign: "center",
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
                <button class="button-1">More Details</button>
              </div>
            </div>
          ))}
        </div>
        {/* <LoadMoreButton /> */}
      </div>
    </>
  );
};

export default Home;
