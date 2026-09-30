import "server-only";
import { verifyCheckoutSession, type PaymentVerification } from "./supplier-check-payment";

// Reads the Stripe secret on the server only. `server-only` makes any client import a build error.
export async function verifySupplierCheckPayment(sessionId: string): Promise<PaymentVerification> {
  const result = await verifyCheckoutSession(sessionId, {
    secretKey: process.env.STRIPE_SECRET_KEY,
    paymentLinkId: process.env.SUPPLIER_CHECK_PAYMENT_LINK_ID,
  });
  if (!result.ok && result.reason === "stripe_error") console.error("supplier-check: Stripe session lookup failed");
  return result;
}
