import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './About.module.css';

const SNAPSHOT_ROWS = [
  { label: 'Mill Location', value: 'Koru, Kisumu County' },
  { label: 'Pulping Stations', value: <><strong>11</strong> active stations</> },
  { label: 'Counties Served', value: 'Kericho · Kisumu · Nandi' },
  { label: 'Products', value: 'Clean Coffee · Buni Coffee' },
  { label: 'Markets', value: 'Local · Export' },
  { label: 'Established', value: 'Kenya, EA' },
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-label="About Kibochi Star Coffee">
      <div className="container">
        <div className={styles.grid}>

          {/* Text column */}
          <ScrollReveal className={styles.text}>
            <span className="section-num">02</span>
            <span className="eyebrow">About the Company</span>
            <div className="section-divider" aria-hidden="true" />
            <h2>Connecting Farmers to<br />Global Coffee Markets</h2>
            <p>
              Kibochi Star Coffee Limited is a privately held coffee processor and trader
              registered in Kenya. The company operates a fully equipped wet mill in Koru,
              Kisumu County, serving an extensive network of smallholder coffee farmers
              across Kericho, Kisumu, and Nandi counties.
            </p>
            <p>
              Our model bridges the gap between the farm gate and the international market
              providing reliable cherry collection, efficient processing, quality milling,
              and transparent marketing channels that benefit farmers and buyers alike.
            </p>
            <p>
              We process both fully washed clean coffee and naturally processed buni coffee,
              giving buyers a range of origin profiles from the same high altitude growing area.
            </p>
          </ScrollReveal>

          {/* Ledger / Company Snapshot */}
          <ScrollReveal>
            <div className={styles.ledger} role="table" aria-label="Company Snapshot">
              <div className={styles.ledgerHead}>
                <h3>Company Snapshot</h3>
              </div>
              {SNAPSHOT_ROWS.map(({ label, value }) => (
                <div key={label} className={styles.ledgerRow} role="row">
                  <span className={styles.ledgerLabel} role="rowheader">{label}</span>
                  <span className={styles.ledgerValue} role="cell">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
