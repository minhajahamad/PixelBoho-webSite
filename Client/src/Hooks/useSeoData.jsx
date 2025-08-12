// src/hooks/useSeoData.js
import { useEffect, useState } from 'react';
import axiosInstance from '../Components/apiconfig/axios';
import { API_URL } from '../Components/apiconfig/api_url';

export default function useSeoData(slug) {
  console.log('useSeoData HOOK called with slug:', slug);
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    if (!slug) return;

    axiosInstance
      .get(API_URL.SEO.GET_SEO_BY_SLUG(slug))
      .then(res => {
        console.log('SEO data from API:', res.data);
        setSeoData(res.data);
      })
      .catch(err => console.error('SEO Fetch Error:', err));
  }, [slug]);

  return seoData;
}
