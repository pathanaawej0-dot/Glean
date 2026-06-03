"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./docs.module.css";

const navItems = [
  { group: "Overview", items: [
    { label: "Introduction", href: "/docs" },
    { label: "Quickstart", href: "/quickstart" },
  ]},
  { group: "Skills", items: [
    { label: "LinkedIn", href: "/docs/linkedin" },
    { label: "X / Twitter", href: "/docs/x" },
    { label: "Email", href: "/docs/email" },
    { label: "Google Maps", href: "/docs/gmaps" },
  ]},
  { group: "Reference", items: [
    { label: "Pipeline Management", href: "/docs/pipeline" },
    { label: "ICP Setup", href: "/docs/icp" },
  ]}
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      {navItems.map((group) => (
        <div key={group.group} className={styles.navGroup}>
          <span className={styles.navTitle}>{group.group}</span>
          <ul className={styles.navList}>
            {group.items.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link 
                  href={item.href} 
                  className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
