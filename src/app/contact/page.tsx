import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";
import { InstagramIcon, MailIcon, XIcon, YouTubeIcon } from "@/components/contact-icons";

const canonicalPath = "/contact";
const title = "Contact";
const description = "How to reach Kumia Labs about corrections, product updates, partnerships, or general feedback.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

const contactMethods = [
  { label: "Email", value: "contact@kumialabs.com", href: "mailto:contact@kumialabs.com", external: false, Icon: MailIcon },
  { label: "X", value: "@KumiaLabs", href: "https://x.com/KumiaLabs", external: true, Icon: XIcon },
  { label: "Instagram", value: "@kumialabs", href: "https://www.instagram.com/kumialabs/", external: true, Icon: InstagramIcon },
  { label: "YouTube", value: "@KumiaLabs", href: "https://www.youtube.com/@KumiaLabs", external: true, Icon: YouTubeIcon },
];

export default function ContactPage() {
  return (
    <InfoPageLayout
      title={title}
      crumb="Contact"
      eyebrow="Contact"
      lead="Corrections, product updates, partnerships, and feedback all go through the channels below."
    >
      <div className="contact-methods">
        {contactMethods.map(({ label, value, href, external, Icon }) => (
          <div className="contact-card" key={label}>
            <div className="contact-card-icon" aria-hidden="true"><Icon /></div>
            <p className="contact-card-label">{label}</p>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
            ) : (
              <a href={href}>{value}</a>
            )}
          </div>
        ))}
      </div>

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
