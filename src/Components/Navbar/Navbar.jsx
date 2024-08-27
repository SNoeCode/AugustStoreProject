import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getProducts, getCategories } from "../../config/api";
import "./Navbar.css";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropdown, setDropdown] = useState(false);
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

  const handleSearchChange = (event) => {
    const query = event.prevent.toLowerCase();
    setSearchTerm(query);
    if (query.length > 1) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };
  const handleSearchClick = (id) => {
    navigate(`/product-detail/${id}`);
  };
  const handleSearchSubmit = () => {
    navigate(`/categories?query=${searchTerm}`);
  };
  const handleNavigation = (path) => {
    navigate(path);
  };
  //   if (searchTerm) {
  //     navigate(`/product-search?query=${encodeURIComponent(searchTerm)}`);
  //   }
  // };

  // const handleNavigation = (path) => {
  //   navigate(path);
  // };

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
              <button className="dropbtn">Categories</button>
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
              <button
                className="contact-btn"
                onClick={() => handleNavigation("/contact-us")}
              >
                Contact Us
              </button>
            </li>

            {/* <form className="search-form" onSubmit={handleSearch}> */}
            <div className="search-auto">
              <input
                type="text"
                onChange={handleSearchChange}
                placeholder="Search products..."
                value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              {dropdown && (
                <ul className="suggestions-dropdown">
                  {filtered.products.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleSearchClick(product.id)}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="suggestion-img"
                      />{" "}
                      <span>{product.title}</span>
                    </li>
                  ))}
                </ul>
              )}
              <li>
                <button onClick={handleSearchSubmit}>Search</button>
              </li>
            </div>
            <li
              className="shopping-cart"
              onClick={() => handleNavigation("/shopping-cart")}
            >
              <i
                className="fas fa-cart-shopping fa-2x"
                onClick={() => handleNavigation("/")}
              >
                <sup>{"3"}</sup>
              </i>
            </li>

            <li>
              <button
                className="login-btn"
                onClick={() => handleNavigation("/user-login")}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="sign-up-btn"
                onClick={() => handleNavigation("/sign-up")}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
