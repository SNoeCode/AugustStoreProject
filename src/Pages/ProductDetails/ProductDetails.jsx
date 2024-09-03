import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import { getDetails } from "../../Config/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import backgroundImage from "../../Image/black-white.png";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);
  if (!product) {
    return <div className="loading">Loading...</div>;
  }
  const navigateBack = () => navigate("/");
  const navigateToCart = () => navigate("/cart");
  const navigateToCheckout = () => navigate("/checkout");

  return (
    <>
      <Card
        sx={{
          height: "calc(100vh - 40px)",
          display: "flex",
          flexDirection: "column",
          maxWidth: 350,
          mt: 2,
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <CardMedia
          sx={{
            height: "auto",
            maxHeight: "40%",
            objectFit: "contain",
            flexShrink: 0,
          }}
          component="img"
          alt={product.title}
          // height="5"
          image={product.image}
        />
        <CardContent sx={{ flexGrow: 1, overflowY: "auto" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="small">Add To cart</Button>
          <Button size="small">Buy Now</Button>
        </CardActions>
      </Card>

      <button className="details-back-btn" onClick={navigateBack}>
        Back
      </button>
    </>
  );
};

export default ProductDetails;
