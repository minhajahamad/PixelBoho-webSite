'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminDashboard } from '@/components/admin-dashboard';

import api from '@/lib/api';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login'); // replace so back button won't return to dashboard
    } else {
      api
        .get('/admin/profile')
        .then(() => setLoading(false))
        .catch(() => router.replace('/login'));
    }
  }, [router]);
  if (loading) return null;

  return <AdminDashboard />;
}
