"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bimage from "@/public/images/shopImage.png";
import Logo from "@/public/images/MiniLogo.png";

interface Product {
  image: string;
  title: string;
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
    <div className=" relative z-0 top-20">
      <div className="relative justify-center h-[313px] w-screen   ">
        <Image alt="alt" src={Bimage} fill />

        <span className="absolute inset-0 flex flex-col items-center justify-center">
          <Image alt="logo" src={Logo} width={77} height={77} />
          <p className=" font-semibold text-6xl ">Cart</p>
        </span>
      </div>

      {/* !!!!!!!!!!!!!!!!!!!! */}
      <div className=" flex-row">
        <section>
          <h1>Shopping Cart</h1>
          <p>total Quantity: {totalQuantity}</p>
          <p>total Price: {totalPrice.toFixed(2)}</p>
        </section>

        <ul>
          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            cart.map((item: Product) => (
              <li key={item.id}>
                <div className="">
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={105}
                    height={105}
                    className=" rounded-t-3xl mx-auto"
                  />
                </div>
                <div className=" text-start font-semibold text-xl space-y-3 mx-2 ">
                  <p>{item.name}</p>
                  <p className=" font-normal text-base text-[#898989] truncate">
                    {item.title}
                  </p>
                  <p className="text-[#3A3A3A] font-bold">Rp: {item.price}</p>
                  <p>Quantity:{" "}{quantityMap[item.id] || 0}</p>
                </div>
         



{/* 

                <button
                  onClick={() =>
                    updateQuantity(item.id, (quantityMap[item.id] || 0) + 1)
                  }
                >
                  Increase
                </button>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      Math.max((quantityMap[item.id] || 0) - 1, 1)
                    )
                  }
                >
                  Decrease
                </button>
                <button onClick={() => removeItem(item.id)}>Remove</button> */}
              </li>
            ))
          )}
        </ul>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
