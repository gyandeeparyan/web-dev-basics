import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

/*
 * Products Component: Displays individual product items and handles cart interactions
 * Learning objectives:
 * - Practice using useContext hook to access cart functions
 * - Handle user interactions with products
 * - Implement proper prop usage
 */
export const Products = ({ item }) => {
  // TODO: Extract required functions from CartContext
  // Hint: You'll need addToCart, updateQuantity functions
  const { addToCart } = useContext(CartContext);

  // TODO: Implement quantity selection
  // Hint: Use local state to manage selected quantity before adding to cart

  // TODO: Implement handleAddToCart function
  const handleAddToCart = () => {
    // Your code here:
    // 1. Validate quantity
    // 2. Call addToCart with product and quantity
    // 3. Show feedback to user (optional)
  };

  return (
    <div className='flex flex-row items-center justify-around h-[250px] bg-white rounded-lg shadow-md m-2 p-2'>
      <img src={item.image} alt={item.title} className='h-50 w-50' />

      <div className='flex flex-col gap-2'>
        <span className='text-gray-600'>Category: {item.category}</span>
        <span className='font-semibold'>{item.title}</span>
        <span className='font-bold text-xl'>${item.price}</span>

        {/* TODO: Add quantity selector */}
        {/* Hint: Use a select or number input */}

        {/* TODO: Update button to use handleAddToCart */}
        <button
          onClick={handleAddToCart}
          className='hover:bg-yellow-600 text-black bg-yellow-500 font-bold py-2 px-4 rounded'>
          Add to cart 🛒
        </button>
      </div>
    </div>
  );
};
