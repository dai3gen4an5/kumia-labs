import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
      <SiteHeader article />

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
