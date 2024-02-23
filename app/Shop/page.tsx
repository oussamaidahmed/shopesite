import ProductList from "@/components/Products/ProductList";
import React from "react";
import Image from "next/image";
import Bimage from "@/public/images/shopImage.png";

const page = () => {
  return (
    <div className=" absolute  z-0 top-10 w-full  ">
      <div>
        <div className="relative justify-center h-[313px] w-screen   ">
          <Image alt="alt" src={Bimage} fill />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className=" font-semibold text-6xl">Shop</h1>
          
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default page;
