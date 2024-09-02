"use client";
import React, { useEffect } from "react";
import ProfileDashboardCard from "./Dashboard Left Side/Profile Dashboard Card/ProfileDashboardCard";
import ProfileDashboardCard2 from "./Dashboard Left Side/Profile Dashboard Card/ProfileDashboardCard2";
import ProfileDashboardCard3 from "./Dashboard Left Side/Profile Dashboard Card/ProfileDashboardCard3";
import ProfileDashboardCard4 from "./Dashboard Left Side/Profile Dashboard Card/ProfileDashboardCard4";
import ProfileChart from "./Profile Dashboard Chart/ProfileChart";
import OrderCard from "./Dashboard Right Side/OrderCard";
import ReviewCard from "./Dashboard Right Side/ReviewCard";
import { ProfileChart2 } from "./Profile Dashboard Chart/ProfileChart2";
import RecentOrdersTable from "./Dashboard Left Side/Recent Orders/RecentOrdersTable";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";

export const dashboardCardClass =
  "w-[170px] xl:w-[250px] max-w-[300px] flex flex-col justify-evenly items-center py-5  px-3 bg-white min-h-[300px] rounded text-center ";

const ProfileDashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  const { data, isLoading, isError } = useGetUserInfoQuery(user?.email);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="bg-[#E9EFFB] min-h-screen grid grid-cols-4 gap-5 py-10 px-2 2xl:px-5 ">
      {/* --- Dashboard left side --- */}
      <div className=" col-span-3">
        <div className=" lg:flex justify-between items-center gap-3 ">
          {/* --- order card --- */}
          <ProfileDashboardCard props={{ userInfo: data, isLoading }} />

          {/* --- wishlist card --- */}
          <ProfileDashboardCard2 props={{ userInfo: data, isLoading }} />

          <ProfileDashboardCard3 />

          {/* --- Cart quantity card --- */}
          <ProfileDashboardCard4 props={{ userInfo: data, isLoading }} />
        </div>
        <div className=" my-10">
          <div className=" w-full bg-white rounded pt-10 px-5 ms-auto flex justify-center items-center h-[450px]">
            <ProfileChart props={{ userInfo: data, isLoading }} />
          </div>

          <div className="py-8 px-4 bg-white flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-500">Your last 8 orders</h2>
            <p className="text-center text-gray-400">(You must make atleast 8 orders to see your data in chart. Otherwise there will be some dummy data here)</p>
          </div>
        </div>
        <RecentOrdersTable />
      </div>

      {/* --- Dashboard right side --- */}
      <div className="flex flex-col gap-4">
        <OrderCard props={{ userInfo: data, isLoading }} />
        <ProfileChart2 />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ProfileDashboard;
