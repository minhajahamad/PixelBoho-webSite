'use client';

import { DashboardCard } from '@/components/dashboard-card';
import { QuickActionsDropdown } from '@/components/quick-actions-dropdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Building2,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

const chartData = [
  { name: 'Jan', applications: 65, jobs: 12 },
  { name: 'Feb', applications: 78, jobs: 15 },
  { name: 'Mar', applications: 90, jobs: 18 },
  { name: 'Apr', applications: 81, jobs: 16 },
  { name: 'May', applications: 95, jobs: 20 },
  { name: 'Jun', applications: 110, jobs: 22 },
];

const recentApplications = [
  {
    name: 'Sarah Johnson',
    job: 'Frontend Developer',
    time: '2 hours ago',
    status: 'pending',
  },
  {
    name: 'Mike Chen',
    job: 'Backend Developer',
    time: '4 hours ago',
    status: 'reviewed',
  },
  {
    name: 'Emily Davis',
    job: 'UI/UX Designer',
    time: '6 hours ago',
    status: 'pending',
  },
  {
    name: 'Alex Rodriguez',
    job: 'Full Stack Developer',
    time: '8 hours ago',
    status: 'interviewed',
  },
];

// Department distribution data for donut chart
const departmentData = [
  { name: 'Engineering', value: 45, percentage: 35, color: '#8528FF' },
  { name: 'Design', value: 28, percentage: 22, color: '#A855F7' },
  { name: 'Product', value: 20, percentage: 16, color: '#C084FC' },
  { name: 'Marketing', value: 18, percentage: 14, color: '#DDD6FE' },
  { name: 'Sales', value: 17, percentage: 13, color: '#EDE9FE' },
];

const COLORS = ['#8528FF', '#A855F7', '#C084FC', '#DDD6FE', '#EDE9FE'];

// Custom label function for the donut chart
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="12"
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function Dashboard({ setActiveTab }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animateChart, setAnimateChart] = useState(false);

  const [totalJobs, setTotalJobs] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setAnimateChart(true), 800);

    // Fetch stats
    const fetchStats = async () => {
      try {
        // Fetch Jobs
        const jobsRes = await axios.get('http://localhost:9000/openings');
        setTotalJobs(jobsRes.data.totalCount || 0);

        // Fetch Applications
        const appsRes = await axios.get('http://localhost:9000/applications');
        setTotalApplications(appsRes.data.length || 0);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 ">
      {/* Header with Quick Actions */}
      <div
        className={`flex justify-between items-start transition-all duration-700 ease-out pt-5 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your job postings.
          </p>
        </div>
        {/* {setActiveTab && <QuickActionsDropdown setActiveTab={setActiveTab} />} */}
        <span className="text-gray-400 text-sm">Coming Soon...</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Job Posts',
            value: totalJobs,
            change: '+12% from last month',
            icon: Briefcase,
            delay: 100,
          },
          {
            title: 'Total Applications',
            value: totalApplications,
            change: '+18% from last month',
            icon: FileText,
            delay: 200,
          },
          // {
          //   title: 'Active Candidates',
          //   value: 156,
          //   change: '+8% from last month',
          //   icon: Users,
          //   delay: 300,
          // },
          // {
          //   title: 'Interviews Scheduled',
          //   value: 28,
          //   change: '+5% from last month',
          //   icon: Calendar,
          //   delay: 400,
          // },

          {
            title: 'Active Candidates',
            value: 'Coming Soon...',
            change: '',
            icon: Users,
            delay: 300,
          },
          {
            title: 'Interviews Scheduled',
            value: 'Coming Soon...',
            change: '',
            icon: Calendar,
            delay: 400,
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${card.delay}ms` }}
          >
            <DashboardCard
              title={card.title}
              value={card.value}
              change={card.change}
              changeType="positive"
              icon={card.icon}
            />
          </div>
        ))}
      </div>

      {/* Charts - Donut Chart More Prominent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Distribution - Larger */}
        <Card
          className={`lg:col-span-2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#8528FF]" />
              Department Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Donut Chart - Larger with Animation */}
              <div className="relative flex-shrink-0">
                {/* <ResponsiveContainer width={320} height={320}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={140}
                      innerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="none"
                      animationBegin={animateChart ? 0 : 1000}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [
                        `${value} applications`,
                        name,
                      ]}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer> */}
                <div className="flex items-center justify-center w-[320px] h-[320px] text-3xl text-center text-gray-400">
                  Coming Soon...
                </div>

                {/* Center Text with Animation */}
                {/* <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
                    animateChart
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <div className="text-4xl font-bold text-gray-900">342</div>
                  <div className="text-sm text-gray-500 font-medium">
                    Total Applications
                  </div>
                </div> */}
              </div>

              {/* Legend - Better Layout with Animation */}
              {/* <div
                className={`flex-1 space-y-4 transition-all duration-1000 ease-out ${
                  animateChart
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Department Breakdown
                </h3>
                <div className="space-y-3">
                  {departmentData.map((dept, index) => (
                    <div
                      key={dept.name}
                      className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg transition-all duration-500 ease-out hover:bg-gray-100 hover:scale-105 ${
                        animateChart
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${1400 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex-shrink-0 transition-all duration-300 hover:scale-125"
                          style={{ backgroundColor: dept.color }}
                        ></div>
                        <div className="font-medium text-gray-900">
                          {dept.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          {dept.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {dept.percentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </CardContent>
        </Card>

        {/* Applications Over Time - Smaller with Animation */}
        <Card
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#8528FF]" />
              Applications Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <ResponsiveContainer width="100%" height={280}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#8528FF"
                  strokeWidth={3}
                  dot={{ fill: '#8528FF', strokeWidth: 2, r: 4 }}
                  animationDuration={2000}
                  animationBegin={animateChart ? 0 : 1000}
                  animationEasing="ease-in-out"
                />
              </LineChart>
            </ResponsiveContainer> */}
            <div className="flex items-center justify-center text-3xl w-full h-[280px] text-gray-400">
              Coming Soon...
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity with Animation */}
      <Card
        className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '700ms' }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#8528FF]" />
            Recent Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentApplications.map((application, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-md ${
                  animateChart
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${1000 + index * 150}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#8528FF]/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#8528FF]/20 hover:scale-110">
                    <Users className="h-5 w-5 text-[#8528FF]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {application.name}
                    </p>
                    <p className="text-sm text-gray-500">{application.job}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{application.time}</p>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                      application.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        : application.status === 'reviewed'
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    {application.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
