"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Logo from "@/public/images/Logo.png";
import Dining_1 from '@/public/images/swipeImages/Dining/Dining_1.png'
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function Image_swiper() {
  return (
    <div>
      <Swiper
        slidesPerGroup={1}
        className="relative z-50 top-20 w-[360px] h-[600px]  bg-slate-500"
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div>
            <Image alt="logo" src={Logo} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <Image alt="logo" src={Dining_1} />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerGroup={2}
        className="relative z-50 top-20 w-[360px] h-[600px]  bg-slate-500"
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div>
            <Image alt="logo" src={Logo} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>mokqhhdqd</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Image_swiper;
