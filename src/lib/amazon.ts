// Kumia Labs Amazon Associates helper.
// Source of truth: docs/research/amazon-associates-commerce-rollout-2026-09-22.md
// Every outbound Amazon URL must go through these two functions so the tracking ID
// lives in exactly one place. Do not hard-code "tag=" anywhere else in the app.

export const AMAZON_TAG = "kumialabs-20";

/** Direct product-detail link. Use only once the exact US ASIN has been verified. */
export function amazonProductUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

/** Narrowly targeted search link. Use while no verified ASIN exists yet, instead of guessing one. */
export function amazonSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
