'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  User,
  Menu,
  X,
} from 'lucide-react';

import axios from 'axios';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'jobs', label: 'Post Jobs', icon: Briefcase },
  { id: 'applications', label: 'Applications', icon: FileText },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Navbar({ activeTab, setActiveTab, unreadCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const [unreadCount, setUnreadCount] = useState(0);

  // useEffect(() => {
  //   const fetchUnreadCount = async () => {
  //     try {
  //       const res = await axios.get(
  //         'http://localhost:9000/messages/unread-count'
  //       );
  //       setUnreadCount(res.data.unreadCount);
  //     } catch (err) {
  //       console.error('Failed to fetch unread count', err);
  //     }
  //   };
  //   fetchUnreadCount();
  // }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20 ">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <div className="w-10 h-10 bg-[#8528FF] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">b</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">AdminHub</h1>
              <p className="text-sm text-gray-500 -mt-1">Management Portal</p>
            </div> */}
            <img src="/Colored-Logo.svg" className="w-[80px] md:w-[90px]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`h-10 px-4 rounded-full transition-all duration-200 cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#8528FF] text-white shadow-lg hover:bg-[#8528FF]/90'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                  {item.id === 'messages' && unreadCount > 0 && (
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-red-100 text-red-800 text-xs px-1.5 py-0.5"
                    >
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Logout Button */}
            {/* <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50/80 rounded-full px-4"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button> */}

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full hover:scale-105 cursor-pointer"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-[#8528FF] text-white">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-white/90 backdrop-blur-xl border-white/20"
                align="end"
                forceMount
              >
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">John Doe</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      john.doe@company.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setActiveTab('settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600"
                  onClick={() => {
                    localStorage.removeItem('token'); // remove token
                    window.location.href = '/login'; // redirect
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-white/50 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`w-full justify-start h-12 rounded-xl ${
                      activeTab === item.id
                        ? 'bg-[#8528FF] text-white hover:bg-[#8528FF]/90'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                    {item.id === 'messages' && (
                      <Badge
                        variant="secondary"
                        className="ml-auto bg-red-100 text-red-800"
                      >
                        3
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
