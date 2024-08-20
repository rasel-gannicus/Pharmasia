import { useEffect, useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import { useGetProductCartQuery } from "../Redux/features/products/productsApi";

export const useCart = (email: any, isFullData: any) => {
  //   console.log(email);
  // --- checking how many items are in cart
  const [cart, setCart] = useState(0);

  const { data, isLoading, isError, isSuccess }: any =
    useGetProductCartQuery(email);

  useEffect(() => {
    if (data?.cart?.length > 0) {
      const onlyCart = data.cart.filter(
        (item: any) => item.quantity > 0 && item.status !== "wishlist"
      );
      if (!isFullData) {
        setCart(onlyCart.length);
      } else {
        setCart(onlyCart);
      }
    }
    // console.log(data);
    // console.log(data?.cart?.length);
  }, [email, cart, data]);
  return cart;
};
