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
    <InfoPageLayout
      title={title}
      crumb="Privacy"
      eyebrow="Policy"
      lead="What Kumia Labs actually collects from visitors today, described in plain language."
    >
      <p className="info-page-meta">Last reviewed: 2026-09-28</p>
      <div className="info-note">
        <p className="info-note-label">Note</p>
        <p>This page describes what actually happens on Kumia Labs today, not a generic template. It will be updated if that changes.</p>
      </div>

      <h2>Information you provide</h2>
      <p>Kumia Labs does not currently have any account system or newsletter signup. The only form on the site is the Kumia Research order form described below; apart from that, nothing on the site asks for reader information. The <a href="/contact">Contact page</a> lists external services (email and social platforms) if you choose to reach out there, and each of those services has its own privacy practices.</p>

      <h2>Technical and server data</h2>
      <p>Like effectively any website, Kumia Labs runs on hosting infrastructure that processes standard technical data to serve pages: things like IP address, browser type, and request timestamps. This is handled by the hosting provider as part of normal operation and is not used by Kumia Labs to build reader profiles.</p>

      <h2>Cookies and analytics</h2>
      <p>Kumia Labs does not currently run analytics scripts, advertising pixels, or set its own cookies. If that changes in the future, this page will be updated to describe what was added and why.</p>

      <h2>Third-party links</h2>
      <p>Guides link out to manufacturer and retailer sites so you can check current product details. Once you leave Kumia Labs, that site’s own privacy policy applies, not this one.</p>

      <h2>Affiliate tracking</h2>
      <p>Some outbound links may become affiliate links, which can involve the retailer’s own tracking to attribute a purchase. See the <a href="/affiliate-disclosure">Affiliate Disclosure</a> for how that works. Kumia Labs does not currently operate its own tracking beyond what a retailer’s affiliate link itself carries.</p>

      <h2>Kumia Research orders (Japan Supplier Evidence Check)</h2>
      <p>Kumia Research, part of the Kumia family, sells the Japan Supplier Evidence Check, a paid public-source research service. If you order it, the following applies.</p>
      <p><strong>What is collected.</strong> When you submit the order form, Kumia Research receives:</p>
      <ul>
        <li>your email address</li>
        <li>supplier names</li>
        <li>supplier URLs, if you provide them</li>
        <li>product or category</li>
        <li>target market</li>
        <li>your research question</li>
        <li>optional notes</li>
        <li>the submission timestamp</li>
        <li>the Stripe checkout session identifier for your payment</li>
        <li>the email address used at Stripe checkout, if Stripe provides it</li>
      </ul>
      <p><strong>How it is used.</strong> This information is used to fulfil your order and deliver the report, to communicate with you about the order, to match the order to its payment, and to provide support.</p>
      <p><strong>Payment information.</strong> Payment processing is handled by Stripe. Kumia Research checks the payment status of your checkout session with Stripe but does not receive or store full payment-card details.</p>
      <p><strong>Transactional email.</strong> Order notifications and confirmation emails may be delivered through Resend, an email delivery provider.</p>
      <p><strong>Please do not send confidential information.</strong> The service uses public sources only. You do not need to provide, and should not submit, confidential account lists, pricing, customer information or internal documents.</p>

      <h2>Changes to this policy</h2>
      <p>If what Kumia Labs collects or how it operates changes, this page will be updated to reflect the current, actual behavior of the site.</p>

      <h2>Contact</h2>
      <p>Questions about this policy can go through the <a href="/contact">Contact page</a>.</p>
    </InfoPageLayout>
  );
}
