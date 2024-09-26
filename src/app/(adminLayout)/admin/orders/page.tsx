import { AllOrders } from "@/components/Dashboard/Admin Dashboard/All Orders Page/AllOrders";
import React from "react";

const page = () => {
  return (
    <div>
      <AllOrders props={{ isDashboard: false }} />
    </div>
  );
};

export default page;
