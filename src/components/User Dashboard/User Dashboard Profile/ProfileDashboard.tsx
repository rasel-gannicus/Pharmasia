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
          <ProfileDashboardCard props={{ userInfo: data }} />

          {/* --- wishlist card --- */}
          <ProfileDashboardCard2 props={{ userInfo: data }} />

          
          <ProfileDashboardCard3 />

          {/* --- Cart quantity card --- */}
          <ProfileDashboardCard4  props={{userInfo : data}} />
        </div>
        <div className="my-10 w-full bg-white rounded py-10 px-5 ms-auto flex justify-center items-center h-[450px]">
          <ProfileChart />
        </div>
        <RecentOrdersTable />
      </div>

      {/* --- Dashboard right side --- */}
      <div className="flex flex-col gap-4">
        <OrderCard />
        <ProfileChart2 />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ProfileDashboard;
