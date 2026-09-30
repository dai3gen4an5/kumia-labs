import type { Metadata } from "next";
import { supplierCheckSupportEmail } from "@/lib/supplier-check";
import { ResearchChrome } from "../research-chrome";
import styles from "../supplier-check.module.css";

export const metadata: Metadata = {
  title: "We’ve got your supplier check | Kumia Research",
  // Transactional step in the purchase flow: kept out of search; self-canonical instead of the site root.
  alternates: { canonical: "/research/supplier-check/received" },
  robots: { index: false, follow: false },
};

export default function ReceivedPage() {
  const support = supplierCheckSupportEmail();
  return (
    <ResearchChrome>
      <section className={styles.narrow}>
        <h1 className={styles.pageTitle}>We’ve got your supplier check.</h1>
        <p>We’ll review the companies you submitted using public English-language sources and relevant Japanese primary sources.</p>
        <p>Your report will include source links and clearly separate confirmed facts from research interpretation.</p>
        <p className={styles.deliveryLine}><b>Delivery:</b> Within 3 business days after we receive your completed order form.</p>
        <div className={styles.policy}>
          <p>A NO MATERIAL GAP result is possible. That means the Japanese-source review did not uncover information that materially changes what was already available through English-accessible sources.</p>
          <p>If we cannot complete the research at all, the order will be refunded.</p>
        </div>
        {support && (
          <p className={styles.help}>
            Questions about your order: <a href={`mailto:${support}`}>{support}</a>
          </p>
        )}
      </section>
    </ResearchChrome>
  );
}
