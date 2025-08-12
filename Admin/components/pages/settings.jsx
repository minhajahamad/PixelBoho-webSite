'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Search } from 'lucide-react';

// import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { ProfileSettings } from './Settings/ProfileSettings';
// import { SEOSettings } from "@/components/settings/SEOSettings";
import { SEOSettings } from './Settings/SEOSettings';
import BlogCard from './Settings/BlogSettings';
export default function Settings() {
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
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            SEO
          </TabsTrigger>
          <TabsTrigger value="blog" className="flex items-center gap-2">
            <i className="fa-solid fa-blog"></i> Blog
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="seo">
          <SEOSettings />
        </TabsContent>

        <TabsContent value="blog">
          <BlogCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
