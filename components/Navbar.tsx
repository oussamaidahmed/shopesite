import React from "react";
import Image from "next/image";
import Logo from "../public/images/Logo.png";
import Link from "next/link";
import { PiHeart, PiUser, PiMagnifyingGlass } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar= () => {
 
  return (
    <>
      <div className="w-screen h-20 bg-white fixed z-50  " >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image alt="logo" src={Logo} />
            <ul className="hidden md:flex gap-x-12 font-bold text-xl text-black  invisible lg:visible">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/Shop">
                  <p>shop</p>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/Contacts">
                  <p>contacts</p>
                </Link>
              </li>
            </ul>
            <ul className="hidden md:flex gap-x-12 font-bold text-2xl text-black invisible lg:visible">
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
                <PiHeart />
                </Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  <AiOutlineShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
