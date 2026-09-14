import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";

const canonicalPath = "/affiliate-disclosure";
const title = "Affiliate Disclosure";
const description = "How affiliate links may work on Kumia Labs, and how that is kept separate from recommendations.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

export default function AffiliateDisclosurePage() {
  return (
    <InfoPageLayout title={title}>
      <p>Kumia Labs may use affiliate links. If you click one and make a purchase, Kumia Labs may receive a commission from the retailer or seller.</p>
      <p>This does not increase the price you pay. The commission comes from the seller, not from you.</p>

      <h2>What this does not change</h2>
      <p>Affiliate relationships do not determine which products get recommended or how they are ranked against each other. A product appears in a guide because it fits the combination being discussed. Whether a link happens to be an affiliate link is a separate, later decision. See the <a href="/editorial-policy">Editorial Policy</a> for how recommendations are actually made.</p>

      <h2>Prices and availability</h2>
      <p>Product availability, specifications, and prices are set and controlled by the retailer or manufacturer, not by Kumia Labs. These can change at any time after a guide is published, including after a link is added. Always check the current listing before buying.</p>

      <h2>Current status</h2>
      <p>Not every outbound link on Kumia Labs is an affiliate link today. Where a guide notes that an affiliate link is not yet configured, that link goes directly to the manufacturer or retailer with no commission involved. This page will be kept up to date as that changes.</p>
    </InfoPageLayout>
  );
}
