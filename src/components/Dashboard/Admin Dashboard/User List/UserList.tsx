"use client";
import { Button } from "@/components/ui/button";
import { useGetAllUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import { useEffect, useState } from "react";
import UserRow from "./UserRow";

const UserList = () => {
  // Fetch all user information using Redux Toolkit Query (no need for individual user data)
  const { data: allUsers, isLoading } = useGetAllUserInfoQuery(undefined);
  // Initialize state variables to store aggregated data
  const [allOrders, setAllOrders] = useState([]);
  const [allCartItems, setAllCartItems] = useState([]);
  const [allRatings, setAllRatings] = useState([]);

  // Use useEffect to extract and aggregate data from all users when it changes
  useEffect(() => {
    if (allUsers?.length > 0) {
      setAllOrders(allUsers.flatMap((user: any) => user.orders || []));
      setAllCartItems(allUsers.flatMap((user: any) => user.cart || []));
      setAllRatings(allUsers.flatMap((user: any) => user.ratings || []));
    }
  }, [allUsers]);

  //   --- pagination functionality

  // Initialize pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(5); // Set items per page
  const [paginatedOrders, setPaginatedOrders] = useState([]);

  // Calculate total pages
  const totalPages = Math.ceil(allUsers?.length / contentPerPage);

  // Function to get products for the current page
  const getProductsForPage = (page: any) => {
    const startIndex = (page - 1) * contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return allUsers?.slice(startIndex, endIndex);
  };

  // Handle page change
  const changePage = (page: any) => {
    setCurrentPage(page);
    setPaginatedOrders(getProductsForPage(page));
  };

  // Set initial pagination
  useEffect(() => {
    // Memoize the filtered orders to prevent unnecessary recalculations
    const newPaginatedOrders = getProductsForPage(currentPage);

    // Only update state if the new state is different from the current state
    if (
      JSON.stringify(newPaginatedOrders) !== JSON.stringify(paginatedOrders)
    ) {
      setPaginatedOrders(newPaginatedOrders);
    }
  }, [currentPage, isLoading, contentPerPage, allUsers]);

  return (
    <div className="overflow-x-auto bg-white py-10 px-3 rounded">
      <div className="flex flex-col justify-between items-center min-h-[70vh] ">
        <div className="md:max-w-full grid w-full overflow-x-auto shadow-md">
          <table className="bg-white min-w-full">
            <thead className="whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Name
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  User Role
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Active Status
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Total Orders
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Pending Orders
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  On Processing
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Packaged
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Shipping
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Shipped
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Delivered
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Reviewed
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Items in Cart
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Wishlist
                </th>
                <th className="p-4  text-sm font-semibold text-black text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap relative">
              {paginatedOrders?.map((item: any) => (
                <UserRow
                  key={item.id}
                  props={{ item, allOrders, allCartItems, allRatings }}
                />
              ))}
            </tbody>
          </table>
        </div>

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
              } mx-1 hover:text-white`}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
