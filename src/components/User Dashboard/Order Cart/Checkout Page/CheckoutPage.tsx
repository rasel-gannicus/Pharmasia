import React, { useEffect, useState } from "react";
import BillingAddress from "./Billing Information & Address/BillingAddress";
import { useModifyCartMutation } from "@/utils/Redux/features/products/productsApi";

const CheckoutPage = ({props} : any) => {
  const [isAgree, setIsAgree] = useState(false);
  const {checkedItems, email} = props ; 

    // --- using this function to 'Delete, Increase, Decrease' a product from Cart
    const [
      modifyCart,
      { data: modifiedData, isLoading, isError, isSuccess, error },
    ]: any = useModifyCartMutation();

  useEffect(()=>{
    if(isAgree){
      modifyCart({ data : checkedItems, modifyType: 'confirmed', email });
    }
  },[isAgree])
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
