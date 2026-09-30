import type { Metadata } from "next";
import { SUPPLIER_CHECK, supplierCheckPaymentUrl } from "@/lib/supplier-check";
import { PaymentButton, ResearchChrome } from "./research-chrome";
import styles from "./supplier-check.module.css";

const title = "Japan Supplier Evidence Check | Kumia Research";
const description = "Japanese-source research before you spend time contacting a supplier. $29 pilot for up to 3 named Japanese suppliers, delivered within 3 business days.";

export const metadata: Metadata = {
  title,
  description,
  // Pilot pages stay out of search until launch is approved.
  robots: { index: false, follow: false },
};

const deliverables = [
  "English-accessible baseline",
  "Japanese primary-source evidence",
  "Material information gaps",
  "Fact vs. inference separation",
  "Questions to verify",
  "Direct source links",
  "Research outcome",
];

const outcomes = ["CONTACT", "VERIFY FIRST", "DEPRIORITIZE", "NO MATERIAL GAP"];

const included = [
  "Up to 3 named Japanese suppliers",
  "Public English research",
  "Japanese primary-source research",
  "Evidence links",
  "Practical questions to verify",
];

const excluded = [
  "Supplier discovery",
  "Supplier contact",
  "Quotation requests",
  "Negotiation",
  "Factory audit",
  "Credit check",
  "Certification verification",
  "Legal advice",
  "Food-safety review",
  "Import-compliance advice",
];

const trust = [
  "Public sources only",
  "Direct source links",
  "Checked date on every report",
  "Fact / inference separated",
  "NO MATERIAL GAP allowed",
  "No supplier contact",
];

export default function SupplierCheckPage() {
  const paymentUrl = supplierCheckPaymentUrl();

  return (
    <ResearchChrome>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{SUPPLIER_CHECK.pilotLimit}</p>
        <h1>Japan Supplier Evidence Check</h1>
        <p className={styles.lead}>Japanese-source research before you spend time contacting a supplier.</p>
        <ul className={styles.keyFacts}>
          <li><b>{SUPPLIER_CHECK.price}</b> pilot</li>
          <li><b>Up to 3</b> named Japanese suppliers</li>
          <li><b>3 business days</b> delivery</li>
        </ul>
        <div className={styles.ctaRow}>
          <PaymentButton paymentUrl={paymentUrl} label="Check my suppliers" />
          <a className={styles.secondaryLink} href={SUPPLIER_CHECK.samplePdf} target="_blank" rel="noopener">
            View a worked sample
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Considering Japanese suppliers?</h2>
        <p>Send us up to 3 companies you’re already considering.</p>
        <p>We compare public English-language information with relevant Japanese primary sources and show you what is worth verifying before you invest more time contacting them.</p>
      </section>

      <section className={styles.section}>
        <h2>What you get</h2>
        <div className={styles.twoCol}>
          <div>
            <p className={styles.label}>For each supplier</p>
            <ul className={styles.checkList}>
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className={styles.label}>Possible outcomes</p>
            <ul className={styles.outcomes}>
              {outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sampleCard}`}>
        <div>
          <p className={styles.label}>Worked sample</p>
          <h2>View the Marujyu Oya worked sample</h2>
          <p>See what the research, evidence ledger and buyer action sheet look like. Three pages, PDF.</p>
        </div>
        <a className={styles.outlineButton} href={SUPPLIER_CHECK.samplePdf} target="_blank" rel="noopener">
          View a worked sample
        </a>
      </section>

      <section className={`${styles.section} ${styles.policy}`}>
        <p className={styles.label}>No-gap policy</p>
        <p>We do not manufacture findings. If English-language evidence already answers the commercial question, we may return <b>NO MATERIAL GAP</b>. This is a valid completed research result.</p>
      </section>

      <section className={styles.section}>
        <h2>Scope</h2>
        <div className={styles.twoCol}>
          <div>
            <p className={styles.label}>Included</p>
            <ul className={styles.checkList}>
              {included.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className={styles.label}>Not included</p>
            <ul className={styles.plainList}>
              {excluded.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Delivery and refunds</h2>
        <p>Delivered by email within 3 business days after we receive the completed order form following successful payment.</p>
        <p>Full refund only if the research cannot be completed. A NO MATERIAL GAP result is a completed result and is not itself a reason for a refund.</p>
      </section>

      <ul className={styles.trustRow} aria-label="How the research works">
        {trust.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <section className={styles.finalCta}>
        <div>
          <p className={styles.price}>{SUPPLIER_CHECK.price} Pilot</p>
          <p className={styles.finalCtaText}>Check up to 3 Japanese suppliers · delivered within 3 business days</p>
          <p className={styles.finalCtaNote}>{SUPPLIER_CHECK.pilotLimit}</p>
        </div>
        <PaymentButton paymentUrl={paymentUrl} label="Start my supplier check" />
      </section>
    </ResearchChrome>
  );
}
