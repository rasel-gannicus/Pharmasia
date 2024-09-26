"use client";
import { AllOrders } from "@/components/Dashboard/User Dashboard/All Orders Page/AllOrders";

const page = () => {
  return (
    <div className="grid">
      <AllOrders props={{ isDashboard: false }} />
    </div>
  );
};

export default page;
