"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import SummaryCard from "./Card/Order Summary/SummaryCard";
import { useGetProductCartQuery } from "@/utils/Redux/features/products/productsApi";
import { useAppSelector } from "@/utils/Redux/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";

const OrderCart = () => {
  const [cart, setCart] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { data, isLoading, isError, isSuccess }: any = useGetProductCartQuery(
    user?.email
  );

  useEffect(() => {
    if (data?.cart?.length > 0) {
      setCart(data.cart);
    }
  }, [user, data, isLoading, isError, isSuccess]);

  console.log(cart);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Order Inventory</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-3"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="md:col-span-2 space-y-4">
              {cart?.length > 0 ? (
                cart.map((index: any) => <Card key={index} data={index} />)
              ) : (
                <p className="text-center text-gray-400">Your cart is empty</p>
              )}
            </div>

            {/* --- order summary card --- */}
            <SummaryCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderCart;
