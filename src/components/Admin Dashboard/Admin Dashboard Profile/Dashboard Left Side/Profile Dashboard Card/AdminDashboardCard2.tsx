import React from "react";
import { FaHeart } from "react-icons/fa";
import { dashboardCardClass } from "../../AdminProfileDashboard";
import { TailSpin } from "react-loader-spinner";

const AdminDashboardCard2 = ({ allCartfromAllUsers, isLoading }: any) => {
  const wishlistCount = isLoading 
    ? 0 
    : allCartfromAllUsers?.filter((item: any) => item.wishlist).length || 0;
  return (
    <div
      className={`${dashboardCardClass} bg-gradient-to-b from-blue-50  to-white mx-auto w-full `}
    >
      <div className=" bg-[#38A0E9] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <FaHeart />
      </div>
      <h2 className="text-lg font-semibold"> Wishlists</h2>
      <p className="text-slate-400 text-sm ">All users have added</p>
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#38A0E9] ">
        {isLoading ? (
          <TailSpin
            height="40"
            width="40"
            color="#38A0E9"
            ariaLabel="tail-spin-loading"
            radius="4"
          />
        ) : (
          wishlistCount
        )}
      </h2>
    </div>
  );
};

export default AdminDashboardCard2;
