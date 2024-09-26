"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect } from "react";

export const description = "A bar chart";

const chartData = [
  { Title: "January", Price: 186 },
  { Title: "February", Price: 305 },
  { Title: "March", Price: 237 },
  { Title: "April", Price: 73 },
  { Title: "May", Price: 209 },
  { Title: "June", Price: 214 },
];

const chartConfig = {
  desktop: {
    label: "Title",
    color: "#1C8674",
  },
} satisfies ChartConfig;

export function Barchart({ orders, isLoading }: any) {
  // --- getting user info (including users all orders, wishlist , cart)
  let pendingOrders = orders
    ?.filter((item: any) => item)
    .sort((a: any, b: any) => b.Price - a.Price)
    .slice(0, 8);

  if (!pendingOrders || pendingOrders.length < 8) {
    pendingOrders = chartData;
  }
  useEffect(() => {
    if (!pendingOrders) {
      pendingOrders = chartData;
    }
  }, [pendingOrders]);
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={pendingOrders}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Title"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Price" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Your highest priced orders <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total 8 higest priced orders
        </div>
      </CardFooter>
    </Card>
  );
}
