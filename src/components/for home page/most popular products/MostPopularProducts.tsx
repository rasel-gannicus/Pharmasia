"use client" ;
import PopularProductCard from "./Popular Products Card/PopularProductCard";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useGetAllProductsQuery } from "@/utils/Redux/features/products/productsApi";
import Loader from "@/utils/Loading Spinner/Loader";

const MostPopularProducts = () => {
  const { data, isLoading, isError }: any = useGetAllProductsQuery(undefined);
  if (isLoading) {
    return <Loader /> || <div>Loading...</div>;
  }

  // const topRatedProducts = [...data]
  //   .sort((a, b) => b.Ratings - a.Ratings)
  //   .slice(0, 6);

  return (
    <div className="flex flex-col justify-center items-center py-20 ">
      <div className="md:flex-row md:justify-between  flex flex-col justify-center items-center w-full">
        <div className="text-center md:text-left">
          <h2 className="md:text-4xl text-3xl font-semibold">
            Most Popular Products
          </h2>
          <p className="text-gray-500 my-5">See our most rated products here</p>
        </div>
        <Link href={"/top-products"}>
          <button className="btn btn-neutral md:btn-lg rounded-full hover:bg-slate-600 hover:text-white duration-300 px-5 py-3 ">
            View All
          </button>
        </Link>
      </div>

      <div className="my-10  lg:w-full mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-y-10">
        {data
          .slice() // Create a shallow copy to avoid mutating the original data
          .sort((a : any, b:any) => b.Ratings - a.Ratings)
          .slice(0, 6)
          .map((item : any) => (
            <PopularProductCard key={item._id} data={item} />
          ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;
