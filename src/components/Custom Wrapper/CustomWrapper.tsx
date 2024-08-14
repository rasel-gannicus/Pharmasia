"use client";

import { addUserToRedux } from "@/utils/Redux/features/user/userSlice";
import { useAppDispatch } from "@/utils/Redux/hooks";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";

const CustomWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const isHomePage = usePathname() === "/";

  // --- using react-firebase-hook to sign out and to get user data
  const [user] = useAuthState(auth);


  const dispatch = useAppDispatch();

  useEffect(() => {
    
    if (user?.email) {
      dispatch(addUserToRedux(user));
      // dispatch(addUserToRedux(session));
    }
  }, [ dispatch, user]);
  return (
    <div
      className={`${
        !isHomePage &&
        "pt-20 container min-h-screen flex flex-col justify-center items-center"
      } `}
    >
      {children}
      <Modal />
    </div>
  );
};

export default CustomWrapper;
