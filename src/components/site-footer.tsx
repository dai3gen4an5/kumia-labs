import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const followLinks = [
  { label: "X", href: "https://x.com/KumiaLabs" },
  { label: "Instagram", href: "https://www.instagram.com/kumialabs/" },
  { label: "YouTube", href: "https://www.youtube.com/@KumiaLabs" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-brand">
          <p className="site-footer-name">Kumia Labs</p>
          <p className="site-footer-tagline">Find what works together.</p>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-heading">Site</p>
          <nav className="site-footer-links" aria-label="Site">
            {footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
        </div>
        <div className="site-footer-col site-footer-col-follow">
          <p className="site-footer-heading">Follow</p>
          <div className="site-footer-follow">
            {followLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <p>© 2026 Kumia Labs</p>
      </div>
    </footer>
  );
}
