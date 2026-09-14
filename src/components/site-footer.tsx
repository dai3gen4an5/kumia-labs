import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 5 19 19M19 5 5 19" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r=".25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="2.6" y="5.6" width="18.8" height="12.8" rx="4" />
      <path d="M10.2 9.1v5.8l5-2.9-5-2.9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
      </div>
    </footer>
  );
}
