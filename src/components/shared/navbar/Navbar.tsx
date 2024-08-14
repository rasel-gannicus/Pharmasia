"use client";

import { useAppSelector } from "@/utils/Redux/hooks";
import GuestNavbar from "./Conditional Navbar/GuestNavbar";
import UserNavbar from "./Conditional Navbar/UserNavbar";

const Navbar = () => {
  const userState = useAppSelector((state) => state.userSlice.user);
  return (
    userState.email ? <UserNavbar /> : <GuestNavbar />
  );
};

export default Navbar;
