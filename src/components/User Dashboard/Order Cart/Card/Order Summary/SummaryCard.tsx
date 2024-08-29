import React, { useEffect, useState } from "react";
import SummaryAddressInfo from "./SummaryAddressInfo";
import { errorMessage } from "@/utils/Redux/toastMsg";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import { addTotalPrice } from "@/utils/Redux/features/products/productSlice";

const SummaryCard = ({ totalPrice, setModalStatus }: any) => {


  // --- calculating cart value
  let subTotal = totalPrice;
  let shippingFee = 0;
  if (totalPrice >= 300) {
    shippingFee = 0;
  } else if (totalPrice > 0 && totalPrice < 300) {
    shippingFee = 5;
  }
  let tax = (subTotal * 5) / 100;
  let total = subTotal + shippingFee + tax;
  const dispatch = useAppDispatch();
  dispatch(addTotalPrice(total));

  const productSlice = useAppSelector((state) => state.productSlice.cart);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setModalStatus(true) ;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 rounded-md p-4 h-max">
      <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
        Order Summary
      </h3>

      <ul className="text-gray-800 mt-6 space-y-3">
        <li className="flex flex-wrap gap-4 text-sm">
          Subtotal <span className="ml-auto font-bold">$ {subTotal}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm  justify-center items-center">
          <span>
            Shipping <br />
            <span className="text-xs font-semibold text-blue-500">
              (Free above order $ 300)
            </span>
          </span>{" "}
          <span className="ml-auto font-bold">$ {shippingFee}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Tax <span className="ml-auto font-bold">$ {tax}</span>
        </li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm font-bold">
          Total <span className="ml-auto">${total}</span>
        </li>
      </ul>

      <div className="mt-6 space-y-3">
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={productSlice.totalPrice <= 0}
          className="text-sm px-4 py-2.5 w-full font-semibold  bg-gray-800 hover:bg-[#1C8674] text-white rounded-md   "
        >
          Checkout
        </Button>
        <button
          type="button"
          className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    </form>
  );
};

export default SummaryCard;
