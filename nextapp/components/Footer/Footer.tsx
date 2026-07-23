'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Footer.module.css';

const LOCATIONS = [
  { icon: '', text: 'Koru, Kisumu County', sub: 'Central Mill & HQ' },
  { icon: '', text: 'Kericho County' },
  { icon: '', text: 'Nandi County' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact" aria-label="Contact and company information">
      <div className="container">

        <ScrollReveal className={styles.grid}>

          {/* Brand column */}
          <div className={styles.brand}>
            <Image
              src="/logo.jpg"
              alt="Kibochi Star Coffee logo"
              width={72}
              height={72}
              className={styles.logoImg}
            />
            <div className={styles.brandName}>
              Kibochi Star Coffee Limited
            </div>
            <p>
              Specialty coffee processor and trader operating a wet mill in Koru, Kisumu County.
              We connect highland smallholder farmers to local and international markets.
            </p>
          </div>

          {/* Locations column */}
          <div className={styles.col}>
            <h4>Locations</h4>
            <ul>
              {LOCATIONS.map(({ icon, text, sub }) => (
                <li key={text}>
                  <span className={styles.icon} aria-hidden="true">{icon}</span>
                  <span>
                    {text}
                    {sub && <><br /><span className={styles.sub}>{sub}</span></>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              <li>
                <span className={styles.icon} aria-hidden="true"></span>
                <a href="mailto:info@kibochistarcoffee.co.ke">info@kibochistarcoffee.co.ke</a>
              </li>
              <li>
                <span className={styles.icon} aria-hidden="true"></span>
                <a href="tel:+254700000000">+254 700 000 000</a>
              </li>
            </ul>
          </div>

        </ScrollReveal>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>© {year} Kibochi Star Coffee Limited. All rights reserved.</p>
          <p className={`mono ${styles.locations}`}>
            Koru · Kericho · Kisumu · Nandi
          </p>
        </div>

      </div>
    </footer>
  );
}
