import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // use 'smooth' if you want a smooth scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
