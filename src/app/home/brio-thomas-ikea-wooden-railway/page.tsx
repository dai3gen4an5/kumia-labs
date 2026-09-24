import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/site";
import styles from "../what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/home/brio-thomas-ikea-wooden-railway";
const title = "Three Companies Built Wooden Trains That Somehow Speak the Same Language";
const seoTitle = "Why BRIO, Thomas, and IKEA Wooden Railway Tracks Often Connect";
const metaDescription =
  "BRIO, Thomas Wooden Railway, and IKEA LILLABO often connect without a formal public standard. The reason begins in 1958—and runs through two very different Thomas adapters.";
const supportingCopy =
  "BRIO set the grammar in 1958. Thomas added a clickety-clack accent. IKEA adopted the market’s familiar dimensions—and one redesign showed how hard that shared language was to leave.";
const publishedDate = "2026-09-23";
const updatedDate = "2026-09-23";

const heroImage = "/images/kumia-brio-thomas-ikea-wooden-railway-hero.png";
const cardImage = "/images/kumia-brio-thomas-ikea-wooden-railway-card.png";
const bodyOneImage = "/images/kumia-brio-thomas-ikea-wooden-railway-body-1.png";
const bodyTwoImage = "/images/kumia-brio-thomas-ikea-wooden-railway-body-2.png";

function publicAssetExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

const hasHeroImage = publicAssetExists(heroImage);
const hasCardImage = publicAssetExists(cardImage);
const hasBodyOneImage = publicAssetExists(bodyOneImage);
const hasBodyTwoImage = publicAssetExists(bodyTwoImage);

const SOURCES = {
  S1: {
    short: "BRIO",
    label: "BRIO Railway Toys",
    url: "https://www.ravensburger.co.uk/en-GB/brio/products/railway-toys",
    claim: "1958 origin, standardized gauge and connectors, and current BRIO family compatibility.",
  },
  S2: {
    short: "BRIO 2014",
    label: "BRIO celebrates 130 years of play",
    url: "https://news.cision.com/brio/r/brio-celebrates-130-years-of-play,c9538292",
    claim: "Old-to-new fit as an intentional product-development principle.",
  },
  S3: {
    short: "Court record",
    label: "Learning Curve Toys v. PlayWood Toys, Seventh Circuit",
    url: "https://caselaw.findlaw.com/court/us-7th-circuit/1293081.html",
    claim: "1993 license record, BRIO comparison, and Clickety-Clack development chronology.",
  },
  S4: {
    short: "Patent",
    label: "US5454513A — Toy track section",
    url: "https://patents.google.com/patent/US5454513A/en",
    claim: "Sound-producing grooves, simulated ties, reversible track, and patent dates.",
  },
  S5: {
    short: "1998 catalog",
    label: "BRIO Thomas & Friends 1998 catalog sheet",
    url: "https://woodenrailway.info/wp-content/uploads/2018/05/thomas_and_friends_1998.jpg",
    claim: "Archived primary artifact showing BRIO’s licensed Thomas range in 1998.",
  },
  S6: {
    short: "1999 catalog",
    label: "BRIO Thomas & Friends 1999 catalog sheet",
    url: "https://woodenrailway.info/wp-content/uploads/2018/05/thomas_and_friends_1999.jpg",
    claim: "Archived primary artifact showing the same relationship in 1999.",
  },
  S7: {
    short: "Mattel 2017",
    label: "Thomas Wood Starter Set FHM64",
    url: "https://m.service.mattel.com/us/Technical/productDetail?prodno=FHM64&siteid=27",
    claim: "2017 release, unique connectors, no-wrong-way goal, and included adapters.",
  },
  S8: {
    short: "2017 manual",
    label: "Thomas Wood FHM66 instruction sheet",
    url: "https://service.mattel.com/instruction_sheets/FHM66-Eng.pdf",
    claim: "Two adapters for other wood track, including classic Thomas Wooden Railway.",
  },
  S9: {
    short: "Adapter targets",
    label: "Thomas Wood FKF55 official product page",
    url: "https://service.mattel.com/us/productPopup.aspx?prodno=FKF55&siteid=27",
    claim: "Names classic Thomas, BRIO, Melissa & Doug, Imaginarium, and other wood track.",
  },
  S10: {
    short: "Mattel 2022",
    label: "Thomas & Friends Wooden Railway Clackety Track Pack HDX06",
    url: "https://m.service.mattel.com/us/Technical/productDetail?prodno=HDX06",
    claim: "2022 release, Wooden Railway compatibility, and four adapters.",
  },
  S11: {
    short: "2022 manual",
    label: "HDX06 instruction sheet",
    url: "https://service.mattel.com/instruction_sheets/HDX06-JA70-19A.pdf",
    claim: "Official imagery for the familiar track ends and four adapter shapes.",
  },
  S12: {
    short: "IKEA US",
    label: "IKEA US LILLABO 50-piece track set",
    url: "https://www.ikea.com/us/en/p/lillabo-50-piece-track-set-10320077/",
    claim: "Use with most other railway systems; customer reports vary.",
  },
  S13: {
    short: "IKEA FAQ",
    label: "IKEA Sweden LILLABO compatibility FAQ",
    url: "https://www.ikea.com/se/sv/customer-service/knowledge/articles/4f3358c9-b114-4eb3-b637-06f630f1690c.html",
    claim: "Standard market dimensions, broad compatibility, and no universal guarantee.",
  },
  S14: {
    short: "IKEA history",
    label: "IKEA Australia LILLABO page",
    url: "https://www.ikea.com/au/en/p/lillabo-50-piece-rail-set-90320078/",
    claim: "LILLABO has been in the range since the 1990s.",
  },
} as const;

type SourceId = keyof typeof SOURCES;
type Verdict = "DIRECT" | "ADAPTER BRIDGE" | "CHECK FIRST" | "DIFFERENT SYSTEM";

const compatibilityRows: Array<{
  systemA: string;
  systemB: string;
  verdict: Verdict;
  confidence: string;
  caveat: string;
}> = [
  { systemA: "BRIO World", systemB: "BRIO Classic / My First", verdict: "DIRECT", confidence: "High", caveat: "Official BRIO family claim." },
  { systemA: "Classic Thomas Wooden Railway", systemB: "BRIO-language track", verdict: "DIRECT", confidence: "High at family-history level", caveat: "Test exact generations, bridges, curves, and accessories." },
  { systemA: "Thomas Wood 2017–2021", systemB: "Classic Thomas Wooden Railway", verdict: "ADAPTER BRIDGE", confidence: "High", caveat: "Use the 2017 Thomas Wood bridge pair." },
  { systemA: "Thomas Wood 2017–2021", systemB: "BRIO", verdict: "ADAPTER BRIDGE", confidence: "High", caveat: "Mattel names BRIO; the adapter does not certify every layout." },
  { systemA: "Thomas Wooden Railway 2022", systemB: "Classic Thomas Wooden Railway", verdict: "DIRECT", confidence: "Medium-high", caveat: "Exact legacy pieces and accessories still deserve a fit test." },
  { systemA: "Thomas Wooden Railway 2022", systemB: "BRIO / other wooden brands", verdict: "CHECK FIRST", confidence: "Medium", caveat: "Mattel claims broad compatibility but does not certify every brand and generation." },
  { systemA: "IKEA LILLABO", systemB: "BRIO / classic Thomas", verdict: "CHECK FIRST", confidence: "Medium-high", caveat: "IKEA says most systems, not all systems." },
  { systemA: "Wooden Railway", systemB: "TrackMaster / Take-n-Play", verdict: "DIFFERENT SYSTEM", confidence: "High", caveat: "Different material and connector families." },
];

function Src({ id }: { id: SourceId }) {
  const source = SOURCES[id];
  return (
    <a className={local.src} href={source.url} target="_blank" rel="noopener noreferrer" aria-label={"Source: " + source.label}>
      {source.short} ↗
    </a>
  );
}

function EditorialAsset({ src, alt, label, available, width = 1672, height = 941 }: { src: string; alt: string; label: string; available: boolean; width?: number; height?: number }) {
  return (
    <figure className={local.editorialSlot}>
      {available ? (
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 700px) 100vw, 1120px" className={local.editorialImg} />
      ) : (
        <div className={local.assetPlaceholder} role="img" aria-label={alt}>
          <span>APPROVED EDITORIAL ASSET PENDING</span>
          <strong>{label}</strong>
          <small>{src}</small>
        </div>
      )}
    </figure>
  );
}

function PhysicalLanguageDiagram() {
  return (
    <figure className={local.techFigure} aria-labelledby="language-diagram-title language-diagram-note">
      <div className={local.techHeading}>
        <div>
          <span>TECH-1 · SCHEMATIC, NOT TO SCALE</span>
          <h3 id="language-diagram-title">What the wooden-railway language contains</h3>
        </div>
        <p id="language-diagram-note">A joint can connect while a loop or accessory still fails.</p>
      </div>
      <svg className={local.trackSvg} viewBox="0 0 900 300" role="img" aria-labelledby="track-svg-title track-svg-desc">
        <title id="track-svg-title">Four layers of wooden railway compatibility</title>
        <desc id="track-svg-desc">A conceptual straight track with peg, socket, paired grooves, a curved continuation, and a clearance arch.</desc>
        <path className={local.woodShape} d="M92 78 H730 Q780 78 780 128 V172 Q780 222 730 222 H92 Q55 222 55 185 V115 Q55 78 92 78Z" />
        <circle className={local.woodShape} cx="35" cy="150" r="32" />
        <circle className={local.socketShape} cx="800" cy="150" r="28" />
        <path className={local.grooveShape} d="M86 120 H722 Q746 120 746 144" />
        <path className={local.grooveShape} d="M86 180 H722 Q746 180 746 156" />
        <path className={local.clearanceShape} d="M352 196 V136 Q352 82 422 82 Q492 82 492 136 V196" />
        <text x="18" y="48">PEG</text>
        <text x="744" y="48">SOCKET</text>
        <text x="335" y="55">CLEARANCE</text>
        <text x="292" y="258">PAIRED RUNNING GROOVES</text>
      </svg>
      <ol className={local.layerGrid}>
        <li><span>01</span><strong>End connection</strong><small>Connector fit</small></li>
        <li><span>02</span><strong>Running path</strong><small>Groove alignment</small></li>
        <li><span>03</span><strong>Layout geometry</strong><small>Loop closure</small></li>
        <li><span>04</span><strong>Vehicle envelope</strong><small>Clearance</small></li>
      </ol>
    </figure>
  );
}

function AdapterDiagram() {
  return (
    <figure className={local.adapterFigure} aria-labelledby="adapter-title">
      <div className={local.techHeading}>
        <div>
          <span>TECH-2 · SCHEMATIC, NOT TO SCALE</span>
          <h3 id="adapter-title">Two Thomas adapter jobs</h3>
        </div>
        <p>Same word, different translation problem.</p>
      </div>
      <div className={local.adapterPanels}>
        <section aria-labelledby="adapter-2017">
          <p className={local.adapterYear}>2017</p>
          <h4 id="adapter-2017">Thomas Wood bridge adapters</h4>
          <div className={local.bridgeDiagram} aria-hidden="true">
            <span className={local.woodInterface}>WOOD</span>
            <span className={local.bridgeStem} />
            <span className={local.classicMale}>CLASSIC ♂</span>
          </div>
          <div className={local.bridgeDiagram} aria-hidden="true">
            <span className={local.woodInterface}>WOOD</span>
            <span className={local.bridgeStem} />
            <span className={local.classicFemale}>CLASSIC ♀</span>
          </div>
          <p><strong>Crosses between connector systems.</strong> Mattel’s pair connects the different Thomas Wood interface to classic male and female wooden-track endings.</p>
        </section>
        <section aria-labelledby="adapter-2022">
          <p className={local.adapterYear}>2022</p>
          <h4 id="adapter-2022">Clackety Track correction adapters</h4>
          <div className={local.correctionRow} aria-hidden="true">
            <span>♂</span><i /><span>♂</span>
            <span>♀</span><i /><span>♀</span>
          </div>
          <p><strong>Appears to correct orientation inside the familiar family.</strong> The double-ended function is an inference from Mattel’s official manual image, not a manufacturer-stated geometry.</p>
        </section>
      </div>
      <figcaption>Do not use the 2022 pieces as evidence for a Thomas Wood-to-BRIO bridge. The 2017 pair performs that cross-system job.</figcaption>
    </figure>
  );
}

function CompatibilityMatrix() {
  return (
    <section className={local.matrixSection} aria-labelledby="matrix-title">
      <div className={styles.sectionHeading}>
        <p>FAMILY-LEVEL GUIDANCE · TEST THE PIECES IN FRONT OF YOU</p>
        <h2 id="matrix-title">What can you actually combine?</h2>
      </div>
      <p className={local.matrixIntro}>These verdicts describe connector families. They do not promise that every mixed loop closes or every vehicle clears every accessory.</p>
      <div className={local.desktopMatrix}>
        <table>
          <thead><tr><th>System A</th><th>System B</th><th>Verdict</th><th>Confidence</th><th>Required caveat</th></tr></thead>
          <tbody>
            {compatibilityRows.map((row) => (
              <tr key={row.systemA + row.systemB}>
                <th scope="row">{row.systemA}</th>
                <td>{row.systemB}</td>
                <td><span className={local["verdict" + row.verdict.replaceAll(" ", "")]}> {row.verdict}</span></td>
                <td>{row.confidence}</td>
                <td>{row.caveat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={local.mobileMatrix} aria-label="Compatibility verdicts">
        {compatibilityRows.map((row) => (
          <article key={row.systemA + row.systemB}>
            <span className={local["verdict" + row.verdict.replaceAll(" ", "")]}> {row.verdict}</span>
            <h3>{row.systemA}</h3>
            <p className={local.matrixPair}>with {row.systemB}</p>
            <dl>
              <div><dt>Confidence</dt><dd>{row.confidence}</dd></div>
              <div><dt>Check</dt><dd>{row.caveat}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <p className={local.matrixSources}>Evidence: <Src id="S1" /> <Src id="S3" /> <Src id="S7" /> <Src id="S8" /> <Src id="S9" /> <Src id="S10" /> <Src id="S13" /></p>
    </section>
  );
}

export const metadata: Metadata = {
  title: seoTitle + " | Kumia Labs",
  description: metaDescription,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description: supportingCopy,
    url: canonicalPath,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    authors: ["Kumia"],
    ...(hasCardImage ? { images: [absoluteUrl(cardImage)] } : hasHeroImage ? { images: [absoluteUrl(heroImage)] } : {}),
  },
};

export default function BrioThomasIkeaWoodenRailway() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { "@type": "Person", name: "Kumia" },
    publisher: { "@type": "Organization", name: "Kumia Labs", url: absoluteUrl() },
    mainEntityOfPage: absoluteUrl(canonicalPath),
    ...(hasCardImage ? { image: absoluteUrl(cardImage) } : hasHeroImage ? { image: absoluteUrl(heroImage) } : {}),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      { "@type": "ListItem", position: 2, name: "Home research", item: absoluteUrl("/#latest") },
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
          <Link href="/">Home</Link><span>/</span><Link href="/#latest">Home research</Link><span>/</span><span>Wooden railway language</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            {hasHeroImage ? (
              <Image src={heroImage} alt="" width={1672} height={941} sizes="100vw" priority />
            ) : (
              <div className={styles.reservedHero} role="img" aria-label="Approved hero artwork pending: three wooden railway paths converge on the right in warm natural light.">
                <div><strong>{title}</strong><p>{supportingCopy}</p><span>Approved hero asset pending · {heroImage}</span></div>
              </div>
            )}
          </figure>
        </header>

        <ArticleResearchMeta left="BRIO track" right="Thomas + LILLABO" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div><Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} /></div>
            <p>The most durable standard in the playroom may be the one nobody formally published.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>Put three pieces of wooden railway track on the floor: one from BRIO, one from a classic Thomas Wooden Railway set, and one from IKEA’s LILLABO line.</p>
            <p>In many cases, the round peg on one piece will slide into the socket on another. The two grooves will meet closely enough for a little wooden engine to roll across the seam.</p>
            <p>There is no pairing button. No branded hub. No license check. Three companies have simply agreed in wood.</p>
            <p>Except they do not appear to have sat down and agreed on it at all.</p>
            <p>No public cross-company specification emerged in this research. Instead, these toys share a physical language: two running grooves, a familiar track width, a rounded male connector, a matching female recess, and curve conventions that are often close enough to combine.</p>
            <p>Compatibility is the visible trick. The more interesting story is how one company’s design became useful enough that rivals, licensors, and a furniture retailer kept speaking it for decades.</p>
          </section>

          <section className={local.prose} aria-labelledby="brio-grammar">
            <h2 id="brio-grammar">BRIO writes the first grammar</h2>
            <p>BRIO dates its first miniature railway set to 1958. The company says the standardized gauge and connectors it pioneered then are the reason BRIO products remain compatible with many other wooden railway brands today. It also says BRIO World is fully compatible with BRIO Classic and My First Railway. <Src id="S1" /></p>
            <p>That continuity was not passive. In a 2014 anniversary release, BRIO described old-to-new fit as a product-development principle: new toys were meant to connect not just emotionally but literally with older ones. <Src id="S2" /></p>
            <p>Every BRIO set that stayed in a toy box, classroom, attic, or secondhand shop increased the value of making the next track compatible with it. BRIO was not merely selling pieces. It was accumulating an installed base.</p>
          </section>

          <PhysicalLanguageDiagram />

          <section className={local.prose} aria-labelledby="thomas-sound">
            <h2 id="thomas-sound">Thomas keeps the grammar and changes the sound</h2>
            <p>A federal appellate opinion about Learning Curve’s Clickety-Clack track describes a meeting at the February 1993 American International Toy Fair. Roy Wilson said the company held the Britt Allcroft license to develop Thomas trains and accessories. More revealingly, the opinion says Learning Curve’s existing wooden track was virtually identical to BRIO track—and that BRIO held the lion’s share of the market. <Src id="S3" /></p>
            <p>Learning Curve found its distinction on top of the rail rather than at the ends. Grooves cut across the running channels made the wheels click as they passed, suggesting real rails and ties.</p>
            <p>The company was selling Clickety-Clack track by December 1994. Its patent application had been filed that March, and US 5,454,513 was granted in October 1995. The patent’s novelty lies in the sound-producing surface, simulated ties, and reversible faces—not a new incompatible connector. <Src id="S3" /> <Src id="S4" /></p>
            <div className={local.analysisNote}><span>EDITORIAL ANALYSIS</span><p>Whatever the intent, it worked like good platform strategy. Compatibility enlarged the world available to both products, even while their companies competed for the sale.</p></div>
          </section>

          <aside className={local.evidenceCard} aria-labelledby="brio-thomas-reveal">
            <p>ARCHIVED PRIMARY ARTIFACTS · NOT REPRODUCED HERE</p>
            <h2 id="brio-thomas-reveal">For a while, BRIO was Thomas.</h2>
            <blockquote>BRIO’s 1998 and 1999 catalog sheets put licensed Thomas sets, engines, and accessories inside the BRIO Wooden Railway System.</blockquote>
            <div><a href={SOURCES.S5.url} target="_blank" rel="noopener noreferrer">Open the 1998 catalog artifact ↗</a><a href={SOURCES.S6.url} target="_blank" rel="noopener noreferrer">Open the 1999 catalog artifact ↗</a></div>
            <small>The scans are evidence links only. Kumia Labs does not reproduce them without rights clearance.</small>
          </aside>

          <section className={local.prose} aria-labelledby="ikea-market">
            <h2 id="ikea-market">IKEA treats the language as market infrastructure</h2>
            <p>IKEA Australia says LILLABO has been in the range since the 1990s, while current product pages say the track combines with most other railway systems on the market. <Src id="S12" /> <Src id="S14" /></p>
            <p>An IKEA Sweden support answer is more explicit. In translation, it says LILLABO is designed with the standard dimensions used by railway systems on the market and is therefore usually compatible with the vast majority of other systems. It immediately adds that IKEA cannot guarantee compatibility with new railway tracks produced in the market. <Src id="S13" /></p>
            <p>That careful wording captures the ecosystem better than a simple yes or no. It describes a market convention stable enough to design around, but variable enough that no manufacturer can promise every future joint.</p>
          </section>

          <EditorialAsset
            src={bodyOneImage}
            available={hasBodyOneImage}
            width={1536}
            height={1024}
            label="BODY-1 · three labelled track ends above one shared play world"
            alt="A conceptual editorial illustration: three wooden track ends captioned BRIO, Thomas Wooden Railway, and IKEA LILLABO sit above a single mixed wooden layout. The captions name the three systems the article discusses; the rendered track shapes are illustrative and are not measurements of any real product."
          />
          <p className={local.caption}>Conceptual editorial illustration, not a product photograph or a dimensional reference. The labels name the three systems in this story; the fit evidence lives in the manufacturer sources and the diagrams below.</p>

          <section className={local.prose} aria-labelledby="thomas-exception">
            <h2 id="thomas-exception">The exception that proves the ecosystem</h2>
            <p>In 2017, Mattel changed the Thomas wooden-track language. Thomas Wood advertised a redesigned track with unique connectors and “no wrong way to build.” Instead of one male and one female end, the new pieces used a symmetric-looking interface intended to make assembly easier for small hands. <Src id="S7" /></p>
            <p>The official instruction sheet shows the cost of that decision: Mattel included two adapters for other wood track, including classic Thomas Wooden Railway. Related official product pages explicitly name BRIO and other wood systems. <Src id="S8" /> <Src id="S9" /></p>
            <p>Together, the pieces formed a bilingual bridge. Thomas Wood could simplify its own tracks only by preserving a path back to the installed ecosystem.</p>
          </section>

          <section className={local.prose} aria-labelledby="adapter-difference">
            <h2 id="adapter-difference">The 2022 adapters mean something else</h2>
            <p>Mattel lists its Thomas &amp; Friends Wooden Railway Clackety Track Pack as a 2022 release. The product restores the familiar visual language and includes four adapters compatible with Wooden Railway track. <Src id="S10" /></p>
            <p>The official manual image appears to show two double-male and two double-female pieces. That looks like an orientation correction inside the familiar connector family—not a bridge from Thomas Wood to BRIO. The function remains a visual inference rather than manufacturer-stated geometry. <Src id="S11" /></p>
            <p>The names differ too. Learning Curve’s 1990s product was <strong>Clickety-Clack</strong> track. Mattel’s 2022 pack is <strong>Clackety Track</strong>. They share the idea of sound, but they are not the same product or patent story.</p>
          </section>

          <AdapterDiagram />

          <EditorialAsset
            src={bodyTwoImage}
            available={hasBodyTwoImage}
            width={1536}
            height={1024}
            label="BODY-2 · a built layout above loose straights and curves"
            alt="A conceptual editorial illustration: a built wooden layout with a bridge, a tunnel, and a junction above a set of loose straight and curved pieces showing pegs and sockets. It sets up the four separate checks described next; the shapes are illustrative, not evidence of any brand's geometry."
          />
          <p className={local.caption}>Conceptual editorial illustration. A joint that looks right is only the first of the four checks below.</p>

          <section className={local.prose} aria-labelledby="four-layers">
            <h2 id="four-layers">Compatibility can break in four different places</h2>
            <p>The shared language is real, but it is not magic. Before combining systems, test four layers.</p>
            <ol className={local.fourLayers}>
              <li><strong>End connection / connector fit.</strong><span>Does the peg enter the socket gently and stay joined without lifting the track?</span></li>
              <li><strong>Running path / groove alignment.</strong><span>Can wheels cross the joint without climbing, catching, or dropping?</span></li>
              <li><strong>Layout geometry / loop closure.</strong><span>Do mixed curves and switches return to the final joint without accumulating a gap?</span></li>
              <li><strong>Vehicle envelope / clearance.</strong><span>Does the widest and tallest vehicle clear every bridge, tunnel, platform, and accessory?</span></li>
            </ol>
            <p>IKEA’s own wording supports this caution. It says most systems, not all. Current customer reviews include both successful combinations and reports of joints that are too tight or do not fit. Reviews are anecdotal, but the disagreement is exactly what a tolerance-based ecosystem should produce. <Src id="S12" /></p>
          </section>

          <CompatibilityMatrix />

          <section className={local.fieldGuide} aria-labelledby="field-guide-title">
            <div className={styles.sectionHeading}><p>A FOUR-STEP FIELD GUIDE · NO DATABASE REQUIRED</p><h2 id="field-guide-title">Test the language on your floor</h2></div>
            <ol>
              <li><span>01</span><div><strong>Test the end connection</strong><p>Join one known straight piece gently. Never force swollen, painted, or tight wood.</p></div></li>
              <li><span>02</span><div><strong>Test the running path</strong><p>Roll a vehicle across the grooves at the joint and watch the wheels.</p></div></li>
              <li><span>03</span><div><strong>Close a small mixed-brand loop</strong><p>Repeated angle differences become obvious at the final joint.</p></div></li>
              <li><span>04</span><div><strong>Test the vehicle envelope</strong><p>Run the widest and tallest vehicle through every accessory.</p></div></li>
            </ol>
          </section>

          <section className={local.prose} aria-labelledby="reuse-first">
            <h2 id="reuse-first">Before you buy more track</h2>
            <p className={local.reuseNote}>Use what is already in the box. One known straight, one small loop, and your widest vehicle tell you more than a blanket compatibility badge.</p>
            <p>If you are shopping secondhand, take a known track piece with you when practical. Do not buy a legacy Thomas Wood adapter as if it were a current universal solution, and do not assume a connector match guarantees every bridge or curve.</p>
            <p>No product card is included here. The evidence supports reuse-first testing better than a universal buying recommendation.</p>
          </section>

          <section className={local.prose} aria-labelledby="conclusion">
            <h2 id="conclusion">The standard nobody had to publish</h2>
            <p>BRIO created a useful grammar in 1958 and kept teaching it through backward-compatible products. Learning Curve preserved a BRIO-like grammar while differentiating Thomas with characters and sound; the installed-base effect is an editorial explanation of why that compatibility mattered, not a stated company motive.</p>
            <p>BRIO later put Thomas directly inside its own catalog. IKEA treated the dimensions as a market convention worth designing around. Mattel’s Thomas Wood experiment showed that even a child-friendly alternative needed adapters back to history.</p>
            <p>So yes: BRIO, classic Thomas Wooden Railway, and IKEA LILLABO can often share a floor. But the satisfying part is not that a peg fits a hole. It is that every old box of track became a tiny vote for the interface.</p>
            <p>Three companies did not need to sign the same rulebook. They inherited the same language—and discovered that it was more valuable to keep speaking it.</p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>Every old bin of track kept voting for the same physical language.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>Kumia Labs reviewed manufacturer pages, official manuals, a federal appellate opinion, a granted patent, and archived catalog artifacts on September 23, 2026. The article distinguishes manufacturer statements from visual inference and editorial analysis. It does not claim a public cross-company standard, exact connector dimensions, or universal fit. Catalog scans are linked as evidence and not reproduced.</p>
            <ul className={local.sourceList}>
              {(Object.keys(SOURCES) as SourceId[]).map((id) => (
                <li key={id}><a href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">{SOURCES[id].label}</a><span>{SOURCES[id].claim}</span></li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
