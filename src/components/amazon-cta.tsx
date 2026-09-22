// Shared Amazon affiliate CTA + disclosure, used across Kumia articles.
// Source of truth: docs/research/amazon-associates-commerce-rollout-2026-09-22.md
//
// Rules this component enforces:
// - rel="noopener noreferrer sponsored" on every Amazon link
// - a visible "(paid link)" tag next to every individual CTA
// - no price, rating, review count, or Amazon product image rendered here
import styles from "./amazon-cta.module.css";

export const AMAZON_GROUP_DISCLOSURE =
  "Amazon links below are paid links. Kumia Labs may earn from qualifying purchases at no extra cost to you.";

/** Group-level disclosure. Place once near a cluster of one or more AmazonCta links. */
export function AmazonDisclosure({ className }: { className?: string }) {
  return <p className={`${styles.disclosure} ${className ?? ""}`}>{AMAZON_GROUP_DISCLOSURE}</p>;
}

/** A single tagged Amazon CTA with its own link-level "(paid link)" disclosure. */
export function AmazonCta({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <p className={`${styles.cta} ${className ?? ""}`}>
      <a href={href} target="_blank" rel="noopener noreferrer sponsored">
        {label} on Amazon.com <span aria-hidden="true">→</span>
      </a>
      <span className={styles.paidLink}>(paid link)</span>
    </p>
  );
}
