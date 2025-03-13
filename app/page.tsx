import React from "react";
import Image from "next/image";
import bgImage from "@/public/images/Home-bg.png";
import Image_swiper from "@/components/swiper/Image_swiper";
import ProductList from "@/components/Products/ProductList";
import Link from "next/link";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="relative z-0">
      {/* Background image */}
      <div className="relative h-screen z-0">
        <Image
          alt="New Collection Background"
          src={bgImage}
          layout="contain"
          objectFit="cover"
          quality={80}
        />
      </div>
      {/* Group 114 */}
      <div className="absolute top-0 right-0 mt-[300px] 2xl:w-[643px] 2xl:h-[443px] bg-[rgb(255,243,227)] lg:mr-24 md:mr-9">
        <div className="space-y-6 p-9 flex-col flex items-center justify-center">
          <p className="font-bold tracking-widest text-base">New Arrival</p>
          <p className="font-bold text-6xl text-[#B88E2F]">
            Discover Our <br /> New Collection
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          {/* Button */}
          <div className="mt-8 flex">
            <Link className="px-14 py-5 bg-[#B88E2F] font-bold tracking-widest text-base text-white" href="/Shop" prefetch={false}>
              BUY NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Browse the Range Section */}
      <div className="relative text-center my-14 mx-40">
        <p className="font-bold text-black text-2xl tracking-widest">Browse The Range</p>
        <p className="font-medium text-normal text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Image Swiper */}
        <div>
          <Image_swiper />
        </div>
      </div>

      {/* Our Products Section */}
      <div className="relative justify-center text-center">
        <p className="font-bold text-black text-2xl tracking-widest">Our Products</p>
        <ProductList />
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
