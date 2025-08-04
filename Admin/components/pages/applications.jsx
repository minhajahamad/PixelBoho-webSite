'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  Download,
  Eye,
  Mail,
  Phone,
  Trash2,
  FileText,
} from 'lucide-react';

import axios from 'axios';

// const mockApplications = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     email: "sarah.johnson@email.com",
//     phone: "+1 (555) 123-4567",
//     jobTitle: "Senior Frontend Developer",
//     jobId: 1,
//     message: "I'm excited about this opportunity and believe my 5 years of React experience would be valuable.",
//     dateSubmitted: "2024-01-15",
//     status: "pending",
//     resume: "sarah_johnson_resume.pdf",
//   },
//   {
//     id: 2,
//     name: "Mike Chen",
//     email: "mike.chen@email.com",
//     phone: "+1 (555) 234-5678",
//     jobTitle: "UI/UX Designer",
//     jobId: 2,
//     message: "I have a strong portfolio in user-centered design and would love to contribute to your team.",
//     dateSubmitted: "2024-01-14",
//     status: "reviewed",
//     resume: "mike_chen_resume.pdf",
//   },
//   {
//     id: 3,
//     name: "Emily Davis",
//     email: "emily.davis@email.com",
//     phone: "+1 (555) 345-6789",
//     jobTitle: "Backend Developer Intern",
//     jobId: 3,
//     message: "As a recent computer science graduate, I'm eager to start my career in backend development.",
//     dateSubmitted: "2024-01-13",
//     status: "pending",
//     resume: "emily_davis_resume.pdf",
//   },
//   {
//     id: 4,
//     name: "Alex Rodriguez",
//     email: "alex.rodriguez@email.com",
//     phone: "+1 (555) 456-7890",
//     jobTitle: "Product Manager",
//     jobId: 4,
//     message: "With 7 years of product management experience, I'm ready to take on new challenges.",
//     dateSubmitted: "2024-01-12",
//     status: "interviewed",
//     resume: "alex_rodriguez_resume.pdf",
//   },
//   {
//     id: 5,
//     name: "Jessica Wong",
//     email: "jessica.wong@email.com",
//     phone: "+1 (555) 567-8901",
//     jobTitle: "Senior Frontend Developer",
//     jobId: 1,
//     message: "I specialize in modern JavaScript frameworks and have led multiple successful projects.",
//     dateSubmitted: "2024-01-11",
//     status: "rejected",
//     resume: "jessica_wong_resume.pdf",
//   },
// ]

export function Applications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [jobFilter, setJobFilter] = useState('all');

  // Fetch Application from database and store into state
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]); // ✅ New state for job list

  const getApplication = async () => {
    try {
      const res = await axios.get('http://localhost:9000/applications');
      setApplications(res.data);
    } catch (error) {
      console.error('Failed to fetch application:', error);
    }
  };

  // ✅ Fetch Jobs
  const getJobs = async () => {
    try {
      const res = await axios.get('http://localhost:9000/openings');
      setJobs(res.data.openings || []); // Assuming backend returns array of job objects
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    getApplication();
    getJobs();
  }, []);

  // ✅ Helper to search deeply in all string values (including nested objects)
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

  const filteredApplications = applications.filter(application => {
    const search = searchTerm.toLowerCase();
    const matchesSearch = deepSearch(application, search);

    const matchesStatus =
      statusFilter === 'all' || application.status === statusFilter;
    const matchesJob =
      jobFilter === 'all' || application.jobId?._id === jobFilter;

    return matchesSearch && matchesStatus && matchesJob;
  });

  // const getStatusBadge = status => {
  //   const variants = {
  //     pending: 'bg-yellow-100 text-yellow-800',
  //     reviewed: 'bg-blue-100 text-blue-800',
  //     interviewed: 'bg-purple-100 text-purple-800',
  //     rejected: 'bg-red-100 text-red-800',
  //     hired: 'bg-green-100 text-green-800',
  //   };
  //   return variants[status] || 'bg-gray-100 text-gray-800';
  // };

  // const exportApplications = () => {
  //   const csvContent =
  //     'data:text/csv;charset=utf-8,' +
  //     'Name,Email,Phone,Job Title,Status,Date Submitted\n' +
  //     filteredApplications
  //       .map(
  //         app =>
  //           `${app.name},${app.email},${app.phone},${app.jobTitle},${app.status},${app.dateSubmitted}`
  //       )
  //       .join('\n');

  //   const encodedUri = encodeURI(csvContent);
  //   const link = document.createElement('a');
  //   link.setAttribute('href', encodedUri);
  //   link.setAttribute('download', 'applications.csv');
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  //For  Deleting appliacation
  const handleDeleteJob = async id => {
    try {
      await axios.delete(`http://localhost:9000/applications/${id}`);
      setApplications(
        applications.filter(application => application._id !== id)
      );
    } catch (error) {
      console.error('Failed to delete application:', error);
      alert('Error deleting application');
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
          <p className="text-gray-600">Review and manage job applications</p>
        </div>
        {/* <Button onClick={exportApplications} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button> */}
      </div>

      {/* Filters */}

      <div className="flex space-x-5">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name, email, or job title..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        {/* <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="interviewed">Interviewed</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="hired">Hired</SelectItem>
          </SelectContent>
        </Select> */}

        {/* Dropdown for jobs */}
        <Select value={jobFilter} onValueChange={setJobFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by job" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Jobs</SelectItem>
            {Array.isArray(jobs) &&
              jobs.map(job => (
                <SelectItem key={job._id} value={job._id}>
                  {job.title}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* Applications Table */}
      <Card className="max-h-[65vh] overflow-y-scroll">
        <CardHeader>
          <CardTitle>
            All Applications ({filteredApplications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Resume</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.length > 0 ? (
                filteredApplications.map(application => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{application.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-3 w-3 mr-1 text-gray-400" />
                          {application.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-3 w-3 mr-1 text-gray-400" />
                          {application.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {application.jobId?.title || 'No Title'}
                    </TableCell>

                    <TableCell>
                      {new Date(application.createdAt).toLocaleDateString(
                        'en-IN',
                        {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}
                    </TableCell>
                    <TableCell>
                      {application.resume ? (
                        <a
                          href={application.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline flex items-center"
                        >
                          <FileText className="h-4 w-4 mr-1" /> Resume
                        </a>
                      ) : (
                        'No Resume'
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer hover:text-[#8528FF]"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteJob(application._id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4 " />
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
                    No applications found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
