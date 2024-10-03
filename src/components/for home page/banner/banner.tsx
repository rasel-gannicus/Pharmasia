"use client";
import "./banner.css";
import BannerCard1 from "./banner slider cards/BannerCard1";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BannerCard2 from "./banner slider cards/BannerCard2";
import BannerCard3 from "./banner slider cards/BannerCard3";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const Banner = () => {
  return (
    <div className="">
      <Swiper
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <BannerCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
