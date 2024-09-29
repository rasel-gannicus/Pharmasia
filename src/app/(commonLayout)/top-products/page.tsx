"use client";
import PopularProductCard from "@/components/for home page/most popular products/Popular Products Card/PopularProductCard";
import { useGetAllProductsQuery } from "@/utils/Redux/features/products/productsApi";
import React from "react";

const TopRatedProducts = () => {
  // Fetch all products using the useGetAllProductsQuery hook from RTK Query
  const { data, isLoading, isError, error }: any =
    useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>; // or a more suitable loading indicator
  }

  if (isError) {
    return <div>Error: {error?.message}</div>; // or a more user-friendly error message
  }

  // Sort products by rating in descending order outside the map function
  const topRatedProducts = data
    ?.slice()
    .sort((a: any, b: any) => b.Ratings - a.Ratings);

  return (
    <div className="my-10 grid grid-cols-1 gap-y-10 md:grid-cols-4">
      {topRatedProducts?.map((item: any) => (
        <PopularProductCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default TopRatedProducts;
