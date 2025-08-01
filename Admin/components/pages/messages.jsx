"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Search, Eye, Reply, Mail, CheckCircle, Circle } from "lucide-react"

const mockMessages = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    subject: "Partnership Opportunity",
    message:
      "Hi, I'm interested in discussing a potential partnership between our companies. We specialize in software development and think there could be great synergy.",
    submittedAt: "2024-01-15 10:30 AM",
    isRead: false,
    priority: "high",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    subject: "Freelance Services",
    message:
      "I'm a freelance graphic designer with 8 years of experience. I'd love to offer my services for your upcoming projects.",
    submittedAt: "2024-01-14 2:15 PM",
    isRead: true,
    priority: "medium",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david.wilson@email.com",
    subject: "General Inquiry",
    message:
      "I came across your website and I'm very impressed with your work. I'd like to learn more about your services and pricing.",
    submittedAt: "2024-01-13 9:45 AM",
    isRead: false,
    priority: "low",
  },
  {
    id: 4,
    name: "Lisa Chen",
    email: "lisa.chen@email.com",
    subject: "Collaboration Request",
    message:
      "I represent a tech startup and we're looking for development partners. Your portfolio shows exactly the kind of expertise we need.",
    submittedAt: "2024-01-12 4:20 PM",
    isRead: true,
    priority: "high",
  },
  {
    id: 5,
    name: "Robert Taylor",
    email: "robert.taylor@email.com",
    subject: "Question about Services",
    message:
      "I have a small business and I'm looking for help with web development. Could you provide more information about your packages?",
    submittedAt: "2024-01-11 11:00 AM",
    isRead: false,
    priority: "medium",
  },
]

export function Messages() {
  const [searchTerm, setSearchTerm] = useState("")
  const [messages, setMessages] = useState(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [replyText, setReplyText] = useState("")

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleReadStatus = (id) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, isRead: !msg.isRead } : msg)))
  }

  const getPriorityBadge = (priority) => {
    const variants = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    }
    return variants[priority] || "bg-gray-100 text-gray-800"
  }

  const handleReply = () => {
    // Mock reply functionality
    console.log("Replying to:", selectedMessage?.email, "with:", replyText)
    setReplyText("")
    setSelectedMessage(null)
  }

  const unreadCount = messages.filter((msg) => !msg.isRead).length

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Manage "Let's Connect" form submissions</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {unreadCount} Unread
          </Badge>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search messages by name, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Messages ({filteredMessages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Status</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Submitted At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.map((message) => (
                <TableRow key={message.id} className={!message.isRead ? "bg-blue-50" : ""}>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => toggleReadStatus(message.id)}>
                      {message.isRead ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Circle className="h-4 w-4 text-blue-600" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className={`font-medium ${!message.isRead ? "font-bold" : ""}`}>{message.name}</div>
                      <div className="text-sm text-gray-500">{message.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className={!message.isRead ? "font-semibold" : ""}>{message.subject}</TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate text-sm text-gray-600">{message.message}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityBadge(message.priority)}>{message.priority}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{message.submittedAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedMessage(message)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Message Details</DialogTitle>
                          </DialogHeader>
                          {selectedMessage && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-500">From</label>
                                  <p className="font-medium">{selectedMessage.name}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Email</label>
                                  <p>{selectedMessage.email}</p>
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Subject</label>
                                <p className="font-medium">{selectedMessage.subject}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Message</label>
                                <p className="mt-2 p-4 bg-gray-50 rounded-lg">{selectedMessage.message}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Reply</label>
                                <Textarea
                                  value={replyText}
                                  onChange={(e) => setReplyText(e.target.value)}
                                  placeholder="Type your reply here..."
                                  rows={4}
                                  className="mt-2"
                                />
                              </div>
                              <div className="flex justify-end space-x-2">
                                <Button variant="outline" onClick={() => setSelectedMessage(null)}>
                                  Close
                                </Button>
                                <Button onClick={handleReply} className="bg-[#8528FF] hover:bg-[#8528FF]/90">
                                  <Reply className="mr-2 h-4 w-4" />
                                  Send Reply
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
