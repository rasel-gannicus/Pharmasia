"use client";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useAddUserDataMutation } from "../Redux/features/user/userApi";
import { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useGetProductCartQuery,
} from "../Redux/features/products/productsApi";
import { FaHeart } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";

const CardOverlay = ({ data: productData }: { data: any }) => {
  const { _id: id } = productData;
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const { data: userCart }: any = useGetProductCartQuery(user?.email);
  const userCartData = userCart?.cart;

  const [cartAmount, setCartAmount]: any = useState({});
  useEffect(() => {
    // console.log(userCartData);
    if (userCartData?.length > 0) {
      let isCarted = userCartData.find((item: any) => item._id == id);
      setCartAmount(userCartData.find((item: any) => item._id == id));
      // console.log(cartAmount);
      // console.log(userCartData.find((item : any) => item._id === id));
    }
  }, [user, userCartData, cartAmount]);
  // console.log(userCartData);

  const [addToCart, { data: cartResult, isLoading, isError, isSuccess }]: any =
    useAddToCartMutation();

  const checkUser = () => {
    if (!user?.email) {
      toast({
        title: "You need to login first !",
        action: (
          <ToastAction
            className="bg-blue-900 text-white hover:text-black"
            onClick={() => router.push("/authentication/login")}
            altText="Try again"
          >
            Login
          </ToastAction>
        ),
      });
      return;
    }
  };

  const handleCartAndWishlist = (status: string) => {
    checkUser();
    if (user?.email) {
      try {
        addToCart({
          email: user.email,
          product: productData,
          status,
        });
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  useEffect(() => {
    // console.log(user?.email);
    // console.log(cartResult);
    if (cartResult) {
      console.log(cartResult);
      toast({
        description: cartResult?.message || "Product Added to cart!",
      });
    }
  }, [cartResult, isLoading, isError, isSuccess]);

  return (
    <div className="absolute bg-[rgba(71,85,105,0.85)] top-0 bottom-0 left-[900px] -right-[900px] group-hover:right-0 group-hover:left-0  flex flex-col justify-center items-center gap-5 duration-300">
      {loading || isLoading ? <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#ddd"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          /> : <>
        <Button
          onClick={() => router.push(`/singleProduct/${id}`)}
          className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white"
        >
          <CgDetailsMore className="me-3 text-xl text-[#5092C7] " />
          View Details
        </Button>

        <Button
          onClick={() => handleCartAndWishlist("pending")}
          disabled={isLoading || cartAmount?.quantity > 0}
          className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white"
        >
          <FaShoppingCart className="me-3 text-xl text-slate-500 " />{" "}
          {/* {isLoading ? "Adding . . ." : "Add to cart"} */}
          {cartAmount?.quantity > 0 ? "Added" : "Add to Cart"}
        </Button>

        <Button
          onClick={() => handleCartAndWishlist("wishlist")}
          disabled={isLoading || cartAmount?.wishlist}
          className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white"
        >
          {cartAmount?.wishlist ? (
            <FaHeart className="me-2 text-xl text-[#FF594D] " />
          ) : (
            <MdFavoriteBorder className="me-2 text-xl text-[#FF594D] " />
          )}

          {cartAmount?.wishlist ? "WishListed" : "Add to favourite"}
        </Button>
      </>}
    </div>
  );
};

export default CardOverlay;
