import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import {
  useAddToCartMutation,
  useModifyCartMutation,
} from "@/utils/Redux/features/products/productsApi";
import { errorMessage, successMessage } from "@/utils/Redux/toastMsg";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

const WishlistCard = (data: any) => {
  // --- modifying the cart (delete from cart, increase or decrease the amount in cart )
  const [
    modifyCart,
    { data: modifiedData, isLoading, isError, isSuccess, error },
  ]: any = useModifyCartMutation();

  const { _id, Images, Ratings, Title, quantity, Price, status } = data.data;

  let receivedProductData = data.data ; 
  let sendingProductData = {...receivedProductData, user  : data.user};
  
  // --- this one will remove items from wishlist
  const handleModify = (type: string) => {
    modifyCart({ ...data, modifyType: type, email: data.email });
  };

  useEffect(() => {
    if (isError && error) {
      errorMessage(error?.data?.error);
    }
  }, [isError, modifiedData, isLoading, isError]);

  // // --- using this function to  'Add to wishlist'
  const [
    addToCart,
    {
      data: cartResult,
      isLoading: addToCartLoading,
      isError: addToCartError,
      isSuccess: addToCartSuccess,
    },
  ]: any = useAddToCartMutation();


  const handleAddToCart = (status: string) => {
    addToCart({
      email: data.email,
      product: sendingProductData,
      status,
    });
  };

  const router = useRouter();
  useEffect(() => {
    if (cartResult?.message?.toLowerCase().includes("cart")) {
      successMessage('Product Added to cart') ;
    }
  }, [cartResult, addToCartLoading]);

  return (
    <div>
      <div className=" flex flex-col md:justify-center  items-center md:grid grid-cols-3 lg:items-start gap-4">
        <div className="col-span-2  flex-col md:justify-start justify-center items-center flex md:flex-row md:items-start gap-4 ">
          <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
            <img src={Images} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-800">{Title}</h3>
            <p className="text-xs font-semibold text-gray-500 mt-0.5">
              Size: MD
            </p>
            <p className=" font-semibold text-[#1C8674] mt-5">
              Price: $ {Price}
            </p>
          </div>
        </div>

        <div className="ml-auto  h-full w-full flex justify-center md:justify-end md:items-start items-center">
          {isLoading || addToCartLoading ? (
            <div className="h-full flex justify-center items-center">
              <ThreeCircles
                visible={true}
                height="50"
                width="50"
                color="#9FC4DA"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <div className=" ">
              <Button
                onClick={() => handleAddToCart("pending")}
                className="bg-[#1C8674]"
              >
                Add to cart
              </Button>

              {/* --- increase decrease button --- */}

              <button
                onClick={() => handleModify("wishlist_false")}
                type="button"
                disabled={isLoading}
                className="mt-6 font-semibold text-red-500 text-xs flex items-center justify-center gap-1 shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-current inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
                REMOVE
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-gray-300 my-3" />
    </div>
  );
};

export default WishlistCard;
