import React from "react";
import discountImg from "@/assets/img/discount 6.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SectionCard = () => {
  return (
    <div className=" min-h-[230px] col-span-2 lg:min-h-[400px]  rounded-lg bg-green-400 relative overflow-hidden ">
      <div className="absolute top-0 bottom-0 left-0 right-0 ">
        <Image
          alt="discount image"
          src={discountImg}
          className="w-[100%] h-full object-cover "
        />
      </div>
      <div className="uppercase  absolute top-0 bottom-0  right-10 flex flex-col justify-evenly items-end ps-6 ">
        <div className="text-right">
          <p className=" text-lg">50% off</p>
          <h2 className="font-semibold  text-4xl">
            We offer the best <br /> quality products
          </h2>
        </div>
        <Button className="  uppercase pb-2 hover:text-purple-900  hover:bg-white duration-300  bg-[#204C97] ">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default SectionCard;
