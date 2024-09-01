import React, { useEffect, useState } from "react";
import BillingAddress from "./Billing Information & Address/BillingAddress";
import {
  useAddOrdersMutation,
  useModifyCartMutation,
} from "@/utils/Redux/features/products/productsApi";
import { TailSpin } from "react-loader-spinner";

const CheckoutPage = ({ props }: any) => {
  const [isAgree, setIsAgree] = useState(false);
  const { checkedItems, email } = props;

  const [addOrders, { data, isLoading, isError, isSuccess, error }]: any =
    useAddOrdersMutation();

  // --- using this function to 'Delete, Increase, Decrease' a product from Cart
  const [modifyCart, { data: modifiedData, isLoading: isModifyLoading }] =
    useModifyCartMutation();

  useEffect(() => {
    // --- making order request to servers when user make confirmation in checkout page
    if (isAgree) {
      addOrders({ data: checkedItems, status: "newOrder", email });
    }
  }, [isAgree]);

  useEffect(() => {
    // --- removing items from cart if the user make successfull order
    if (data?.results?.length > 0) {
      modifyCart({ data: checkedItems, modifyType: "delete", email });
      return;
    }
  }, [data]);

  if (isLoading || isModifyLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <TailSpin
          visible={true}
          height="100"
          width="100"
          color="#1C8674"
          ariaLabel="tail-spin-loading"
          radius="4"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  // console.log(data);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6  min-h-[90vh]">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {!isAgree && "Billing Information & Shipping Address :"}
        </h1>
      </div>

      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-3"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="md:col-span-3 space-y-4">
              <BillingAddress props={{ isAgree, setIsAgree }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
