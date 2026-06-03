import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Glean — Undetectable AI Lead Generation & Outreach Skill Pack",
  description:
    "Glean turns your AI coding agent into an undetectable lead management system. Find prospects on LinkedIn, X, and Email using BrowserAct — all from your terminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
