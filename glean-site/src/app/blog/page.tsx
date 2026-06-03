import Link from "next/link";
import styles from "./blog.module.css";

const posts = [
  {
    title: "Undetectable Outreach: How BrowserAct Powers Glean's Anti-Bot Bypass",
    excerpt: "Learn how Glean uses BrowserAct under the hood to perform LinkedIn and X outreach without triggering anti-bot detectors.",
    date: "June 4, 2026",
    slug: "undetectable-outreach-browseract-glean",
    category: "Technical"
  }
];

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.postCard}>
            <span className={styles.postMeta}>{post.category} • {post.date}</span>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <span className={styles.readMore}>
              Read Article 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
