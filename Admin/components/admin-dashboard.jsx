'use client';

import { useState,useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Dashboard } from '@/components/pages/dashboard';
import { Jobs } from '@/components/pages/jobs';
import { Applications } from '@/components/pages/applications';
import { Messages } from '@/components/pages/messages';
import { Settings } from '@/components/pages/settings';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const res = await axios.get(
          'http://localhost:9000/messages/unread-count'
        );
        setUnreadCount(res.data.unreadCount || 0);
      } catch (error) {
        console.error('Failed to fetch unread count', error);
      }
    };
    fetchUnreadCount();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'jobs':
        return <Jobs />;
      case 'applications':
        return <Applications />;
      case 'messages':
        return (
          <Messages setUnreadCount={setUnreadCount} unreadCount={unreadCount} />
        );
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadCount={unreadCount}
      />
      <main className="pt-16">{renderContent()}</main>
    </div>
  );
}
