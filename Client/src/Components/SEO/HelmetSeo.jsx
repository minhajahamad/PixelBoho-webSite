// src/Components/SEO/HelmetSeo.jsx
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const HelmetSEO = ({ seo }) => {
  useEffect(() => {
    if (seo) {
      console.log(
        '✅ HelmetSEO is injecting into <head>:',
        seo.title || 'No title'
      );
    }
  }, [seo]);
  if (!seo) return null;

  console.log('SEO Data Injected:', seo);

  return (
    <Helmet>
      {/* Basic Meta */}
      {seo.title && <title>{seo.title}</title>}
      {seo.metaDescription && (
        <meta name="description" content={seo?.metaDescription || "Default description here"} />
      )}
      {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
      {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}

      {/* Locale (if available) */}
      {seo.locale && <meta property="og:locale" content={seo.locale} />}

      {/* Open Graph */}
      {seo.openGraph && (
        <>
          {seo.openGraph.ogTitle && (
            <meta property="og:title" content={seo.openGraph.ogTitle} />
          )}
          {seo.openGraph.ogDescription && (
            <meta
              property="og:description"
              content={seo.openGraph.ogDescription}
            />
          )}
          {seo.openGraph.ogImage && (
            <>
              <meta property="og:image" content={seo.openGraph.ogImage} />
              {/* If matching alt text exists in images array */}
              {seo.images?.length > 0 && seo.images[0].alt && (
                <meta property="og:image:alt" content={seo.images[0].alt} />
              )}
            </>
          )}
          {seo.openGraph.ogUrl && (
            <meta property="og:url" content={seo.openGraph.ogUrl} />
          )}
          {seo.openGraph.ogType && (
            <meta property="og:type" content={seo.openGraph.ogType} />
          )}
        </>
      )}

      {/* Twitter Card */}
      {seo.twitterCard && (
        <>
          {seo.twitterCard.card && (
            <meta name="twitter:card" content={seo.twitterCard.card} />
          )}
          {seo.twitterCard.title && (
            <meta name="twitter:title" content={seo.twitterCard.title} />
          )}
          {seo.twitterCard.description && (
            <meta
              name="twitter:description"
              content={seo.twitterCard.description}
            />
          )}
          {seo.twitterCard.image && (
            <meta name="twitter:image" content={seo.twitterCard.image} />
          )}
        </>
      )}

      {/* Robots */}
      {seo.robots && <meta name="robots" content={seo.robots} />}

      {/* Structured Data */}
      {seo.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default HelmetSEO;
