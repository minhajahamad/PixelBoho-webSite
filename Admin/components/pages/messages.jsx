'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import axiosInstance from '../apiconfig/axios';
import { API_URL } from '../apiconfig/api_url';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Eye, CheckCircle, Circle, Trash2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Messages({ setUnreadCount, unreadCount }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [viewingMessage, setViewingMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all messages
  const getMessages = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(API_URL.MESSAGES.GET_MESSAGE);
      setMessages(res.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  // ✅ Delete Message
  const handleDeleteMessage = async id => {
    try {
      await axiosInstance.delete(API_URL.MESSAGES.DELETE_MESSAGE(id));
      setMessages(messages.filter(message => message._id !== id));
    } catch (error) {
      console.error('Failed to delete message:', error);
      alert('Error deleting message');
    }
  };

  // ✅ Toggle Read Status + update unread instantly
  const toggleReadStatus = async (id, currentStatus) => {
    try {
      const res = await axios.patch(
        `http://localhost:9000/messages/${id}/read`,
        { isRead: !currentStatus }
      );
      setMessages(messages.map(msg => (msg._id === id ? res.data : msg)));

      // Update unread instantly
      setUnreadCount(prev => {
        if (currentStatus) return prev + 1; // was read, now unread
        return Math.max(prev - 1, 0); // was unread, now read
      });
    } catch (error) {
      console.error('Failed to update read status', error);
    }
  };

  // ✅ Filter for search
  const filteredMessages = messages
    .filter(message =>
      Object.values(message).some(
        value =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Handler to open view modal
  const handleViewMessage = message => {
    setViewingMessage(message);
  };

  // Handler to close view modal
  const handleCloseViewMessage = () => {
    setViewingMessage(null);
  };

  // Message Form Component for viewing
  const MessageForm = ({ message, onClose, mode = 'view' }) => {
    const [formData] = useState({
      name: message?.name || '',
      email: message?.email || '',
      phone: message?.phone || '',
      requirement: message?.requirement || '',
      isRead: message?.isRead || false,
      createdAt: message?.createdAt || '',
    });
    const isReadOnly = mode === 'view';
    return (
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={formData.name} disabled={isReadOnly} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={formData.email} disabled={isReadOnly} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={formData.phone} disabled={isReadOnly} />
          </div>
          <div>
            <Label htmlFor="requirement">Requirement</Label>
            <Input
              id="requirement"
              value={formData.requirement}
              disabled={isReadOnly}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="isRead">Status</Label>
            <Input
              id="isRead"
              value={formData.isRead ? 'Read' : 'Unread'}
              disabled
            />
          </div>
          <div>
            <Label htmlFor="createdAt">Submitted At</Label>
            <Input
              id="createdAt"
              value={new Date(formData.createdAt).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
              disabled
            />
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">
            Manage "Let's Connect" form submissions
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {unreadCount} Unread
          </Badge>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search messages by name, email, or requirement..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Messages ({filteredMessages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Requirement</TableHead>
                <TableHead>Submitted At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : filteredMessages.length > 0 ? (
                filteredMessages.map(message => (
                  <TableRow
                    key={message._id}
                    className={!message.isRead ? 'bg-blue-50' : ''}
                  >
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          toggleReadStatus(message._id, message.isRead)
                        }
                      >
                        {message.isRead ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Circle className="h-4 w-4 text-blue-600" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div
                          className={`font-medium ${
                            !message.isRead ? 'font-bold' : ''
                          }`}
                        >
                          {message.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {message.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      className={!message.isRead ? 'font-semibold' : ''}
                    >
                      {message.requirement}
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(message.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewMessage(message)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Message Details</DialogTitle>
                            </DialogHeader>
                            {viewingMessage && (
                              <MessageForm
                                message={viewingMessage}
                                onClose={handleCloseViewMessage}
                                mode="view"
                              />
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          onClick={() => handleDeleteMessage(message._id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-6 text-gray-500"
                  >
                    No messages found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
