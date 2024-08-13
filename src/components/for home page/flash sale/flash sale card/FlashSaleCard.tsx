import { TCloths } from "@/types/types";
import React from "react";
import FlashSaleCountdown from "../flash sale countdown/FlashSaleCountdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FlashSaleCard = ({ data }: { data: TCloths }) => {
  return (
    data.FlashSale && (
      <div className="card w-[95%] py-10 rounded-lg px-3 lg:w-[400px]   bg-base-100 shadow-xl mx-auto">
        <figure className="relative">
          <img src={data.Images} alt="Shoes" className="mx-auto w-full" />
          {data?.flashSaleEndTime && (
            <div className="absolute w-full bg-[#DB2777] py-1 px-2 bottom-0 right-0  text-white text-sm ">
              <FlashSaleCountdown endTime={data.flashSaleEndTime} />
            </div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold my-4 text-lg">{data.Title}</h2>
          <p>{data.Description}</p>
          <div className="card-actions justify-end mt-5">
            <Link href={`/singleProduct/${data._id}`}>
              <Button className=" bg-blue-400 me-3">View Details</Button>
            </Link>
            <Button className="bg-slate-500">Buy Now</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default FlashSaleCard;
