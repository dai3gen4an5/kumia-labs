import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SearchOverlay } from "@/components/search-overlay";
import { SiteFooter } from "@/components/site-footer";

export function InfoPageLayout({
  title,
  crumb,
  eyebrow,
  lead,
  children,
}: {
  title: string;
  crumb?: string;
  eyebrow: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <main className="article-page info-page">
      <header className="site-header article-site-header">
        <Link className="brand-lockup" href="/" aria-label="Kumia Labs home">
          <Image src="/brand/kumia-k-mark.png" alt="" width={40} height={40} />
          <span className="header-wordmark"><b>Kumia</b><b>Labs</b></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#latest">Research</Link><Link href="/#latest">Tech</Link><Link href="/#meet-kumia">About</Link>
        </nav>
        <SearchOverlay />
      </header>

      <article className="info-page-article">
        <div className="article-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{crumb ?? title}</span></div>

        <header className="info-hero">
          <p className="info-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="info-lead">{lead}</p>
        </header>

        <div className="info-page-content">{children}</div>
      </article>

      <SiteFooter />
    </main>
  );
}
