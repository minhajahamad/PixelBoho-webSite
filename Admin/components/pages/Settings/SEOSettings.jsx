'use client';

import { useState, useEffect } from 'react';

import axiosInstance from '@/components/apiconfig/axios';
import { API_URL } from '@/components/apiconfig/api_url';

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

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SEOForm } from './SeoForm';
// SEO Settings Component
export const SEOSettings = () => {
  const [seoData, setSeoData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSeo, setEditingSeo] = useState(null);

  const [viewingSeo, setViewingSeo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch SEO entries
  const getSlugs = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(API_URL.SEO.GET_ALL_SEO);
      setSeoData(res.data.seoEntries);
      setTotalCount(res.data.totalCount);
    } catch (error) {
      console.error('Failed to fetch slugs:', error);
      toast.error('Failed to load SEO entries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSlugs();
  }, []);

  // Add
  const openAddModal = () => {
    setEditingSeo(null);
    setIsModalOpen(true);
  };

  // Edit
  const handleEditSeo = seo => {
    setEditingSeo(seo);
    setIsModalOpen(true);
  };

  // Update in UI after edit
  const handleSeoUpdated = updatedSeo => {
    setSeoData(prev =>
      prev.map(seo => (seo._id === updatedSeo._id ? updatedSeo : seo))
    );
    toast.success('SEO entry updated successfully');
  };

  // Add in UI after creation
  const handleSeoCreated = newSeo => {
    setSeoData(prev => [newSeo, ...prev]);
    setTotalCount(prev => prev + 1);
    toast.success('SEO entry added successfully');
  };

  // Delete
  const handleDeleteSeo = async slug => {
    const prevSeoData = [...seoData];
    const prevCount = totalCount;

    setSeoData(prev => prev.filter(seo => seo.slug !== slug));
    setTotalCount(prev => prev - 1);

    try {
      await axiosInstance.delete(API_URL.SEO.DELETE_SEO(slug));
      toast.success('SEO entry deleted successfully');
      await getSlugs();
    } catch (error) {
      toast.error('Failed to delete SEO entry. Reverting changes.');
      setSeoData(prevSeoData);
      setTotalCount(prevCount);
    }
  };

  // View
  const handleViewSeo = seo => setViewingSeo(seo);
  const handleCloseViewSeo = () => setViewingSeo(null);

  // Truncate helper
  const truncateMetaDescription = (desc, maxWords = 10) => {
    if (!desc) return '';
    const words = desc.split(' ');
    if (words.length <= maxWords) return desc;
    return words.slice(0, maxWords).join(' ') + ' ';
  };

  return (
    <>
      <Card className="max-h-[65vh] overflow-y-scroll">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle>All SEO's ({totalCount})</CardTitle>

          <Dialog
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
            className="overflow-y-auto hide-scrollbar"
          >
            <DialogTrigger asChild>
              <Button
                className="bg-[#8528FF] hover:bg-[#8528FF]/90 w-full md:w-auto"
                onClick={openAddModal}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New SEO
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl max-h-[85vh]">
              <DialogHeader>
                <DialogTitle>
                  {editingSeo ? 'Edit SEO' : 'Create New SEO Entry'}
                </DialogTitle>
              </DialogHeader>
              <SEOForm
                onClose={() => setIsModalOpen(false)}
                onSeoCreated={handleSeoCreated}
                onSeoUpdated={handleSeoUpdated}
                seo={editingSeo}
                mode={editingSeo ? 'edit' : 'add'}
              />
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page Name/Slug</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Meta Description</TableHead>
                <TableHead>Canonical URL</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    Loading SEO's...
                  </TableCell>
                </TableRow>
              ) : seoData.length > 0 ? (
                seoData.map(seo => (
                  <TableRow key={seo._id}>
                    <TableCell>
                      <div className="font-medium">{seo.slug}</div>
                    </TableCell>
                    <TableCell className="font-medium">{seo.title}</TableCell>
                    <TableCell className="font-medium">
                      {truncateMetaDescription(seo.metaDescription)}
                      {seo.metaDescription &&
                        seo.metaDescription.split(' ').length > 10 && (
                          <button
                            style={{
                              color: '#2563eb',
                              cursor: 'pointer',
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              marginLeft: 2,
                            }}
                            onClick={() => handleViewSeo(seo)}
                          >
                            ...
                          </button>
                        )}
                    </TableCell>
                    <TableCell className="font-medium">
                      {seo.canonicalUrl}
                    </TableCell>
                    <TableCell className="font-medium">
                      {new Date(seo.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer hover:text-[#8528FF]"
                          onClick={() => handleViewSeo(seo)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer hover:text-[#8528FF]"
                          onClick={() => handleEditSeo(seo)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 cursor-pointer"
                          onClick={() => handleDeleteSeo(seo.slug)}
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
                    No applications found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View SEO Modal */}
      <Dialog
        open={!!viewingSeo}
        onOpenChange={open => {
          if (!open) handleCloseViewSeo();
        }}
      >
        <DialogContent className="max-w-4xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle>View SEO Entry</DialogTitle>
          </DialogHeader>
          {viewingSeo && (
            <SEOForm
              onClose={handleCloseViewSeo}
              seo={viewingSeo}
              mode="view"
            />
          )}
        </DialogContent>
      </Dialog>
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
};
