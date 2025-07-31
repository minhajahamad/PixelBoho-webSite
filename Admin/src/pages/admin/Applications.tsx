import { useState } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Download, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { mockApplications, mockJobs } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export default function Applications() {
  const [applications, setApplications] = useState(mockApplications);
  const [filterJob, setFilterJob] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const { toast } = useToast();

  // Filter applications based on selected filters
  const filteredApplications = applications.filter(app => {
    const jobMatch = filterJob === "all" || app.jobId === filterJob;
    const statusMatch = filterStatus === "all" || app.status === filterStatus;
    return jobMatch && statusMatch;
  });

  const columns = [
    {
      key: "name",
      label: "Applicant",
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-muted-foreground">{row.email}</div>
        </div>
      ),
    },
    {
      key: "phone",
      label: "Phone",
      render: (value: string) => (
        <span className="text-sm">{value}</span>
      ),
    },
    {
      key: "jobTitle",
      label: "Position",
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-xs text-muted-foreground">{row.experience} experience</div>
        </div>
      ),
    },
    {
      key: "dateSubmitted",
      label: "Applied Date",
      sortable: true,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value: string) => {
        const variants: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
          "Under Review": "outline",
          "Interview Scheduled": "secondary",
          "Hired": "default",
          "Rejected": "destructive",
        };
        return (
          <Badge variant={variants[value] || "outline"}>
            {value}
          </Badge>
        );
      },
    },
  ];

  const handleStatusChange = (applicationId: string, newStatus: string) => {
    setApplications(prev => prev.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    toast({
      title: "Status Updated",
      description: `Application status changed to ${newStatus}`,
    });
  };

  const actions = (application: any) => (
    <>
      <DropdownMenuItem>
        <Eye className="h-4 w-4 mr-2" />
        View Details
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Download className="h-4 w-4 mr-2" />
        Download Resume
      </DropdownMenuItem>
      <DropdownMenuItem>
        <MessageSquare className="h-4 w-4 mr-2" />
        Send Message
      </DropdownMenuItem>
      <DropdownMenuItem 
        onClick={() => handleStatusChange(application.id, "Interview Scheduled")}
      >
        <CheckCircle className="h-4 w-4 mr-2" />
        Schedule Interview
      </DropdownMenuItem>
      <DropdownMenuItem 
        onClick={() => handleStatusChange(application.id, "Rejected")}
        className="text-destructive"
      >
        <XCircle className="h-4 w-4 mr-2" />
        Reject
      </DropdownMenuItem>
    </>
  );

  const statusCounts = {
    total: applications.length,
    underReview: applications.filter(app => app.status === "Under Review").length,
    interviews: applications.filter(app => app.status === "Interview Scheduled").length,
    hired: applications.filter(app => app.status === "Hired").length,
    rejected: applications.filter(app => app.status === "Rejected").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-manrope">Applications</h1>
          <p className="text-muted-foreground">
            Review and manage job applications
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export All
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-5">
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope">{statusCounts.total}</div>
          <div className="text-sm text-muted-foreground">Total Applications</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-warning">
            {statusCounts.underReview}
          </div>
          <div className="text-sm text-muted-foreground">Under Review</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-info">
            {statusCounts.interviews}
          </div>
          <div className="text-sm text-muted-foreground">Interviews</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-success">
            {statusCounts.hired}
          </div>
          <div className="text-sm text-muted-foreground">Hired</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-destructive">
            {statusCounts.rejected}
          </div>
          <div className="text-sm text-muted-foreground">Rejected</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Filter by Job:</span>
          <Select value={filterJob} onValueChange={setFilterJob}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              {mockJobs.map(job => (
                <SelectItem key={job.id} value={job.id}>
                  {job.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Filter by Status:</span>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Under Review">Under Review</SelectItem>
              <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
              <SelectItem value="Hired">Hired</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Applications Table */}
      <DataTable
        data={filteredApplications}
        columns={columns}
        actions={actions}
        searchable
        filterable
      />
    </div>
  );
}