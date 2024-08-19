import React from "react";
import OrderCartCard from "./Card/OrderCartCard";
import Card from "./Card/Card";
import SummaryCard from "./Card/Order Summary/SummaryCard";

const OrderCart = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Order Inventory</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-3"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="md:col-span-2 space-y-4">
              <Card />
              <Card />
              <Card />
            </div>

            {/* --- order summary card --- */}
            <SummaryCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderCart;
