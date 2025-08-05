'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import axios from 'axios';

export function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]); //state for storing job
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null); //state for edit jobs
  const [viewingJob, setViewingJob] = useState(null); //state for viewing job

  //Fetch job
  const [totalJobCount, setTotalJobCount] = useState(0);

  const getJobOpenings = async () => {
    try {
      const res = await axios.get('http://localhost:9000/openings');
      setTotalJobCount(res.data.totalCount);
      const fetchedJobs = (res.data.openings || []).map(job => ({
        ...job,
        id: job._id,
        postedDate: new Date(job.createdAt).toISOString().split('T')[0],
        // status: 'Active',
      }));
      setJobs(fetchedJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    getJobOpenings();
  }, []);

  //filter job
  const deepSearch = (obj, search) => {
    return Object.values(obj).some(value => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(search);
      }
      if (value && typeof value === 'object') {
        return deepSearch(value, search);
      }
      return false;
    });
  };

  const filteredJobs = jobs.filter(job => {
    const search = searchTerm.toLowerCase();
    return deepSearch(job, search);
  });

  // Delete
  const handleDeleteJob = async id => {
    try {
      await axios.delete(`http://localhost:9000/openings/${id}`);
      setJobs(jobs.filter(job => job.id !== id));
    } catch (error) {
      console.error('Failed to delete job:', error);
      alert('Error deleting job');
    }
  };

  // Handler to open view modal
  const handleViewJob = job => {
    setViewingJob(job);
  };

  // Handler to close view modal
  const handleCloseViewJob = () => {
    setViewingJob(null);
  };

  const JobForm = ({ job, onClose, mode = 'edit' }) => {
    const [formData, setFormData] = useState({
      title: job?.title || '',
      category: job?.category || '',
      experience: job?.experience || '',
      subtitle: job?.subtitle || '',
      requirements: job?.requirements || '',
    });

    // Helper: should fields be disabled?
    const isReadOnly = mode === 'view';

    const handleSubmit = async e => {
      if (mode === 'view') {
        e.preventDefault();
        return;
      }
      e.preventDefault();

      const jobData = {
        ...formData,
        requirements:
          typeof formData.requirements === 'string'
            ? formData.requirements
                .split('\n')
                .map(item => item.trim())
                .filter(Boolean)
            : formData.requirements,
      };

      try {
        if (job) {
          await axios.patch(
            `http://localhost:9000/openings/${job.id}`,
            jobData
          );
          await getJobOpenings(); // Refresh with updated data
        } else {
          await axios.post('http://localhost:9000/openings', jobData);
          await getJobOpenings(); // Refresh jobs after new one added
        }

        onClose();
      } catch (err) {
        console.error('Error submitting job:', err);
        alert('Failed to create job.');
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
              required={mode !== 'view'}
              disabled={isReadOnly}
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            {isReadOnly ? (
              <Input value={formData.category} disabled />
            ) : (
              <Select
                value={formData.category}
                onValueChange={value =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Product">Product</SelectItem>
                  <SelectItem value="DevOps & Infrastructure">
                    DevOps & Infrastructure
                  </SelectItem>
                  <SelectItem value="Quality Assurance">
                    Quality Assurance
                  </SelectItem>
                  <SelectItem value="Data & AI">Data & AI</SelectItem>
                  <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="Marketing"> Marketing </SelectItem>
                  <SelectItem value="Sales">Sales</SelectItem>
                  <SelectItem value="IT Support">IT Support</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="experience">Experience</Label>
            {isReadOnly ? (
              <Input value={formData.experience} disabled />
            ) : (
              <Select
                value={formData.experience}
                onValueChange={value =>
                  setFormData({ ...formData, experience: value })
                }
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
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="subtitle">Job Subtitle</Label>
          <Input
            id="subtitle"
            value={formData.subtitle}
            onChange={e =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            placeholder="Brief description of the role"
            disabled={isReadOnly}
          />
        </div>

        <div>
          <Label htmlFor="requirements">Requirements</Label>
          <Textarea
            id="requirements"
            value={
              Array.isArray(formData.requirements)
                ? formData.requirements.join('\n')
                : formData.requirements
            }
            onChange={e =>
              setFormData({ ...formData, requirements: e.target.value })
            }
            placeholder="Enter one requirement per line..."
            rows={5}
            disabled={isReadOnly}
          />
        </div>

        {mode !== 'view' && (
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#8528FF] hover:bg-[#8528FF]/90"
            >
              {job ? 'Update Job' : 'Create Job'}
            </Button>
          </div>
        )}
      </form>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Openings</h1>
          <p className="text-gray-600">
            Manage your job postings and track applications
          </p>
        </div>

        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#8528FF] hover:bg-[#8528FF]/90 cursor-pointer group">
              <Plus className="mr-2 h-4 w-4 group-hover:scale-115 " />
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

      {editingJob && (
        <Dialog
          open={!!editingJob}
          onOpenChange={open => !open && setEditingJob(null)}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Job Opening</DialogTitle>
            </DialogHeader>
            <JobForm job={editingJob} onClose={() => setEditingJob(null)} />
          </DialogContent>
        </Dialog>
      )}

      {/* Search Section */}
      <div className="flex space-x-5">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search jobs by title or category..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-10 "
          />
        </div>
      </div>

      {/* Table */}
      <Card className="max-h-[65vh] overflow-y-scroll">
        <CardHeader>
          <CardTitle>All Job Openings ({totalJobCount})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Posted Date</TableHead>
                <TableHead>Applications</TableHead>
                {/* <TableHead>Status</TableHead> */}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.category}</TableCell>
                    <TableCell>{job.experience}</TableCell>
                    <TableCell>{job.postedDate}</TableCell>
                    <TableCell>{job.applications}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer hover:text-[#8528FF]"
                          onClick={() => handleViewJob(job)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingJob(job)}
                          className="cursor-pointer hover:text-[#8528FF]"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteJob(job.id)}
                          className="text-red-600 hover:text-red-700 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    No jobs found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Job Modal */}
      <Dialog
        open={!!viewingJob}
        onOpenChange={open => {
          if (!open) handleCloseViewJob();
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>View Job Opening</DialogTitle>
          </DialogHeader>
          {viewingJob && (
            <JobForm
              job={viewingJob}
              onClose={handleCloseViewJob}
              mode="view"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
