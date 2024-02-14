import ProductList from "@/components/Products/ProductList";
import React from "react";

const page = () => {
  return (
    <div className=" absolute  z-0 top-10 w-full  ">
      <div className=" ">
        <ProductList />
      </div>
    </div>
  );
};

export default page;
