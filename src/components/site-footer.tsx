import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, MailIcon, XIcon, YouTubeIcon } from "@/components/contact-icons";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { label: "X", href: "https://x.com/KumiaLabs", Icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/kumialabs/", Icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/@KumiaLabs", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-brand">
          <div className="site-footer-brand-mark">
            <Image src="/brand/kumia-k-mark.png" alt="" width={22} height={22} />
            <p className="site-footer-name">Kumia Labs</p>
          </div>
          <p className="site-footer-tagline">Find what works together.</p>
        </div>
        <nav className="site-footer-links" aria-label="Site">
          {footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="site-footer-social">
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <Icon />
              <span className="site-footer-social-label">{label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="site-footer-bottom">
        <p>© 2026 Kumia Labs</p>
        <a className="site-footer-email" href="mailto:contact@kumialabs.com">
          <MailIcon />
          contact@kumialabs.com
        </a>
      </div>
    </footer>
  );
}
