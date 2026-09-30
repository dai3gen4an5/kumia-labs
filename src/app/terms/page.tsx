import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";

const canonicalPath = "/terms";
const title = "Terms of Use";
const description = "The terms for using Kumia Labs.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

export default function TermsPage() {
  return (
    <InfoPageLayout
      title={title}
      crumb="Terms"
      eyebrow="Policy"
      lead="The terms for using Kumia Labs, in plain language."
    >
      <p className="info-page-meta">Last reviewed: 2026-09-28</p>
      <p>By using Kumia Labs, you agree to the following terms. If you do not agree, please do not use the site.</p>

      <h2>Informational purpose</h2>
      <p>Kumia Labs publishes research and buying guides for general informational purposes. Content reflects Kumia Labs’ editorial judgment at the time of publication and is not professional, legal, or financial advice. Use it as one input into your own decision, not a substitute for your own judgment.</p>

      <h2>No guarantee of accuracy over time</h2>
      <p>Product availability, specifications, configurations, and prices change after a guide is published and are controlled by manufacturers and retailers, not by Kumia Labs. Kumia Labs does not guarantee that any detail in a guide remains accurate at the time you read it. Always verify current specifications and availability directly with the seller or manufacturer before making a purchase.</p>

      <h2>External websites</h2>
      <p>Kumia Labs links to third-party manufacturer and retailer websites for reference and purchasing. Kumia Labs does not control those sites and is not responsible for their content, availability, or practices.</p>

      <h2>Intellectual property</h2>
      <p>Text, illustrations, and the Kumia character on this site belong to Kumia Labs unless stated otherwise. Product names, brand names, and trademarks referenced in guides belong to their respective owners and are used for identification purposes only. No affiliation with those brands is implied unless stated.</p>

      <h2>No warranty; limitation of liability</h2>
      <p>Kumia Labs is provided as is, without warranties of any kind, express or implied, including any warranty that content is accurate, complete, or fit for a particular purpose. To the extent permitted by law, Kumia Labs is not liable for any loss or damage arising from your use of the site or reliance on its content, including a purchase made based on a guide.</p>

      <h2>Japan Supplier Evidence Check (Kumia Research)</h2>
      <p>These terms apply in addition to the terms above when you order the Japan Supplier Evidence Check from Kumia Research.</p>
      <p><strong>Service.</strong> Public-source research comparing English-accessible information with relevant Japanese primary sources.</p>
      <p><strong>Pilot scope.</strong> Up to 3 named Japanese suppliers per $29 order.</p>
      <p><strong>Delivery.</strong> Within 3 business days after we receive the completed order form following successful payment.</p>
      <p><strong>Possible results.</strong> CONTACT, VERIFY FIRST, DEPRIORITIZE or NO MATERIAL GAP. NO MATERIAL GAP means the Japanese-source review did not find information that materially changes the next action. It is a valid completed research result and is not itself a reason for a refund.</p>
      <p><strong>Refunds.</strong> You will receive a full refund if Kumia Research cannot complete the purchased research.</p>
      <p><strong>Boundary.</strong> The service is not supplier approval, a factory audit, a credit check, certification verification, legal advice, a food-safety review or import-compliance advice. Public information may be incomplete, outdated or changed after the checked date. You remain responsible for your own decisions about contacting, qualifying and purchasing from suppliers.</p>

      <h2>Changes to these terms</h2>
      <p>These terms may be updated from time to time. Continued use of Kumia Labs after a change means you accept the updated terms.</p>

      <h2>Contact</h2>
      <p>Questions about these terms can go through the <a href="/contact">Contact page</a>.</p>
    </InfoPageLayout>
  );
}
