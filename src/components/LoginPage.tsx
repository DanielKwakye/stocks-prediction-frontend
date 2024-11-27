import React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, DollarSign, Mail, Lock, User } from 'lucide-react'

const LoginPage: React.FC = () => {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', price: 150.00, change: 2.5 },
    { symbol: 'GOOGL', price: 2800.00, change: -1.2 },
    { symbol: 'MSFT', price: 300.00, change: 0.8 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => prevStocks.map(stock => {
        const changePercent = (Math.random() - 0.5) * 2
        const newPrice = +(stock.price * (1 + changePercent / 100)).toFixed(2)
        return {
          ...stock,
          price: newPrice,
          change: +changePercent.toFixed(2)
        }
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzFhMWExYSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzMzMiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob"></div>
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md mb-8 relative z-10">
        <Card className="bg-white/10 backdrop-blur-md shadow-xl border-gray-700">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center text-white">Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {stocks.map(stock => (
                <div key={stock.symbol} className="text-center">
                  <div className="text-sm font-semibold text-gray-300">{stock.symbol}</div>
                  <div className="text-lg font-bold text-white">${stock.price.toFixed(2)}</div>
                  <div className={`text-sm ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center justify-center`}>
                    {stock.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {Math.abs(stock.change)}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-xl border-gray-700 relative z-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome Back</CardTitle>
          <CardDescription className="text-center text-gray-300">Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50">
              <TabsTrigger value="login" className="text-white data-[state=active]:bg-gray-700">Login</TabsTrigger>
              <TabsTrigger value="register" className="text-white data-[state=active]:bg-gray-700">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" placeholder="Enter your email" className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="password" type="password" placeholder="Enter your password" className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <DollarSign className="mr-2 h-4 w-4" /> Log in
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="name" type="text" placeholder="Enter your full name" className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" placeholder="Enter your email" className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="password" type="password" placeholder="Create a password" className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <DollarSign className="mr-2 h-4 w-4" /> Sign up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage

