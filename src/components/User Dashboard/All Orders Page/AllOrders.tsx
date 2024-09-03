"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import OrdersRow from "./OrdersRow";

export const AllOrders = ({ props }: any) => {
  // --- getting user info (including user's all orders, wishlist, cart)
  const { userInfo, isLoading } = props;

  // Initialize state
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(5); // Set items per page
  const [paginatedOrders, setPaginatedOrders] = useState([]);

  // Get all orders
  const allOrders = userInfo?.orders ?? [];

  // Calculate total pages
  const totalPages = Math.ceil(allOrders.length / contentPerPage);

  // Function to get products for the current page
  const getProductsForPage = (page: number) => {
    const startIndex = (page - 1) * contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return allOrders.slice(startIndex, endIndex);
  };

  // Handle page change
  const changePage = (page: number) => {
    setCurrentPage(page);
    setPaginatedOrders(getProductsForPage(page));
  };

  // Set initial pagination
  useEffect(() => {
    setPaginatedOrders(getProductsForPage(currentPage));
    console.log(allOrders);
  }, [currentPage, allOrders]);

  return (
    <div className="overflow-x-auto bg-white py-10 px-5 rounded-lg">
      <div className="mb-5 flex justify-between">
        <h1 className="text-slate-400 font-semibold text-lg">
          All Orders : {allOrders?.length}{" "}
        </h1>
        <Button className="bg-[#EFF6FF] text-black hover:text-white">
          All Orders
        </Button>
      </div>
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Name
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Status
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                viewBox="0 0 401.998 401.998"
              >
                <path
                  d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                  data-original="#000000"
                />
              </svg>
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Price
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Ratings
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          {!isLoading &&
            paginatedOrders.map((item: any) => (
              <OrdersRow key={item.id} props={{ item }} />
            ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => changePage(i + 1)}
            className={`${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-[#EFF6FF] text-black"
            } mx-1`}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};
