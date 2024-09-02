"use client";
import { AllOrders } from "@/components/User Dashboard/All Orders Page/AllOrders";
import { useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import auth from "@/utils/firebase.init";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const page = () => {
  const [user, loading, error] = useAuthState(auth);

  const { data, isLoading, isError } = useGetUserInfoQuery(user?.email);

  

  return (
    <div>
      <AllOrders  props={{ userInfo: data, isLoading }} />
    </div>
  );
};

export default page;
