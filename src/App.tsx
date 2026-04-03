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

export default function App() {
  return (
    <main className={styles.shell}>
      <section className={styles.heroCard}>
        <header className={styles.heroHeader}>
          <p className={styles.eyebrow}>Simple Split</p>
          <span className={styles.statusPill}>React frontend</span>
        </header>

        <h1>Split expenses without the app feeling heavy.</h1>
        <p className={styles.lede}>
          Simple Split is a focused landing page for a shared-expenses product.
          It gives you a polished starting point in React, with no Next.js app
          router, server middleware, or framework baggage.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#features">
            Explore features
          </a>
          <a className={styles.secondaryButton} href="#how-it-works">
            How it works
          </a>
        </div>

        <div className={styles.statsGrid}>
          <article>
            <strong>3x</strong>
            <span>faster to scan balances</span>
          </article>
          <article>
            <strong>0</strong>
            <span>server components required</span>
          </article>
          <article>
            <strong>1</strong>
            <span>clean React entry point</span>
          </article>
        </div>
      </section>

      <aside className={`${styles.panel} ${styles.summaryPanel}`}>
        <h2>Why this landing page works</h2>
        <p>
          The visual direction is intentionally warm and editorial, so the page
          feels like a product intro instead of a generic starter template.
        </p>
        <ul>
          <li>Soft glass panels over a warm background.</li>
          <li>Clear hierarchy with a strong primary CTA.</li>
          <li>Responsive layout that stacks naturally on mobile.</li>
        </ul>
      </aside>

      <section className={styles.contentGrid} id="features">
        {features.map((feature) => (
          <article
            className={`${styles.panel} ${styles.featureCard}`}
            key={feature.title}
          >
            <p className={styles.cardKicker}>Feature</p>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className={`${styles.panel} ${styles.storyPanel}`} id="how-it-works">
        <p className={styles.eyebrow}>How it works</p>
        <h2>Keep the flow simple</h2>
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}