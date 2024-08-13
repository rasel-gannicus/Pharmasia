import React from "react";
import discountImg from "@/assets/img/discount 3.jpg";
import Image from "next/image";

const SectionCard3 = () => {
    return (
        <div className="max-w-[500px] min-h-[250px] rounded-lg bg-green-400 relative overflow-hidden ">
        <div className="absolute top-0 bottom-0 left-0 right-0 ">
          <Image
            alt="discount image"
            src={discountImg}
            className="w-[100%] h-full   "
          />
        </div>
        <div className="uppercase  absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-evenly items-start ps-6 text-white">
          <div className="">
            <p className="">20% off</p>
            <h2 className="font-semibold text-lg">
              Different Color <br />
              Mask
            </h2>
          </div>
          <button className=" border-b-white uppercase pb-2 hover:text-purple-900  hover:border-b-purple-900 duration-300 border-b-2">
            Shop Now
          </button>
        </div>
      </div>
    );
};

export default SectionCard3;