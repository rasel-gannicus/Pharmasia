import { Button } from "@/components/ui/button";
import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const OrderSuccessPage = () => {
  return (
    <div>
      <h2 className="text-center md:text-4xl text-3xl text-red-600 font-semibold mb-6">
        Congrats !{" "}
      </h2>
      <h2 className="text-2xl">Your order has been successfully placed.</h2>
      <div className=" flex justify-center items-center gap-5 my-8">
        <Button className="bg-[#1C8674] flex justify-center items-center gap-2 ">
          <FaHome /> Go Home
        </Button>
        <Button className="bg-blue-700 flex justify-center items-center gap-2 ">
          <FaShoppingCart />
          Visit Cart
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
