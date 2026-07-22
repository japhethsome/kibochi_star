'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { href: '#about',   label: 'About' },
  { href: '#network', label: 'Mill & Network' },
  { href: '#quality', label: 'Our Coffee' },
  { href: '#farmers', label: 'Farmers' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [activeId, setActiveId] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ── Active-link tracking on scroll ── */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id], footer[id]');
    const navHeight = 60;

    const onScroll = () => {
      const scrollPos = window.scrollY + navHeight + 40;
      let current = '';
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          current = section.getAttribute('id') ?? '';
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Smooth-scroll to a hash target via JS.
   * We do NOT use css `scroll-behavior: smooth` globally because it causes
   * the browser to animate-scroll to the hash anchor on every page refresh,
   * making the page appear to jump to the bottom after load.
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      const targetId = hash.replace('#', '');
      const target =
        targetId === 'top'
          ? document.documentElement
          : document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash without triggering a scroll
      window.history.pushState(null, '', hash);
      setIsMobileMenuOpen(false); // Close mobile menu if open
    },
    []
  );

  return (
    <header className={styles.siteNav} role="banner">
      <div className={`container ${styles.navInner}`}>
        <Link
          href="#top"
          className={styles.navBrand}
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <Image
            src="/logo.jpg"
            alt="Kibochi Star Coffee logo"
            width={40}
            height={40}
            className={styles.logoImg}
            priority
          />
          <span className={styles.brandText}>Kibochi Star Coffee</span>
        </Link>
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <nav aria-label="Main navigation" className={`${styles.navWrap} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`${styles.navLink} ${activeId === href.slice(1) ? styles.active : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
