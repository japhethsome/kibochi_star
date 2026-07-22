'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Wraps children in an element that fades + rises into view on scroll
 * using IntersectionObserver. Degrades gracefully if the API is unavailable.
 * Respects prefers-reduced-motion via CSS (see globals.css).
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const El = Tag as React.ElementType;
  return (
    <El ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </El>
  );
}
