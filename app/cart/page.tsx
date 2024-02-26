"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { MdAdd, MdDelete, MdOutlineHorizontalRule } from "react-icons/md";
import { CartHeader } from "@/components/header";

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
      <header>
        <CartHeader />
      </header>

      {/* !!!!!!!!!!!!!!!!!!!! */}

      <div className=" flex  justify-around py-16 select-none">
        {cart.length === 0 ? (
          <h1 className=" font-bold text-3xl relative ">Cart is empty</h1>
        ) : (
          <>
            <table className=" text-center table-fixed w-[1200px]  ">
              <thead className="  bg-[#F9F1E7] h-[55px]">
                <tr>
                  <th>{""}</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              {cart.map((item: Product) => (
                <tbody key={item.id} className=" relative ">
                  <tr>
                    <td>
                      <Image
                        alt={item.title}
                        src={item.image}
                        width={70}
                        height={70}
                        className=" flex  justify-center items-center border-2 w-[90px] h-[120px] m-5"
                      />
                    </td>
                    <td>
                      <p className="text-[#898989] truncate">{item.title}</p>
                    </td>
                    <td>
                      <p className=" text-[#898989]">Rs. {item.price}</p>
                    </td>
                    <td>
                      <div className="  flex gap-4  justify-center items-center ">
                        <MdOutlineHorizontalRule
                          className=" outline-1 outline outline-offset-0.5"
                          size={15}
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max((quantityMap[item.id] || 0) - 1, 1)
                            )
                          }
                        />
                        <p className=" p-2 outline outline-1 rounded ">
                          {quantityMap[item.id] || 0}
                        </p>
                        {/* -----increase------- */}
                        <MdAdd
                          className=" outline-1 outline outline-offset-0.5"
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
                      <p className=" font-medium">
                        Rs. {((item.quantity || 0) * item.price).toFixed(2)}
                      </p>
                    </td>
                    <td className=" relative right-8">
                      <MdDelete
                        size={23}
                        color="#B88E2F"
                        onClick={() => removeItem(item.id)}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        )}
        <div className=" bg-[#F9F1E7] text-lg font-bold w-[390px] h-[393px] flex flex-col space-y-4 justify-evenly items-center">
          <h1 className=" text-3xl font-bold">Cart Totals</h1>
          <div className=" space-y-4">
            <div className=" flex ">
              total Quantity: <h1 className=" pl-5">{totalQuantity}</h1>
            </div>
            <div className=" flex ">
              total Price: <h1 className=" pl-5 text-[#e6ae2e]">{totalPrice.toFixed(2)}</h1>{" "}
            </div>
          </div>
          <div>
            <button
              className=" px-14 py-3
            3 border-2 rounded-2xl border-stone-950"
            >
              Check Out
            </button>
          </div>
        </div>

        {/* <button onClick={clearCart}>Clear Cart</button> */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CartPage;
