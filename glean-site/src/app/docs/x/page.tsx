import styles from "../docs.module.css";

export default function XDoc() {
  return (
    <div>
      <h1 className={styles.pageTitle}>X / Twitter Skill</h1>
      <p className={styles.text}>
        The X skill focuses on real-time engagement and community-driven discovery. 
        It allows you to find leads based on their posts, bios, and interactions.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Commands</h2>
        <div className={styles.codeBlock}>
          <code>"find users posting about #AI on X"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"DM my X leads with a personalized intro"</code>
        </div>
        <div className={styles.codeBlock}>
          <code>"reply to the latest post by @marcdurand"</code>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Workflow</h2>
        <p className={styles.text}>
          Glean can search for specific handles or broader keywords in bios and tweets. 
          The agent evaluates the relevance of each user based on your ICP before adding them to the CSV.
        </p>
        <p className={styles.text}>
          Outreach on X can be public (replies) or private (DMs). The agent uses the context of 
          recent tweets to make outreach feel natural and non-automated.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lead Stages</h2>
        <p className={styles.text}>
          X leads often start as <code>discovered</code> and progress through <code>contacted</code> 
          via public replies before moving to <code>replied</code> in DMs.
        </p>
      </section>
    </div>
  );
}
