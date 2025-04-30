import React, { createContext, useState } from "react";

/*
 * CartContext: A React Context for managing shopping cart state globally
 * Learning objectives:
 * - Understanding Context API for global state management
 * - Practice useState with complex state objects
 * - Implementing cart operations (add, remove, update quantity)
 */
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // TODO: Implement cart items state
  // Should be an array of objects with structure:
  // { id, title, price, quantity }
  const [cartItems, setCartItems] = useState([]);

  // TODO: Implement total items count state
  const [itemsCount, setItemsCount] = useState(0);

  // TODO: Implement total price state
  const [totalPrice, setTotalPrice] = useState(0);

  // TODO: Implement addToCart function
  // Should handle:
  // 1. Adding new items to cart
  // 2. Updating quantity for existing items
  // 3. Updating total price and count
  const addToCart = (product) => {
    // Your code here
  };

  // TODO: Implement removeFromCart function
  const removeFromCart = (productId) => {
    // Your code here
  };

  // TODO: Implement updateQuantity function
  const updateQuantity = (productId, newQuantity) => {
    // Your code here
  };

  // TODO: Implement clearCart function
  const clearCart = () => {
    // Your code here
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemsCount,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
