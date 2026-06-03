import styles from "./faq.module.css";

const faqs = [
  {
    q: "What is Glean?",
    a: "Glean is an open-source lead management skill pack for AI agents. It allows you to find prospects on LinkedIn, X, Email, and Google Maps, track them in a local CSV, and automate personalized outreach directly from your terminal."
  },
  {
    q: "Do I need API keys?",
    a: "No. Glean uses browser automation via BrowserAct to interact with platforms exactly like a human would. You only need to be logged into your accounts in the automated browser."
  },
  {
    q: "What agents does it work with?",
    a: "Glean is built using the 'npx skills' standard. It works with Claude Code, Codex, Cursor, opencode, Windsurf, and over 67 other compatible AI agents."
  },
  {
    q: "How is my data stored?",
    a: "All data is stored locally in your project directory under `./glean-data/leads.csv`. There is no third-party database or SaaS platform involved."
  },
  {
    q: "Can I use it without BrowserAct?",
    a: "No. BrowserAct is the core engine that allows the AI agent to navigate websites safely and reliably. It is required for all discovery and outreach tasks."
  },
  {
    q: "How do I update my ICP?",
    a: "You can update your Ideal Customer Profile by editing the markdown file at `./glean-data/icp/ideal-customer-profile.md`. You can also ask the agent to 'update my ICP' to do it through conversation."
  },
  {
    q: "Can I export my leads?",
    a: "Yes. Since the data is stored in a standard CSV format, you can open it in Excel, Google Sheets, or import it into any CRM of your choice at any time."
  },
  {
    q: "Is there any automation or cron job?",
    a: "No. Glean follows a manual-first philosophy. Everything happens when you ask the agent to do it. This ensures you maintain full control over your outreach and avoid accidental spamming."
  }
];

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      
      {faqs.map((faq, i) => (
        <div key={i} className={styles.item}>
          <h2 className={styles.question}>{faq.q}</h2>
          <p className={styles.answer}>{faq.a}</p>
        </div>
      ))}
    </div>
  );
}
