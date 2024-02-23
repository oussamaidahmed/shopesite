import React from "react";
import Bimage from "@/public/images/shopImage.png";
import Logo from "@/public/images/MiniLogo.png";
import Image from "next/image";

const page = () => {
  return (
    <div className=" absolute  z-0 top-10 w-full  ">
      <div className="relative justify-center h-[313px] w-screen   ">
        <Image alt="alt" src={Bimage} fill />

        <span className="absolute inset-0 flex flex-col items-center justify-center">
          <Image alt="logo" src={Logo} width={77} height={77} />
          <p className=" font-semibold text-6xl ">Contact</p>
        </span>
      </div>
{/* !!!!!!!!!!!!!!!!!!! */}


      <div></div>
    </div>
  );
};

export default page;
