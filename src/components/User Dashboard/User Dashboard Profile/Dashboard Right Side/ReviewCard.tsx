import { Button } from "@/components/ui/button";
import React from "react";
import {
  FaArrowsAltH,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className=" bg-white  py-5 px-3 2xl:px-5 2xl:py-8 rounded-xl max-w-[300px] ">
      <h2 className="text-xl font-bold xl:text-4xl text-gray-500 gap-2 flex  justify-start items-start">
        <FaStar className="text-[#FDB457]" />
        17
      </h2>
      <p className="text-slate-500 mt-2">Total Reviews</p>

      <div className=" my-7 flex flex-col justify-between items-start gap-4">
        {/* --- mid part ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltUp className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Highest review </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="font-semibold text-lg text-gray-500">5</p>
            <FaStar className="text-[#FDB457]" />
          </div>
        </div>
        {/* --- mid part ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltDown className="text-xs text-red-600" />
            </div>
            <p className="text-xs 2xl:text-base">Lowest review </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="font-semibold text-lg text-gray-500">1</p>
            <FaStar className="text-[#FDB457]" />
          </div>
        </div>
        {/* --- mid part ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-gray-400 rounded flex justify-center items-center">
              <FaArrowsAltH className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Average  </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="font-semibold text-lg text-gray-500">4.5</p>
            <FaStar className="text-[#FDB457]" />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <Button className="bg-[#FF7555] text-white  hover:text-white">
          View All Reviews
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
