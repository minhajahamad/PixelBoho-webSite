const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const db = require('./db/db');
const SeoMeta = require('./db/models/seoSchema'); // Import your SEO model

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// Serve uploaded resume files publicly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// =============================
// Root-level robots.txt
// =============================
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *Allow: / Sitemap: ${
    process.env.SITE_URL || 'https://yourdomain.com'
  }/sitemap.xml
  `);
});

// =============================
// Root-level sitemap.xml
// =============================
app.get('/sitemap.xml', async (req, res) => {
  try {
    // 1. Static pages (manually defined)
    const staticPages = [
      { slug: '', priority: 1.0, changeFreq: 'daily' }, // Home
      { slug: 'about', priority: 0.8, changeFreq: 'monthly' },
      { slug: 'contact', priority: 0.8, changeFreq: 'monthly' },
      { slug: 'career', priority: 0.7, changeFreq: 'weekly' },
    ];

    // 2. Dynamic pages from DB
    const seoPages = await SeoMeta.find(
      {},
      'slug lastModified sitemapPriority changeFreq'
    );

    // 3. Merge both lists
    let allPages = [
      ...staticPages.map(page => ({
        loc: `${process.env.SITE_URL || 'https://yourdomain.com'}/${page.slug}`,
        lastmod: new Date(),
        changefreq: page.changeFreq,
        priority: page.priority,
      })),
      ...seoPages.map(page => ({
        loc: `${process.env.SITE_URL || 'https://yourdomain.com'}/${page.slug}`,
        lastmod: page.lastModified || new Date(),
        changefreq: page.changeFreq,
        priority: page.sitemapPriority,
      })),
    ];

    // 4. Generate XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    allPages.forEach(page => {
      xml += `
        <url>
          <loc>${page.loc}</loc>
          <lastmod>${page.lastmod.toISOString()}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`;
    });
    xml += '</urlset>';

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//routes
const routes = require('./routes/index');
app.use(routes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Route Found For This Path' });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
