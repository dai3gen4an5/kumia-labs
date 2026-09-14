import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <p className="site-footer-name">Kumia Labs</p>
        <p className="site-footer-tagline">Find what works together.</p>
      </div>
      <nav className="site-footer-links" aria-label="Site">
        {footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <div className="site-footer-meta">
        <a href="https://x.com/KumiaLabs" target="_blank" rel="noopener noreferrer">X @KumiaLabs</a>
        <p>© 2026 Kumia Labs</p>
      </div>
    </footer>
  );
}
