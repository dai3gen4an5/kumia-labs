import type { Metadata } from "next";
import { verifySupplierCheckPayment } from "@/lib/stripe-checkout";
import { SUPPLIER_CHECK, supplierCheckPaymentUrl, supplierCheckSupportEmail } from "@/lib/supplier-check";
import { ResearchChrome } from "../research-chrome";
import styles from "../supplier-check.module.css";
import { OrderForm } from "./order-form";

export const metadata: Metadata = {
  title: "Tell us what you want checked | Kumia Research",
  robots: { index: false, follow: false },
};

export default async function OrderPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const sessionId = typeof params.session_id === "string" ? params.session_id : "";
  const payment = await verifySupplierCheckPayment(sessionId);

  if (!payment.ok) {
    const checkoutUrl = supplierCheckPaymentUrl() ?? SUPPLIER_CHECK.basePath;
    const support = supplierCheckSupportEmail();
    return (
      <ResearchChrome>
        <section className={styles.narrow}>
          <h1 className={styles.pageTitle}>Payment verification required</h1>
          <p className={styles.lead}>This order form is available after completing the $29 Japan Supplier Evidence Check checkout.</p>
          <p><a className={styles.cta} href={checkoutUrl}>Return to checkout</a></p>
          {support && (
            <p className={styles.help}>
              Already paid? Email <a href={`mailto:${support}`}>{support}</a> with your Stripe receipt and we’ll sort it out.
            </p>
          )}
        </section>
      </ResearchChrome>
    );
  }

  return (
    <ResearchChrome>
      <section className={styles.narrow}>
        <p className={styles.paidBanner} role="status">
          <b>Payment received.</b> Now tell us which suppliers you want checked.
        </p>
        <h1 className={styles.pageTitle}>Tell us what you want checked</h1>
        <p className={styles.lead}>Your Japan Supplier Evidence Check covers up to 3 named Japanese suppliers.</p>
        <OrderForm sessionId={payment.sessionId} />
      </section>
    </ResearchChrome>
  );
}
