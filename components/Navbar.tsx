import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import { PiHeart, PiUser, PiMagnifyingGlass } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    
      <div className="   bg-slate-500 ">
        <ul className="flex ">
         
          <div className="flex m-2 h-11 "> 
          <Image className=" mr-2" alt="logo" src={logo} />
            <li>
              <Link
                href="/"
                className="text-black text-lg font-semibold tracking-normal		"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-black  text-lg font-semibold tracking-normal		"
                href="/shop"
              >
                shop
              </Link>
            </li>
            <li>
              <Link
                className="text-black  text-lg font-semibold tracking-normal		"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-black  text-lg font-semibold tracking-normal		"
                href="/contact"
              >
                contact
              </Link>
            </li>
          </div>
          <div className="flex m-3 ">
            <li>
              <Link href={"/"}>
                <PiHeart />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <PiUser />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <PiMagnifyingGlass />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <AiOutlineShoppingCart />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    
  );
};

export default Navbar;
