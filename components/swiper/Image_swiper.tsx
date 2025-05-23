"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image_Import from "@/components/swiper/Image_Import";
import "swiper/css/autoplay";

function Image_swiper() {
  return (
    <div className=" flex  font-semibold justify-around flex-wrap">
      {/* Dining images */}

      <div>
        <Swiper
          loop
          speed={2000}
          modules={[Autoplay]}
          autoplay={{ delay: 6000 }}
          className="  h-[450px] w-[350px] rounded-lg my-5 md:w-[450px] md:h-[550px]"
        >
          <SwiperSlide>
            <div>
              <Image alt="logo" fill src={Image_Import.Dining.Dining_Image1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt="logo" fill src={Image_Import.Dining.Dining_Image2} />
            </div>
          </SwiperSlide>
        </Swiper>
        <p>Dining</p>
      </div>

      {/* Living Images */}

      <div>
        <Swiper
          loop
          speed={2000}
          modules={[Autoplay]}
          autoplay={{ delay: 6700 }}
          className="  h-[450px] w-[350px] rounded-lg my-5 md:w-[450px] md:h-[550px]"
        >
          <SwiperSlide>
            <div>
              <Image alt="logo" fill src={Image_Import.Living.Living_Image1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt="logo" fill src={Image_Import.Living.Living_Image2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt="logo" fill src={Image_Import.Living.Living_Image3} />
            </div>
          </SwiperSlide>
        </Swiper>
        <p>Living</p>
      </div>

      {/* Badroom images */}

      <div>
        <Swiper
          loop
          speed={2000}
          modules={[Autoplay]}
          autoplay={{ delay: 7400 }}
          className="  h-[450px] w-[350px] rounded-lg my-5 md:w-[450px] md:h-[550px]"
        >
          <SwiperSlide>
            <div>
              <Image
                alt="logo"
                fill
                src={Image_Import.Bedroom.Bedroom_Image1}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                alt="logo"
                fill
                src={Image_Import.Bedroom.Bedroom_Image2}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                alt="logo"
                fill
                src={Image_Import.Bedroom.Bedroom_Image3}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <p>Bedroom</p>
      </div>
    </div>
  );
}

export default Image_swiper;
