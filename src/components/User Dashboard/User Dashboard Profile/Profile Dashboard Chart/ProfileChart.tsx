"use client";
import { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProfileChart = ({ props }: any) => {
  
  // --- getting user info (including users all orders, wishlist , cart)
  const { userInfo, isLoading } = props;

  let pendingOrders = userInfo?.orders
    ?.filter(
      (item: any) => item.status === "newOrder" || item.status != "cancelled"
    )
    .slice(0, 8);

  const data = [
    {
      Title: "Product A",
      Price: 1000,
    },
    {
      Title: "Product B",
      Price: 2000,
    },
    {
      Title: "Product C",
      Price: 2000,
    },
    {
      Title: "Product D",
      Price: 2780,
    },
    {
      Title: "Product E",
      Price: 1890,
    },
    {
      Title: "Product F",
      Price: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      Title: "Product G",
      Price: 3490,
    },
  ];

  if (!pendingOrders || pendingOrders.length < 5) {
    pendingOrders = data;
  }
  useEffect(() => {
    if (!pendingOrders) {
      pendingOrders = data;
    }
  }, [pendingOrders]);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        className="w-full"
        width={500}
        height={400}
        data={pendingOrders}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <defs>
          {/* --- chart color and color gradient --- */}
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1C8674" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1C8674" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Title" />
        <YAxis />
        <Tooltip />
        <Area
          type="natural"
          dataKey="Price"
          stroke="#1C8674"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ProfileChart;
