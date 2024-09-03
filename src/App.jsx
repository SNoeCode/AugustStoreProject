import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import UserLogin from "./Pages/UserLogin/UserLogin";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Category from "./Pages/CategoriesPage/CategoriesPage";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/user-login/" element={<UserLogin />} />
        <Route path="/" element={<UserLogin />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/product-detail/:id" element={<Navbar />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-detail/:id" element={<SearchBar />} />
      </Routes>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      />
      <Footer />
    </>
  );
};

export default App;
