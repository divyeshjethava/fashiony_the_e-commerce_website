import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
};
const getTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0); 
};

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart,getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};