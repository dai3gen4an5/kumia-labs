// Japan Supplier Evidence Check — $29 pilot (Kumia Research).
// The Stripe Payment Link URL is public (it is a checkout page, not a secret),
// so it is read from a NEXT_PUBLIC_ variable and can be changed without a code edit.

export const SUPPLIER_CHECK = {
  brand: "Kumia Research",
  product: "Japan Supplier Evidence Check",
  price: "$29",
  scope: "Up to 3 named Japanese suppliers",
  pilotLimit: "Initial pilot — limited to 5 orders",
  basePath: "/research/supplier-check",
  orderPath: "/research/supplier-check/order",
  receivedPath: "/research/supplier-check/received",
  samplePdf: "/research/marujyu-oya-worked-sample.pdf",
} as const;

export function supplierCheckPaymentUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_SUPPLIER_CHECK_PAYMENT_URL?.trim();
  return url && url.startsWith("https://") ? url : null;
}

// Shown to customers only when configured; never hardcoded.
export function supplierCheckSupportEmail(): string | null {
  const email = process.env.SUPPLIER_CHECK_SUPPORT_EMAIL?.trim();
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}
