import styles from "../docs.module.css";

export default function GMapsDoc() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Google Maps Skill</h1>
      <p className={styles.text}>
        The Google Maps skill is designed for local business discovery. It extracts 
        publicly available data from map listings and enriches it with website information.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Commands</h2>
        <div className={styles.codeBlock}>
          <code>"find plumbers in Austin on Google Maps"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"extract business details for local leads"</code>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Customization Questions</h2>
        <p className={styles.text}>Before starting a search, the agent will ask 8 questions to refine the results:</p>
        <ul className={styles.text} style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li>Business Category (e.g., Plumbers)</li>
          <li>Location (e.g., Austin, TX)</li>
          <li>Search Radius</li>
          <li>Minimum Rating</li>
          <li>Minimum Review Count</li>
          <li>Business Hours requirement</li>
          <li>Website requirement</li>
          <li>Phone number requirement</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Workflow</h2>
        <p className={styles.text}>
          The agent crawls map results and visits business websites to find additional context, 
          such as contact forms or specific service offerings. All data is saved to your local CSV.
        </p>
      </section>
    </div>
  );
}
