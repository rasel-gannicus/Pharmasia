"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ProfileChart2({ props }: any) {
  const { userInfo, isLoading } = props;
  let orders = userInfo?.orders;

  let getOrdersChartData: any[] = [];

  const getOrdersBelow30 = orders?.filter(
    (item: any) => item.Price <= 30 && item.status.toLowerCase() != "cancelled"
  );
  const getOrdersFrom30To50 = orders?.filter(
    (item: any) =>
      item?.Price >= 31 &&
      item?.Price <= 50 &&
      item?.status?.toLowerCase() != "cancelled"
  );
  const getOrdersFrom50To100 = orders?.filter(
    (item: any) =>
      item?.Price >= 51 &&
      item?.Price <= 100 &&
      item?.status?.toLowerCase() != "cancelled"
  );
  const getOrdersFrom100To150 = orders?.filter(
    (item: any) =>
      item?.Price >= 101 &&
      item?.Price <= 150 &&
      item?.status?.toLowerCase() != "cancelled"
  );
  const getOrdersAbove150 = orders?.filter(
    (item: any) => item.Price > 150 && item.status.toLowerCase() != "cancelled"
  );

  getOrdersChartData = [
    ...getOrdersChartData,
    { title: "Orders from $0 to $30", count: getOrdersBelow30?.length },
    { title: "Orders from $31 to $50", count: getOrdersFrom30To50?.length },
    { title: "Orders from $51 to $100", count: getOrdersFrom50To100?.length },
    { title: "Orders from $101 to $150", count: getOrdersFrom100To150?.length },
    { title: "Orders above $150", count: getOrdersAbove150?.length },
  ];

  console.log(getOrdersChartData);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col xl:max-w-[400px] ">
      <CardHeader className="items-center pb-0">
        {/* <CardTitle>Pie Chart - Donut with Text</CardTitle> */}
        <CardDescription>Items bought by Category</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {/* items */}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground text-center">
          Showing total items bought by category for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
