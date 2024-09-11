import React from "react";
import Facebook from "./Components/FacebookButton/facebook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
// import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import UserLogin from "./Pages/UserLogin/UserLogin";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { CartProvider } from "./context/cartContext";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

import Category from "./Pages/CategoriesPage/CategoriesPage";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import { Wrapper, ScrollToTop } from "./Components/ScrollTop/ScrollTop";
const App = () => {
  // const scrollTop = useScrollTop();
  return (
    <>
      <CartProvider>
        <Navbar />
        <ShoppingCart />
        <Routes>
          {/* <ShoppingCart /> */}
          {/* <Route path="/" element={<SignUp />} />

<Route path="/sign-up" element={<Navbar />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/" element={<UserLogin />} />
          {/* <Route path="/product-detail/:id" element={<Navbar />} /> */}
          {/* <Route path="/product-detail/:id" element={<Navbar />} /> */}
          <Route path="/product-detail/:id" element={<ProductDetails />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route path="/user-login/" element={<UserLogin />} />
        </Routes>

        <div
          style={{
            // minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        />
        <Footer />
      </CartProvider>
    </>
  );
};
export default App;
