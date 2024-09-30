"use client";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  useGetUserNotificationsQuery,
  useModifyNotificationsMutation,
} from "@/utils/Redux/features/user/userApi";
import { useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownNotifications } from "./DropdownNotifications";

const IconMenu = ({ props }: any) => {
  const { wishlist = [], cartQuantity = 0, email = '' } = props ?? {};

  let { data, isLoading, isError, error } =
    useGetUserNotificationsQuery(email);
    

  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (data?.length > 0) {
      data = data?.slice().sort((a:any, b:any) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA; // For descending order
      })
      const unreadNotifications = data?.filter(
        (item: any) => item.isRead === false
      );
      setNotifications(unreadNotifications);
    }
  }, [data, isLoading, isError, error]);

  //   --- making notifications 'read' when user click the Bell icon
  const [modifyNotifications, { data: modifiedNotifications, isLoading : notificationLoading }] =
    useModifyNotificationsMutation();

  const handleNotifications = () => {
    modifyNotifications({
      email,
      modifyType : 'read' 
    });
  };

  return (
    <div className="ml-auto flex-1 sm:flex-initial">
      <div className="flex  gap-3 justify-center items-center">
        {/* --- Dropdown Menu Notifications --- */}

        <Popover>
          <PopoverTrigger>
            <span
              onClick={handleNotifications}
              title="Notifications"
              className={`transition-colors py-2 px-3 relative  rounded flex gap-1 justify-between items-center  ${
                notifications?.length > 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-slate-600"
              }`}
            >
              <IoNotifications className="text-lg " />

              {notifications?.length > 0 && (
                <span className="bg-red-600 w-5 h-5 flex justify-center items-center text-sm text-center text-white rounded-full absolute -right-2 -bottom-2">
                  {notifications?.length }
                </span>
              )}
            </span>
          </PopoverTrigger>
          <PopoverContent className="lg:w-[500px] ">
            <DropdownNotifications
              props={{ email, data, isLoading, isError, error, notificationLoading }}
            />
          </PopoverContent>
        </Popover>

        {/* --- wishlist --- */}
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/user/wishlist"
                className={`transition-colors hover:text-foreground hover:bg-white hover:text-black ${
                  wishlist?.length > 0
                    ? "bg-[rgb(76,40,87)] text-white"
                    : "bg-gray-100 text-slate-600"
                } py-2 px-3 relative  rounded flex gap-1 justify-between items-center`}
              >
                <FaHeart className="text-lg " />

                {wishlist?.length > 0 && (
                  <span className="bg-red-600 w-5 h-5 text-center flex justify-center items-center text-white rounded-full absolute -right-2 -bottom-2 text-sm">
                    {wishlist?.length}
                  </span>
                )}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Wishlist</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* --- cart --- */}
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/user/cart"
                className={`transition-colors hover:text-foreground  hover:bg-white  hover:text-black  py-2 px-3 relative  rounded flex gap-1 justify-between items-center ${
                  cartQuantity > 0
                    ? "bg-[#1C8674] text-white"
                    : "bg-gray-100 text-slate-600"
                }`}
              >
                <FaCartPlus className="text-lg " />

                {cartQuantity > 0 && (
                  <span className="bg-red-600 w-5 h-5 flex justify-center items-center text-sm text-center text-white rounded-full absolute -right-2 -bottom-2">
                    {cartQuantity}
                  </span>
                )}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>        
      </div>
    </div>
  );
};

export default IconMenu;
