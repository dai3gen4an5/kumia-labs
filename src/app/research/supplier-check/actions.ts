"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { verifySupplierCheckPayment } from "@/lib/stripe-checkout";
import { SUPPLIER_CHECK, supplierCheckSupportEmail } from "@/lib/supplier-check";

// `values` echoes the submission back on error: React resets the form after an action,
// so without it a validation error would clear everything the customer typed.
export type OrderFormState = { error?: string; fieldErrors?: Partial<Record<string, string>>; values?: Partial<Record<string, string>> };

type OrderRecord = {
  submittedAt: string;
  email: string;
  suppliers: string;
  supplierUrls: string;
  category: string;
  targetMarket: string;
  decision: string;
  notes: string;
  stripeSessionId: string;
  stripeCustomerEmail: string | null;
};

const LIMITS: Record<string, number> = {
  email: 254,
  suppliers: 600,
  supplierUrls: 1200,
  category: 300,
  targetMarket: 200,
  decision: 1500,
  notes: 2000,
  stripeSessionId: 200,
};

const REQUIRED = ["email", "suppliers", "category", "targetMarket", "decision"] as const;
// No whitespace allowed anywhere, so a value that passes cannot carry CR/LF into an email header.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitSupplierOrder(_prev: OrderFormState, formData: FormData): Promise<OrderFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company_website")) redirect(SUPPLIER_CHECK.receivedPath);

  const record: OrderRecord = {
    submittedAt: new Date().toISOString(),
    email: field(formData, "email"),
    suppliers: field(formData, "suppliers"),
    supplierUrls: field(formData, "supplierUrls"),
    category: field(formData, "category"),
    targetMarket: field(formData, "targetMarket"),
    decision: field(formData, "decision"),
    notes: field(formData, "notes"),
    stripeSessionId: field(formData, "stripeSessionId"),
    stripeCustomerEmail: null,
  };

  const fieldErrors: Partial<Record<string, string>> = {};
  for (const name of REQUIRED) if (!record[name]) fieldErrors[name] = "Required";
  if (record.email && !EMAIL_PATTERN.test(record.email)) fieldErrors.email = "Enter a valid email address";
  for (const [name, max] of Object.entries(LIMITS)) {
    if ((record[name as keyof OrderRecord] ?? "").length > max) fieldErrors[name] = `Please keep this under ${max} characters`;
  }
  const values: OrderFormState["values"] = { ...record, submittedAt: undefined, stripeCustomerEmail: undefined };
  if (Object.keys(fieldErrors).length) return { error: "Please check the highlighted fields.", fieldErrors, values };

  // Re-verify payment at submit time: the page check alone would let anyone POST to this action.
  const payment = await verifySupplierCheckPayment(record.stripeSessionId);
  if (!payment.ok) {
    return { error: withSupport("We couldn't verify the payment for this order form, so the order was not sent."), values };
  }
  record.stripeCustomerEmail = payment.customerEmail;

  const captured = await captureOrder(record);
  if (!captured) {
    return { error: withSupport("We couldn't submit your order."), values };
  }

  redirect(SUPPLIER_CHECK.receivedPath);
}

function withSupport(message: string) {
  const support = supplierCheckSupportEmail();
  return support ? `${message} Please email ${support} and we'll take it from there.` : message;
}

// Orders are captured by every configured channel; the submission succeeds if at least one works.
// - Local development: appended to .orders/supplier-check-orders.jsonl (gitignored).
// - Production: emailed to SUPPLIER_CHECK_NOTIFY_EMAIL through the Resend REST API (no SDK).
async function captureOrder(record: OrderRecord): Promise<boolean> {
  let captured = false;

  if (!process.env.VERCEL) {
    try {
      const dir = path.join(process.cwd(), ".orders");
      await mkdir(dir, { recursive: true });
      await appendFile(path.join(dir, "supplier-check-orders.jsonl"), JSON.stringify(record) + "\n", "utf8");
      captured = true;
    } catch (error) {
      console.error("supplier-check: local order capture failed", error);
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.SUPPLIER_CHECK_FROM_EMAIL?.trim();
  const notify = process.env.SUPPLIER_CHECK_NOTIFY_EMAIL?.trim();
  if (apiKey && fromAddress && notify && EMAIL_PATTERN.test(fromAddress) && EMAIL_PATTERN.test(notify)) {
    const from = `${SUPPLIER_CHECK.brand} <${fromAddress}>`;
    // Seller replies go straight to the customer; record.email already passed EMAIL_PATTERN.
    const sellerSent = await sendEmail(apiKey, {
      from,
      to: notify,
      ...(EMAIL_PATTERN.test(record.email) ? { reply_to: record.email } : {}),
      subject: `New supplier check order — ${record.email} — ${record.stripeSessionId}`,
      text: sellerEmailText(record),
    });
    captured = captured || sellerSent;
    if (sellerSent) {
      const support = supplierCheckSupportEmail();
      await sendEmail(apiKey, {
        from,
        to: record.email,
        ...(support ? { reply_to: support } : {}),
        subject: "Your Japan Supplier Evidence Check order",
        text: CUSTOMER_EMAIL_TEXT,
      });
    }
  }

  return captured;
}

async function sendEmail(apiKey: string, body: Record<string, string>): Promise<boolean> {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) console.error("supplier-check: email send failed", response.status);
    return response.ok;
  } catch (error) {
    console.error("supplier-check: email send failed", error);
    return false;
  }
}

function sellerEmailText(r: OrderRecord) {
  return [
    `Submitted: ${r.submittedAt}`,
    `Order contact email: ${r.email}`,
    `Stripe customer email: ${r.stripeCustomerEmail ?? "(not available)"}`,
    `Stripe session ID: ${r.stripeSessionId}`,
    "",
    `Suppliers:\n${r.suppliers}`,
    "",
    `Supplier URLs:\n${r.supplierUrls || "(none)"}`,
    "",
    `Product / category: ${r.category}`,
    `Target market: ${r.targetMarket}`,
    "",
    `Decision:\n${r.decision}`,
    "",
    `Notes:\n${r.notes || "(none)"}`,
  ].join("\n");
}

const CUSTOMER_EMAIL_TEXT = `Hi,

Thanks for ordering the Japan Supplier Evidence Check from Kumia Research.

We received your supplier research request.

Your $29 pilot includes up to three named Japanese suppliers. We’ll compare publicly available English-language information with relevant Japanese primary sources and identify what is worth verifying before you spend more time contacting the suppliers.

Delivery:
Within 3 business days after we received your completed order form.

Your report may include outcomes such as CONTACT, VERIFY FIRST, DEPRIORITIZE or NO MATERIAL GAP.

A NO MATERIAL GAP result is a valid completed result. We do not manufacture findings where none exist.

Public-source research only. We do not contact suppliers or provide supplier approval, legal advice, certification verification, food-safety review, factory audits, credit checks or import-compliance advice.

— Kumia Research`;
