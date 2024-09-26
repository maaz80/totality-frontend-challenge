'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage 
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Add to cart function 
  const addToCart = (property) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === property.id);
      if (existing) {
        return prev.map(item =>
          item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...property, quantity: 1 }];
    });
  };

  // Remove from cart function 
  const removeFromCart = (id) => {
    setCart(prev => {
      const updatedCart = prev.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage with new cart
      return updatedCart;
    });
  };

  // Total cost 
  const totalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
