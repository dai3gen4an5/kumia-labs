// Pure Stripe Checkout Session verification for the supplier-check pilot.
// No env access and no path aliases here, so it can be exercised with a mocked fetch.
// The server-only wrapper that supplies the secret key lives in stripe-checkout.ts.

export const EXPECTED_AMOUNT_TOTAL = 2900; // $29.00 in cents
export const EXPECTED_CURRENCY = "usd";

export type CheckoutSessionLike = {
  payment_status?: string | null;
  currency?: string | null;
  amount_total?: number | null;
  payment_link?: string | null;
  customer_details?: { email?: string | null } | null;
};

export type PaymentFailureReason =
  | "not_configured"
  | "missing_session"
  | "invalid_session_id"
  | "not_found"
  | "stripe_error"
  | "unpaid"
  | "wrong_amount"
  | "wrong_currency"
  | "wrong_payment_link";

export type PaymentVerification =
  | { ok: true; sessionId: string; customerEmail: string | null }
  | { ok: false; reason: PaymentFailureReason };

const SESSION_ID_PATTERN = /^cs_(test|live)_[A-Za-z0-9]{10,200}$/;

export function isCheckoutSessionId(value: string) {
  return SESSION_ID_PATTERN.test(value);
}

export function evaluateCheckoutSession(
  session: CheckoutSessionLike,
  paymentLinkId: string,
): { ok: true; customerEmail: string | null } | { ok: false; reason: PaymentFailureReason } {
  if (session.payment_status !== "paid") return { ok: false, reason: "unpaid" };
  if (session.currency !== EXPECTED_CURRENCY) return { ok: false, reason: "wrong_currency" };
  if (session.amount_total !== EXPECTED_AMOUNT_TOTAL) return { ok: false, reason: "wrong_amount" };
  if (session.payment_link !== paymentLinkId) return { ok: false, reason: "wrong_payment_link" };
  return { ok: true, customerEmail: session.customer_details?.email ?? null };
}

export async function verifyCheckoutSession(
  sessionId: string,
  config: { secretKey?: string; paymentLinkId?: string },
  fetchImpl: typeof fetch = fetch,
): Promise<PaymentVerification> {
  if (!config.secretKey || !config.paymentLinkId) return { ok: false, reason: "not_configured" };
  if (!sessionId) return { ok: false, reason: "missing_session" };
  if (!isCheckoutSessionId(sessionId)) return { ok: false, reason: "invalid_session_id" };

  let response: Response;
  try {
    response = await fetchImpl(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: { Authorization: `Bearer ${config.secretKey}` },
      cache: "no-store",
    });
  } catch {
    return { ok: false, reason: "stripe_error" };
  }
  if (response.status === 404) return { ok: false, reason: "not_found" };
  if (!response.ok) return { ok: false, reason: "stripe_error" };

  const session = (await response.json()) as CheckoutSessionLike;
  const result = evaluateCheckoutSession(session, config.paymentLinkId);
  return result.ok ? { ok: true, sessionId, customerEmail: result.customerEmail } : result;
}
