import ProductList from "@/components/Products/ProductList";
import { ShopHeader } from "@/components/header";
import React from "react";

const page = () => {
  return (
    <div className=" absolute  z-0 top-10 w-full  ">
      <header>
        <ShopHeader />
      </header>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default page;
