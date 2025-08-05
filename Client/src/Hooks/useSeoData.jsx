// src/hooks/useSeoData.js
import { useEffect, useState } from 'react';

export default function useSeoData(slug) {
  console.log('useSeoData HOOK called with slug:', slug);
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    if (!slug) return;
    console.log('Slug passed:', slug);

    fetch(`http://localhost:9000/seo/${slug}`)
      .then(res => res.json())
      .then(data => {
        console.log('SEO data from API:', data);
        setSeoData(data);
      })
      .catch(err => console.error('SEO Fetch Error:', err));
  }, [slug]);

  return seoData;
}
