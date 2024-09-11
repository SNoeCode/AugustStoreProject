import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext";
import { useParams } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const {
    isCartOpen,
    cartItems,
    toggleCart,
    removeItem,
    incrementItem,
    decrementItem,
  } = useContext(cartContext);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "cart") {
        toggleCart();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [toggleCart]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className="cart" id="cart">
      <h2 className="my-cart">My Cart ({cartItems.length})</h2>
      <div className="cart-content">
        <div className="cart-head">
          <div title="Close" className="close-btn" onClick={toggleCart}>
            Close &times;
          </div>
        </div>

        <div className="cart-container">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="shopping-cart">
                <div className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="btn-container">
                    <button
                      className="add"
                      onClick={() => incrementItem(item.id)}
                    >
                      +
                    </button>{" "}
                    <p className="quantity">Quantity: {item.quantity}</p>
                    <button
                      className="minus"
                      onClick={() => decrementItem(item.id)}
                    >
                      -
                    </button>
                  </div>
                  <p className="price">Price: ${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="empty">Your cart is empty</p>
          )}
          <h2 className="total">Total: $${totalPrice}</h2>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
