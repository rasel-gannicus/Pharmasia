import { Button } from '@/components/ui/button';
import React from 'react';

const BannerCard3 = () => {
    return (
        <div className=" banner-section-3 flex flex-col justify-center items-center relative h-[680px]">
        {/* --- banner text and buttons --- */}
        <div className="flex flex-col gap-10 md:flex-row justify-evenly items-center w-full px-10 z-20 ">
          <div className="banner-left-side flex flex-col gap-5 items-start  banner-left  max-w-96 flex-1">
            <h1 className="md:text-6xl font-bold">
              <span className="text-[#1b8674]">Get </span> rid of bacteria in your home
            </h1>
            <p className="text-xl">Get rid of all bacteria</p>
            <Button className="btn bg-[#4C2857] border-none font-semibold rounded-full px-7 hover:bg-white hover:text-black  text-white md:text-lg hover:btn-neutral">
              Shop Now
            </Button>
          </div>
          <div className=""></div>
        </div>
      </div>
    );
};

export default BannerCard3;