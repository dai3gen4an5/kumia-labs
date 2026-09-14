import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";

const canonicalPath = "/privacy";
const title = "Privacy Policy";
const description = "What Kumia Labs does and does not collect from visitors, based on how the site actually works today.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

export default function PrivacyPage() {
  return (
    <InfoPageLayout title={title} crumb="Privacy">
      <p className="info-page-meta">Last reviewed: 2026-09-14</p>
      <p>This page describes what actually happens on Kumia Labs today, not a generic template. It will be updated if that changes.</p>

      <h2>Information you provide</h2>
      <p>Kumia Labs does not currently have any account system, newsletter signup, or form on the site. There is no reader information for Kumia Labs to collect this way, because nothing on the site currently asks for it. The <a href="/contact">Contact page</a> points to an external service (X) if you choose to reach out there, and that service has its own privacy practices.</p>

      <h2>Technical and server data</h2>
      <p>Like effectively any website, Kumia Labs runs on hosting infrastructure that processes standard technical data to serve pages: things like IP address, browser type, and request timestamps. This is handled by the hosting provider as part of normal operation and is not used by Kumia Labs to build reader profiles.</p>

      <h2>Cookies and analytics</h2>
      <p>Kumia Labs does not currently run analytics scripts, advertising pixels, or set its own cookies. If that changes in the future, this page will be updated to describe what was added and why.</p>

      <h2>Third-party links</h2>
      <p>Guides link out to manufacturer and retailer sites so you can check current product details. Once you leave Kumia Labs, that site’s own privacy policy applies, not this one.</p>

      <h2>Affiliate tracking</h2>
      <p>Some outbound links may become affiliate links, which can involve the retailer’s own tracking to attribute a purchase. See the <a href="/affiliate-disclosure">Affiliate Disclosure</a> for how that works. Kumia Labs does not currently operate its own tracking beyond what a retailer’s affiliate link itself carries.</p>

      <h2>Changes to this policy</h2>
      <p>If what Kumia Labs collects or how it operates changes, this page will be updated to reflect the current, actual behavior of the site.</p>

      <h2>Contact</h2>
      <p>Questions about this policy can go through the <a href="/contact">Contact page</a>.</p>
    </InfoPageLayout>
  );
}
