import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Network.module.css';

const COUNTIES = [
  {
    tag: 'County 01',
    tagVariant: 'tag--cherry' as const,
    name: 'Kericho',
    description:
      'Rich volcanic soils and high-altitude farms produce cherry with dense bean structure and bright acidity — a hallmark of the Rift Valley growing region.',
    stat: 'Highland Arabica · Rift Valley Region',
  },
  {
    tag: 'County 02',
    tagVariant: 'tag--highland' as const,
    name: 'Kisumu',
    description:
      'Home to our central mill at Koru — the processing and logistics anchor for the entire network. Kisumu station farmers deliver the highest cherry volumes per season.',
    stat: 'Mill HQ at Koru · Lake Basin Environs',
  },
  {
    tag: 'County 03',
    tagVariant: 'tag--buni' as const,
    name: 'Nandi',
    description:
      'Cool temperatures and consistent rainfall in the Nandi Hills develop complex cup profiles — floral aromatics and winey fruit notes favoured by specialty roasters.',
    stat: 'Nandi Hills Arabica · Western Highlands',
  },
];

export default function Network() {
  return (
    <section className={styles.network} id="network" aria-label="Mill and county network">
      <div className={`container ${styles.inner}`}>

        <ScrollReveal className={styles.header}>
          <span className="section-num" style={{ color: 'var(--buni)' }}>03</span>
          <span className="eyebrow">Mill &amp; Network</span>
          <div className="section-divider section-divider--light" aria-hidden="true" />
          <h2>Three Counties.<br />One Processing Hub.</h2>
          <p>
            Cherry is collected from farmer networks across three neighbouring counties and
            channelled to our central wet mill in Koru for consistent, traceable processing.
          </p>
        </ScrollReveal>

        {/* County cards */}
        <div className={styles.countyGrid}>
          {COUNTIES.map((county) => (
            <ScrollReveal key={county.name} as="article" aria-label={`${county.name} County`}>
              <div className={styles.countyCard}>
                <span className={`tag ${county.tagVariant}`}>{county.tag}</span>
                <h3>{county.name}</h3>
                <p>{county.description}</p>
                <div className={styles.countyStat}>{county.stat}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 11 Pulping Stations strip */}
        <ScrollReveal
          className={styles.stationsStrip}
          aria-label="Network scale: 11 pulping stations"
        >
          <div className={styles.stationsNum} aria-hidden="true">11</div>
          <div className={styles.stationsLabel}>
            <strong>Pulping Stations Active</strong>
            <span>
              Distributed across Kericho, Kisumu, and Nandi  each station serves a defined
              farmer catchment, ensuring short cherry delivery distances and consistent quality at intake.
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
