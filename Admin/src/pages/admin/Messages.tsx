import { useState } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Eye, 
  Reply, 
  Archive, 
  Trash2,
  Mail,
  MailOpen,
  MessageSquare
} from "lucide-react";
import { mockMessages } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export default function Messages() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const { toast } = useToast();

  const columns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (value: string, row: any) => (
        <div className="flex items-center space-x-3">
          <div className={`h-2 w-2 rounded-full ${!row.isRead ? 'bg-primary' : 'bg-muted'}`} />
          <div>
            <div className={`font-medium ${!row.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>
              {value}
            </div>
            <div className="text-sm text-muted-foreground">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "type",
      label: "Type",
      sortable: true,
      render: (value: string) => (
        <Badge variant="secondary">{value}</Badge>
      ),
    },
    {
      key: "message",
      label: "Message Preview",
      render: (value: string) => (
        <div className="max-w-md">
          <p className="text-sm line-clamp-2">{value}</p>
        </div>
      ),
    },
    {
      key: "submittedAt",
      label: "Received",
      sortable: true,
      render: (value: string) => {
        const date = new Date(value);
        return (
          <div className="text-sm">
            <div>{date.toLocaleDateString()}</div>
            <div className="text-muted-foreground">{date.toLocaleTimeString()}</div>
          </div>
        );
      },
    },
    {
      key: "isRead",
      label: "Status",
      render: (value: boolean) => (
        <Badge variant={value ? "outline" : "default"}>
          {value ? "Read" : "Unread"}
        </Badge>
      ),
    },
  ];

  const handleMarkAsRead = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isRead: true } : msg
    ));
    toast({
      title: "Message marked as read",
    });
  };

  const handleMarkAsUnread = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isRead: false } : msg
    ));
    toast({
      title: "Message marked as unread",
    });
  };

  const handleDelete = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    toast({
      title: "Message deleted",
    });
  };

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message);
    setIsViewModalOpen(true);
    if (!message.isRead) {
      handleMarkAsRead(message.id);
    }
  };

  const handleReply = (message: any) => {
    setSelectedMessage(message);
    setIsReplyModalOpen(true);
  };

  const handleSendReply = () => {
    toast({
      title: "Reply sent",
      description: `Your reply has been sent to ${selectedMessage?.name}`,
    });
    setIsReplyModalOpen(false);
    setReplyText("");
    setSelectedMessage(null);
  };

  const actions = (message: any) => (
    <>
      <DropdownMenuItem onClick={() => handleViewMessage(message)}>
        <Eye className="h-4 w-4 mr-2" />
        View Message
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleReply(message)}>
        <Reply className="h-4 w-4 mr-2" />
        Reply
      </DropdownMenuItem>
      <DropdownMenuItem 
        onClick={() => message.isRead ? handleMarkAsUnread(message.id) : handleMarkAsRead(message.id)}
      >
        {message.isRead ? (
          <>
            <Mail className="h-4 w-4 mr-2" />
            Mark as Unread
          </>
        ) : (
          <>
            <MailOpen className="h-4 w-4 mr-2" />
            Mark as Read
          </>
        )}
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleDelete(message.id)} className="text-destructive">
        <Trash2 className="h-4 w-4 mr-2" />
        Delete
      </DropdownMenuItem>
    </>
  );

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-manrope">Messages</h1>
          <p className="text-muted-foreground">
            Manage contact form submissions and inquiries
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Archive All Read
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope">{messages.length}</div>
          <div className="text-sm text-muted-foreground">Total Messages</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-primary">{unreadCount}</div>
          <div className="text-sm text-muted-foreground">Unread Messages</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-success">
            {messages.filter(msg => msg.type === "General Inquiry").length}
          </div>
          <div className="text-sm text-muted-foreground">General Inquiries</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-info">
            {messages.filter(msg => msg.type === "Partnership").length}
          </div>
          <div className="text-sm text-muted-foreground">Partnership Requests</div>
        </div>
      </div>

      {/* Messages Table */}
      <DataTable
        data={messages}
        columns={columns}
        actions={actions}
        searchable
        filterable
      />

      {/* View Message Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Message from {selectedMessage?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="font-medium">{selectedMessage.name}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="font-medium">{selectedMessage.email}</p>
                </div>
              </div>
              <div>
                <Label>Type</Label>
                <Badge variant="secondary" className="mt-1">
                  {selectedMessage.type}
                </Badge>
              </div>
              <div>
                <Label>Message</Label>
                <div className="mt-2 p-4 bg-muted rounded-lg">
                  <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsViewModalOpen(false)}
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setIsViewModalOpen(false);
                    handleReply(selectedMessage);
                  }}
                >
                  Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Reply Modal */}
      <Dialog open={isReplyModalOpen} onOpenChange={setIsReplyModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Reply to {selectedMessage?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>To: {selectedMessage?.email}</Label>
            </div>
            <div>
              <Label htmlFor="reply">Your Reply</Label>
              <Textarea
                id="reply"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply here..."
                rows={6}
                className="mt-2"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsReplyModalOpen(false);
                  setReplyText("");
                  setSelectedMessage(null);
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleSendReply} disabled={!replyText.trim()}>
                Send Reply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}