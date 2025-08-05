'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User,
  Search,
  Save,
  Upload,
  Plus,
  Eye,
  Trash2,
  Edit,
} from 'lucide-react';
import axios from 'axios';

export function Settings() {
  const [profile, setProfile] = useState({
    fullname: '',
    phone: '',
    email: '',
    company: '',
    position: '',
  });
  // const [admin, setAdmin] = useState({ email: '' });
  // const getAdmin = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:9000/admin');
  //     if (res.data.length > 0) {
  //       setProfile(res.data[0]);
  //     }
  //   } catch (error) {
  //     console.error('error fetching admin', error);
  //   }
  // };
  const getProfile = async () => {
    try {
      const res = await axios.get('http://localhost:9000/profile');
      console.log(profile);

      setProfile(res.data);
    } catch (error) {
      console.error('error fetching profile', error);
    }
  };

  useEffect(() => {
    getProfile();
    // getAdmin();
  }, []);

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileSave = () => {
    // Mock save functionality
    console.log('Profile saved:', profile);
  };

  const handlePasswordChange = () => {
    // Mock password change functionality
    if (security.newPassword !== security.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Password changed');
    setSecurity({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  // Slug setup
  const [seoData, setSeoData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const getSlugs = async () => {
    try {
      const res = await axios.get('http://localhost:9000/seo');
      setSeoData(res.data.seoEntries);
      setTotalCount(res.data.totalCount);
    } catch (error) {
      console.error('Failed to fetch slugs:', error);
    }
  };

  useEffect(() => {
    getSlugs();
  }, []);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSeo, setEditingSeo] = useState(null); // null for add, object for edit

  // Open add modal
  const openAddModal = () => {
    setEditingSeo(null);
    setIsModalOpen(true);
  };

  // Open edit modal
  const handleEditSeo = seo => {
    setEditingSeo(seo);
    setIsModalOpen(true);
  };

  // Handler for updating SEO in UI
  const handleSeoUpdated = updatedSeo => {
    setSeoData(prev =>
      prev.map(seo => (seo._id === updatedSeo._id ? updatedSeo : seo))
    );
  };

  // Add handler for deleting SEO
  const handleDeleteSeo = async slug => {
    // Optimistically remove from UI
    const prevSeoData = [...seoData];
    const prevCount = totalCount;
    setSeoData(prev => prev.filter(seo => seo.slug !== slug));
    setTotalCount(prev => prev - 1);
    try {
      await axios.delete(`http://localhost:9000/seo/${slug}`);
      await getSlugs();
    } catch (error) {
      alert('Failed to delete SEO entry. Reverting UI.');
      setSeoData(prevSeoData);
    }
  };

  // Handler for adding SEO in UI
  const handleSeoCreated = newSeo => {
    setSeoData(prev => [newSeo, ...prev]);
    setTotalCount(prev => prev + 1);
  };

  // State for viewing SEO
  const [viewingSeo, setViewingSeo] = useState(null);

  // Handler to open view modal
  const handleViewSeo = seo => {
    setViewingSeo(seo);
  };

  // Handler to close view modal
  const handleCloseViewSeo = () => {
    setViewingSeo(null);
  };

  // Unified SEOForm for add/edit
  const SEOForm = ({ onClose, onSeoCreated, onSeoUpdated, seo, mode }) => {
    const [formData, setFormData] = useState(() =>
      seo
        ? {
            title: seo.title || '',
            slug: seo.slug || '',
            metaDescription: seo.metaDescription || '',
            metaKeywords: seo.metaKeywords || '',
            canonicalUrl: seo.canonicalUrl || '',
            h1Tag: seo.h1Tag || '',
            robots: seo.robots || '',
            locale: seo.locale || '',
            sitemapPriority: seo.sitemapPriority || '',
            changeFrequency: seo.changeFrequency || '',
            ogTitle: seo.ogTitle || '',
            ogDescription: seo.ogDescription || '',
            ogImage: seo.ogImage || '',
            ogUrl: seo.ogUrl || '',
            twitterCard: seo.twitterCard || '',
            twitterTitle: seo.twitterTitle || '',
            twitterDescription: seo.twitterDescription || '',
            twitterImageUrl: seo.twitterImageUrl || '',
            images:
              seo.images && seo.images.length > 0
                ? seo.images
                : [{ url: '', alt: '', filename: '' }],
            links:
              seo.links && seo.links.length > 0
                ? seo.links
                : [{ url: '', anchorText: '' }],
            structuredData: seo.structuredData || '',
          }
        : {
            title: '',
            slug: '',
            metaDescription: '',
            metaKeywords: '',
            canonicalUrl: '',
            h1Tag: '',
            robots: '',
            locale: '',
            sitemapPriority: '',
            changeFrequency: '',
            ogTitle: '',
            ogDescription: '',
            ogImage: '',
            ogUrl: '',
            twitterCard: '',
            twitterTitle: '',
            twitterDescription: '',
            twitterImageUrl: '',
            images: [{ url: '', alt: '', filename: '' }],
            links: [{ url: '', anchorText: '' }],
            structuredData: '',
          }
    );
    const [loading, setLoading] = useState(false);
    const handleChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
    const handleSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      try {
        if (mode === 'edit') {
          const res = await axios.patch(
            `http://localhost:9000/seo/${seo.slug}`,
            formData
          );

          onSeoUpdated(res.data.data);
        } else {
          const res = await axios.post('http://localhost:9000/seo', formData);
          onSeoCreated(res.data.data);
        }
        onClose();
      } catch (error) {
        alert(
          `Failed to ${
            mode === 'edit' ? 'update' : 'create'
          } SEO entry. Please fix errors and try again.`
        );
      } finally {
        setLoading(false);
      }
    };
    // Helper: should fields be disabled?
    const isReadOnly = mode === 'view';
    return (
      <form
        onSubmit={mode === 'view' ? e => e.preventDefault() : handleSubmit}
        className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Page Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={e => handleChange('title', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            {mode === 'edit' || mode === 'view' ? (
              <Input id="slug" value={formData.slug} disabled />
            ) : (
              <Select
                value={formData.slug}
                onValueChange={value => handleChange('slug', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a slug" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    'home',
                    'about',
                    'contact',
                    'career',
                    'privacy-policy',
                    'terms-conditions',
                  ].map(slug => (
                    <SelectItem key={slug} value={slug}>
                      {slug}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="md:col-span-2">
            <Label>Meta Description</Label>
            <Textarea
              rows={3}
              value={formData.metaDescription}
              onChange={e => handleChange('metaDescription', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div className="md:col-span-2">
            <Label>Keywords</Label>
            <Input
              value={formData.metaKeywords}
              onChange={e => handleChange('metaKeywords', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div className="md:col-span-2">
            <Label>Canonical URL</Label>
            <Input
              value={formData.canonicalUrl}
              onChange={e => handleChange('canonicalUrl', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div className="md:col-span-2">
            <Label>H1 Tag</Label>
            <Input
              value={formData.h1Tag}
              onChange={e => handleChange('h1Tag', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div>
            <Label>Robots</Label>
            <Input
              value={formData.robots}
              onChange={e => handleChange('robots', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div>
            <Label>Locale</Label>
            <Input
              value={formData.locale}
              onChange={e => handleChange('locale', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div>
            <Label>Sitemap Priority (0-1)</Label>
            <Input
              type="number"
              step="0.1"
              min="0"
              max="1"
              value={formData.sitemapPriority}
              onChange={e => handleChange('sitemapPriority', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
          <div>
            <Label>Change Frequency</Label>
            {isReadOnly ? (
              <Input value={formData.changeFrequency} disabled />
            ) : (
              <Select
                value={formData.changeFrequency}
                onValueChange={value => handleChange('changeFrequency', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    'always',
                    'hourly',
                    'daily',
                    'weekly',
                    'monthly',
                    'yearly',
                    'never',
                  ].map(freq => (
                    <SelectItem key={freq} value={freq}>
                      {freq}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          {/* Open Graph Section */}
          <div className="md:col-span-2 border-t pt-4">
            <Label>Open Graph Tags</Label>
          </div>
          <div>
            <Label>OG Title</Label>
            <Input
              disabled={isReadOnly}
              value={formData.ogTitle}
              onChange={e => handleChange('ogTitle', e.target.value)}
            />
          </div>
          <div>
            <Label>OG Description</Label>
            <Input
              disabled={isReadOnly}
              value={formData.ogDescription}
              onChange={e => handleChange('ogDescription', e.target.value)}
            />
          </div>
          <div>
            <Label>OG Image URL</Label>
            <Input
              disabled={isReadOnly}
              value={formData.ogImage}
              onChange={e => handleChange('ogImage', e.target.value)}
            />
          </div>
          <div>
            <Label>OG URL</Label>
            <Input
              disabled={isReadOnly}
              value={formData.ogUrl}
              onChange={e => handleChange('ogUrl', e.target.value)}
            />
          </div>

          {/* Twitter Section */}
          <div className="md:col-span-2 border-t pt-4">
            <Label>Twitter Card</Label>
          </div>
          <div>
            <Label>Card Type</Label>
            <Input
              disabled={isReadOnly}
              value={formData.twitterCard}
              onChange={e => handleChange('twitterCard', e.target.value)}
            />
          </div>
          <div>
            <Label>Title</Label>
            <Input
              disabled={isReadOnly}
              value={formData.twitterTitle}
              onChange={e => handleChange('twitterTitle', e.target.value)}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              disabled={isReadOnly}
              value={formData.twitterDescription}
              onChange={e => handleChange('twitterDescription', e.target.value)}
            />
          </div>
          <div>
            <Label>Image URL</Label>
            <Input
              disabled={isReadOnly}
              value={formData.twitterImageUrl}
              onChange={e => handleChange('twitterImageUrl', e.target.value)}
            />
          </div>
          {/* Images Section */}
          <div className="md:col-span-2 border-t pt-4">
            <Label>Images</Label>
          </div>
          <div>
            <Label>Image URL</Label>
            <Input
              disabled={isReadOnly}
              value={formData.images[0].url}
              onChange={e =>
                handleChange('images', [
                  {
                    ...formData.images[0],
                    url: e.target.value,
                    alt: formData.images[0].alt,
                    filename: formData.images[0].filename,
                  },
                ])
              }
            />
          </div>
          <div>
            <Label>Alt Text</Label>
            <Input
              disabled={isReadOnly}
              value={formData.images[0].alt}
              onChange={e =>
                handleChange('images', [
                  {
                    ...formData.images[0],
                    alt: e.target.value,
                    url: formData.images[0].url,
                    filename: formData.images[0].filename,
                  },
                ])
              }
            />
          </div>
          <div>
            <Label>Filename</Label>
            <Input
              disabled={isReadOnly}
              value={formData.images[0].filename}
              onChange={e =>
                handleChange('images', [
                  {
                    ...formData.images[0],
                    filename: e.target.value,
                    alt: formData.images[0].alt,
                    url: formData.images[0].url,
                  },
                ])
              }
            />
          </div>

          {/* Links Section */}
          <div className="md:col-span-2 border-t pt-4">
            <Label>Links</Label>
          </div>
          <div>
            <Label>Link URL</Label>
            <Input
              disabled={isReadOnly}
              value={formData.links[0].url}
              onChange={e =>
                handleChange('links', [
                  {
                    ...formData.links[0],
                    url: e.target.value,
                    anchorText: formData.links[0].anchorText,
                    isInternal: formData.links[0].isInternal,
                  },
                ])
              }
            />
          </div>
          <div>
            <Label>Anchor Text</Label>
            <Input
              disabled={isReadOnly}
              value={formData.links[0].anchorText}
              onChange={e =>
                handleChange('links', [
                  {
                    ...formData.links[0],
                    anchorText: e.target.value,
                    url: formData.links[0].url,
                    isInternal: formData.links[0].isInternal,
                  },
                ])
              }
            />
          </div>
          {/* <div>
            <Label>Is Internal</Label>
            <input
              type="checkbox"
              checked={formData.links[0].isInternal}
              onChange={e =>
                handleChange('links', [
                  { ...formData.links[0], isInternal: e.target.checked },
                ])
              }
              className="mt-2"
            />
          </div> */}

          {/* Structured Data */}
          <div className="md:col-span-2 border-t pt-4">
            <Label>Structured Data (JSON-LD)</Label>
          </div>
          <div className="md:col-span-2">
            <Textarea
              rows={4}
              value={formData.structuredData}
              onChange={e => handleChange('structuredData', e.target.value)}
              placeholder="Paste JSON-LD here"
              disabled={isReadOnly}
            />
          </div>

          {/* Boolean Toggles */}
          {/* <div>
            <Label>Enable AMP</Label>
            <input
              type="checkbox"
              checked={formData.enableAmp}
              onChange={e => handleChange('enableAmp', e.target.checked)}
              className="mt-2"
            />
          </div>
          <div>
            <Label>Lazy Load Images</Label>
            <input
              type="checkbox"
              checked={formData.lazyLoadImages}
              onChange={e => handleChange('lazyLoadImages', e.target.checked)}
              className="mt-2"
            />
          </div> */}

          <div className="md:col-span-2">
            <Label>SEO Content (for word count)</Label>
            <Textarea
              rows={4}
              value={formData.seoContent}
              onChange={e => handleChange('seoContent', e.target.value)}
              disabled={isReadOnly}
            />
          </div>
        </div>

        {mode !== 'view' && (
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#8528FF] hover:bg-[#8528FF]/90"
            >
              {mode === 'edit' ? 'Edit SEO' : 'Create SEO'}
            </Button>
          </div>
        )}
      </form>
    );
  };

  // Helper to truncate meta description
  const truncateMetaDescription = (desc, maxWords = 10) => {
    if (!desc) return '';
    const words = desc.split(' ');
    if (words.length <= maxWords) return desc;
    return words.slice(0, maxWords).join(' ') + ' ';
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            SEO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <div className="flex justify-end">
                <Button
                  onClick={handleProfileSave}
                  className="bg-[#8528FF] hover:bg-[#8528FF]/90"
                >
                  <Edit className=" h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="bg-[#8528FF] text-white text-2xl">
                    {/* {profile.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')} */}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" className="mb-2 bg-transparent">
                    <Upload className="mr-2 h-4 w-4" />
                    Change Avatar
                  </Button>
                  <p className="text-sm text-gray-500">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    // readOnly
                    name="fullname"
                    value={profile.fullname || ''}
                    onChange={e =>
                      setProfile({ ...profile, fullname: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    readOnly
                    // name="email"
                    // type="email"
                    // value={profile.email}
                    onChange={e =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    readOnly
                    id="phone"
                    value={profile.phone}
                    onChange={e =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    readOnly
                    id="position"
                    value={profile.position}
                    onChange={e =>
                      setProfile({ ...profile, position: e.target.value })
                    }
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    readOnly
                    id="company"
                    value={profile.company}
                    onChange={e =>
                      setProfile({ ...profile, company: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Security Section */}
              <div className="border-t pt-3 flex flex-col gap-5">
                <div>
                  <h1 className="font-semibold">Security Settings</h1>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        value={security.currentPassword}
                        onChange={e =>
                          setSecurity({
                            ...security,
                            currentPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={security.newPassword}
                        onChange={e =>
                          setSecurity({
                            ...security,
                            newPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">
                        Confirm New Password
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={security.confirmPassword}
                        onChange={e =>
                          setSecurity({
                            ...security,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* <div className="flex justify-end">
                <Button onClick={handlePasswordChange} className="bg-[#8528FF] hover:bg-[#8528FF]/90">
                  <Save className="mr-2 h-4 w-4" />
                  Update Password
                </Button>
              </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Section */}
        <TabsContent value="seo">
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
                <DialogContent className="max-w-4xl max-h-[85vh]  ">
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
                  {seoData.length > 0 ? (
                    seoData.map(seo => (
                      <TableRow key={seo._id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{seo.slug}</div>
                          </div>
                        </TableCell>

                        <TableCell className="font-medium">
                          {seo.title}
                        </TableCell>

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
                              <Edit className="h-4 w-4 " />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700 cursor-pointer"
                              onClick={() => handleDeleteSeo(seo.slug)}
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
        </TabsContent>
      </Tabs>
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
    </div>
  );
}
