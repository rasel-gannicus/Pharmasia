"use client";
import React, { useEffect, useState } from "react";
import AdminDashboardCard3 from "./Dashboard Left Side/Profile Dashboard Card/AdminDashboardCard3";
import AdminDashboardCard4 from "./Dashboard Left Side/Profile Dashboard Card/AdminDashboardCard4";
import ProfileChart from "./Profile Dashboard Chart/ProfileChart";
import OrderCard from "./Dashboard Right Side/OrderCard";
import ReviewCard from "./Dashboard Right Side/ReviewCard";
import { ProfileChart2 } from "./Profile Dashboard Chart/ProfileChart2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useGetAllUserInfoQuery, useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import { Barchart } from "./Profile Dashboard Chart/Barchart";
import { AllOrders } from "../All Orders Page/AllOrders";
import AdminDashboardCard2 from "./Dashboard Left Side/Profile Dashboard Card/AdminDashboardCard2";
import AdminDashboardCard from "./Dashboard Left Side/Profile Dashboard Card/AdminDashboardCard";

export const dashboardCardClass =
  "w-[170px] xl:w-[250px] max-w-[300px] flex flex-col justify-evenly items-center py-5  px-3 bg-white min-h-[300px] rounded text-center ";

const AdminProfileDashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  const { data, isLoading : deleteLoading, isError } = useGetUserInfoQuery(user?.email);

  const { data: allUser, isLoading} = useGetAllUserInfoQuery(undefined);
  const [allOrdersFromAllUsers, setAllOrdersFromAllUsers] : any = useState([]);
  const [allCartfromAllUsers, setAllCartfromAllUsers] : any = useState([]);
  const [allratingsfromAllUsers, setAllratingsfromAllUsers] : any = useState([]);

  useEffect(() => {
    if (allUser?.length > 0) {
      let getAllOrders = allUser?.filter((item: any) => item?.orders);
      let getAllCart = allUser?.filter((item: any) => item?.cart);
      let getAllratings = allUser?.filter((item: any) => item?.ratings);

      setAllOrdersFromAllUsers(getAllOrders?.map((item : any)=> item.orders).flat());
      setAllCartfromAllUsers(getAllCart?.map((item : any)=> item.cart).flat());
      setAllratingsfromAllUsers(getAllratings?.map((item : any)=> item.ratings).flat());
    }
  }, [allUser]);

  return (
    <div className="bg-[#E9EFFB] min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-5 py-10 px-2 2xl:px-5 ">
      {/* --- Dashboard left side --- */}
      <div className=" lg:col-span-3">
        <div className=" grid grid-cols-2 lg:flex justify-between items-center gap-3 ">
          {/* --- order card --- */}
          <AdminDashboardCard orders={allOrdersFromAllUsers} isLoading={isLoading} />
          {/* --- wishlist card --- */}
          <AdminDashboardCard2 allCartfromAllUsers={allCartfromAllUsers} isLoading={isLoading} />
          {/* --- reviews card --- */}
          <AdminDashboardCard3 allratingsfromAllUsers={allratingsfromAllUsers} isLoading={isLoading} />

          {/* --- Cart quantity card --- */}
          <AdminDashboardCard4 allCartfromAllUsers={allCartfromAllUsers} isLoading={isLoading} />
        </div>
        <div className="my-10  ">
          <Barchart props={{ userInfo: data, isLoading }} />
        </div>

        <div className=" bg-white pb-5">
          <AllOrders props={{ isDashboard: true }} />
          <h2 className="text-center text-slate-400">
            Upto 8 orders will be shown there{" "}
          </h2>
        </div>

        <div className=" my-10">
          <div className=" w-full bg-white rounded pt-10 px-5 ms-auto flex justify-center items-center h-[450px]">
            <ProfileChart props={{ userInfo: data, isLoading }} />
          </div>

          <div className="py-8 px-4 bg-white flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-500">
              Your last 8 orders
            </h2>
            <p className="text-center text-gray-400">
              (You must make atleast 5 orders to see your data in chart.
              Otherwise there will be some dummy data here)
            </p>
          </div>
        </div>
      </div>

      {/* --- Dashboard right side --- */}
      <div className="flex flex-col gap-4 ">
        <OrderCard props={{ userInfo: data, isLoading }} />
        <ProfileChart2 props={{ userInfo: data, isLoading }} />
        <ReviewCard props={{ userInfo: data, isLoading }} />
      </div>
    </div>
  );
};

export default AdminProfileDashboard;
