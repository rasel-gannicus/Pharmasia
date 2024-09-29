"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FlashSaleCountdown from "../flash sale countdown/FlashSaleCountdown";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useGetProductCartQuery,
} from "@/utils/Redux/features/products/productsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useRouter } from "next/navigation";

interface Medicine {
  _id: string;
  Title: string;
  Description: string;
  Images: string;
  Price: number;
  DiscountedPrice?: number;
  Flashsale?: boolean;
  flashSaleEndTime?: string;
}

export default function FlashSaleCard({ data }: { data: Medicine }) {

  let discountedPrice = data?.Price * 0.6;

  data = { ...data, DiscountedPrice: discountedPrice };

  const { _id: id } = data;
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth); //-- getting user info from firebase

  // --- getting product cart info for individual user
  const { data: userCart }: any = useGetProductCartQuery(user?.email);
  const userCartData = userCart?.cart;

  const [cartAmount, setCartAmount]: any = useState({});

  useEffect(() => {
    if (userCartData?.length > 0) {
      let isCarted = userCartData.find((item: any) => item._id == id);
      setCartAmount(userCartData.find((item: any) => item._id == id));
    }
  }, [user, userCartData, cartAmount]);

  const checkUser = () => {
    // --- checking if the user is logged in. if not he will be promped to login
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

  // --- using this function to 'Add to cart' , 'Add to wishlist'
  const [addToCart, { data: cartResult, isLoading, isError, isSuccess }]: any =
    useAddToCartMutation();

  const handleCartAndWishlist = (status: string) => {
    checkUser();
    if (user?.email) {
      try {
        addToCart({
          email: user.email,
          product: { ...data, user: user },
          status,
        });
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  useEffect(() => {
    if (cartResult) {
      if (cartResult.message.toLowerCase().includes("cart")) {
        toast({
          title: "Product Added to cart ",
          action: (
            <ToastAction
              className="bg-yellow-400 text-white border-none hover:text-black"
              onClick={() => router.push("/user/cart")}
              altText="Try again"
            >
              View Cart
            </ToastAction>
          ),
        });
      } else if (cartResult.message.toLowerCase().includes("wishlist")) {
        toast({
          title: "Product Added to Wishlist ",
          action: (
            <ToastAction
              className="bg-blue-700 border-none text-white hover:text-black"
              onClick={() => router.push("/user/wishlist")}
              altText="Try again"
            >
              View Wishlist
            </ToastAction>
          ),
        });
      }
    }
  }, [cartResult, isLoading, isError, isSuccess]);

  return (
    <Card className="overflow-hidden flex flex-col justify-between">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={data?.Images}
            alt={data?.Title}
            width={300}
            height={200}
            className="w-full object-cover h-48"
          />
          <Badge className="absolute top-2 left-2 bg-red-500">Flash Sale</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">
          {data?.Title}
        </h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {data?.Description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-green-600">
              ${data?.DiscountedPrice?.toFixed(2)}
            </p>
            {data?.Price !== data?.DiscountedPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${data?.Price}
              </p>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            Save{" "}
            {(((data?.Price - discountedPrice) / data?.Price) * 100).toFixed(0)}
            %
          </Badge>
        </div>
        {data?.flashSaleEndTime && (
          <div className="flex items-center gap-2 text-sm text-red-500 font-semibold">
            <Clock className="w-4 h-4" />
            <FlashSaleCountdown endTime={data?.flashSaleEndTime} />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        <Button asChild className="flex-1 text-xs">
          <Link href={`/singleProduct/${data?._id}`}>View Details</Link>
        </Button>
        <Button
          onClick={() => handleCartAndWishlist("pending")}
          variant="secondary"
          className="flex-1 text-xs hover:bg-gray-200 "
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
