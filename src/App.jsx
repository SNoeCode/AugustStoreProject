import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import UserLogin from "./Pages/UserLogin/UserLogin";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Category from "./Pages/CategoryPage/Category";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login/" element={<UserLogin />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/categories/:category" element={<Category />} />
        {/* <Route path="/product-search" element={<ProductSearch />} /> */}
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/product-detail/:id" element={<Navbar />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <div style={{ height: 100 }} />
      <Footer />
    </>
  );
};

export default App;
