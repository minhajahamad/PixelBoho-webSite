"use client";

import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export const SEOForm = ({ onClose, onSeoCreated, onSeoUpdated, seo, mode }) => {
  const [formData, setFormData] = useState(() =>
    seo
      ? {
          title: seo.title || "",
          slug: seo.slug || "",
          metaDescription: seo.metaDescription || "",
          metaKeywords: seo.metaKeywords || "",
          canonicalUrl: seo.canonicalUrl || "",
          h1Tag: seo.h1Tag || "",
          robots: seo.robots || "",
          locale: seo.locale || "",
          sitemapPriority: seo.sitemapPriority || "",
          changeFrequency: seo.changeFrequency || "",
          ogTitle: seo.ogTitle || "",
          ogDescription: seo.ogDescription || "",
          ogImage: seo.ogImage || "",
          ogUrl: seo.ogUrl || "",
          twitterCard: seo.twitterCard || "",
          twitterTitle: seo.twitterTitle || "",
          twitterDescription: seo.twitterDescription || "",
          twitterImageUrl: seo.twitterImageUrl || "",
          images:
            seo.images && seo.images.length > 0
              ? seo.images
              : [{ url: "", alt: "", filename: "" }],
          links:
            seo.links && seo.links.length > 0
              ? seo.links
              : [{ url: "", anchorText: "" }],
          structuredData: seo.structuredData || "",
          seoContent: seo.seoContent || ""
        }
      : {
          title: "",
          slug: "",
          metaDescription: "",
          metaKeywords: "",
          canonicalUrl: "",
          h1Tag: "",
          robots: "",
          locale: "",
          sitemapPriority: "",
          changeFrequency: "",
          ogTitle: "",
          ogDescription: "",
          ogImage: "",
          ogUrl: "",
          twitterCard: "",
          twitterTitle: "",
          twitterDescription: "",
          twitterImageUrl: "",
          images: [{ url: "", alt: "", filename: "" }],
          links: [{ url: "", anchorText: "" }],
          structuredData: "",
          seoContent: ""
        }
  );

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "edit") {
        const res = await axios.patch(
          `http://localhost:9000/seo/${seo.slug}`,
          formData
        );
        onSeoUpdated(res.data.data);
      } else {
        const res = await axios.post("http://localhost:9000/seo", formData);
        onSeoCreated(res.data.data);
      }
      onClose();
    } catch (error) {
      alert(
        `Failed to ${mode === "edit" ? "update" : "create"} SEO entry. Please fix errors and try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  const isReadOnly = mode === "view";

  return (
    <form
      onSubmit={mode === "view" ? (e) => e.preventDefault() : handleSubmit}
      className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Page Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          {mode === "edit" || mode === "view" ? (
            <Input id="slug" value={formData.slug} disabled />
          ) : (
            <Select
              value={formData.slug}
              onValueChange={(value) => handleChange("slug", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a slug" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "home",
                  "about",
                  "contact",
                  "blogs",
                  "career",
                  "privacy-policy",
                  "terms-conditions"
                ].map((slug) => (
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
            onChange={(e) => handleChange("metaDescription", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div className="md:col-span-2">
          <Label>Keywords</Label>
          <Input
            value={formData.metaKeywords}
            onChange={(e) => handleChange("metaKeywords", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div className="md:col-span-2">
          <Label>Canonical URL</Label>
          <Input
            value={formData.canonicalUrl}
            onChange={(e) => handleChange("canonicalUrl", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div className="md:col-span-2">
          <Label>H1 Tag</Label>
          <Input
            value={formData.h1Tag}
            onChange={(e) => handleChange("h1Tag", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Robots</Label>
          <Input
            value={formData.robots}
            onChange={(e) => handleChange("robots", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Locale</Label>
          <Input
            value={formData.locale}
            onChange={(e) => handleChange("locale", e.target.value)}
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
            onChange={(e) => handleChange("sitemapPriority", e.target.value)}
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
              onValueChange={(value) => handleChange("changeFrequency", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "always",
                  "hourly",
                  "daily",
                  "weekly",
                  "monthly",
                  "yearly",
                  "never"
                ].map((freq) => (
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
            value={formData.ogTitle}
            onChange={(e) => handleChange("ogTitle", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>OG Description</Label>
          <Input
            value={formData.ogDescription}
            onChange={(e) => handleChange("ogDescription", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>OG Image URL</Label>
          <Input
            value={formData.ogImage}
            onChange={(e) => handleChange("ogImage", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>OG URL</Label>
          <Input
            value={formData.ogUrl}
            onChange={(e) => handleChange("ogUrl", e.target.value)}
            disabled={isReadOnly}
          />
        </div>

        {/* Twitter Section */}

        <div className="md:col-span-2 border-t pt-4">
          <Label>Twitter Card</Label>
        </div>
        <div>
          <Label>Card Type</Label>
          <Input
            value={formData.twitterCard}
            onChange={(e) => handleChange("twitterCard", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            value={formData.twitterTitle}
            onChange={(e) => handleChange("twitterTitle", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Description</Label>
          <Input
            value={formData.twitterDescription}
            onChange={(e) => handleChange("twitterDescription", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Image URL</Label>
          <Input
            value={formData.twitterImageUrl}
            onChange={(e) => handleChange("twitterImageUrl", e.target.value)}
            disabled={isReadOnly}
          />
        </div>

        {/* Images Section */}

        <div className="md:col-span-2 border-t pt-4">
          <Label>Images</Label>
        </div>
        <div>
          <Label>Image URL</Label>
          <Input
            value={formData.images[0].url}
            onChange={(e) =>
              handleChange("images", [
                {
                  ...formData.images[0],
                  url: e.target.value,
                  alt: formData.images[0].alt,
                  filename: formData.images[0].filename
                }
              ])
            }
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Alt Text</Label>
          <Input
            value={formData.images[0].alt}
            onChange={(e) =>
              handleChange("images", [
                {
                  ...formData.images[0],
                  alt: e.target.value,
                  url: formData.images[0].url,
                  filename: formData.images[0].filename
                }
              ])
            }
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Filename</Label>
          <Input
            value={formData.images[0].filename}
            onChange={(e) =>
              handleChange("images", [
                {
                  ...formData.images[0],
                  filename: e.target.value,
                  alt: formData.images[0].alt,
                  url: formData.images[0].url
                }
              ])
            }
            disabled={isReadOnly}
          />
        </div>

        {/* Links Section */}

        <div className="md:col-span-2 border-t pt-4">
          <Label>Links</Label>
        </div>
        <div>
          <Label>Link URL</Label>
          <Input
            value={formData.links[0].url}
            onChange={(e) =>
              handleChange("links", [
                {
                  ...formData.links[0],
                  url: e.target.value,
                  anchorText: formData.links[0].anchorText,
                  // isInternal: formData.links[0].isInternal, // comment in original
                }
              ])
            }
            disabled={isReadOnly}
          />
        </div>
        <div>
          <Label>Anchor Text</Label>
          <Input
            value={formData.links[0].anchorText}
            onChange={(e) =>
              handleChange("links", [
                {
                  ...formData.links[0],
                  anchorText: e.target.value,
                  url: formData.links[0].url,
                  // isInternal: formData.links[0].isInternal,
                }
              ])
            }
            disabled={isReadOnly}
          />
        </div>

        {/* Structured Data Section */}

        <div className="md:col-span-2 border-t pt-4">
          <Label>Structured Data (JSON-LD)</Label>
        </div>
        <div className="md:col-span-2">
          <Textarea
            rows={4}
            value={formData.structuredData}
            onChange={(e) => handleChange("structuredData", e.target.value)}
            placeholder="Paste JSON-LD here"
            disabled={isReadOnly}
          />
        </div>

        {/* SEO Content Section */}

        <div className="md:col-span-2">
          <Label>SEO Content (for word count)</Label>
          <Textarea
            rows={4}
            value={formData.seoContent}
            onChange={(e) => handleChange("seoContent", e.target.value)}
            disabled={isReadOnly}
          />
        </div>
      </div>

      {mode !== "view" && (
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#8528FF] hover:bg-[#8528FF]/90">
            {mode === "edit" ? "Edit SEO" : "Create SEO"}
          </Button>
        </div>
      )}
    </form>
  );
};
