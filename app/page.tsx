import React from "react";
import bgImage from "../public/images/Home-bg.png";
import Image from "next/image";

const page = () => {
  return (
    <div className=" static">
      <div className="inline-block">
        <Image alt="alt" src={bgImage} className=" static " />
        <div className=" absolute top-7 w-48 h-48 bg-red-600 "></div>
      </div>
    </div>
  );
};

export default page;
