"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    category: "Engineering",
    type: "Full-time",
    experience: "3-5 years",
    postedDate: "2024-01-15",
    applications: 45,
    status: "Active",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    category: "Design",
    type: "Full-time",
    experience: "2-4 years",
    postedDate: "2024-01-12",
    applications: 32,
    status: "Active",
  },
  {
    id: 3,
    title: "Backend Developer Intern",
    category: "Engineering",
    type: "Internship",
    experience: "0-1 years",
    postedDate: "2024-01-10",
    applications: 78,
    status: "Active",
  },
  {
    id: 4,
    title: "Product Manager",
    category: "Product",
    type: "Full-time",
    experience: "5+ years",
    postedDate: "2024-01-08",
    applications: 23,
    status: "Closed",
  },
]

export function Jobs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [jobs, setJobs] = useState(mockJobs)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingJob, setEditingJob] = useState(null)

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const JobForm = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
      title: job?.title || "",
      category: job?.category || "",
      type: job?.type || "",
      experience: job?.experience || "",
      subtitle: job?.subtitle || "",
      requirements: job?.requirements || "",
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      if (job) {
        // Edit existing job
        setJobs(jobs.map((j) => (j.id === job.id ? { ...j, ...formData } : j)))
      } else {
        // Add new job
        const newJob = {
          id: Date.now(),
          ...formData,
          postedDate: new Date().toISOString().split("T")[0],
          applications: 0,
          status: "Active",
        }
        setJobs([...jobs, newJob])
      }
      onClose()
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="type">Job Type</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="experience">Experience</Label>
            <Select
              value={formData.experience}
              onValueChange={(value) => setFormData({ ...formData, experience: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1 years">0-1 years</SelectItem>
                <SelectItem value="2-4 years">2-4 years</SelectItem>
                <SelectItem value="3-5 years">3-5 years</SelectItem>
                <SelectItem value="5+ years">5+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="subtitle">Job Subtitle</Label>
          <Input
            id="subtitle"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            placeholder="Brief description of the role"
          />
        </div>

        <div>
          <Label htmlFor="requirements">Requirements</Label>
          <Textarea
            id="requirements"
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            placeholder="List the job requirements..."
            rows={4}
          />
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#8528FF] hover:bg-[#8528FF]/90">
            {job ? "Update Job" : "Create Job"}
          </Button>
        </div>
      </form>
    )
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Openings</h1>
          <p className="text-gray-600">Manage your job postings and track applications</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#8528FF] hover:bg-[#8528FF]/90">
              <Plus className="mr-2 h-4 w-4" />
              Add New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Job Opening</DialogTitle>
            </DialogHeader>
            <JobForm onClose={() => setIsAddModalOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search jobs by title or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Job Openings ({filteredJobs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Posted Date</TableHead>
                <TableHead>Applications</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.category}</TableCell>
                  <TableCell>
                    <Badge variant={job.type === "Internship" ? "secondary" : "default"}>{job.type}</Badge>
                  </TableCell>
                  <TableCell>{job.experience}</TableCell>
                  <TableCell>{job.postedDate}</TableCell>
                  <TableCell>{job.applications}</TableCell>
                  <TableCell>
                    <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setEditingJob(job)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Edit Job Opening</DialogTitle>
                          </DialogHeader>
                          <JobForm job={editingJob} onClose={() => setEditingJob(null)} />
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteJob(job.id)}
                        className="text-red-600 hover:text-red-700"
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
  )
}
