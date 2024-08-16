import { TCloths } from "@/types/types";
import React from "react";
import FlashSaleCountdown from "../flash sale countdown/FlashSaleCountdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import flash from "@/assets/img/icons8-sale.gif";
import Image from "next/image";

const FlashSaleCard = ({ data }: { data: TCloths }) => {
  return (
    data.FlashSale && (
      <div className="rounded-lg  flex flex-col justify-between items-center bg-base-100 shadow-xl">
        <div className="relative">
          <div className="absolute top-0 right-0">
            <Image alt="flash" src={flash} />
          </div>
          <img src={data.Images} alt="Shoes" className="mx-auto w-full" />
          {data?.flashSaleEndTime && (
            <div className="absolute text-center w-full bg-[#DB2777] py-1 px-2 bottom-0 right-0  text-white text-sm ">
              <FlashSaleCountdown endTime={data.flashSaleEndTime} />
            </div>
          )}
        </div>
        <div className="flex-col py-5 flex px-3 justify-between  h-full items-center">
          <h2 className="card-title font-semibold my-4 text-lg">
            {data.Title}
          </h2>
          <p className="text-center">{data.Description}</p>
          <div className="card-actions flex justify-center items-center mt-5">
            <Link href={`/singleProduct/${data._id}`}>
              <Button className=" bg-blue-400 me-3">Details</Button>
            </Link>
            <Button className="bg-slate-500">Buy Now</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default FlashSaleCard;
