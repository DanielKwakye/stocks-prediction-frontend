import { apiClient } from "./config.ts"


export const apiGetTestDateRage = async () => {
    return apiClient.get("/test-date-range")
}

export const apiGetFutureStockPrediction = async (payload: { symbol: string, days: number}) => {
    return apiClient.post("/predict", payload )
}

export const apiGetHistoricalStockPrediction = async (payload: {symbol: string, start_date: string, end_date: string}) => {
    return apiClient.post("/get-predictions-and-mse", payload)
}
