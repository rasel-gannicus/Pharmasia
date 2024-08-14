import { Button } from "@/components/ui/button";
import React from "react";

const RaiseSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-cover bg-right bg-no-repeat rounded-lg  bg-[url('https://meko-theme.myshopify.com/cdn/shop/files/Banner-1_1728x.jpg?v=1613156119')] min-h-[600px]   my-24">
      <div className=""></div>
      <div className=" flex flex-col justify-start items-start px-4">
        <h2 className="text-2xl md:text-3xl text-[#003242]  font-bold mt-5 mb-10">Raise Your Hand</h2>
        <h2 className="text-2xl text-white font-bold md:text-3xl">Protect yourself from dangerous vires (And Flues)</h2>
        <p className="text-white my-5">
          You can choose how you will receive and consume information about the
          outbreak. Another way to care for yourself.
        </p>
        <Button className="bg-white text-[#003242] hover:text-white rounded-full px-8 mt-12 ">Shop Now</Button>
      </div>
    </div>
  );
};

export default RaiseSection;
