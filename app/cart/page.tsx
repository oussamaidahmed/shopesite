"use client";

import React from "react";
import { useEffect, useState } from "react";


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantityMap, setQuantityMap] = useState<{
    [productId: number]: number;
  }>({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    const initialQuantityMap: { [productId: number]: number } = {};
    storedCart.forEach((item: Product) => {
      initialQuantityMap[item.id] = item.quantity || 0;
    });
    setQuantityMap(initialQuantityMap);
  }, []);

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item: Product) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);

    const updatedQuantityMap = { ...quantityMap, [productId]: newQuantity };
    setQuantityMap(updatedQuantityMap);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // remove Item from the cart

  const removeItem = (productId: number) => {
    const updatedCart = cart.filter((item: Product) => item.id !== productId);
    setCart(updatedCart);

    const updatedQuantityMap = { ...quantityMap };
    delete updatedQuantityMap[productId];
    setQuantityMap(updatedQuantityMap);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear the cart

  const clearCart = () => {
    setCart([]);
    setQuantityMap({});
    localStorage.removeItem("cart");
  };

  // Calculate total quantity and total price of all products in the cart

  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  const totalPrice = cart.reduce(
    (total, item) => total + (item.quantity || 0) * item.price,
    0
  );

  return (
    <div  className=' relative z-0 top-20'>
      <h1>Shopping Cart</h1>
      <p>total Quantity: {totalQuantity}</p>
      <p>total Price: {totalPrice.toFixed(2)}</p>
      <ul>
        {cart.length === 0 ? (
          <p>Cart is empty.</p>
        ): (
          cart.map((item: Product) => (
            <li key={item.id}>
              {item.name} ------ {item.price}---- Quantity: {quantityMap[item.id] || 0}
              <button onClick={() => updateQuantity(item.id, (quantityMap[item.id] || 0) + 1)}>
                Increase
              </button>
              <button
                onClick={() => updateQuantity(item.id, Math.max((quantityMap[item.id] || 0) - 1, 1))}
              >
                Decrease
              </button>
              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>


            </li>
          ))
        )}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
