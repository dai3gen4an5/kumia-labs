import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { ToolCombinationFinder } from "@/components/tool-combination-finder";
import { toolCombinations } from "@/data/tool-combinations";
import { absoluteUrl } from "@/lib/site";

const canonicalPath = "/tools/cordless-tool-starter-setup";
const title = "8 Cordless Tool Combinations to Start—and Grow—Your DIY Setup";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description: "Find the right cordless tool and battery-platform combination for your projects, budget, and future plans.",
  alternates: { canonical: canonicalPath },
  openGraph: { title, description: "Find the right mix for your projects, budget, and future plans.", url: canonicalPath, images: [absoluteUrl("/images/kumia-v2-001-thumbnail-16x9.png")] },
  robots: { index: false, follow: false },
};

function SearchIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg>; }

export default function CordlessToolStarterSetupArticle() {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Article", headline: title, description: metadata.description, datePublished: "2026-09-13", dateModified: "2026-09-13", author: { "@type": "Person", name: "Kumia" }, publisher: { "@type": "Organization", name: "Kumia Labs" }, mainEntityOfPage: absoluteUrl(canonicalPath), image: absoluteUrl("/images/kumia-v2-001-thumbnail-16x9.png") },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() }, { "@type": "ListItem", position: 2, name: "Tools", item: absoluteUrl("/#tools") }, { "@type": "ListItem", position: 3, name: title, item: absoluteUrl(canonicalPath) }] },
  ];

  return <main className="article-page v2-tool-page v2-tool-rebuild">
    <header className="site-header article-site-header">
      <Link className="brand-lockup" href="/" aria-label="Kumia Labs home"><Image src="/brand/kumia-k-mark.png" alt="" width={40} height={40} priority /><span className="header-wordmark"><b>Kumia</b><b>Labs</b></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/#latest">Research</Link><Link href="/#latest">Tech</Link><Link href="/#meet-kumia">About</Link></nav>
      <button className="search-button" type="button" aria-label="Search"><SearchIcon /></button>
    </header>
    <article>
      <div className="article-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#latest">Tools</Link><span>/</span><span>Starter combinations</span></div>
      <header className="v2-tool-hero v2-tool-hero-rebuilt">
        <div className="v2-tool-hero-copy"><p className="section-label">TOOLS</p><h1>{title}</h1><p className="v2-tool-subtitle">Find the right mix for your projects, budget, and future plans.</p><p className="article-lede">The drill and impact in the box are only half the decision. Their batteries determine which bare tools you can add next, while tool size and kit breadth decide whether the setup feels useful on day one. The best combination changes with the work.</p><p className="article-byline"><time dateTime="2026-09-13">Published 2026.09.13</time><span>Official specifications checked by Kumia Labs</span></p></div>
        <figure className="v2-tool-hero-image"><Image src="/images/kumia-v2-001-thumbnail-16x9.png" alt="A mixed cordless tool setup arranged on a workshop bench" width={1536} height={864} sizes="(max-width: 700px) 100vw, 48vw" priority /><figcaption>Eight kits. Five battery families. One starting decision.</figcaption></figure>
      </header>

      <div className="v2-tool-content">
        <section className="v2-quick v2-quick-rebuilt" aria-labelledby="v2-quick-title"><div className="v2-quick-heading"><div><p className="section-label">QUICK VERDICT</p><h2 id="v2-quick-title">Four useful starting directions</h2></div><Image src="/images/kumia-mobile-wave-transparent.png" alt="Kumia introducing the shortlist" width={1122} height={1402} sizes="120px" /></div><div className="v2-short-picks"><a href="#combination-1"><b>Best starting point</b><strong>RYOBI ONE+</strong><span>Low commitment and room to add the third tool later.</span></a><a href="#combination-2"><b>Best compact setup</b><strong>Milwaukee M12 FUEL</strong><span>A genuinely smaller 12V system for tight spaces.</span></a><a href="#combination-3"><b>Best compact 18V-class</b><strong>DEWALT ATOMIC</strong><span>Small tools inside a mainstream battery family.</span></a><a href="#combination-7"><b>Demanding renovation</b><strong>Milwaukee M18 FUEL</strong><span>Hammer drilling, runtime, and bind-up control.</span></a></div></section>

        <section className="v2-finder-section" aria-labelledby="finder-title"><p className="section-label">FIND YOUR COMBINATION</p><h2 id="finder-title">Build around the work, not the badge</h2><p>Choose four priorities. The Finder weighs project fit, handling, how much you want on day one, and frequency. When scores tie, a documented value-oriented order breaks the tie rather than silently favoring the editorial rank.</p><ToolCombinationFinder /></section>

        <section className="v2-ranking v2-ranking-rebuilt" aria-labelledby="ranking-title"><p className="section-label">KUMIA’S TOP COMBINATIONS</p><h2 id="ranking-title">Eight different ways to begin</h2><p className="ranking-note">These are not eight versions of the same recommendation. Some buy compactness, others buy renovation capacity, and the six-tool setup buys time by putting more tools in the workshop immediately.</p>
          <div className="featured-combinations">{toolCombinations.map((item) => <article id={`combination-${item.rank}`} className="featured-combination combination-review" key={item.id}><div className="combination-rank">0{item.rank}</div><div className="combination-review-main"><p className="combination-best"><span>BEST FOR</span>{item.bestFor}</p><h3>{item.title}</h3><p className="combination-model">{item.platform} · {item.productModel}</p><div className="combination-facts"><div><b>WHAT YOU GET</b><p>{item.setup}</p></div><div><b>WHY KUMIA LIKES IT</b><p>{item.why}</p></div><div><b>BATTERY PLATFORM</b><p>{item.battery}</p></div><div><b>WHERE IT MAKES SENSE</b><p>{item.whereItFits}</p></div><div><b>WHAT YOU GIVE UP</b><p>{item.tradeOff}</p></div><div><b>WHO SHOULD SKIP IT</b><p>{item.skipIf}</p></div></div><div className="combination-actions"><a href={item.officialUrl}>Official product details ↗</a><span>Affiliate link not configured</span></div></div></article>)}</div>
        </section>

        <section className="v2-platform-guide" aria-labelledby="battery-title"><p className="section-label">HOW TO CHOOSE A BATTERY SYSTEM</p><h2 id="battery-title">The battery is the part you keep buying into</h2><div className="platform-diagram" aria-label="Battery platform decision diagram"><span>Starter kit</span><i>→</i><span>Battery + charger</span><i>→</i><span>Future bare tools</span></div><div className="platform-copy"><p>A bare tool usually costs less than another complete kit because it omits the battery and charger. That advantage only exists inside the same platform. Milwaukee M12 and M18 are separate systems even though one charger can accept both; their batteries do not interchange. RIDGID NUKE works the other way: the compact tools still accept standard RIDGID 18V packs.</p><p>Battery capacity in amp-hours mainly affects stored energy and runtime. A larger pack may support demanding use better, but its Ah number is not a torque rating. It also adds weight, which matters overhead or inside a cabinet. DEWALT 20V MAX and CRAFTSMAN V20 are 18V nominal systems—the larger label is maximum initial voltage, not proof that they outrank tools labeled 18V.</p><p>Ecosystem size is useful only when it contains the tools you expect to buy. List the next two purchases first: perhaps a circular saw and sander, or an inflator and ratchet. Then check those exact bare tools instead of choosing from an approximate platform-wide product count.</p></div></section>

        <section className="v2-buy-first v2-buy-first-rebuilt" aria-labelledby="buy-first-title"><p className="section-label">WHAT TO BUY FIRST</p><h2 id="buy-first-title">Match the first box to the next six months</h2><div><article><h3>Drill only</h3><p>Shelves, pilot holes, anchors, and light assembly are enough reason to begin with one drill. If longer wood screws or repeated furniture builds appear on the list, the impact driver soon earns its place.</p><a href="#combination-1">Compare the value starter →</a></article><article><h3>Drill + impact</h3><p>This is the balanced choice for furniture, deck repair, and general fixing. Compact work points toward M12, ATOMIC, or NUKE; masonry and heavier renovation point toward Makita or M18.</p><a href="#combination-2">Compare compact pairs →</a></article><article><h3>Multi-tool kit</h3><p>Buy breadth only when cutting and sanding jobs are already scheduled. RYOBI’s six-tool box includes five conventional power tools plus an LED work light, so judge it by the work you will actually use.</p><a href="#combination-8">See the day-one setup →</a></article></div></section>

        <section className="v2-conclusion v2-conclusion-rebuilt" aria-labelledby="v2-conclusion-title"><div><p className="section-label">KUMIA’S CONCLUSION</p><h2 id="v2-conclusion-title">I would buy for the second project, not the tenth.</h2><p>If I owned no cordless tools and spent weekends on home repairs and furniture, I would start with the RYOBI two-tool kit. When a circular saw becomes necessary a few months later, adding one on the same battery matters more to me than buying the highest-torque drill on day one.</p><p>I would change that answer for a real constraint. Cabinets, electrical work, or engine bays would move me to M12 because smaller tools affect every minute of the job. A renovation with masonry and repeated heavy fastening would justify starting with M18 FUEL or Makita LXT rather than replacing an entry kit later.</p></div><Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia sharing her final recommendation" width={1122} height={1402} sizes="(max-width: 600px) 135px, 230px" loading="eager" /></section>

        <footer className="v2-sources"><p className="section-label">SOURCES &amp; METHODOLOGY</p><h2>What we verified—and what we left out</h2><p>Model numbers, kit contents, voltage language, battery compatibility, and stated service terms were checked against manufacturer pages on 2026-09-13. Prices are omitted because active promotions and retailer bundle suffixes change the real package. Product photos were not republished because reusable image rights were not confirmed; each review links to the manufacturer’s current product page.</p><p>The previously listed CRAFTSMAN CMCK1411D2 could not be confirmed on the manufacturer site, so it was replaced with the verified CMCK211C2. Rankings and Finder weights remain Kumia Labs editorial judgments, not manufacturer endorsements.</p><ul>{toolCombinations.map((item) => <li key={item.id}><a href={item.officialUrl}>{item.productModel} · {item.platform} ↗</a></li>)}</ul></footer>
      </div>
    </article>
    <SiteFooter />
    {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />)}
  </main>;
}
