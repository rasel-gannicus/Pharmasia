import React from "react";
import { FaHeart } from "react-icons/fa";
import { dashboardCardClass } from "../ProfileDashboard";

const ProfileDashboardCard2 = () => {
  return (
    <div className={`${dashboardCardClass} bg-gradient-to-b from-blue-50  to-white `}>
      <div className=" bg-[#38A0E9] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <FaHeart />
      </div>
      <h2 className="text-lg font-semibold"> Wishlists</h2>
      <p className="text-slate-400 text-sm ">You completed</p>
      <h2 className="text-2xl font-semibold text-[#38A0E9] ">$ 2500</h2>
    </div>
  );
};

export default ProfileDashboardCard2;
