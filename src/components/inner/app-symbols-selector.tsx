import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
export default function AppSymbolSelector() {
    return (
        <div >
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Symbol" />
                </SelectTrigger>
                <SelectContent> 
                    <SelectItem value="AAPL">AAPL</SelectItem>
                    <SelectItem value="GOOGL">GOOGLE</SelectItem>
                    <SelectItem value="MSFT">MSFT</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}