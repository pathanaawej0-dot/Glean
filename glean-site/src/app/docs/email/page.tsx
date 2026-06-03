import styles from "../docs.module.css";

export default function EmailDoc() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Email Skill</h1>
      <p className={styles.text}>
        The Email skill bridges the gap between social discovery and professional outreach. 
        It handles email discovery, verification, and personalized sending.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Commands</h2>
        <div className={styles.codeBlock}>
          <code>"find emails for my LinkedIn leads"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"verify the emails in my pipeline"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"send cold emails to my Series A prospects"</code>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Workflow</h2>
        <p className={styles.text}>
          Glean uses professional databases and public records to find work email addresses. 
          Once found, the agent runs a verification check to ensure the email is deliverable.
        </p>
        <p className={styles.text}>
          When sending emails, the agent uses your ICP's outreach angle to draft personalized 
          messages. It can handle follow-up sequences based on the <code>last_followup</code> date in the CSV.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lead Stages</h2>
        <p className={styles.text}>
          Email leads move from <code>discovered</code> to <code>contacted</code> once the first email is sent, 
          and to <code>replied</code> when a response is detected.
        </p>
      </section>
    </div>
  );
}
