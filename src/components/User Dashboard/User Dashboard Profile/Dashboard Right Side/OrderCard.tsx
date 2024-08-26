import { Button } from "@/components/ui/button";
import React from "react";
import {
  FaArrowsAltH,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="bg-[#FF7555] text-white  py-5 px-3 2xl:px-5 2xl:py-8 rounded-lg max-w-[400px] ">
      <h2 className="text-xl font-bold xl:text-4xl flex flex-col justify-center items-start">
        $ 5700
      </h2>
      <p className="text-slate-300">Total Orders</p>

      <div className=" my-7 flex flex-col justify-between items-start gap-4">
        {/* --- mid part ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltUp className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Highest orders </p>
          </div>
          <p className="font-semibold">$ 550</p>
        </div>
        {/* --- mid part ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltDown className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Lowest orders </p>
          </div>
          <p className="font-semibold">$ 50</p>
        </div>
        {/* --- mid part ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-gray-400 rounded flex justify-center items-center">
              <FaArrowsAltH className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Average orders </p>
          </div>
          <p className="font-semibold">$ 250</p>
        </div>
      </div>
      <div className="w-full text-center">
        <Button className="bg-white text-orange-500 hover:text-white">View all orders</Button>
      </div>
    </div>
  );
};

export default OrderCard;
