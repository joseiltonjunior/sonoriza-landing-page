import { useEffect, useMemo, useState } from 'react';

import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const HIDE_THRESHOLD = 0.15;

export function useScrollUi() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      const shouldHide = window.scrollY > window.innerHeight * HIDE_THRESHOLD;
      setIsNavHidden(shouldHide);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  return useMemo(
    () => ({
      isNavHidden,
      showBackToTop: isNavHidden,
      scrollToTop: () => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      },
    }),
    [isNavHidden, prefersReducedMotion],
  );
}
