import styles from "./home.module.css";

const cases = [
  {
    title: "Find 50 YC founders in SF on LinkedIn",
    description: "Target decision makers with precision using industry keywords and location filters. Glean extracts their roles and company details in seconds.",
  },
  {
    title: "Discover plumbers in Austin on Google Maps",
    description: "Perfect for local service providers. Pull business names, ratings, addresses, and phone numbers directly into your local pipeline.",
  },
  {
    title: "Send cold emails to Series A SaaS leads",
    description: "Identify high-growth prospects and find their verified work emails. Automate the first touch and track every reply locally.",
  },
];

export default function UseCaseCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Use Cases</h2>
      <div className={styles.grid3}>
        {cases.map((c) => (
          <div key={c.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDescription}>{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
