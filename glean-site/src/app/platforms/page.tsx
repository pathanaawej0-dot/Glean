import styles from "./platforms.module.css";

const platformData = [
  {
    name: "LinkedIn",
    description: "Search for high-value prospects using professional criteria. Glean visits profiles directly to ensure high-quality data extraction.",
    steps: [
      "Search people using your defined ICP keywords and roles.",
      "Apply location and industry filters to narrow down the pool.",
      "Agent visits individual profiles to extract verified details.",
      "Capture name, title, company, industry, and profile URL.",
      "Store leads in your local CSV with 'discovered' status."
    ],
    output: "id,name,title,company,industry,linkedin_url,stage,source\n1,Sarah Chen,Founder,Nexus AI,B2B SaaS,https://linkedin.com/in/sarahchen,discovered,linkedin",
    reqs: "Requires an active LinkedIn session in the automated browser."
  },
  {
    name: "X / Twitter",
    description: "Tap into real-time conversations and bio keywords. Perfect for finding early adopters and niche community leaders.",
    steps: [
      "Search for profiles with specific bio keywords or pain points.",
      "Search for posts and threads mentioning your target topics.",
      "Identify active users who are engaging with relevant content.",
      "Extract handles, names, and bio descriptions.",
      "Add to your local pipeline for targeted terminal engagement."
    ],
    output: "id,name,x_handle,notes,stage,source\n2,Marc Durand,marcdurand,Posting about AI infra scaling,discovered,x",
    reqs: "Works best with an active X session for deeper profile access."
  },
  {
    name: "Email",
    description: "Bridge the gap between discovery and outreach. Glean finds and verifies work emails for your cross-platform leads.",
    steps: [
      "Scan your local CSV for leads missing email addresses.",
      "Search public records and professional databases for matches.",
      "Verify email deliverability to ensure zero bounce rates.",
      "Enrich the lead record with verified professional contact data.",
      "Ready the pipeline for personalized cold outreach campaigns."
    ],
    output: "id,name,company,email,stage,source\n3,Alex Rivera,Orbit,alex@orbit.so,discovered,email",
    reqs: "Requires access to common email discovery tools (agent handles this)."
  },
  {
    name: "Google Maps",
    description: "The gold standard for local business lead generation. Glean navigates maps to find businesses that match your specific criteria.",
    steps: [
      "Specify business category, location, and search radius.",
      "Define quality gates like minimum rating or review counts.",
      "Agent crawls map results and visits business websites.",
      "Extract Name, Address, Phone (NAP), and website URL.",
      "Identify business hours and current operational status."
    ],
    output: "id,name,company,industry,stage,source\n5,Jack Wilson,Wilson Plumbing,Home Services,discovered,gmaps",
    reqs: "Agent will ask 8 customization questions before starting the search."
  }
];

export default function PlatformsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Supported Platforms</h1>
      
      {platformData.map((p) => (
        <section key={p.name} className={styles.section}>
          <h2 className={styles.sectionTitle}>{p.name}</h2>
          <p className={styles.description}>{p.description}</p>
          
          <div className={styles.grid}>
            <div>
              <h3 className={styles.outputTitle}>Workflow</h3>
              <ul className={styles.list}>
                {p.steps.map((step, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.listNumber}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className={styles.outputTitle}>Sample Output</h3>
              <div className={styles.outputBox}>
                <code className={styles.code}>{p.output}</code>
              </div>
              <div className={styles.requirements}>
                <strong>Requirements:</strong> {p.reqs}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
