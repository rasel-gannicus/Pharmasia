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
import { useEffect } from "react";
import { useAddToCartMutation } from "../Redux/features/products/productsApi";

const CardOverlay = ({ data: productData }: { data : any}) => {
  const { _id: id } = productData;
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const [addToCart, { data , isLoading, isError, isSuccess } ] =
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

  const handleAddToCart = async () => {
    checkUser();
    if (user?.email) {
      try {
        addToCart({ email: user.email, product: productData, status : 'pending' });
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  useEffect(() => {
    // console.log(user?.email);
    console.log(data);
    if (data) {
      // showCnToast('Product added to cart') ;
      toast({
        description: "Product Added to cart!",
      });
    }
  }, [data, isLoading, isError, isSuccess]);

  const handleAddToWishlist = () => {
    checkUser();
  };
  return (
    <div className="absolute bg-[rgba(71,85,105,0.85)] top-0 bottom-0 left-[900px] -right-[900px] group-hover:right-0 group-hover:left-0  flex flex-col justify-center items-center gap-5 duration-300">
      <Button
        onClick={() => router.push(`/singleProduct/${id}`)}
        className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white"
      >
        <CgDetailsMore className="me-3 text-xl text-[#5092C7] " />
        View Details
      </Button>

      <Button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white"
      >
        <FaShoppingCart className="me-3 text-xl text-slate-500 " />{" "}
        {isLoading ? "Adding . . ." : "Add to cart"}
      </Button>

      <Button
        onClick={handleAddToWishlist}
        className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white"
      >
        <MdFavoriteBorder className="me-2 text-xl text-[#FF594D] " />
        Add to favourite
      </Button>
    </div>
  );
};

export default CardOverlay;
