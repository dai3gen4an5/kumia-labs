import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmazonCta, AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { M22SealDiagram } from "@/components/m22-seal-diagram";
import { PressureWasherChecker } from "@/components/pressure-washer-checker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { amazonProductUrl, amazonSearchUrl } from "@/lib/amazon";
import { absoluteUrl } from "@/lib/site";
import styles from "../../home/what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/tools/pressure-washer-hose-and-gun-fit",
  title = "A Hose, a Gun, and One Millimeter of Trouble",
  seoTitle = "A Hose, a Gun, and One Millimeter of Trouble | Kumia Labs",
  subtitle =
    "Two M22 fittings can screw together and still fail to seal. Check a pressure washer one connection at a time: connector, seal size, PSI, flow, and temperature.",
  publishedDate = "2026-09-19",
  updatedDate = "2026-09-19",
  heroImage = "/images/kumia-pressure-washer-hero-hose-gun-fit.png";

// Verified source table from the approved work package. Every entry was reviewed by ChatGPT; none were added here.
const S = {
  arM22: { label: "AR Blue Clean: Understanding M22 Fittings", short: "AR Blue Clean", url: "https://arblueclean.com/blog/get-connected-understanding-m22-hose-fittings/", claim: "M22 meaning, the 14 mm and 15 mm internal distinction, and what happens when they are mismatched." },
  arAdapter: { label: "AR Blue Clean PW554-B adapter", short: "PW554-B page", url: "https://arblueclean.com/22mm-fitting-m15qc-x-m14-adapter-pw554-b/", claim: "Directional M22-15 to M22-14 conversion, with a reminder to verify hose PSI." },
  sunjoe: { label: "Sun Joe adapter quick guide (PDF)", short: "Sun Joe guide", url: "https://files.snowjoe.com/product-manuals/SPX-ACS-MAX_QUICKGUIDE_M.pdf", claim: "A 15 mm M22 female to 14 mm M22 male adapter, and the brand conversions it supports." },
  greenworks: { label: "Greenworks 2100 PSI product FAQ", short: "Greenworks", url: "https://www.greenworkstools.com/collections/pressure-washers/products/2100-psi-1-2-gpm-cold-water-electric-pressure-washer", claim: "Threaded connections are M22-14, nozzles use ¼-inch quick connect, and the water limit is 104°F." },
  dewalt: { label: "DeWalt DXPA25PH hose", short: "DeWalt DXPA25PH", url: "https://www.dewalt.com/en-us/product/dxpa25ph/516-x-25-ft-3700-psi-replacementextension-hose", claim: "Up to 3,700 PSI, M22 with a 14/15 mm connector, cold-water use." },
  karcherH10Q: { label: "Kärcher H 10 Q hose", short: "Kärcher H 10 Q", url: "https://www.karcher.com/gb/en/home-and-garden/products/h-10-q-high-pressure-hose-with-quick-connect-and-for-hose-reel-devices-p26436330", claim: "Quick Connect, specified hose-reel model class and manufacture date, 180 bar, 60°C." },
  karcherKit: { label: "Kärcher extension hose adapter kit", short: "Kärcher adapter kit", url: "https://www.karcher.com/my/en/home-and-garden/products/extension-hose-adapter-kit-p26430370", claim: "Screw-thread to Quick Connect conversion, not for hose-reel machines." },
  simpsonFaq: { label: "Simpson FAQ", short: "Simpson FAQ", url: "https://simpsoncleaning.com/faqs/", claim: "A replacement hose needs the same or a higher pressure rating and matching connectors." },
  simpsonSafety: { label: "Simpson safety manual (PDF)", short: "Simpson safety manual", url: "https://simpsoncleaning.com/wp-content/uploads/7111522-Rev-B-Simpson-Generic-HW-Manual.pdf", claim: "Accessory rating and depressurization requirements, and the hose-injection risk." },
  simpsonLeak: { label: "Simpson leak troubleshooting", short: "Simpson leak guide", url: "https://simpsoncleaning.com/troubleshooting-spray-gun-leaking/", claim: "Release stored pressure, and do not repair a leaking hose or gun body." },
  simpson80148: { label: "Simpson 80148 spray gun", short: "Simpson 80148", url: "https://simpsoncleaning.com/products/simpson-replacement-gun-3400-psi/", claim: "M22, up to 4,500 PSI and 6.6 GPM, safety lock, cold-water only." },
  simpson80178: { label: "Simpson 80178 hot-water gun", short: "Simpson 80178", url: "https://simpsoncleaning.com/products/hot-water-spray-gun-80178/", claim: "5,075 PSI, 12 GPM, 212°F, NPT connections, adapters supplied." },
  simpson41114: { label: "Simpson Armor 41114 hose", short: "Simpson 41114", url: "https://simpsoncleaning.com/products/armor-hot-water-hose-41114/", claim: "⅜-inch quick connect, 4,500 PSI, 250°F." },
  simpson80146: { label: "Simpson 80146 nozzles", short: "Simpson 80146", url: "https://simpsoncleaning.com/products/replacement-spray-nozzles/", claim: "¼-inch quick connect, 4,500 PSI, size 4.0 orifice." },
  generalPump: { label: "General Pump nozzle chart (PDF)", short: "General Pump chart", url: "https://www.generalpump.com/wp-content/uploads/2025/10/Nozzle-Chart-2025.pdf", claim: "How nozzle size, PSI, and GPM relate mathematically." },
  ryobi: { label: "Ryobi RY31QCK01", short: "Ryobi RY31QCK01", url: "https://espanol.ryobitools.com/products/details/46396045966?review=true", claim: "Contents of an M22-to-⅜-inch quick-connect kit." },
} as const;
type SourceId = keyof typeof S;

function Src({ id }: { id: SourceId }) {
  return (
    <a className={local.src} href={S[id].url} target="_blank" rel="noopener noreferrer" aria-label={`Source: ${S[id].label}`}>
      {S[id].short} ↗
    </a>
  );
}

function Example({ problem, name, facts, watch, url, link }: { problem: string; name: string; facts: string; watch: string; url: string; link: string }) {
  return (
    <div className={local.example}>
      <p className={local.eyebrow}>{problem}</p>
      <h4>{name}</h4>
      <p>{facts}</p>
      <p>
        <strong>Watch for:</strong> {watch}
      </p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">{link} →</a>
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: seoTitle,
  description: subtitle,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: seoTitle,
    description: subtitle,
    url: canonicalPath,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    authors: ["Kumia"],
    images: [absoluteUrl(heroImage)],
  },
};

export default function PressureWasherHoseAndGunFit() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: subtitle,
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { "@type": "Person", name: "Kumia" },
    publisher: { "@type": "Organization", name: "Kumia Labs", url: absoluteUrl() },
    mainEntityOfPage: absoluteUrl(canonicalPath),
    image: absoluteUrl(heroImage),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      { "@type": "ListItem", position: 2, name: "Tools research", item: absoluteUrl("/#latest") },
      { "@type": "ListItem", position: 3, name: title, item: absoluteUrl(canonicalPath) },
    ],
  };
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteHeader />
      <article>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#latest">Tools research</Link>
          <span>/</span>
          <span>Pressure-washer hose and gun</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>
        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image
              src={heroImage}
              alt="Kumia Labs cover reading A Hose, a Gun, and One Millimeter of Trouble. Two M22 fittings can screw together and still fail to seal. A brass-threaded hose end and a spray-gun fitting sit apart on a wet deck, with icons for connector, seal size, PSI, flow, and temperature, and the chain machine, hose, gun, lance, nozzle."
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
          </figure>
        </header>
        <ArticleResearchMeta left="Your pressure washer" right="Hose + gun + adapter" />
        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} />
            </div>
            <p>A hose that screws on is not always a hose that seals. Check one connection at a time, then check the ratings.</p>
          </section>

          <section className={local.prose} aria-labelledby="quick-verdict">
            <h2 id="quick-verdict">Quick verdict</h2>
            <p className={local.lead}>A pressure-washer part is compatible only when five things agree:</p>
            <ol className={local.five} aria-label="The five checks">
              <li>Connector</li>
              <li>Seal size</li>
              <li>PSI</li>
              <li>Flow</li>
              <li>Temperature</li>
            </ol>
            <p>Think of the system as a chain:</p>
            <ol className={local.chain} aria-label="The pressure-washer chain">
              <li>Machine</li>
              <li>Hose</li>
              <li>Gun</li>
              <li>Lance</li>
              <li>Nozzle</li>
            </ol>
            <p>
              Every arrow is a separate connection. A hose can fit the machine but not the gun. An adapter can solve a connector mismatch while leaving the hose under-rated. A nozzle can click into the lance yet have the wrong orifice for the machine.
            </p>
            <p>The most deceptive case is M22: two fittings can appear to screw together even though their internal sealing dimensions do not match.</p>
          </section>

          <section className={styles.comparison} aria-labelledby="checker-title">
            <div className={styles.sectionHeading}>
              <p>TRY A CONNECTION</p>
              <h2 id="checker-title">Pressure Washer Connector Checker</h2>
            </div>
            <PressureWasherChecker />
          </section>

          <section className={local.prose} aria-labelledby="five-title">
            <h2 id="five-title">The five things that have to match</h2>

            <h3>Connector</h3>
            <p>First identify the fitting at both sides of the junction. Common possibilities include:</p>
            <ul>
              <li>M22 threads</li>
              <li>¼-inch quick connect</li>
              <li>⅜-inch quick connect</li>
              <li>NPT threads</li>
              <li>Manufacturer-specific plugs, sockets, or bayonets</li>
            </ul>
            <p>Connector family, size, gender, and sealing method can all matter. “Quick connect” or “universal” by itself is not enough information.</p>

            <h3>Seal size</h3>
            <p>A threaded nut is not necessarily what creates the watertight seal.</p>
            <p>
              M22 pressure-washer fittings commonly use internal stems, bores, and O-rings. If those parts do not align correctly, the connection may leak even when its outer threads tighten.
              <Src id="arM22" />
            </p>

            <h3>PSI</h3>
            <p>Every hose, gun, lance, coupler, adapter, and nozzle must meet or exceed the pressure washer’s required maximum pressure.</p>
            <p>
              Simpson advises choosing a replacement hose with the same or a higher pressure rating than the original requirement. A higher rating does not prove compatibility, but a rating below the machine’s maximum rules a component out.
              <Src id="simpsonFaq" />
            </p>

            <h3>Flow</h3>
            <p>A component must also accommodate the machine’s water flow.</p>
            <p>
              This becomes especially important with replacement guns, foam cannons, surface cleaners, small passages, and commercial equipment. A suitable pressure rating does not automatically establish sufficient GPM capacity. For nozzles, the orifice size ties pressure and flow together.
              <Src id="generalPump" />
            </p>

            <h3>Temperature</h3>
            <p>Hot-water and cold-water components are not interchangeable unless their documentation says so.</p>
            <p>
              For example, Simpson offers a cold-water replacement gun rated to 4,500 PSI and a different hot/cold gun rated to 212°F. Pressure alone does not answer the temperature question.
              <Src id="simpson80148" />
              <Src id="simpson80178" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="m22-title">
            <h2 id="m22-title">M22-14 versus M22-15</h2>
            <p className={local.lead}>“M22” is incomplete information.</p>
            <p>
              M22-14 and M22-15 share the same general outer-thread family, but their internal sealing geometry differs. AR Blue Clean describes the practical outcomes:
              <Src id="arM22" />
            </p>
            <ul>
              <li>A 14 mm stem and 14 mm bore form the intended pairing.</li>
              <li>A 15 mm stem and 15 mm bore form the intended pairing.</li>
              <li>A 14 mm stem entering a 15 mm bore can thread together but leak.</li>
              <li>A 15 mm stem will not fit into a 14 mm bore.</li>
            </ul>
            <M22SealDiagram />
            <p>That is why “it screws on” is not a valid pressure test.</p>
            <p>
              The number refers to the relevant internal stem or bore dimension, not simply the outside diameter of the threaded nut. Check the exact product documentation where possible. If measurement is necessary, shut down the machine, close the water supply, release stored pressure through the gun, and disconnect the component before using calipers.
              <Src id="simpsonSafety" />
            </p>
            <p>
              If a listing says only “M22,” the correct verdict is <strong>CHECK FIRST</strong>.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="qc-title">
            <h2 id="qc-title">¼-inch versus ⅜-inch quick connect</h2>
            <p className={local.lead}>These quick connects are not interchangeable.</p>
            <p>
              A ¼-inch quick connect is frequently encountered at the lance-to-nozzle junction. A ⅜-inch quick connect is frequently encountered at hose, gun, and machine connections, particularly in higher-flow assemblies.
              <Src id="greenworks" />
              <Src id="simpson41114" />
            </p>
            <p>Those are common patterns, not universal rules. For either size, confirm:</p>
            <ul>
              <li>Plug or socket</li>
              <li>Working-pressure rating</li>
              <li>Flow rating</li>
              <li>Temperature rating</li>
              <li>The role of the connection in the specific product</li>
            </ul>
            <p>Do not confuse a ¼-inch quick-connect nozzle with a ¼-inch high-pressure hose. The same nominal size can describe different parts of the system.</p>
          </section>

          <section className={local.prose} aria-labelledby="power-title">
            <h2 id="power-title">Electric versus gas: useful clue, not a rule</h2>
            <p>
              Product listings sometimes present M22-15 as an electric-washer fitting and M22-14 as a gas-washer fitting. That distinction can help narrow a search, but it is not reliable enough to select a part.
            </p>
            <p>
              Greenworks states that threaded connections on its pressure washers are M22-14.
              <Src id="greenworks" /> Sun Joe documents 15 mm-to-14 mm M22 adapters for particular products.
              <Src id="sunjoe" /> DeWalt sells a replacement hose with a 14/15 mm M22 connector.
              <Src id="dewalt" />
            </p>
            <p>The exact machine model and fitting specification are more useful than the power source.</p>
            <p>
              If you know only that the washer is electric or gas, choose <strong>CHECK FIRST</strong>.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="paths-title">
            <h2 id="paths-title">Four replacement paths</h2>
            <p>Each path fits a different situation. Where a manufacturer product solves the problem, it appears here and nowhere else. Verify ratings and current availability on the manufacturer page.</p>

            <h3>Replace the hose only</h3>
            <p>This is the simplest option when both ends of the original hose are documented and the replacement meets the pressure, flow, and temperature requirements.</p>
            <p>Check the machine end and gun end separately. A product advertised as an extension hose may also need a coupler that a direct replacement does not.</p>
            <Example
              problem="A compatible gas washer needs an M22 replacement or extension hose"
              name="DeWalt DXPA25PH"
              facts="5/16 × 25 ft, up to 3,700 PSI, cold-water use, M22 with a 14/15 mm connector."
              watch="confirm the fitting on your machine and that 3,700 PSI meets its requirement."
              url={S.dewalt.url}
              link="View at DeWalt"
            />
            <AmazonDisclosure />
            <AmazonCta href={amazonSearchUrl("DEWALT DXPA25PH pressure washer hose")} label="DEWALT DXPA25PH replacement hose" />

            <h3>Add one targeted adapter</h3>
            <p>An adapter is appropriate when one known mismatch separates otherwise suitable components.</p>
            <p>
              A documented M22-15 to M22-14 conversion is a good example. Confirm the direction: an adapter intended for a 15 mm machine outlet and 14 mm hose is not automatically the answer to the reverse situation.
              <Src id="arAdapter" />
            </p>
            <p>
              The adapter needs its own PSI, flow, and temperature rating. It does not raise the ratings of the hose or gun attached to it. Conversions between M22 and ⅜-inch quick connect also exist; Ryobi lists an M22-to-⅜-inch quick-connect kit (RY31QCK01). Check that any such kit lists your exact machine and fitting.
              <Src id="ryobi" />
            </p>
            <Example
              problem="A documented M22-15 interface must accept an M22-14 hose"
              name="AR Blue Clean PW554-B M22 Swivel Transfer Adapter"
              facts="M22-15 inlet to M22-14 outlet. The product page states no PSI, flow, or temperature ratings."
              watch="you must still verify the hose’s pressure rating for your machine."
              url={S.arAdapter.url}
              link="View at the manufacturer"
            />

            <h3>Replace the hose and gun together</h3>
            <p>This can be cleaner than building a chain of adapters when the original gun inlet is proprietary or poorly documented.</p>
            <p>A matched hose-and-gun pair removes one uncertain junction. The new hose must still connect correctly to the machine, and the new gun must still accept the lance.</p>
            <Example
              problem="A compatible cold-water system needs an M22 replacement gun"
              name="Simpson 80148 Universal Spray Gun"
              facts="M22, up to 4,500 PSI and 6.6 GPM, safety lock, cold-water only."
              watch="not for hot water, and its M22 seal size must match your hose."
              url={S.simpson80148.url}
              link="View at Simpson"
            />
            <AmazonCta href={amazonProductUrl("B0773YTNGN")} label="Simpson pressure washer replacement gun" />
            <Example
              problem="A commercial hose and gun system uses ⅜-inch quick connect and hot water"
              name="Simpson Armor 41114 Hose"
              facts="⅜-inch plug and socket, up to 4,500 PSI and 250°F."
              watch="both ends must match your gun and machine, and every other component must be rated for hot water."
              url={S.simpson41114.url}
              link="View at Simpson"
            />

            <h3>Stay in the factory ecosystem</h3>
            <p>A manufacturer-specified replacement is often the most dependable path for hose reels, captive hose ends, model-specific plugs, and machines with several product revisions.</p>
            <p>It may cost more than a generic component, but it can avoid uncertain adapters and ambiguous “universal” claims.</p>
            <Example
              problem="A supported Kärcher hose-reel system needs a factory replacement"
              name="Kärcher H 10 Q"
              facts="Quick Connect, listed for specified K4–K7 hose-reel devices manufactured from 2009, 180 bar, 60°C."
              watch="it is only for the models and manufacture dates Kärcher specifies."
              url={S.karcherH10Q.url}
              link="View at Kärcher"
            />
            <p>
              When essential specifications are unavailable, none of these paths should be picked automatically. The result is <strong>CHECK FIRST</strong>.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="proprietary-title">
            <h2 id="proprietary-title">Proprietary systems</h2>
            <p>Kärcher demonstrates why brand names alone are not compatibility specifications.</p>
            <p>
              Its consumer range includes Quick Connect hoses, bayonet accessory fittings, threaded conversion products, and hose-reel-specific parts. Kärcher’s H 10 Q replacement hose, for example, is listed for specified K4–K7 hose-reel devices manufactured from 2009.
              <Src id="karcherH10Q" /> A separate Kärcher extension-hose adapter explicitly excludes hose-reel machines.
              <Src id="karcherKit" />
            </p>
            <p>The correct question is therefore not “Does this fit Kärcher?” It is:</p>
            <blockquote>Does the manufacturer support this part on my exact Kärcher model and configuration?</blockquote>
            <p>Apply the same model-level check to any proprietary system.</p>
          </section>

          <section className={local.prose} aria-labelledby="safety-title">
            <h2 id="safety-title">Short safety note</h2>
            <p>Before disconnecting a hose, gun, lance, or adapter:</p>
            <ul>
              <li>Switch the machine off.</li>
              <li>Turn off the water supply.</li>
              <li>Point the gun in a safe direction.</li>
              <li>Squeeze the trigger until stored pressure is released.</li>
              <li>Engage the trigger lock.</li>
            </ul>
            <p>
              Do not repair a cut, blistered, or leaking high-pressure hose. Replace it. A leaking gun body should also be replaced rather than opened or patched.
              <Src id="simpsonSafety" />
              <Src id="simpsonLeak" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="bottom-line">
            <h2 id="bottom-line">The Kumia bottom line</h2>
            <p className={local.lead}>A connector that turns, clicks, or looks close is not necessarily compatible.</p>
            <p>Check one junction at a time: Machine → Hose → Gun → Lance → Nozzle. Then apply the same five tests: connector, seal size, PSI, flow, temperature.</p>
            <p>
              If the interfaces are documented and align, you have a <strong>DIRECT MATCH</strong> at that junction. If one proven adapter resolves the difference, the result is <strong>ADAPTER NEEDED</strong>. If the parts cannot mate or seal, it is <strong>NO MATCH</strong>. If a listing says only “M22,” “quick connect,” or “universal,” choose <strong>CHECK FIRST</strong>.
            </p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>CHECK FIRST is not a dead end. It is the point where one model number or one careful measurement can prevent the wrong purchase.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Manufacturer and primary sources from the Kumia research package, edited and reviewed before publication. Kumia Labs did not test any fitting. The checker follows the sources and stops at CHECK FIRST wherever they do not settle a question. Prices, discounts, and stock are not shown. Confirm current specifications on each manufacturer page.
            </p>
            <ul className={local.sourceList}>
              {(Object.keys(S) as SourceId[]).map((id) => (
                <li key={id}>
                  <a href={S[id].url} target="_blank" rel="noopener noreferrer">{S[id].label}</a>
                  <span>{S[id].claim}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
