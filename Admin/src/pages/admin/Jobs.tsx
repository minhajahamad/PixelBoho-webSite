import { useState } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { JobModal } from "@/components/admin/JobModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { mockJobs } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export default function Jobs() {
  const [jobs, setJobs] = useState(mockJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const { toast } = useToast();

  const columns = [
    {
      key: "title",
      label: "Job Title",
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-muted-foreground">{row.subtitle}</div>
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      render: (value: string) => (
        <Badge variant="secondary">{value}</Badge>
      ),
    },
    {
      key: "type",
      label: "Type",
      sortable: true,
      render: (value: string) => (
        <Badge variant={value === "Full-time" ? "default" : "outline"}>
          {value}
        </Badge>
      ),
    },
    {
      key: "experience",
      label: "Experience",
      sortable: true,
    },
    {
      key: "applicants",
      label: "Applicants",
      sortable: true,
      render: (value: number) => (
        <div className="text-center">
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    {
      key: "postedDate",
      label: "Posted Date",
      sortable: true,
    },
  ];

  const handleSaveJob = (jobData: any) => {
    if (editingJob) {
      setJobs(prev => prev.map(job => 
        job.id === editingJob.id ? { ...jobData, id: editingJob.id } : job
      ));
    } else {
      const newJob = {
        ...jobData,
        id: (jobs.length + 1).toString(),
        applicants: 0,
      };
      setJobs(prev => [...prev, newJob]);
    }
    setEditingJob(null);
  };

  const handleEdit = (job: any) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleDelete = (job: any) => {
    setJobs(prev => prev.filter(j => j.id !== job.id));
    toast({
      title: "Job Deleted",
      description: `${job.title} has been removed from job openings.`,
    });
  };

  const actions = (job: any) => (
    <>
      <DropdownMenuItem onClick={() => handleEdit(job)}>
        <Edit className="h-4 w-4 mr-2" />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleDelete(job)} className="text-destructive">
        <Trash2 className="h-4 w-4 mr-2" />
        Delete
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Eye className="h-4 w-4 mr-2" />
        View Details
      </DropdownMenuItem>
    </>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-manrope">Job Openings</h1>
          <p className="text-muted-foreground">
            Manage your job posts and track applications
          </p>
        </div>
        <Button
          onClick={() => {
            setEditingJob(null);
            setIsModalOpen(true);
          }}
          className="bg-primary"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Job Opening
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope">{jobs.length}</div>
          <div className="text-sm text-muted-foreground">Total Jobs</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-success">
            {jobs.filter(j => j.applicants > 0).length}
          </div>
          <div className="text-sm text-muted-foreground">Active Jobs</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-warning">
            {jobs.reduce((sum, job) => sum + job.applicants, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Total Applications</div>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <div className="text-2xl font-bold font-manrope text-admin-info">
            {Math.round(jobs.reduce((sum, job) => sum + job.applicants, 0) / jobs.length) || 0}
          </div>
          <div className="text-sm text-muted-foreground">Avg. Applications</div>
        </div>
      </div>

      {/* Jobs Table */}
      <DataTable
        data={jobs}
        columns={columns}
        actions={actions}
        searchable
        filterable
      />

      {/* Job Modal */}
      <JobModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingJob(null);
        }}
        onSave={handleSaveJob}
        job={editingJob}
      />
    </div>
  );
}