"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import OrdersRow from "./OrdersRow";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TailSpin } from "react-loader-spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import { useRouter } from "next/navigation";
import FilterMenu from "./Sub Components/FilterMenu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const AllOrders = ({ props }: any) => {
  let { isDashboard } = props;

  const [user, loading, error] = useAuthState(auth);

  // --- getting user info (including user's all orders, wishlist, cart)
  const { data, isLoading, isError } = useGetUserInfoQuery(user?.email);

  const [searchText, setSearchText] = useState("");

  // Initialize state
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(5); // Set items per page
  const [paginatedOrders, setPaginatedOrders] = useState([]);

  // --- Filter Dropdown menu
  const [showLess50, setShowLess50] = useState<Checked>(false);
  const [showPending, setShowPending] = useState<Checked>(false);
  const [showDelivered, setShowDelivered] = useState<Checked>(false);
  const [showRated, setShowRated] = useState<Checked>(false);
  const [showCancelled, setShowCancelled] = useState<Checked>(false);
  const [priceHigh, setPriceHigh] = useState(false);
  const [priceLow, setPriceLow] = useState(false);

  // --- clearing all fitler
  const handleClearFilter = () => {
    setShowLess50(false);
    setShowPending(false);
    setShowDelivered(false);
    setShowRated(false);
    setShowCancelled(false);
    setPriceHigh(false);
    setPriceLow(false);
  };

  // Get all orders
  let allOrders = data?.orders ?? [];

  if (allOrders?.length > 0) {
    allOrders = [...allOrders].sort((a: any, b: any) => {
      return new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime();
    });
  }

  // Filter orders based on 'Filter by' button
  const filteredOrders = allOrders.filter((order: any) => {
    // --- filter order by search text
    const matchesSearch = order.Title.toLowerCase().includes(
      searchText.toLowerCase()
    );

    // --- filter order by price below 50
    const matchesPriceBelow50 = showLess50
      ? order.Price * order.quantity < 50
      : true;

    // --- filter order by status 'pending'
    const matchesPending = showPending
      ? order.status.toLowerCase().includes("neworder")
      : false;

    // --- filter order by status 'delivered'
    const matchesDelivered = showDelivered
      ? order.status.toLowerCase().includes("delivered")
      : false;

    // --- filter order by status 'delivered'
    const matchesRated = showRated
      ? order.status.toLowerCase().includes("reviewed")
      : false;

    // --- filter order by status 'cancelled'
    const matchesCancelled = showCancelled
      ? order.status.toLowerCase().includes("cancelled")
      : false;

    // If both filters are unchecked, show all orders
    if (!showPending && !showDelivered && !showCancelled && !showRated) {
      return matchesSearch && matchesPriceBelow50;
    }

    // Show orders that match either the 'pending' or 'delivered' status when both are checked
    return (
      matchesSearch &&
      matchesPriceBelow50 &&
      (matchesPending || matchesDelivered || matchesCancelled || matchesRated)
    );
  });

  // --- sorting the order list based on 'Price high to low' & 'Price low to high' filtering
  const sortedOrders: any = [...filteredOrders].sort((a, b) => {
    if (priceHigh) {
      return b.Price * b.quantity - a.Price * a.quantity;
    } else if (priceLow) {
      return a.Price * a.quantity - b.Price * b.quantity;
    }
    return 0;
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedOrders.length / contentPerPage);

  // Function to get products for the current page
  const getProductsForPage = (page: any) => {
    const startIndex = (page - 1) * contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return sortedOrders.slice(startIndex, endIndex);
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
  }, [
    currentPage,
    isLoading,
    loading,
    allOrders,
    searchText,
    sortedOrders,
    showLess50,
    showPending,
    showDelivered,
    showCancelled,
    contentPerPage,
    priceHigh,
  ]);

  // --- filtering orders according to price
  const handlePriceFilter = (type: string) => {
    if (type === "high") {
      setPriceHigh(!priceHigh);
      setPriceLow(false);
    } else if (type === "low") {
      setPriceLow(!priceLow);
      setPriceHigh(false);
    }
  };

  useEffect(() => {
    if (isDashboard) {
      setContentPerPage(8);
    }
  }, [isDashboard]);
  const navigate = useRouter();

  return isLoading || loading ? (
    <div className="min-h-[70vh] w-full flex justify-center items-center">
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#1C8674"
        ariaLabel="tail-spin-loading"
        radius="4"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
    <div className="overflow-x-auto bg-white py-10 px-5 rounded-lg">
      {/* --- page menu before showing contents --- */}
      <div className="mb-5 grid justify-center lg:flex lg:justify-between items-center gap-5">
        {/* --- Filter dropdown menu --- */}
        <FilterMenu
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
        />

        {!isDashboard && (
          <h1 className="text-slate-500 font-semibold text-sm text-center lg:text-lg">
            Orders found : {filteredOrders?.length}
          </h1>
        )}
        {isDashboard && (
          <Button
            onClick={() => navigate.push("/user/orders")}
            className="bg-slate-400"
          >
            View All Orders
          </Button>
        )}

        {/* --- search box --- */}
        <div className=" lg:min-w-[250px] ">
          <form className="w-full">
            <div className="relative w-full ">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="search"
                placeholder="Search products..."
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

      <div className="flex flex-col justify-between items-center min-h-[70vh] ">
        <div className="  md:max-w-full w-full overflow-x-auto ">
          <table className="bg-white min-w-full">
            <thead className="whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Name
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Order status
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Price
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Ratings
                </th>
                <th className="p-4  text-sm font-semibold text-black text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap relative">
              {paginatedOrders.map((item: any) => (
                <OrdersRow key={item.id} props={{ item, email: user?.email }} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        {!isDashboard && (
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
        )}
      </div>
    </div>
  );
};
