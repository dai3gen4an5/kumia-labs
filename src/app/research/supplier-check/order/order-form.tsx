"use client";

import { useActionState } from "react";
import { submitSupplierOrder, type OrderFormState } from "../actions";
import styles from "../supplier-check.module.css";

type FieldProps = {
  name: string;
  label: string;
  help?: string;
  required?: boolean;
  multiline?: boolean;
  type?: string;
  placeholder?: string;
  error?: string;
  rows?: number;
  defaultValue?: string;
};

function Field({ name, label, help, required, multiline, type = "text", placeholder, error, rows = 3, defaultValue }: FieldProps) {
  const helpId = help ? `${name}-help` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;
  const common = { id: name, name, required, placeholder, defaultValue, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined };

  return (
    <div className={styles.field}>
      <label htmlFor={name}>
        {label} {required ? <span className={styles.req}>Required</span> : <span className={styles.opt}>Optional</span>}
      </label>
      {help && <p id={helpId} className={styles.help}>{help}</p>}
      {multiline ? <textarea rows={rows} {...common} /> : <input type={type} {...common} />}
      {error && <p id={errorId} className={styles.fieldError}>{error}</p>}
    </div>
  );
}

export function OrderForm({ sessionId }: { sessionId: string }) {
  const [state, formAction, pending] = useActionState<OrderFormState, FormData>(submitSupplierOrder, {});
  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  return (
    <form action={formAction} className={styles.form} noValidate={false}>
      <input type="hidden" name="stripeSessionId" value={sessionId} />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field name="email" defaultValue={values.email} type="email" label="Your email" required help="Use the email you paid with. We deliver the report here." error={errors.email} />
      <Field name="suppliers" defaultValue={values.suppliers} label="Supplier name(s)" required multiline help="Enter up to 3 Japanese companies you want us to research." error={errors.suppliers} />
      <Field name="supplierUrls" defaultValue={values.supplierUrls} label="Supplier website(s)" multiline help="If known, include the URLs so we research the correct companies." error={errors.supplierUrls} />
      <Field name="category" defaultValue={values.category} label="Product or category" required placeholder="Soy sauce / private-label seasonings" error={errors.category} />
      <Field name="targetMarket" defaultValue={values.targetMarket} label="Target market" required placeholder="United States" error={errors.targetMarket} />
      <Field
        name="decision"
        defaultValue={values.decision}
        label="What decision are you trying to make?"
        required
        multiline
        placeholder="Should we contact these suppliers for U.S. distribution?"
        help="Example: What should we verify before asking these companies for a private-label quote?"
        error={errors.decision}
      />
      <Field name="notes" defaultValue={values.notes} label="Notes" multiline help="Anything else that would help us understand your question. Please do not include confidential information." error={errors.notes} />

      {state.error && <p className={styles.formError} role="alert">{state.error}</p>}

      <button type="submit" className={styles.cta} disabled={pending}>
        {pending ? "Sending…" : "Send my supplier check"}
      </button>

      <p className={styles.privacyNote}>
        We use public information only. You do not need to provide confidential account lists, pricing, customer information or internal documents.
      </p>
    </form>
  );
}
