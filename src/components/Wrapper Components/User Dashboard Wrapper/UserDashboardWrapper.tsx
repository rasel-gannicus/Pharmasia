"use client";

import { addUserToRedux } from "@/utils/Redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/components/Modal/Modal";
import UserDashboardNavbar from "@/components/shared/navbar/User Dashboard Navbar/UserDashboardNavbar";
import { useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";

const UserDashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isHomePage = usePathname() === "/";

  // --- using react-firebase-hook to sign out and to get user data
  const [user, loading] = useAuthState(auth);

  const dispatch = useAppDispatch();

  const userFromRedux = useAppSelector((state) => state.userSlice.user);

  // --- checking if the user role is admin or not
  const { data, isLoading }: any = useGetUserInfoQuery(userFromRedux?.email);
  const navigation = useRouter();

  useEffect(() => {
    console.log(data?.role);
    if (data?.role == "user") {
      return navigation.push('/dashboard') ; 
    }
  }, [data, isLoading]);

  useEffect(() => {
    // --- adding user to local state with redux 
    if (user?.email) {
      dispatch(addUserToRedux(user));
    }
    // --- redirecting user to admin panel if the user role is 'admin' 
    // if (user?.email == "admin@admin.com") {
    //   return navigation.push('/admin')
    // }
  }, [dispatch, user]);
  return (
    <div>
      <UserDashboardNavbar> {children} </UserDashboardNavbar>
      <Modal />
      <ToastContainer />
    </div>
  );
};

export default UserDashboardWrapper;
