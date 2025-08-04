'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminDashboard } from '@/components/admin-dashboard';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login'); // replace so back button won't return to dashboard
    } else {
      setLoading(false); // only render dashboard when authenticated
    }
  }, [router]);
  if (loading) return null;

  return <AdminDashboard />;
}
