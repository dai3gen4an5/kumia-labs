import Link from "next/link";
import type { ReactNode } from "react";
import { SUPPLIER_CHECK, supplierCheckSupportEmail } from "@/lib/supplier-check";
import styles from "./supplier-check.module.css";

export function ResearchChrome({ children }: { children: ReactNode }) {
  const support = supplierCheckSupportEmail();
  return (
    <div className={styles.shell}>
      <header className={styles.topbar}>
        <Link href={SUPPLIER_CHECK.basePath} className={styles.wordmark}>
          Kumia <span>Research</span>
        </Link>
        <span className={styles.topbarNote}>Public-source supplier research</span>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          {SUPPLIER_CHECK.brand}
          {support && (
            <>
              {" "}· Questions: <a href={`mailto:${support}`}>{support}</a>
            </>
          )}
        </p>
        <p>
          Part of the Kumia family · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </div>
  );
}

export function PaymentButton({ paymentUrl, label }: { paymentUrl: string | null; label: string }) {
  if (paymentUrl) {
    return (
      <a className={styles.cta} href={paymentUrl}>
        {label}
      </a>
    );
  }
  return (
    <span className={`${styles.cta} ${styles.ctaDisabled}`} aria-disabled="true">
      Checkout opens soon
    </span>
  );
}
