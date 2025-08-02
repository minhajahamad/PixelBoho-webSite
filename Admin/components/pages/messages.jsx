'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
import { Textarea } from '@/components/ui/textarea';
import {
  Search,
  Eye,
  Reply,
  Mail,
  CheckCircle,
  Circle,
  Trash2,
} from 'lucide-react';

import axios from 'axios';

export function Messages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch Message
  const getMessages = async () => {
    try {
      const res = await axios.get('http://localhost:9000/messages');
      setMessages(res.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  // Delete Message
  const handleDeleteMessage = async id => {
    try {
      await axios.delete(`http://localhost:9000/messages/${id}`);
      setMessages(messages.filter(message => message._id !== id));
    } catch (error) {
      console.error('Failed to delete message:', error);
      alert('Error deleting message');
    }
  };

  const filteredMessages = messages.filter(
    message =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleReadStatus = async (id, currentStatus) => {
    try {
      const res = await axios.patch(
        `http://localhost:9000/messages/${id}/read`,
        {
          isRead: !currentStatus,
        }
      );
      // Update local state with new message data
      setMessages(messages.map(msg => (msg._id === id ? res.data : msg)));
    } catch (error) {
      console.error('Failed to update read status:', error);
      alert('Error updating read status');
    }
  };

  const unreadCount = messages.filter(msg => !msg.isRead).length;

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
          placeholder="Search messages by name, email, or subject..."
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
                <TableHead className="w-12">Status</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Requirement</TableHead>

                <TableHead>Submitted At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.map(message => (
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
                  <TableCell className={!message.isRead ? 'font-semibold' : ''}>
                    {message.requirement}
                  </TableCell>

                  <TableCell className="text-sm">
                    {message.submittedAt}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedMessage(message)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Message Details</DialogTitle>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <Button
                        onClick={() => handleDeleteMessage(message._id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
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
  );
}
