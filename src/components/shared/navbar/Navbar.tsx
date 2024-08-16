"use client";

import { useAppSelector } from "@/utils/Redux/hooks";
import GuestNavbar from "./Conditional Navbar/GuestNavbar";
import UserNavbar from "./Conditional Navbar/UserNavbar";
import { useGetProductCartQuery } from "@/utils/Redux/features/products/productsApi";

const Navbar = () => {
  const userState = useAppSelector((state) => state.userSlice.user);
  const { data, isLoading, isError, isSuccess } = useGetProductCartQuery('okay@gmail.com');

  return (
    userState.email ? <UserNavbar /> : <GuestNavbar />
  );
};

export default Navbar;
