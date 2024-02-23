"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PiHeartFill } from "react-icons/pi";

interface Product {
  liked: boolean;
  title: string;
  image: string;
  description: string;
  quantity: number;
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    fetchProducts();
  }, []);

  const AddToCart = (product: Product) => {
    console.log("adding to cart:", product);
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingCartItemIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingCartItemIndex].quantity += 1;
        return updatedCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    setCart((prevCart) => {
      localStorage.setItem("cart", JSON.stringify(prevCart));
      return prevCart;
    });
  };
  const toggleLike = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              liked: !product.liked,
            }
          : product
      )
    );
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchedProducts = await response.json();
      const productsWithLikes = fetchedProducts.map((product: Product) => ({
        ...product,
        liked: false,
      }));
      setProducts(productsWithLikes);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className=" grid  gap-4 md:gap-8 sm:gap-10 lg:gap-10 grid-cols-1 my-14 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mx-40 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative border-2  h-[440px] w-[285px] bg-[#ffffff] rounded-3xl mx-auto"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="flex justify-center items-center  ">
            <Image
              alt={product.title}
              src={product.image}
              width={285}
              height={301}
              className=" object-contain h-[300px] w-[285px] rounded-t-3xl mx-auto"
            />
          </div>
          <div className=" text-start font-semibold text-xl space-y-3 mx-2 ">
            <p>{  product.name}</p>
            <p className=" font-normal text-base text-[#898989] truncate">
              {product.title}
            </p>
            <p className="text-[#3A3A3A] font-bold">Rp: {product.price}</p>
            {hoveredProduct === product.id && (
              <div className=" absolute bg-black inset-0  top-[-12px] flex-col flex items-center justify-center rounded-3xl mx-auto  bg-opacity-55 ">
                <button
                  className=" bg-white px-16 py-2 font-semibold text-[#B88E2F]  "
                  onClick={() => AddToCart(product)}
                >
                  Add to Cart
                </button>
                <PiHeartFill
                  onClick={() => toggleLike(product.id)}
                  color={product.liked ? "red" : "white"}
                  size={25}
                  textAnchor="start"
                ></PiHeartFill>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
