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
    <InfoPageLayout
      title={title}
      crumb="Affiliate Disclosure"
      eyebrow="Disclosure"
      lead="Kumia Labs may use affiliate links. Here is exactly what that does, and does not, change."
    >
      <p><strong>As an Amazon Associate I earn from qualifying purchases.</strong></p>
      <p>Kumia Labs may also use other affiliate links. If you click one and make a purchase, Kumia Labs may receive a commission from the retailer or seller.</p>
      <p>This does not increase the price you pay. The commission comes from the seller, not from you.</p>

      <h2>What this does not change</h2>
      <p>Affiliate relationships do not determine which products get recommended or how they are ranked against each other. A product appears in a guide because it fits the combination being discussed. Whether a link happens to be an affiliate link is a separate, later decision. See the <a href="/editorial-policy">Editorial Policy</a> for how recommendations are actually made.</p>

      <h2>Prices and availability</h2>
      <p>Product availability, specifications, and prices are set and controlled by the retailer or manufacturer, not by Kumia Labs. These can change at any time after a guide is published, including after a link is added. Always check the current listing before buying.</p>

      <h2>Current status</h2>
      <div className="info-note">
        <p className="info-note-label">Note</p>
        <p>Amazon.com links marked <strong>(paid link)</strong> on Kumia Labs use Kumia Labs&rsquo; Amazon Associates tracking ID and are paid links. Manufacturer and retailer links elsewhere in a guide (for example Brother, Oral-B, Philips, Epson, Canon, HP, iRobot, Roborock, eufy, Narwal, Dreame, LEGO, Nintendo, and Universal) are not affiliate links unless a page states otherwise. This page will be kept up to date as that changes.</p>
      </div>
    </InfoPageLayout>
  );
}
