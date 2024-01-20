import React from "react";
import bgImage from "../public/images/Home-bg.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div>
        <Image alt="alt" src={bgImage} className=" relative  h-screen z-0" />
        <div className=" absolute top-0   2xl:w-[643px] 2xl:h-[443px] bg-[rgb(255,243,227)] right-0 mt-[300px] :mr[70px]">
          <div className=" p-9 flex-col place-content-center	 ">
            <p className=" text-red-700">New Arrival</p>
            <p>Discover Our New Collection</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
