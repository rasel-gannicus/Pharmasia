import React from "react";
import ProfileDashboardCard from "./Profile Dashboard Card/ProfileDashboardCard";
import ProfileDashboardCard2 from "./Profile Dashboard Card/ProfileDashboardCard2";
import ProfileDashboardCard3 from "./Profile Dashboard Card/ProfileDashboardCard3";
import ProfileDashboardCard4 from "./Profile Dashboard Card/ProfileDashboardCard4";
import ProfileChart from "./Profile Dashboard Chart/ProfileChart";

export const dashboardCardClass =
  "w-[170px] xl:w-[250px] max-w-[300px] flex flex-col justify-evenly items-center py-5  px-3 bg-white min-h-[300px] rounded text-center ";
const ProfileDashboard = () => {
  return (
    <div className="bg-[#E9EFFB] min-h-screen grid grid-cols-4 gap-5 py-10 px-5 ">
      <div className=" col-span-3">
        <div className=" lg:flex justify-between items-center gap-3 ">
          <ProfileDashboardCard />
          <ProfileDashboardCard2 />
          <ProfileDashboardCard3 />
          <ProfileDashboardCard4 />
        </div>
        <div className="my-10 w-full bg-white rounded py-10 px-5 ms-auto flex justify-center items-center h-[450px]">
          <ProfileChart />
        </div>
      </div>
      <div className=" bg-yellow-50"></div>
    </div>
  );
};

export default ProfileDashboard;
