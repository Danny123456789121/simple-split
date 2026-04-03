import styles from './App.module.css';

const features = [
  {
    title: 'Fast expense entry',
    description:
      'Add shared costs in a few clicks, then keep the split visible for everyone involved.',
  },
  {
    title: 'Clear balances',
    description:
      'See who owes what at a glance so you can settle up without back-and-forth messages.',
  },
  {
    title: 'Built for React',
    description:
      'Keep the frontend simple now and wire in persistence, routing, or auth later if needed.',
  },
];

const steps = [
  'Create a trip, dinner, or shared household group.',
  'Add people and enter payments as they happen.',
  'Review the running balance and settle up when ready.',
];

const copy = {
  brand: 'Simple Split',
  status: 'React frontend',
  headline: 'Split expenses without the app feeling heavy.',
  lede: 'Simple Split is a focused landing page for a shared-expenses product. It gives you a polished starting point in React, with no Next.js app router, server middleware, or framework baggage.',
  primaryCta: 'Explore features',
  secondaryCta: 'How it works',
  stats: [
    { value: '3x', label: 'faster to scan balances' },
    { value: '0', label: 'server components required' },
    { value: '1', label: 'clean React entry point' },
  ],
  summaryTitle: 'Why this landing page works',
  summaryBody:
    'The visual direction is intentionally warm and editorial, so the page feels like a product intro instead of a generic starter template.',
  summaryPoints: [
    'Soft glass panels over a warm background.',
    'Clear hierarchy with a strong primary CTA.',
    'Responsive layout that stacks naturally on mobile.',
  ],
  featureKicker: 'Feature',
  stepsEyebrow: 'How it works',
  stepsTitle: 'Keep the flow simple',
};

export default function App() {
  return (
    <main className={styles.shell}>
      <section className={styles.heroCard}>
        <header className={styles.heroHeader}>
          <p className={styles.eyebrow}>{copy.brand}</p>
          <span className={styles.statusPill}>{copy.status}</span>
        </header>

        <h1>{copy.headline}</h1>
        <p className={styles.lede}>{copy.lede}</p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#features">
            {copy.primaryCta}
          </a>
          <a className={styles.secondaryButton} href="#how-it-works">
            {copy.secondaryCta}
          </a>
        </div>

        <div className={styles.statsGrid}>
          {copy.stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <aside className={`${styles.panel} ${styles.summaryPanel}`}>
        <h2>{copy.summaryTitle}</h2>
        <p>{copy.summaryBody}</p>
        <ul>
          {copy.summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </aside>

      <section className={styles.contentGrid} id="features">
        {features.map((feature) => (
          <article
            className={`${styles.panel} ${styles.featureCard}`}
            key={feature.title}
          >
            <p className={styles.cardKicker}>{copy.featureKicker}</p>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section
        className={`${styles.panel} ${styles.storyPanel}`}
        id="how-it-works"
      >
        <p className={styles.eyebrow}>{copy.stepsEyebrow}</p>
        <h2>{copy.stepsTitle}</h2>
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
