import styles from "./home.module.css";

export default function ComparisonSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Before vs After</h2>
      <div className={styles.comparisonGrid}>
        <div className={styles.comparisonCol}>
          <h3 className={styles.comparisonTitle}>Before Glean</h3>
          <div className={styles.comparisonItem}>4+ browser tabs open at once</div>
          <div className={styles.comparisonItem}>Manual copy-pasting into messy spreadsheets</div>
          <div className={styles.comparisonItem}>No unified way to track follow-ups</div>
          <div className={styles.comparisonItem}>Hours spent on manual data entry</div>
          <div className={styles.comparisonItem}>Expensive SaaS seat fees</div>
        </div>
        <div className={styles.comparisonCol}>
          <h3 className={styles.comparisonTitle}>With Glean</h3>
          <div className={styles.comparisonItem}>One command to start the search</div>
          <div className={styles.comparisonItem}>Undetectable by anti-bot detectors (via BrowserAct)</div>
          <div className={styles.comparisonItem}>Unified local CSV tracking automatically</div>
          <div className={styles.comparisonItem}>Smart follow-up alerts and automation</div>
          <div className={styles.comparisonItem}>Agent handles the grunt work</div>
          <div className={styles.comparisonItem}>Free, open-source, and runs on your machine</div>
        </div>
      </div>
    </section>
  );
}
