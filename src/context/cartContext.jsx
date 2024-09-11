import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    isCartOpen: false,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const addItem = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { item },
    });
  };

  const removeItem = (itemId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { itemId },
    });
  };

  const incrementItem = (itemId) => {
    dispatch({
      type: "INCREMENT",
      payload: { itemId },
    });
  };

  const decrementItem = (itemId) => {
    dispatch({
      type: "DECREMENT",
      payload: { itemId },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value = {
    cartItems: state.cartItems,
    isCartOpen: state.isCartOpen,
    addItem,
    toggleCart,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
export default cartContext;
