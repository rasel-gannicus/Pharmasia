"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import SummaryCard from "./Card/Order Summary/SummaryCard";
import { useGetProductCartQuery } from "@/utils/Redux/features/products/productsApi";
import { useAppSelector } from "@/utils/Redux/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import PublicRoute from "@/utils/Route Protection/PublicRoute";
import PrivateRoute from "@/utils/Route Protection/PrivateRoute";
import { ThreeCircles } from "react-loader-spinner";
import { useCart } from "@/utils/Hooks/useCart";

const OrderCart = () => {
  const [user, loading, error] = useAuthState(auth);
  const { data, isLoading, isError, isSuccess }: any = useGetProductCartQuery(
    user?.email
  );

  // --- checking how many items are in cart
  let cart: any = useCart(user?.email, true);

  // --- check all button functionality
  const [checkAll, setCheckAll] = useState(false);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Order Inventory</h1>
      </div>

      <div className="col-span-2">
        {/* --- check box for all items  --- */}
        <label draggable className="shrink-0  p-2 rounded-md cursor-pointer">
          <input
            type="checkbox"
            className="mt-2 w-3 h-3 me-5 cursor-pointer border-b-2 border-gray-300 "
            checked={checkAll}
            onChange={() => setCheckAll(!checkAll)}
          />
          <span
            className={` ${
              !checkAll ? "text-gray-400" : "font-bold text-black"
            }`}
          >
            {checkAll ? 'All checked' : 'Check all'}
          </span>
        </label>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-3"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="md:col-span-2 space-y-4">
              {/* --- Checkbox card --- */}
              {cart?.length > 0 ? (
                cart.map((index: any) => (
                  <Card
                    key={index}
                    data={index}
                    email={user?.email}
                    checkAll={checkAll}
                  />
                ))
              ) : (
                <p className="text-center text-gray-400">Your cart is empty</p>
              )}
              {isLoading && (
                <div className="min-h-screen flex justify-center items-center">
                  <div className="">
                    <ThreeCircles
                      visible={true}
                      height="100"
                      width="100"
                      color="#9FC4DA"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                </div>
              )}
            </div>

            {/* --- order summary card --- */}
            <SummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(OrderCart);
