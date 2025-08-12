'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, X, Eye } from 'lucide-react';
import { BlogForm } from './BlogForm';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BlogSettings() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCounts, setTotalCounts] = useState(0);

  const [open, setOpen] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:9000/blog`);
      const blogsData = Array.isArray(res.data.data) ? res.data.data : [];
      setBlogs(blogsData);
      setTotalCounts(res.data.totalCount || blogsData.length);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setBlogs([]);
      setTotalCounts(0);
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const onDeleteBlog = async id => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await axios.delete(`http://localhost:9000/blog/${id}`);
      setBlogs(prev => prev.filter(blog => blog._id !== id));
      setTotalCounts(prev => prev - 1);
      toast.success('Blog deleted successfully');
    } catch (error) {
      console.error('Failed to delete blog', error);
      toast.error('Failed to delete blog');
    }
  };

  const handleBlogCreated = newBlog => {
    setBlogs(prev => [newBlog, ...prev]);
    setTotalCounts(prev => prev + 1);
    toast.success('Blog created successfully!');
  };

  const handleBlogUpdated = updatedBlog => {
    setBlogs(prev =>
      prev.map(blog => (blog._id === updatedBlog._id ? updatedBlog : blog))
    );
    toast.success('Blog updated successfully!');
  };

  const openCreateForm = () => {
    setFormMode('create');
    setSelectedBlog(null);
    setOpen(true);
  };

  const openEditForm = blog => {
    setFormMode('edit');
    setSelectedBlog(blog);
    setOpen(true);
  };

  // New function for view mode
  const openViewForm = blog => {
    setFormMode('view'); // <= set mode to 'view'
    setSelectedBlog(blog);
    setOpen(true);
  };

  return (
    <>
      <Card className="space-y-4">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle>All Blog&apos;s ({totalCounts})</CardTitle>
          <Button onClick={openCreateForm}>
            <Plus className="w-4 h-4 mr-2" />
            Add New Blog
          </Button>
        </CardHeader>

        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading blogs...</div>
        ) : (
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Blog Title</TableHead>
                  <TableHead>Blog Description</TableHead>
                  <TableHead>Blog Image</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.length > 0 ? (
                  blogs.map(blog => (
                    <TableRow key={blog._id}>
                      <TableCell className="font-medium">
                        {blog.title}
                      </TableCell>
                      <TableCell>
                        <div
                          className="line-clamp-3 prose prose-sm sm:prose lg:prose-lg max-w-none"
                          dangerouslySetInnerHTML={{ __html: blog.description }}
                        />
                      </TableCell>
                      <TableCell>
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="h-16 w-24 object-cover rounded hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                          />
                        ) : (
                          'No Image'
                        )}
                      </TableCell>
                      <TableCell>
                        {blog.createdAt
                          ? new Date(blog.createdAt).toLocaleDateString()
                          : '—'}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openViewForm(blog)}
                          className="cursor-pointer hover:text-[#8528FF]"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditForm(blog)}
                          className="cursor-pointer hover:text-[#8528FF]"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDeleteBlog(blog._id)}
                          className="text-red-600 hover:text-red-700 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-gray-500"
                    >
                      No blogs found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* Custom Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 hide-scrollbar">
          <div className="bg-white w-[95vw] max-w-[1100px] h-[90vh] rounded-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold">
                {formMode === 'edit' ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
              >
                <X />
              </button>
            </div>
            <BlogForm
              mode={formMode}
              blog={selectedBlog}
              onClose={() => setOpen(false)}
              onBlogCreated={handleBlogCreated}
              onBlogUpdated={handleBlogUpdated}
            />
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
