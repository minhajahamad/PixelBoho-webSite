// src/hooks/useSeoData.js
import { useEffect, useState } from 'react';
import axiosInstance from '../Components/apiconfig/axios';
import { API_URL } from '../Components/apiconfig/api_url';

export default function useSeoData(slug) {
  console.log('useSeoData HOOK called with slug:', slug);
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    if (!slug) return;
    console.log('Slug passed:', slug);

    axiosInstance
      .get(`${API_URL.SEO.GET_SEO}/${slug}`)
      .then(res => res.json())
      .then(data => {
        console.log('SEO data from API:', data);
        setSeoData(data);
      })
      .catch(err => console.error('SEO Fetch Error:', err));
  }, [slug]);

  return seoData;
}
