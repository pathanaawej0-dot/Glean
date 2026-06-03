import styles from "./docs.module.css";
import Link from "next/link";

export default function DocsOverview() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Documentation</h1>
      <p className={styles.text}>
        Welcome to the Glean documentation. Glean is a powerful lead management skill pack for AI agents, 
        designed to help you build a high-quality pipeline entirely from your terminal.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.text}>
          Glean operates by combining browser automation with natural language intelligence. 
          It allows you to search for prospects across multiple platforms, track their status in a local CSV, 
          and execute personalized outreach—all without ever leaving your development environment.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Concepts</h2>
        <ul className={styles.text} style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Ideal Customer Profile (ICP):</strong> A structured definition of your target leads.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Local Data:</strong> All lead data is stored in a <code>leads.csv</code> file on your machine.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>BrowserAct:</strong> The underlying engine that handles browser interaction safely.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Agent Orchestration:</strong> Your AI agent acts as the operator, following your high-level goals.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Next Steps</h2>
        <p className={styles.text}>
          If you haven't installed Glean yet, start with the <Link href="/quickstart" style={{ color: 'var(--accent)' }}>Quickstart Guide</Link>. 
          Otherwise, explore the platform-specific skills in the sidebar.
        </p>
      </section>
    </div>
  );
}
