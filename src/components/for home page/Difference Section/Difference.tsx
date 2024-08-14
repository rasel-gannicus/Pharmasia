import React from "react";
import diffImg from "@/assets/img/difference 1.jpg";
import diffImg2 from "@/assets/img/difference 2.jpg";
import diffImg3 from "@/assets/img/difference 3.jpg";
import Image from "next/image";

const Difference = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h2 className="lg:text-5xl font-semibold pb-5 text-3xl text-blue-900 text-center">
        What Makes The Difference ?
      </h2>
      <p className="text-slate-400 uppercase lg:text-2xl mb-10 ">
        High perfomance and safety
      </p>
      <div className="grid gap-5 lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
        
        {/* --- card 1 --- */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <div className="border-[20px] rounded-full w-[220px] overflow-hidden hover:border-[#5090C5] duration-300 cursor-pointer ">
            <Image alt="difference section image " src={diffImg} />
          </div>
          <div className="text-center">
            <h2 className=" text-3xl font-bold text-slate-500 mb-3">
              Prevent Bacteria
            </h2>
            <p className="text-gray-400">
              Get complete protection while work in office or home or wherever
              you are.{" "}
            </p>
          </div>
        </div>
        
        {/* --- card 2 --- */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <div className="border-[20px] rounded-full w-[220px] overflow-hidden hover:border-[#5090C5] duration-300 cursor-pointer ">
            <Image alt="difference section image " src={diffImg2} />
          </div>
          <div className="text-center">
            <h2 className=" text-3xl font-bold text-slate-500 mb-3">
              Complete Protection
            </h2>
            <p className="text-gray-400">
              Get complete protection while work in office or home or wherever
              you are.{" "}
            </p>
          </div>
        </div>
        
        {/* --- card 3 --- */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <div className="border-[20px] rounded-full w-[220px] overflow-hidden hover:border-[#5090C5] duration-300 cursor-pointer ">
            <Image alt="difference section image " src={diffImg3} />
          </div>
          <div className="text-center">
            <h2 className=" text-3xl font-bold text-slate-500 mb-3">
              Accuracy
            </h2>
            <p className="text-gray-400">
              Get complete protection while work in office or home or wherever
              you are.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
