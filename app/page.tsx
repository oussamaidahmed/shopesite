import React from "react";
import bgImage from "../public/images/Home-bg.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* background image  */}

      <Image alt="alt" src={bgImage} className=" relative  h-screen z-0" />

      {/* Group 114 */}

      <div className=" absolute top-0   2xl:w-[643px] 2xl:h-[443px] bg-[rgb(255,243,227)] right-0 mt-[300px] mr-24">
        <div className=" space-y-6 p-9 flex-col place-content-center ">
          <p className=" font-bold tracking-widest text-base ">New Arrival</p>
          <p className=" font-bold text-6xl text-[#B88E2F]">
            Discover Our <br /> New Collection
          </p>
          <p className=" font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-14 py-5 bg-[#B88E2F] b">
            <p className="font-bold tracking-widest text-base text-white  ">
              BUY NOW
            </p>
          </button>
        </div>
      </div>
      <div className=" justify-center text-center py-14 ">
        <p className="font-black		 text-black text-xl ">Browse The Range</p>
        <p className=" font-medium text-normal text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
