import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";

const canonicalPath = "/contact";
const title = "Contact";
const description = "How to reach Kumia Labs about corrections, product updates, partnerships, or general feedback.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

export default function ContactPage() {
  return (
    <InfoPageLayout title={title}>
      <p>The fastest way to reach Kumia Labs right now is X:</p>
      <p><a href="https://x.com/KumiaLabs" target="_blank" rel="noopener noreferrer">x.com/KumiaLabs</a></p>
      <p>A dedicated email address is not set up yet. This page will be updated with one once it exists, rather than listing an inbox nobody is checking.</p>

      <h2>What to reach out about</h2>
      <ul>
        <li>Corrections — a specification, price, or availability detail that is wrong or out of date.</li>
        <li>Product information updates — a kit was discontinued, replaced, or changed since a guide was published.</li>
        <li>Partnership or affiliate inquiries.</li>
        <li>General feedback on a guide, the Finder tools, or the site itself.</li>
      </ul>
      <p>Corrections are especially welcome. Specifications and pricing change quickly, and a message pointing out an error is one of the more useful things a reader can send.</p>
    </InfoPageLayout>
  );
}
