import Image from "next/image";
import { FindsDirectory } from "@/components/finds-directory";
import { SearchOverlay } from "@/components/search-overlay";
import { SiteFooter } from "@/components/site-footer";
import { finds } from "@/data/finds";

const navItems = [
  { label: "Research", target: "#latest" },
  { label: "Tech", target: "#latest" },
  { label: "About", target: "#meet-kumia" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Kumia Labs home">
          <Image src="/brand/kumia-k-mark.png" alt="" width={40} height={40} priority />
          <span className="header-wordmark"><b>Kumia</b><b>Labs</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.label} href={item.target}>{item.label}</a>)}
        </nav>
        <SearchOverlay />
      </header>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image
          className="hero-art"
          src="/images/kumia-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 1px, 100vw"
        />
        <Image
          className="mobile-hero-art"
          src="/images/kumia-mobile-hero-bg.png"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 1px"
        />
        <div className="hero-copy">
          <Image className="hero-logo" src="/brand/kumia-labs-logo.png" alt="Kumia Labs" width={1086} height={362} priority />
          <div className="hero-message">
            <h1 id="hero-title">Find what works together.</h1>
            <p>Kumia Labs helps you choose products that work well together for the way you plan to use them.</p>
          </div>
        </div>
      </section>
      <FindsDirectory finds={finds} />
      <section className="meet-kumia" id="meet-kumia" aria-labelledby="meet-kumia-title">
        <div className="meet-portrait">
          <Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" fill sizes="(max-width: 900px) 150px, 34vw" />
        </div>
        <div className="meet-copy">
          <p className="meet-label">KUMIA LABS RESEARCHER</p>
          <h2 id="meet-kumia-title">Meet Kumia</h2>
          <p>Hi, I’m Kumia. My name comes from <strong>kumiawase</strong>, the Japanese word for “combination.” I research how products work together and help you choose a combination that suits your needs.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
