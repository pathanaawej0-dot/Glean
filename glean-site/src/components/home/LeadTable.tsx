import styles from "./home.module.css";

const mockLeads = [
  { id: 1, name: "Sarah Chen", title: "Founder", company: "Nexus AI", platform: "LinkedIn", stage: "discovered" },
  { id: 2, name: "Marc Durand", title: "CTO", company: "FlowStack", platform: "X", stage: "contacted" },
  { id: 3, name: "Alex Rivera", title: "Growth Lead", company: "Orbit", platform: "Email", stage: "replied" },
  { id: 4, name: "Priya Patel", title: "CEO", company: "Lumina", platform: "LinkedIn", stage: "discovered" },
  { id: 5, name: "Jack Wilson", title: "Owner", company: "Wilson Plumbing", platform: "Google Maps", stage: "contacted" },
];

export default function LeadTable() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Pipeline Preview</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Company</th>
              <th className={styles.th}>Platform</th>
              <th className={styles.th}>Stage</th>
            </tr>
          </thead>
          <tbody>
            {mockLeads.map((lead) => (
              <tr key={lead.id}>
                <td className={styles.td}>{lead.id}</td>
                <td className={styles.td}>{lead.name}</td>
                <td className={styles.td}>{lead.title}</td>
                <td className={styles.td}>{lead.company}</td>
                <td className={styles.td}>{lead.platform}</td>
                <td className={styles.td}>
                  <span className={`${styles.badge} ${
                    lead.stage === 'discovered' ? styles.badgeDiscovered : 
                    lead.stage === 'contacted' ? styles.badgeContacted : 
                    styles.badgeReplied
                  }`}>
                    {lead.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
