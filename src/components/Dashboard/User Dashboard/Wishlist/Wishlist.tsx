"use client";
import { useWishlist } from "@/utils/Hooks/useWishlist";
import React, { useEffect, useState } from "react";
import WishlistCard from "./Wishlist Card/WishlistCard";
import { useGetProductCartQuery } from "@/utils/Redux/features/products/productsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { ThreeCircles } from "react-loader-spinner";

const Wishlist = () => {
  const [user, loading, error] = useAuthState(auth);

  //   --- getting wishlist data from mongodb with redux
  const wishlist: any = useWishlist();

  const { isLoading }: any = useGetProductCartQuery(user?.email);
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Your Wishlist</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-3 min-h-[70vh] "
        x-chunk="dashboard-02-chunk-1"
      >
        <div className=" max-w-3xl w-full py-4">
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="md:col-span-3 space-y-4">
              {wishlist?.length > 0 ? (
                wishlist?.map((index: any) => (
                  <WishlistCard key={index} data={index} email={user?.email} user={user} />
                ))
              ) : (
                <p className="text-center text-gray-400">
                  Your Wishlist is empty
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
