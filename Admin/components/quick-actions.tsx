"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, MessageSquare, AlertCircle, CheckCircle, Clock, TrendingUp, Eye, Download } from "lucide-react"

interface QuickActionsProps {
  setActiveTab: (tab: string) => void
}

export function QuickActions({ setActiveTab }: QuickActionsProps) {
  const quickStats = [
    { label: "Pending Applications", count: 12, color: "bg-yellow-100 text-yellow-800", urgent: true },
    { label: "Unread Messages", count: 3, color: "bg-red-100 text-red-800", urgent: true },
    { label: "Interviews Today", count: 5, color: "bg-blue-100 text-blue-800", urgent: false },
    { label: "Active Jobs", count: 24, color: "bg-green-100 text-green-800", urgent: false },
  ]

  const quickActions = [
    {
      title: "Add New Job",
      description: "Create a new job posting",
      icon: Plus,
      action: () => setActiveTab("jobs"),
      color: "bg-[#8528FF] hover:bg-[#8528FF]/90",
      textColor: "text-white",
    },
    {
      title: "Review Applications",
      description: "Check pending applications",
      icon: FileText,
      action: () => setActiveTab("applications"),
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
      badge: 12,
    },
    {
      title: "View Messages",
      description: "Read new messages",
      icon: MessageSquare,
      action: () => setActiveTab("messages"),
      color: "bg-green-600 hover:bg-green-700",
      textColor: "text-white",
      badge: 3,
    },
    {
      title: "Generate Report",
      description: "Export analytics data",
      icon: Download,
      action: () => console.log("Generate report"),
      color: "bg-gray-600 hover:bg-gray-700",
      textColor: "text-white",
    },
  ]

  const recentAlerts = [
    {
      type: "urgent",
      message: "12 applications need review",
      time: "2 hours ago",
      icon: AlertCircle,
      color: "text-red-600",
    },
    {
      type: "info",
      message: "New message from Sarah Johnson",
      time: "4 hours ago",
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      type: "success",
      message: "Job posting published successfully",
      time: "6 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#8528FF]" />
            Quick Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                  stat.urgent ? "border-red-200 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.count}</p>
                  </div>
                  {stat.urgent && <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#8528FF]" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto p-4 flex flex-col items-start space-y-2 ${action.color} ${action.textColor} border-0 shadow-sm hover:shadow-md transition-all duration-200`}
                  onClick={action.action}
                >
                  <div className="flex items-center justify-between w-full">
                    <Icon className="h-6 w-6" />
                    {action.badge && (
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {action.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{action.title}</p>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-[#8528FF]" />
            Recent Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => {
              const Icon = alert.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Icon className={`h-5 w-5 ${alert.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
