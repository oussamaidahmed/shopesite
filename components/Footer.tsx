import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdLocalShipping, MdSupportAgent } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" flex justify-around h-[270px] items-center bg-[#FAF3EA] w-screen px-7 ">
      {/* -------------------- Quality Icon ------ -------------- */}
      <div className=" flex gap-2 ">
        <HiOutlineTrophy size={60} />
        <div className=" space-y-1">
          <h1 className=" font-bold text-2xl">High Quality</h1>
          <h5 className=" font-medium text-[#898989] tracking-wide">
            crafted from top materials
          </h5>
        </div>
      </div>
      {/* --------------- Warranty Protection Icon ----------------*/}
      <div className=" flex gap-2 ">
        <RiVerifiedBadgeLine size={60} />
        <div className=" space-y-1">
          <h1 className=" font-bold text-2xl">Warranty Protection</h1>
          <h5 className=" font-medium text-[#898989] tracking-wide">
            Over 2 years
          </h5>
        </div>
      </div>
      {/* --------------- Free Shipping Icon  -------------- */}

      <div className=" flex gap-2 ">
        <MdLocalShipping size={60} />
        <div className=" space-y-1">
          <h1 className=" font-bold text-2xl">Free Shipping</h1>
          <h5 className=" font-medium text-[#898989] tracking-wide">
            Order over 150 $
          </h5>
        </div>
      </div>
      {/* --------Support Icon--------- */}

      <div className=" flex gap-2 ">
        <MdSupportAgent size={60} />
        <div className=" space-y-1">
          <h1 className=" font-bold text-2xl">24 / 7 Support</h1>
          <h5 className=" font-medium text-[#898989] tracking-wide">
            Dedicated support
          </h5>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <th>Funiro.</th>
            <th>Links</th>
            <th>Help</th>
            <th>Newsletter</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
