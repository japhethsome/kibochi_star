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
                <a href="mailto:info@kibochicoffee.co.ke">info@kibochicoffee.co.ke</a>
              </li>
              <li>
                <a href="tel:+254722332383">+254 722 332 383</a>
              </li>
              <li className={styles.placeholder}>
                <a href="#emails">➔ View All 5 Department Emails</a>
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
