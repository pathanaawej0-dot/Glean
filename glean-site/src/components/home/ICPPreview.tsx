"use client";

import { useState } from "react";
import styles from "./home.module.css";

const questions = [
  { q: "Role", a: "Founder, CEO, CTO, VP Engineering" },
  { q: "Industry", a: "B2B SaaS, AI, Fintech" },
  { q: "Company Size", a: "10-200 employees" },
  { q: "Stage", a: "Seed to Series B" },
  { q: "Location", a: "San Francisco, New York, London, Remote" },
  { q: "Keywords", a: "LLM, generative AI, automation, scale" },
  { q: "Outreach Angle", a: "Offering strategic partnership for AI infrastructure" },
  { q: "Exclusions", a: "Agencies, consultants, non-technical founders" },
  { q: "Custom Instructions", a: "Keep tone professional but brief. Mention their recent launch." },
];

export default function ICPPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>ICP Framework</h2>
      <div className={styles.icpContainer}>
        <div className={styles.icpHeader} onClick={() => setIsOpen(!isOpen)}>
          <span style={{ fontWeight: 600 }}>Preview Ideal Customer Profile Questions</span>
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {isOpen && (
          <div className={styles.icpContent}>
            {questions.map((item, i) => (
              <div key={i} className={styles.icpQuestion}>
                <div className={styles.icpLabel}>{item.q}</div>
                <div className={styles.icpValue}>{item.a}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
