"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, FileText, MessageSquare, Download, Zap, ChevronDown, AlertCircle, CheckCircle } from "lucide-react"

export function QuickActionsDropdown({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false)

  const quickStats = [
    { label: "Pending", count: 12, color: "text-red-600", urgent: true },
    { label: "Messages", count: 3, color: "text-blue-600", urgent: true },
    { label: "Interviews", count: 5, color: "text-green-600", urgent: false },
  ]

  const quickActions = [
    {
      title: "Add New Job",
      icon: Plus,
      action: () => setActiveTab("jobs"),
      color: "text-[#8528FF]",
    },
    {
      title: "Review Applications",
      icon: FileText,
      action: () => setActiveTab("applications"),
      color: "text-blue-600",
      badge: 12,
    },
    {
      title: "View Messages",
      icon: MessageSquare,
      action: () => setActiveTab("messages"),
      color: "text-green-600",
      badge: 3,
    },
    {
      title: "Generate Report",
      icon: Download,
      action: () => console.log("Generate report"),
      color: "text-gray-600",
    },
  ]

  const recentAlerts = [
    {
      message: "12 applications need review",
      time: "2h ago",
      icon: AlertCircle,
      color: "text-red-600",
    },
    {
      message: "New message received",
      time: "4h ago",
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      message: "Job posting published",
      time: "6h ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ]

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-[#8528FF]/20 hover:bg-[#8528FF]/5 hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          <Zap className="mr-2 h-4 w-4 text-[#8528FF] animate-pulse" />
          Quick Actions
          <div className="flex items-center ml-2 space-x-1">
            {quickStats
              .filter((stat) => stat.urgent)
              .map((stat, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-red-100 text-red-800 text-xs px-1.5 py-0.5 animate-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {stat.count}
                </Badge>
              ))}
          </div>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-white/95 backdrop-blur-xl border-white/20 shadow-xl" align="start">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-4 space-y-4">
            {/* Quick Stats with stagger animation */}
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Overview</h4>
              <div className="grid grid-cols-3 gap-2">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg border text-center transition-all duration-500 hover:scale-105 hover:shadow-md ${
                      stat.urgent
                        ? "border-red-200 bg-red-50 hover:bg-red-100"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className={`text-lg font-bold ${stat.color} transition-all duration-300 hover:scale-110`}>
                      {stat.count}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions with hover effects */}
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Actions</h4>
              <div className="space-y-1">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start h-10 hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200 group"
                      onClick={() => {
                        action.action()
                        setIsOpen(false)
                      }}
                    >
                      <Icon
                        className={`mr-3 h-4 w-4 ${action.color} group-hover:scale-110 transition-transform duration-200`}
                      />
                      <span className="flex-1 text-left group-hover:font-medium transition-all duration-200">
                        {action.title}
                      </span>
                      {action.badge && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-200 text-gray-800 text-xs group-hover:bg-[#8528FF] group-hover:text-white transition-all duration-200"
                        >
                          {action.badge}
                        </Badge>
                      )}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Recent Alerts with smooth animations */}
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Recent Alerts</h4>
              <div className="space-y-2">
                {recentAlerts.map((alert, index) => {
                  const Icon = alert.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                    >
                      <Icon
                        className={`h-4 w-4 ${alert.color} group-hover:scale-110 transition-transform duration-200`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 truncate group-hover:font-medium transition-all duration-200">
                          {alert.message}
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
