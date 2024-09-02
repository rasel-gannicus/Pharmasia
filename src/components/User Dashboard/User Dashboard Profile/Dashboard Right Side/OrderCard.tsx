import { Button } from "@/components/ui/button";
import React from "react";
import {
  FaArrowsAltH,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";

const OrderCard = ({ props }: any) => {
  const { userInfo, isLoading } = props;
  let pendingOrders = userInfo?.orders?.filter(
    (item: any) => item.status === "newOrder"
  );

  let totalValue = pendingOrders?.reduce((acc: number, value: any) => {
    return (acc = acc + (value.Price * value.quantity));
  }, 0);

  let highestOrder = pendingOrders?.reduce((acc: number, value: any) => {
    if(value.Price > acc){
      acc = value.Price ;
    }
    return acc ;
  }, 0);

  let lowestOrder = pendingOrders?.reduce((acc: number, value: any) => {
    if(value.Price < acc){
      acc = value.Price ;
    }
    return acc ;
  }, 500000);

  let highestOrderOnetime = pendingOrders?.reduce((acc: number, value: any) => {
    if((value.Price * value.quantity) > acc){
      acc = (value.Price * value.quantity) ;
    }
    return acc ;
  }, 0);

  let lowestOrderOnetime = pendingOrders?.reduce((acc: number, value: any) => {
    if((value.Price * value.quantity) < acc){
      acc = (value.Price * value.quantity) ;
    }
    return acc ;
  }, 999999999999);

  return (
    <div className="bg-[#FF7555] text-white  py-5 px-3 2xl:px-5 2xl:py-8 rounded-lg max-w-[400px] ">
      <h2 className="text-xl font-bold xl:text-4xl flex flex-col justify-center items-start">
        $ {totalValue || 0}
      </h2>
      <p className="text-slate-600 font-bold">Total Orders</p>

      <div className=" my-7 flex flex-col justify-between items-start gap-4">
        {/* --- top part 1 ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltUp className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Highest order product </p>
          </div>
          <p className="font-semibold">${highestOrder || 0}</p>
        </div>
        {/* --- top part 2 ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltDown className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Lowest order product </p>
          </div>
          <p className="font-semibold">${lowestOrder}</p>
        </div>
        {/* --- bottom part 1 ---- */}
        {/* <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-gray-400 rounded flex justify-center items-center">
            <FaLongArrowAltUp className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Highest order onetime </p>
          </div>
          <p className="font-semibold">${highestOrderOnetime}</p>
        </div> */}
        {/* --- bottom part 2 ---- */}
        {/* <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-gray-400 rounded flex justify-center items-center">
            <FaLongArrowAltDown className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Lowest order onetime </p>
          </div>
          <p className="font-semibold">${lowestOrderOnetime}</p>
        </div> */}

      </div>
      <div className="w-full text-center">
        <Button className="bg-white text-orange-500 hover:text-white">
          View all orders
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
