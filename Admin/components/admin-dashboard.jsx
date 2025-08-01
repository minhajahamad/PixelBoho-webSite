"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Dashboard } from "@/components/pages/dashboard"
import { Jobs } from "@/components/pages/jobs"
import { Applications } from "@/components/pages/applications"
import { Messages } from "@/components/pages/messages"
import { Settings } from "@/components/pages/settings"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard setActiveTab={setActiveTab} />
      case "jobs":
        return <Jobs />
      case "applications":
        return <Applications />
      case "messages":
        return <Messages />
      case "settings":
        return <Settings />
      default:
        return <Dashboard setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-16">{renderContent()}</main>
    </div>
  )
}
