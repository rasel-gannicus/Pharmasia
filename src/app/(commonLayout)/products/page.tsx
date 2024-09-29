"use client";

import PopularProductCard from "@/components/for home page/most popular products/Popular Products Card/PopularProductCard";

import { useGetAllProductsQuery } from "@/utils/Redux/features/products/productsApi";
const AllProducts = () => {
  const { data, isLoading, isError }: any = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>; // or a more sophisticated loading indicator
  }

  if (isError) {
    return <div>Error fetching products.</div>; // or a more user-friendly error message
  }
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        Showing
        <span className="text-pink-600"> All </span>
        products
      </h2>
      <div className="py-5 grid md:grid-cols-4 lg:grid-cols-4 gap-6 px-1">
        {data?.length > 0 ? (
          data?.map((item: any) => (
            <PopularProductCard key={item._id} data={item} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
