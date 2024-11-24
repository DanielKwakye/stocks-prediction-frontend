// import './App.css'

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "./components/layout/app-sidebar"
import AppFutureStockPrediction from "./components/content/app-future-stock-prediction"
import { Card } from "./components/ui/card"
import AppPastStockPrediction from "./components/content/app-past-stock-prediction"

function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container p-20 space-y-4">
        {/* <SidebarTrigger /> */}
        <Card className="p-5 space-y-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Future Prediction - Left</h2>
            <p className="mt-2 text-gray-600">
              The left graph displays the predicted stock values for future dates based on the AI model's analysis of historical data and technical indicators. It provides a visual representation of potential stock trends, helping users make informed decisions about future market movements. The predictions are updated dynamically and offer insights into potential closing balances.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">Evaluation of AI Model Accuracy on Historical Data - Right </h2>
            <p className="mt-2 text-gray-600">
              The right graph compares the predicted stock values with the actual historical values for a past period. It helps evaluate the accuracy of the AI model by visualizing the differences between predictions and actual outcomes. The Mean Squared Error (MSE) metric is calculated to quantify the model's performance, providing a benchmark for improvement and ensuring reliability in future predictions.
            </p>
          </div>
        </Card>
        <div className="flex flex-row gap-4">
            <div className="flex-1">
              <AppFutureStockPrediction/>
            </div>
            <div className="flex-1">
              <AppPastStockPrediction/>
            </div>
        </div>
      </main>
    </SidebarProvider>
  )

}

export default App
