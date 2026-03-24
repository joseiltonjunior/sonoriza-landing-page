import { useEffect, useMemo, useRef, useState } from 'react';

import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type ShowcaseSlide = {
  meta: string;
  title: string;
  description: string;
  fallbackTag: string;
  fallbackTitle: string;
  fallbackText: string;
  image: string;
};

const SHOWCASE_INTERVAL = 5000;

export function useShowcase(slides: readonly ShowcaseSlide[]) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--showcase-progress-duration', `${SHOWCASE_INTERVAL}ms`);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsTransitioning(false);
      return;
    }

    setIsTransitioning(true);
    const timeoutId = window.setTimeout(() => setIsTransitioning(false), 360);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((previousIndex) => (previousIndex + 1) % slides.length);
    }, SHOWCASE_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion, slides.length]);

  const activeSlide = slides[activeIndex];

  return useMemo(
    () => ({
      activeIndex,
      activeSlide,
      isTransitioning,
      goTo: (index: number) => {
        setActiveIndex((index + slides.length) % slides.length);
        setIsPaused(false);
      },
      previous: () => {
        setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
        setIsPaused(false);
      },
      next: () => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        setIsPaused(false);
      },
      pause: () => setIsPaused(true),
      resume: () => setIsPaused(false),
      onTouchStart: (clientX: number) => {
        touchStartX.current = clientX;
        touchDeltaX.current = 0;
        setIsPaused(true);
      },
      onTouchMove: (clientX: number) => {
        touchDeltaX.current = clientX - touchStartX.current;
      },
      onTouchEnd: () => {
        if (Math.abs(touchDeltaX.current) > 40) {
          setActiveIndex((currentIndex) =>
            touchDeltaX.current < 0
              ? (currentIndex + 1) % slides.length
              : (currentIndex - 1 + slides.length) % slides.length,
          );
        }

        setIsPaused(false);
      },
    }),
    [activeIndex, activeSlide, isTransitioning, slides.length],
  );
}
