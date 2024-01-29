"use client";
import React from "react";
import Items from "./Items";
import Image from "next/image";

export default function ListItems() {
  return (
    <div className=" grid gap-4 md:gap-8 sm:gap-10 lg:gap-10 grid-cols-1 my-14 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mx-40">
      {Items.map((item) => (
        <div
          key={item.id}
          className=" h-[440px] w-[285px] bg-[#F4F5F7] rounded-3xl mx-auto "
        >
          <div>
            <Image alt="alt " src={item.image} />
          </div>
          <div className=" text-start font-semibold text-xl space-y-3 mx-2  ">
            <p>{item.name}</p>
            <p className=" font-normal text-base text-[#898989]">
              {item.description}
            </p>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
