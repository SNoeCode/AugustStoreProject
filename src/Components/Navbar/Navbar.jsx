import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getProducts, getCategories } from "../../config/api.js";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import cartContext from "../../context/cartContext.jsx";

const Navbar = () => {
  const { cartItems, toggleCart } = useContext(cartContext);
  const cartQuantity = cartItems.length;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
    getProducts().then((res) => {
      setLoading(true);
      setProducts(res.data);
    });
  }, []);

  const handleSearchClick = (id) => {
    navigate(`/product-detail/${id}`);
  };
  const handleSearchSubmit = () => {
    navigate(`/categories?query=${searchTerm}`);
  };
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container-navbar">
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <i
                className="fas fa-house-chimney fa-2x"
                onClick={() => handleNavigation("/")}
              ></i>
            </li>
            <li className="dropdown">
              <button className="dropdown-btn">Categories</button>
              <div className="dropdown-content">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleNavigation(`/categories/${category}`)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </li>

            <li>
              <button onClick={() => handleNavigation("/contact-us")}>
                Contact Us
              </button>
            </li>
            <div className="searchbar-container">
              <SearchBar />
              <button>Search</button>
            </div>

            <li>
              <button
                className="login-btn"
                onClick={() => handleNavigation("/user-login")}
              >
                Login
              </button>

              <button
                className="signup-btn"
                onClick={() => handleNavigation("/sign-up")}
              >
                Sign Up
              </button>
            </li>
            <li className="shopping-cart">
              <i className="fas fa-cart-shopping fa-2x" onClick={toggleCart}>
                {cartQuantity >= 1 && (
                  <span className="badge">{cartQuantity}</span>
                )}
              </i>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
