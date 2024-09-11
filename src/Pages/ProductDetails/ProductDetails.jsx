import React, { useState, useEffect, useContext } from "react";
// import CartContext from "../../Config/context";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import backgroundImage from "../../Image/black-white.png";

// const ProductList = () => {
//   const { dispatch } = useContext(CartContext);
// };
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
      <button className="details-back-btn" onClick={navigateBack}>
        Back
      </button>
      <Card
        sx={{
          // height: "calc(100vh - 40px)",
          height: "100%",
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
            height: "100px",
            maxHeight: "40%",
            objectFit: "contain",
            flexShrink: 0,
            mt: "20px",
          }}
          component="img"
          alt={product.title}
          height="3"
          image={product.image}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            textAlign: "center",
            mt: "10px",
          }}
        >
          <Typography
            sx={{ fontSize: "12px", mb: "20px" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mt: "30px" }}>
          <Button
            // onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            sx={{ display: "flex" }}
            size="small"
          >
            Add To cart
          </Button>
          <Button size="small">Buy Now</Button>
        </CardActions>
      </Card>

      <RemoveScrollBar />
    </>
  );
};

export default ProductDetails;
