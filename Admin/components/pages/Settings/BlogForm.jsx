'use client';

import { useState, useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-toastify';

import { API_URL } from '@/components/apiconfig/api_url';
import axiosInstance from '@/components/apiconfig/axios';

export const BlogForm = ({
  onClose,
  onBlogCreated,
  onBlogUpdated,
  blog,
  mode,
}) => {
  const [formData, setFormData] = useState(() =>
    blog
      ? {
          title: blog.title || '',
          description: blog.description || '',
          image: null,
        }
      : { title: '', description: '', image: null }
  );

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const extractFileName = url => {
    try {
      return url.split('/').pop();
    } catch {
      return '';
    }
  };

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(() =>
    blog?.image ? extractFileName(blog.image) : ''
  );

  const isReadOnly = mode === 'view';

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, image: file }));
    setFileName(file?.name || '');

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      setImagePreview(null);
    }
  };

  // Cleanup preview URL on unmount or when image changes
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  // Validation function
  const validate = () => {
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return false;
    }
    if (!formData.description.trim()) {
      toast.error('Description is required');
      return false;
    }
    // For create mode, image is required
    if (mode === 'create' && !formData.image) {
      toast.error('Image is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validate()) return; // Stop submission if invalid

    setLoading(true);
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      if (formData.image) data.append('image', formData.image);

      if (mode === 'edit') {
        const res = await axiosInstance.patch(
          API_URL.BLOG.UPDATE_BLOG(blog._id),
          data,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        onBlogUpdated(res.data.data);
      } else {
        const res = await axiosInstance.post(API_URL.BLOG.POST_BLOG, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        onBlogCreated(res.data.data);
      }
      onClose();
    } catch (error) {
      toast.error(`Failed to ${mode === 'edit' ? 'update' : 'create'} blog.`);
    } finally {
      setLoading(false);
    }
  };

  // Disable submit button if invalid (optional UX improvement)
  const isSubmitDisabled =
    !formData.title.trim() ||
    !formData.description.trim() ||
    (mode === 'create' && !formData.image);

  return (
    <form
      onSubmit={mode === 'view' ? e => e.preventDefault() : handleSubmit}
      className="space-y-4 "
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="image" className="font-semibold text-gray-700">
          Blog Image
        </Label>

        <div className="flex items-center gap-2">
          {/* Hidden native file input */}
          <input
            id="image"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            disabled={isReadOnly}
          />

          {/* Fake input showing file name */}
          <button
            type="button"
            className={`bg-[#8528FF] text-white px-4 py-2 rounded cursor-pointer
          ${
            isReadOnly ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6b1ecc]'
          }`}
            onClick={() => !isReadOnly && fileInputRef.current?.click()}
            disabled={isReadOnly}
          >
            Choose File
          </button>
          <div
            className={`flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 truncate cursor-pointer
          ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
            onClick={() => !isReadOnly && fileInputRef.current?.click()}
            title={fileName || 'No file chosen'}
          >
            {fileName || 'No file chosen'}
          </div>

          {/* Custom Choose File button */}
        </div>

        {/* Image preview */}
        {(mode === 'edit' || mode === 'view') &&
          blog?.image &&
          !imagePreview && (
            <img
              src={blog.image}
              alt="Current blog"
              className="mt-2 max-h-40 w-fit rounded-md shadow-md object-contain border border-gray-200"
            />
          )}
        {mode !== 'view' && imagePreview && (
          <img
            src={imagePreview}
            alt="Selected preview"
            className="mt-2 max-h-40 w-fit rounded-md shadow-md object-contain border border-gray-200"
          />
        )}
      </div>
      <div>
        <Label htmlFor="title">Blog Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={e => handleChange('title', e.target.value)}
          disabled={isReadOnly}
        />
      </div>
      <div>
        <Label htmlFor="description">Blog Description</Label>
        <textarea
          value={formData.description}
          onChange={value => handleChange('description', value)}
          readOnly={isReadOnly}
        />
      </div>

      {mode !== 'view' && (
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#8528FF] hover:bg-[#8528FF]/90"
            disabled={loading}
          >
            {mode === 'edit' ? 'Edit Blog' : 'Create Blog'}
          </Button>
        </div>
      )}
    </form>
  );
};
