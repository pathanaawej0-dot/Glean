import styles from "../docs.module.css";

export default function ICPDoc() {
  return (
    <div>
      <h1 className={styles.pageTitle}>ICP Setup</h1>
      <p className={styles.text}>
        Your Ideal Customer Profile (ICP) is the brain of your lead generation. 
        It defines exactly who the agent should look for and how to talk to them.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The 9 Questions</h2>
        <p className={styles.text}>During "setup glean", the agent will ask:</p>
        <ol className={styles.text} style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Role:</strong> Who are the decision makers?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Industry:</strong> What sectors are they in?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Company Size:</strong> What is the target scale?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Stage:</strong> Are you looking for early stage or mature firms?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Location:</strong> Where are they located?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Keywords:</strong> What words appearing in their profile indicate a match?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Outreach Angle:</strong> What is your "hook" or unique value?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Exclusions:</strong> Who should the agent ignore?</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Custom Instructions:</strong> Any specific rules or tone requirements.</li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Updating Your ICP</h2>
        <p className={styles.text}>
          You can update your ICP at any time by editing the 
          <code>./glean-data/icp/ideal-customer-profile.md</code> file directly. 
          The agent reads this file before every discovery and outreach task.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pro Tips</h2>
        <ul className={styles.text} style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li><strong>Be Specific:</strong> Instead of "Tech", use "Series A Fintech in NYC".</li>
          <li><strong>Refine Exclusions:</strong> If you get too many recruiters, add "recruiters, HR" to exclusions.</li>
          <li><strong>Set the Tone:</strong> Use custom instructions to specify "No emojis" or "Short, punchy sentences".</li>
        </ul>
      </section>
    </div>
  );
}
