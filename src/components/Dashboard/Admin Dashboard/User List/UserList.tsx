"use client";
import { Button } from "@/components/ui/button";
import { useGetAllUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { TailSpin } from "react-loader-spinner";
import Loader from "@/utils/Loading Spinner/Loader";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserList = () => {
  const isDashboard = false;
  // Fetch all user information using Redux Toolkit Query (no need for individual user data)
  const { data: allUsers, isLoading } = useGetAllUserInfoQuery(undefined);

  // Initialize state variables to store aggregated data
  const [allOrders, setAllOrders] = useState([]);
  const [allCartItems, setAllCartItems] = useState([]);
  const [allRatings, setAllRatings] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Use useEffect to extract and aggregate data from all users when it changes
  useEffect(() => {
    if (allUsers?.length > 0) {
      setAllOrders(allUsers.flatMap((user: any) => user.orders || []));
      setAllCartItems(allUsers.flatMap((user: any) => user.cart || []));
      setAllRatings(allUsers.flatMap((user: any) => user.ratings || []));
    }
  }, [allUsers]); 

  let allUsersFiltered = allUsers?.filter((user : any) => user?.email?.toLowerCase().includes(searchText.toLowerCase()) || user?.userInfo?.displayName?.toLowerCase().includes(searchText.toLowerCase()));

  //   --- pagination functionality

  // Initialize pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(5); // Set items per page
  const [paginatedOrders, setPaginatedOrders] = useState([]);

  // Calculate total pages
  const totalPages = Math.ceil(allUsersFiltered?.length / contentPerPage);

  // Function to get products for the current page
  const getProductsForPage = (page: any) => {
    const startIndex = (page - 1) * contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return allUsersFiltered?.slice(startIndex, endIndex);
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
  }, [currentPage, isLoading, contentPerPage, allUsers, searchText]);

  if (isLoading && !allUsers) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto bg-white py-10 px-3 rounded ">
      <div className="flex flex-col justify-between items-center min-h-[70vh] ">
        <div className="md:max-w-full grid w-full overflow-x-auto shadow-md py-10 px-1">
          {/* --- page menu before showing contents --- */}
          <div className="mb-5 grid grid-cols-2  lg:flex lg:justify-between items-center gap-5 ">
            {/* --- Filter dropdown menu --- */}
            {/* <FilterMenu
          props={{
            showLess50,
            setShowLess50,
            showPending,
            setShowPending,
            showDelivered,
            setShowDelivered,
            showRated,
            setShowRated,
            showCancelled,
            setShowCancelled,
            priceHigh,
            priceLow,
            handlePriceFilter,
            handleClearFilter,
          }}
        /> */}

            {/* {!isDashboard && (
          <h1 className="text-slate-500  font-semibold text-sm text-center lg:text-lg">
            Orders found : {filteredOrders?.length}
          </h1>
        )}
        {isDashboard && (
          <Button
            onClick={() => navigate.push("/user/orders")}
            className="bg-slate-400 order-last"
          >
            View All Orders
          </Button>
        )} */}

            {/* --- search box --- */}
            <div className=" lg:min-w-[320px] ">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="relative w-full ">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    placeholder="Search user by name or email..."
                    className="w-full appearance-none bg-background pl-8 shadow-none "
                  />
                </div>
              </form>
            </div>

            {/* --- Filter for showing content quantity per page --- */}
            {!isDashboard && (
              <div className="flex justify-center items-center gap-1 ">
                <p className="text-slate-400 text-xs 2xl:text-sm">
                  Products per page :
                </p>
                <Select
                  onValueChange={(value: string) => {
                    setContentPerPage(parseInt(value));
                    setCurrentPage(1); // Reset to first page when changing items per page
                  }}
                  defaultValue="5" // Set default value as a string
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <hr />

          <table className="bg-white min-w-full ">
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
                <th className="p-4  text-sm font-semibold text-black text-center">
                  Action
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
