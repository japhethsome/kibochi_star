import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Hero.module.css';

const ROUTE_STEPS = ['Farm', 'Pulping', 'Milling', 'Market'];

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Hero">

      {/* Dynamic Background */}
      <div className={styles.heroBackground} aria-hidden="true">
        <div className={styles.gridContainer}>
          <div className={`${styles.gridColumn} ${styles.slideUp}`}>
            <Image src="/images/coffee-beans.png" alt="" width={400} height={500} className={styles.bgImg} />
            <Image src="/images/barista.png" alt="" width={400} height={500} className={styles.bgImg} />
            <Image src="/images/latte.png" alt="" width={400} height={500} className={styles.bgImg} />
          </div>
          <div className={`${styles.gridColumn} ${styles.slideDown}`}>
            <Image src="/images/latte.png" alt="" width={400} height={600} className={styles.bgImg} />
            <Image src="/images/cherries.png" alt="" width={400} height={400} className={styles.bgImg} />
            <Image src="/images/coffee-beans.png" alt="" width={400} height={500} className={styles.bgImg} />
          </div>
          <div className={`${styles.gridColumn} ${styles.slideUpDelayed}`}>
            <Image src="/images/barista.png" alt="" width={400} height={450} className={styles.bgImg} />
            <Image src="/images/coffee-beans.png" alt="" width={400} height={550} className={styles.bgImg} />
            <Image src="/images/cherries.png" alt="" width={400} height={400} className={styles.bgImg} />
          </div>
          <div className={`${styles.gridColumn} ${styles.slideDownDelayed}`}>
            <Image src="/images/cherries.png" alt="" width={400} height={500} className={styles.bgImg} />
            <Image src="/images/latte.png" alt="" width={400} height={400} className={styles.bgImg} />
            <Image src="/images/barista.png" alt="" width={400} height={600} className={styles.bgImg} />
          </div>
        </div>
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={`container ${styles.heroInner}`}>

        <ScrollReveal className={styles.countyTags}>
          <span className="tag tag--cherry">Kericho</span>
          <span className="tag tag--highland">Kisumu</span>
          <span className="tag tag--buni">Nandi</span>
        </ScrollReveal>

        <ScrollReveal as="h1" className={styles.heading}>
          Specialty Coffee <em>Grown</em>
          <br />
          in Kenya&apos;s Highlands
        </ScrollReveal>

        <ScrollReveal as="p" className={styles.summary}>
          Kibochi Star Coffee Limited processes and markets premium Arabica coffee
          from smallholder farmers across three counties  from cherry to clean lot,
          traceable and export ready.
        </ScrollReveal>

        <ScrollReveal
          className={styles.routeStrip}
          as="div"
        >
          <div
            className={styles.routeStripInner}
            role="list"
            aria-label="Coffee processing route"
          >
            {ROUTE_STEPS.map((step, i) => (
              <span key={step} className={styles.routeStepGroup} role="listitem">
                <span className={styles.routeStep}>{step}</span>
                {i < ROUTE_STEPS.length - 1 && (
                  <span className={styles.routeArrow} aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
