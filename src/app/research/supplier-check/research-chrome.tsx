import Link from "next/link";
import type { ReactNode } from "react";
import { SUPPLIER_CHECK, supplierCheckSupportEmail } from "@/lib/supplier-check";
import { fraunces, manrope } from "./fonts";
import styles from "./supplier-check.module.css";

export function ResearchChrome({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  const support = supplierCheckSupportEmail();
  return (
    <div className={`${styles.shell} ${fraunces.variable} ${manrope.variable}`}>
      <header className={styles.topbar}>
        <Link href={SUPPLIER_CHECK.basePath} className={styles.wordmark}>
          Kumia <span>Research</span>
        </Link>
        <span className={styles.topbarNote}>Public-source supplier research</span>
      </header>
      <main className={wide ? styles.mainWide : styles.main}>{children}</main>
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

export function PaymentButton({ paymentUrl, label, className }: { paymentUrl: string | null; label: string; className?: string }) {
  if (paymentUrl) {
    return (
      <a className={className ?? styles.cta} href={paymentUrl}>
        {label}
      </a>
    );
  }
  return (
    <span className={`${className ?? styles.cta} ${styles.ctaDisabled}`} aria-disabled="true">
      Checkout opens soon
    </span>
  );
}
