const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const seoSchema = Schema(
  {
    // Basic meta info
    title: { type: String, trim: true },
    metaDescription: { type: String, trim: true },
    metaKeywords: { type: String, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    },

    // Canonical URL
    canonicalUrl: { type: String },

    // Headings
    h1Tag: { type: String },

    // Content & word count
    content: { type: String },
    wordCount: { type: Number },

    // Images (with alt text)
    images: [
      {
        url: String,
        alt: String,
        filename: String,
      },
    ],

    // Internal & external links
    links: [
      {
        url: String,
        anchorText: String,
        isInternal: Boolean,
      },
    ],

    // Structured data (JSON-LD)
    structuredData: { type: mongoose.Schema.Types.Mixed },

    // Open Graph
    openGraph: {
      ogTitle: String,
      ogDescription: String,
      ogImage: String,
      ogUrl: String,
      ogType: String,
    },

    // Twitter Card
    twitterCard: {
      card: String, // "summary_large_image", etc.
      title: String,
      description: String,
      image: String,
    },

    // Indexing/Crawling
    robots: { type: String }, // "index, follow" or "noindex, nofollow"

    // Performance toggles
    enableAmp: { type: Boolean, default: false },
    lazyLoadImages: { type: Boolean, default: true },
    locale: { type: String, default: 'en_US' },
    author: { type: String },
    publisher: { type: String },
    lastModified: { type: Date, default: Date.now },
    sitemapPriority: { type: Number, min: 0, max: 1, default: 0.5 },
    changeFreq: {
      type: String,
      enum: [
        'always',
        'hourly',
        'daily',
        'weekly',
        'monthly',
        'yearly',
        'never',
      ],
      default: 'weekly',
    },
  },
  { timestamps: true }
);

// Pre-save hook
seoSchema.pre('save', function (next) {
  if (this.content) {
    this.wordCount = this.content.trim().split(/\s+/).length;
    if (!this.metaDescription || this.metaDescription.length < 50) {
      this.metaDescription = this.content.substring(0, 150) + '...';
    }
    this.lastModified = new Date();
  }
  next();
});

const SeoMeta = model('SeoMeta', seoSchema);

module.exports = SeoMeta;
