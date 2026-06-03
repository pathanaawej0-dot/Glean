import styles from "../docs.module.css";

export default function LinkedInDoc() {
  return (
    <div>
      <h1 className={styles.pageTitle}>LinkedIn Skill</h1>
      <p className={styles.text}>
        The LinkedIn skill allows your agent to discover professionals, extract their details, 
        and execute personalized outreach directly on the platform.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Commands</h2>
        <div className={styles.codeBlock}>
          <code>"find 10 leads on LinkedIn"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"connect with Sarah Chen on LinkedIn"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"send a message to my LinkedIn contacts"</code>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Workflow</h2>
        <p className={styles.text}>
          When searching for leads, the agent uses your ICP keywords to identify targets. 
          It visits each profile to ensure high-fidelity extraction of data including current role, 
          company size, and professional summary.
        </p>
        <p className={styles.text}>
          For outreach, the agent drafts personalized connection requests based on the prospect's 
          profile content and your defined outreach angle.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lead Stages</h2>
        <p className={styles.text}>
          LinkedIn leads follow the standard pipeline: 
          <code>discovered</code> → <code>contacted</code> → <code>replied</code> → <code>meeting_booked</code>.
        </p>
      </section>
    </div>
  );
}
