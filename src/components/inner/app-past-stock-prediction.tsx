import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import { chartConfig, chartData } from "@/lib/utils"
import { AppDateSelector } from "./app-date-selector"
import { Button } from "../ui/button"
import AppSymbolSelector from "./app-symbols-selector"

export default function AppPastStockPrediction() {

    return (
        <Card>
          <CardHeader>
            <CardTitle>Evaluation of AI Model</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
            <div className="flex gap-2">
                 <div className="flex-2 w-full">
                     <AppSymbolSelector />
                  </div>
                  <div className="flex-2 w-full">
                    <AppDateSelector placeholder="From" />
                  </div>
                  <div  className="flex-2 w-full">
                    <AppDateSelector placeholder="To" />
                  </div>
                  <div  className="flex-1 w-full">
                    <Button>Refresh</Button>
                  </div>
              </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      )

}