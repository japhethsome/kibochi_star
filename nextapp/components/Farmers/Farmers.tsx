import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Farmers.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Cherry Delivery at the Pulping Station',
    body: 'Farmers deliver ripe cherry to their nearest of 11 pulping stations across the three counties. Short delivery distances preserve cherry quality and reduce post-harvest losses. Cherry is weighed, recorded, and priced at intake.',
  },
  {
    num: '02',
    title: 'Processing at the Central Mill in Koru',
    body: 'Collected cherry is transported to the Koru wet mill where it is de-pulped, fermented, washed, and dried. Our mill operates clean water circuits and raised drying beds to produce consistent, export-grade green coffee.',
  },
  {
    num: '03',
    title: 'Milling, Grading & Market Access',
    body: 'Dried parchment coffee is dry-milled, graded, sorted, and bagged into export lots. Coffee is marketed through local channels and directly to international buyers, with returns traceable back to the originating farmer catchment.',
  },
];

export default function Farmers() {
  return (
    <section className={styles.farmers} id="farmers" aria-label="Farmer network">
      <div className={`container ${styles.inner}`}>

        <ScrollReveal className={styles.header}>
          <span className="section-num" style={{ color: 'var(--buni)' }}>05</span>
          <span className="eyebrow">The Farmer Network</span>
          <div className="section-divider section-divider--light" aria-hidden="true" />
          <h2>From Farm Gate<br />to Export Lot</h2>
          <p>
            Our collection system is designed around the smallholder farmer — minimising
            transport distances, ensuring fair cherry pricing, and maintaining traceability
            at every step.
          </p>
        </ScrollReveal>

        <ScrollReveal className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum} aria-label={`Step ${step.num}`}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
