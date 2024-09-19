"use client";

import { addUserToRedux } from "@/utils/Redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { ToastContainer } from "react-toastify";
import Modal from "@/components/Modal/Modal";
import UserDashboardNavbar from "@/components/shared/navbar/User Dashboard Navbar/UserDashboardNavbar";
import { useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import AdminDashboardNavbar from "@/components/shared/navbar/Admin Dashboard Navbar/AdminDashboardNavbar";

export const AdminDashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  // --- using react-firebase-hook to get user data
  const [user, loading] = useAuthState(auth);

  const dispatch = useAppDispatch();

  // --- getting user info from redux instead of firebase to avoid multi fetching duration
  const userFromRedux = useAppSelector((state) => state.userSlice.user);

  // --- checking if the user role is admin or not
  const { data, isLoading, isError, error }: any = useGetUserInfoQuery(
    userFromRedux?.email
  );
  const navigation = useRouter();


  useEffect(() => {
    // --- adding user to local state with redux
    if (user?.email) {
      dispatch(addUserToRedux(user));
    }
  }, [dispatch, user]);
  return (
    <div>
      <AdminDashboardNavbar> {children} </AdminDashboardNavbar>
      <Modal />
      <ToastContainer />
    </div>
  );
};

