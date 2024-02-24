"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bimage from "@/public/images/shopImage.png";
import Logo from "@/public/images/MiniLogo.png";
import Footer from "@/components/Footer";
import { MdAdd, MdDelete, MdOutlineHorizontalRule } from "react-icons/md";

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
        {/* <div>
          <h1>Shopping Cart</h1>
          <p>total Quantity: {totalQuantity}</p>
          <p>total Price: {totalPrice.toFixed(2)}</p>
        </div> */}

        <table className=" flex-grow text-center">
          <thead className="  bg-[#F9F1E7] w-[817px] h-[55px] ">
            <th>{""}</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </thead>
          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            cart.map((item: Product) => (
              <tbody key={item.id} className="">
                <tr>
                  <td>
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={70}
                      height={70}
                      className=" rounded-t-3xl mx-auto"
                    />
                  </td>
                  <td>
                    <p className="text-[#898989]">{item.title}</p>
                  </td>
                  <td>
                    <p className=" text-[#898989]">{item.price}</p>
                  </td>
                  <td >
                    <div className="  flex gap-4 ">
                      <MdOutlineHorizontalRule
                       className=" outline-1 outline outline-offset-1"
                       size={15}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max((quantityMap[item.id] || 0) - 1, 1)
                          )
                        }
                      />
                      <p className=" p-3 border-2">{quantityMap[item.id] || 0}</p> {""}
                      <MdAdd
                        className=" outline-1 outline outline-offset-1"
                        size={15}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            (quantityMap[item.id] || 0) + 1
                          )
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <p className=" font-medium">Rs: {((item.quantity || 0) * item.price).toFixed(2)}</p>
                  </td>
                  <td>
                 <MdDelete 
                 size={23}
                 color="#B88E2F"

                 />
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>

        <button onClick={clearCart}>Clear Cart</button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CartPage;
