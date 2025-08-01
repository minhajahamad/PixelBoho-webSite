import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCard({ title, value, change, changeType = "neutral", icon: Icon, description }) {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600",
  }[changeType]

  return (
    <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-[#8528FF] group-hover:scale-110 transition-transform duration-200" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#8528FF] transition-colors duration-300">
          {value}
        </div>
        {change && (
          <p className={`text-xs ${changeColor} group-hover:font-medium transition-all duration-200`}>{change}</p>
        )}
        {description && (
          <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-200">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
