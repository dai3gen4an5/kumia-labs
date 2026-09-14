import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

export function InfoPageLayout({ title, crumb, children }: { title: string; crumb?: string; children: ReactNode }) {
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
        <button className="search-button" type="button" aria-label="Search"><SearchIcon /></button>
      </header>

      <article className="info-page-article">
        <div className="article-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{crumb ?? title}</span></div>
        <header className="info-page-header">
          <h1>{title}</h1>
        </header>
        <div className="info-page-content">{children}</div>
      </article>

      <SiteFooter />
    </main>
  );
}
