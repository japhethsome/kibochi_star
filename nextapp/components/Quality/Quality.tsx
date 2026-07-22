import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Quality.module.css';

const PRODUCTS = [
  {
    id: 'clean',
    name: 'Clean Coffee',
    tagLabel: 'Fully Washed',
    tagVariant: 'tag--cherry' as const,
    icon: '☕',
    description:
      'Fully washed Arabica processed at our Koru mill. Cherry is de-pulped, fermented, washed, and graded on raised drying beds — producing a clean, bright cup with clear origin character.',
    attrs: [
      'Wet-process / fully washed',
      'Traceable to pulping station',
      'Graded and sorted for export',
      'Bright acidity, clean body',
    ],
  },
  {
    id: 'buni',
    name: 'Buni Coffee',
    tagLabel: 'Naturally Processed',
    tagVariant: 'tag--buni' as const,
    icon: '🫘',
    description:
      'Naturally processed coffee dried whole in the cherry. The extended fermentation and slow drying develop winey, fruited, and heavier-bodied profiles prized in specialty markets.',
    attrs: [
      'Natural / dry-process method',
      'Dried whole cherry on beds',
      'Complex fruited cup profile',
      'Sought by specialty buyers',
    ],
  },
];

export default function Quality() {
  return (
    <section className={styles.quality} id="quality" aria-label="Our coffee products">
      <div className="container">

        <ScrollReveal className={styles.header}>
          <span className="section-num">04</span>
          <span className="eyebrow">Our Coffee</span>
          <div className="section-divider" aria-hidden="true" />
          <h2>Two Distinct Origin Profiles</h2>
          <p>
            We produce both fully washed and naturally processed coffee from the same
            highland farms  giving roasters and buyers genuine flexibility without
            sourcing from multiple origins.
          </p>
        </ScrollReveal>

        <div className={styles.productGrid}>
          {PRODUCTS.map((product) => (
            <ScrollReveal key={product.id}>
              <article
                className={`${styles.productCard} ${styles[`productCard--${product.id}`]}`}
                aria-label={`${product.name} product`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.productIcon} aria-hidden="true">{product.icon}</span>
                  <h3>{product.name}</h3>
                  <span className={`tag ${product.tagVariant}`}>{product.tagLabel}</span>
                </div>
                <div className={styles.cardBody}>
                  <p>{product.description}</p>
                  <ul className={styles.productAttrs} aria-label="Product attributes">
                    {product.attrs.map((attr) => (
                      <li key={attr}>{attr}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
