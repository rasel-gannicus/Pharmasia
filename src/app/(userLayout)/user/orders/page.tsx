"use client"
import { AllOrders } from "@/components/User Dashboard/All Orders Page/AllOrders";

const page = () => {

  return (
    <div>
      <AllOrders props={{isDashboard : false}} />
    </div>
  );
};

export default page;
