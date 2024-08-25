import React from "react";
import { MdOutlineQueryStats } from "react-icons/md";
import { dashboardCardClass } from "../ProfileDashboard";

const ProfileDashboardCard = () => {
  return (
    <div className={`${dashboardCardClass} bg-gradient-to-b from-orange-50  to-white`}>
      <div className=" bg-[#FF7555] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <MdOutlineQueryStats />
      </div>
      <h2 className="text-lg font-semibold">Orders</h2>
      <p className="text-slate-400 text-sm ">You completed</p>
      <h2 className="text-2xl font-semibold text-[#FF7555] ">$ 2500</h2>
    </div>
  );
};

export default ProfileDashboardCard;
