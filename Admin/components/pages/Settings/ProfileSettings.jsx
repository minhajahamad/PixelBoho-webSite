'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit, Upload } from 'lucide-react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProfileSettings = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    fullName: '',
    phone: '',
    company: '',
    position: '',
    email: '',
    profilePicture: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [origProfile, setOrigProfile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadingPicture, setUploadingPicture] = useState(false);

  const triggerSidebarRefresh = () => {
    window.dispatchEvent(new CustomEvent('profileUpdated'));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:9000/admin/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        console.error('Error fetching profile', err);
        toast.error('Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:9000/admin/profile`, profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Profile updated successfully!');
      setIsEditing(false);
      setOrigProfile(profile);
    } catch (err) {
      console.error('Error updating profile', err);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleProfilePictureUpload = async file => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file (JPG, PNG, etc.)');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }
    try {
      setUploadingPicture(true);
      const formData = new FormData();
      formData.append('profilePicture', file);

      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:9000/admin/profile/upload-picture',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setProfile(prev => ({
        ...prev,
        profilePicture: response.data.profilePicture,
      }));

      toast.success('Profile picture updated successfully!');
      setProfilePicture(null);
      setPreviewUrl('');
      triggerSidebarRefresh();
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      toast.error('Failed to upload profile picture. Please try again.');
    } finally {
      setUploadingPicture(false);
    }
  };

  const handleFileSelect = event => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <div className="flex justify-end">
            {!isEditing ? (
              <Button
                className="bg-[#8528FF] hover:bg-[#8528FF]/90"
                onClick={() => {
                  setIsEditing(true);
                  setOrigProfile(profile);
                }}
              >
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setProfile(origProfile);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#8528FF] hover:bg-[#8528FF]/90"
                  form="profile-form"
                  type="submit"
                >
                  Update Profile
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  previewUrl ||
                  profile.profilePicture ||
                  '/placeholder.svg?height=96&width=96'
                }
                alt="Profile Picture"
              />
              <AvatarFallback className="bg-[#8528FF] text-white text-2xl">
                {profile.fullName
                  ? profile.fullName
                      .split(' ')
                      .map(n => n[0])
                      .join('')
                  : 'A'}
              </AvatarFallback>
            </Avatar>

            <div>
              <input
                id="profile-picture-input"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              {!profilePicture && (
                <Button
                  variant="outline"
                  className="mb-2 bg-transparent"
                  onClick={() =>
                    document.getElementById('profile-picture-input').click()
                  }
                  disabled={uploadingPicture}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {uploadingPicture ? 'Uploading...' : 'Change Avatar'}
                </Button>
              )}

              {profilePicture && (
                <div className="space-y-2">
                  <Button
                    size="sm"
                    className="bg-[#8528FF] hover:bg-[#8528FF]/90"
                    onClick={() => handleProfilePictureUpload(profilePicture)}
                    disabled={uploadingPicture}
                  >
                    {uploadingPicture ? 'Uploading...' : 'Save Picture'}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setProfilePicture(null);
                      setPreviewUrl('');
                    }}
                    disabled={uploadingPicture}
                  >
                    Cancel
                  </Button>
                </div>
              )}

              <p className="text-sm text-gray-500">JPG, PNG. Max 5MB.</p>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} id="profile-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  readOnly={!isEditing}
                  name="fullName"
                  value={profile.fullName || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input
                  readOnly
                  name="email"
                  type="email"
                  value={profile.email || ''}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  readOnly={!isEditing}
                  name="phone"
                  value={profile.phone || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <Input
                  readOnly={!isEditing}
                  name="position"
                  value={profile.position || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  readOnly={!isEditing}
                  name="company"
                  value={profile.company || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

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
