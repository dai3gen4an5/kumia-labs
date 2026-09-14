import Image from "next/image";
import Link from "next/link";
import { SearchOverlay } from "@/components/search-overlay";

export function SiteHeader({ article = false, priority = false }: { article?: boolean; priority?: boolean }) {
  return (
    <header className={`site-header${article ? " article-site-header" : ""}`}>
      <Link className="brand-lockup" href="/" aria-label="Kumia Labs home">
        <Image src="/brand/kumia-k-mark.png" alt="" width={40} height={40} priority={priority} />
        <span className="header-wordmark"><b>Kumia</b><b>Labs</b></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#latest">Research</Link>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <SearchOverlay />
    </header>
  );
}
