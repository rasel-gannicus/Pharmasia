import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FaArrowsAltH,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";

const OrderCard = ({ orders, isloading }: any) => {
  
  const pendingOrders = orders?.filter((item: any) => item.status === "newOrder");
  const totalValue = pendingOrders?.reduce((acc: number, value: any) => {
    return acc + (value.Price * value.quantity);
  }, 0) || 0;

  let highestOrder = 0;
  let lowestOrder = Number.MAX_VALUE; 
  // let highestOrderOnetime = 0;
  // let lowestOrderOnetime = Number.MAX_VALUE;

  pendingOrders?.forEach((order: any) => {
    const orderPrice = order.Price;
    const orderTotal = orderPrice * order.quantity;

    if (orderPrice > highestOrder) {
      highestOrder = orderPrice;
    }
    if (orderPrice < lowestOrder) {
      lowestOrder = orderPrice;
    }
    // if (orderTotal > highestOrderOnetime) {
    //   highestOrderOnetime = orderTotal;
    // }
    // if (orderTotal < lowestOrderOnetime) {
    //   lowestOrderOnetime = orderTotal;
    // }
  });
  // --- taking user to another route
  const navigate = useRouter();

  return (
    <div className="bg-[#FF7555] text-white  py-5 px-3 2xl:px-5 2xl:py-8 rounded-lg w-full max-w-[400px] mx-auto">
      <h2 className="text-xl font-bold xl:text-4xl flex flex-col justify-center items-start">
        $ {totalValue}
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
          <p className="font-semibold">${highestOrder}</p>
        </div>
        {/* --- top part 2 ---- */}
        <div className="flex w-full justify-between items-center text-sm gap-3">
          <div className="flex gap-2">
            <div className="bg-white p-1 text-green-600 rounded flex justify-center items-center">
              <FaLongArrowAltDown className="text-xs" />
            </div>
            <p className="text-xs 2xl:text-base">Lowest order product </p>
          </div>
          <p className="font-semibold">${lowestOrder === Number.MAX_VALUE ? 0 : lowestOrder}</p>
        </div>
      </div>
      <div className="w-full text-center">
        <Button onClick={() => navigate.push('/admin/orders')} className="bg-white text-xs text-orange-500 hover:text-white">
          All orders
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
