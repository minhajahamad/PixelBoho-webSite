import { DashboardCard } from "@/components/admin/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  FileText,
  Activity,
  Clock,
  Calendar,
  MessageSquare,
  TrendingUp,
  Users
} from "lucide-react";
import { dashboardStats, applicationTrends, jobCategories, mockApplications } from "@/data/mockData";
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
} from "recharts";

const COLORS = ["#8528FF", "#A855F7", "#C084FC", "#DDD6FE", "#EDE9FE"];

export default function Dashboard() {
  const recentApplications = mockApplications.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-manrope">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your team today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Job Posts"
          value={dashboardStats.totalJobs}
          description="Active job openings"
          icon={Briefcase}
          trend={{
            value: 12,
            label: "from last month",
            isPositive: true,
          }}
        />
        <DashboardCard
          title="Total Applications"
          value={dashboardStats.totalApplications}
          description="All time applications"
          icon={FileText}
          trend={{
            value: 8,
            label: "from last week",
            isPositive: true,
          }}
        />
        <DashboardCard
          title="Recent Activity"
          value={dashboardStats.recentActivity}
          description="New applications this week"
          icon={Activity}
          trend={{
            value: 23,
            label: "from last week",
            isPositive: true,
          }}
        />
        <DashboardCard
          title="Pending Reviews"
          value={dashboardStats.pendingReviews}
          description="Applications to review"
          icon={Clock}
          trend={{
            value: 5,
            label: "from yesterday",
            isPositive: false,
          }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Applications Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Applications Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={applicationTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Job Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Jobs by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={jobCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {jobCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats & Recent Applications */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Scheduled Interviews</span>
              <Badge variant="secondary">{dashboardStats.scheduledInterviews}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Unread Messages</span>
              <Badge variant="destructive">{dashboardStats.unreadMessages}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Response Rate</span>
              <Badge variant="default">78%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg. Time to Hire</span>
              <Badge variant="outline">12 days</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div
                  key={application.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {application.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{application.name}</p>
                      <p className="text-sm text-muted-foreground">{application.jobTitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        application.status === "Hired"
                          ? "default"
                          : application.status === "Interview Scheduled"
                          ? "secondary"
                          : application.status === "Rejected"
                          ? "destructive"
                          : "outline"
                      }
                    >
                      {application.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      {application.dateSubmitted}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}