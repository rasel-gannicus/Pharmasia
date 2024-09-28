"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import { useGetProductCartQuery } from "../Redux/features/products/productsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

export const useWishlist = () => {
  const [user, loading]: any = useAuthState(auth);

  // --- checking how many items are in cart
  const [cart, setCart] = useState(0);

  const { data, isLoading, isError, isSuccess }: any = useGetProductCartQuery(
    user?.email
  );

  useEffect(() => {
    if (data?.cart?.length > 0) {
      const onlyWishlist = data?.cart.filter(
        (item: any) => item.wishlist === true
      );

      setCart(onlyWishlist);
    }
    // console.log(data);
    // console.log(data?.cart?.length);
  }, [user?.email, data]);
  return cart;
};
