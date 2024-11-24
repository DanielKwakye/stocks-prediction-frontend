
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button"
import AppSymbolSelector from "./app-symbols-selector"
import { apiGetFutureStockPrediction } from "../../services/stocks-service"
import { useState } from "react"
import { AppSpinner } from "./app-spinner"


export default function AppFutureStockPrediction() {

  const [days, setDays] = useState("30")
  const [symbol, setSymbol] = useState("AAPL")
  

  const fetchFuturePredictionHandler = async () => {

     try{
      const response = await apiGetFutureStockPrediction({
        symbol: "AAPL",
        days: 30,
      })
      console.log("Response =>", response.data);

     }catch(err) {
        console.log("Error =>", err);
     }
  }

  const onDaysChangedHandler = async (val: string) => { 
    console.log("val =>", val);
    setDays(val)
  }

  const onSymbolChangedHandler = async (val: string) => { 
    console.log("val =>", val);
    setSymbol(val)
  }


  return (
    <div >
      <Card>
        <CardHeader>
          <CardTitle>Future Prediction</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
            <div className="flex gap-2">
                  <div className="flex-2 w-full">
                    <AppSymbolSelector defaultValue={symbol} onValueChange={onSymbolChangedHandler}  />
                  </div>
                  <div  className="flex-2 w-full">
                    <Select defaultValue={days} onValueChange={onDaysChangedHandler}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Days" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30">30 Days</SelectItem>
                            <SelectItem value="60">60 Days</SelectItem>
                            <SelectItem value="90">90 Days</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div  className="flex-1 w-full">
                    <Button onClick={fetchFuturePredictionHandler} disabled>
                      <AppSpinner />
                      Refresh
                      </Button>
                  </div>
              </div>
          
        </CardHeader>
        <CardContent>
          <div  className="flex aspect-video justify-center items-center">
            <AppSpinner className="text-black" />
          </div>
          {/* <ChartContainer config={chartConfig}>
            <AreaChart
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
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
              />
            </AreaChart>
          </ChartContainer> */}
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
    
  )
}