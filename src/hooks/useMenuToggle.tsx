

import { useState, useEffect } from 'react';

export const useMenuToggle = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isNavOpen,
    toggleIsNavOpen,
  };
};
