"use client";
import FlashSaleCard from "@/components/for home page/flash sale/flash sale card/FlashSaleCard";
import Loader from "@/utils/Loading Spinner/Loader";
import { useGetAllProductsQuery } from "@/utils/Redux/features/products/productsApi";
import React, { use } from "react";

export const FlashSale = () => {
  const { data, isLoading, isError } : any = useGetAllProductsQuery(undefined);
  if (isLoading) {
    return <Loader /> || <div>Loading...</div>;
  }

  return (
    <div className=" mx-auto">
      <h2 className="text-center mt-10 text-4xl font-bold">Hurry Up ! </h2>
      <h2 className="text-center my-3 text-4xl font-bold">
        Before the <span className="text-red-500">Sale Ends </span> !
      </h2>
      <hr className="border-2 w-3/4 mx-auto my-5" />

      {/* --- all the flash sale items in card view --- */}
      <div className="py-5 grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-1">
        {data?.length > 0 ? (
          data
            ?.filter((item: any) => item?.Flashsale)
            .map((item: any) => <FlashSaleCard key={item._id} data={item} />)
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};


