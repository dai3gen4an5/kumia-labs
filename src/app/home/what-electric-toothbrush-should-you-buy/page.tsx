import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl } from "@/lib/site";
import styles from "./page.module.css";
import heroLayout from "./hero-layout.module.css";

const canonicalPath = "/home/what-electric-toothbrush-should-you-buy";
const title = "What Electric Toothbrush Should You Buy?";
const subtitle = "Four setups that account for replacement heads, charging, shared bathrooms, and travel.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description: subtitle,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description: subtitle,
    url: canonicalPath,
    type: "article",
    publishedTime: "2026-09-14",
    authors: ["Kumia"],
    images: [absoluteUrl("/images/kumia-toothbrush-hero.png")],
  },
};

type Product = {
  name: string;
  details: string;
  why: string;
  watch: string;
  url: string;
  source: string;
};

type Setup = {
  number: string;
  slug: string;
  title: string;
  persona: string;
  combination: string;
  image: string;
  imageAlt: string;
  ownership: string[];
  reasoning: string[];
  products: Product[];
};

const setups: Setup[] = [
  {
    number: "01",
    slug: "predictable-cost",
    title: "Keep the cost predictable",
    persona: "One person who wants a simple first electric toothbrush",
    combination: "Oral-B Pro 1000 + CrossAction replacement heads",
    image: "/images/kumia-toothbrush-predictable-cost.png",
    imageAlt: "An unbranded electric toothbrush with four replacement heads and a charger",
    ownership: [
      "Current handle snapshot: $49.99",
      "CrossAction 4-pack snapshot: $39.94",
      "Four heads per year: about $39.94",
      "Standard Oral-B rechargeable head system, excluding iO heads",
    ],
    reasoning: [
      "The Pro 1000 keeps the ongoing purchase easy to understand. It ships with a CrossAction head, uses the long-running Oral-B rechargeable head fitting, and has a two-minute timer and pressure sensor. A standard charger is included.",
      "Oral-B recommends replacing a head about every three months. At the verified Target price of $39.94 for four CrossAction heads, one pack covers a year for one person. That makes the recurring cost visible before you buy the handle.",
      "The tradeoff is a basic ownership experience. There is no travel-charging case, and the current Target listing describes one Daily Clean mode. This setup suits a buyer who would rather have familiar refills than pay for a newer, separate head ecosystem.",
    ],
    products: [
      {
        name: "Oral-B Pro 1000",
        details: "Handle, CrossAction head, pressure sensor, timer, standard charger",
        why: "The clearest match for the setup and widely stocked in the US.",
        watch: "Oral-B iO heads do not fit this handle.",
        url: "https://oralb.com/en-us/pro-1000-rechargeable-electric-toothbrush-black/",
        source: "Oral-B",
      },
      {
        name: "Oral-B Pro 1000 at Target",
        details: "Current retailer listing with one Daily Clean mode",
        why: "Useful for checking current stock and price against the manufacturer listing.",
        watch: "Price and color availability can change.",
        url: "https://www.target.com/p/-/A-76559610",
        source: "Target",
      },
    ],
  },
  {
    number: "02",
    slug: "simple-charging",
    title: "Charge less, keep it simple",
    persona: "One person who prefers a slim handle and longer time between charges",
    combination: "Philips Sonicare 4100 HX3681/23 + C2 Plaque Control heads",
    image: "/images/kumia-toothbrush-simple-charging.png",
    imageAlt: "A slim unbranded electric toothbrush beside a compact charger and spare heads",
    ownership: [
      "Current handle snapshot: $49.99",
      "C2 3-pack snapshot: $31.99",
      "Four heads per year: about $42.65",
      "Regular Sonicare click-on head system, excluding Philips One",
    ],
    reasoning: [
      "The current US HX3681/23 listing gives this 4100 a manufacturer-rated battery life of up to 14 days. It includes a C2 Plaque Control head and uses the broad Sonicare click-on head family. The pressure sensor, QuadPacer, and SmartTimer cover the useful daily guidance without requiring an app.",
      "C2 heads are sold in three-packs. Using the verified $31.99 pack price and Philips' three-month replacement guidance, the per-head cost is about $10.66 and the yearly total is about $42.65. One three-pack does not quite cover a full year, so the calculation uses the per-head price rather than pretending a single pack is enough.",
      "Sonicare also sells a newer 4100 variant with a different included head and a longer listed battery figure. This recommendation names HX3681/23 because its C2 combination and 14-day specification are directly documented. Check the model number when shopping, since retailers use the 4100 name for more than one current configuration.",
    ],
    products: [
      {
        name: "Philips Sonicare 4100 HX3681/23",
        details: "C2 head, pressure sensor, QuadPacer, SmartTimer, up to 14-day battery",
        why: "The documented C2 bundle and simple charging routine match this setup.",
        watch: "Confirm HX3681/23 because other 4100 packages may include a different head.",
        url: "https://www.usa.philips.com/c-p/HX3681_23/4100-series-sonic-electric-toothbrush",
        source: "Philips",
      },
      {
        name: "Philips Sonicare 4100 at Target",
        details: "Current US retailer option in the 4100 family",
        why: "A practical stock and price check before purchase.",
        watch: "Read the model number and included-head line on the live listing.",
        url: "https://www.target.com/s/philips%2Bsonicare%2B4100",
        source: "Target",
      },
    ],
  },
  {
    number: "03",
    slug: "two-people",
    title: "Two people starting together",
    persona: "A couple or household that wants two complete handles from day one",
    combination: "Oral-B Pro 1000 Twin Pack + CrossAction replacement heads",
    image: "/images/kumia-toothbrush-two-people.png",
    imageAlt: "Two separate unbranded electric toothbrush handles in a shared bathroom",
    ownership: [
      "Current twin-pack snapshot: $79.99; Oral-B also shows $89.99 regular",
      "Two handles, two CrossAction heads, and two chargers",
      "Eight heads per household per year: about $79.88",
      "About $39.94 per person per year for heads",
    ],
    reasoning: [
      "The current US twin pack includes two handles, two CrossAction heads, and two chargers. That avoids passing one powered handle back and forth, and each person can keep a separate charger where it is convenient.",
      "The head cost doubles in a transparent way. Two people replacing a head every three months need eight heads per year. At $39.94 per four-pack, that is about $79.88 for the household, or $39.94 per person.",
      "The verified $79.99 price is a dated snapshot, and Oral-B also displays an $89.99 regular price. Treat the bundle price as something to check on purchase day. The more durable advantage is that both handles use the same standard Oral-B refill family, so the household can buy one type of head in larger packs.",
    ],
    products: [
      {
        name: "Oral-B Pro 1000 Twin Pack",
        details: "Two handles, two CrossAction heads, two standard chargers",
        why: "It supplies two complete daily setups instead of one shared handle.",
        watch: "The live price may move between promotional and regular pricing.",
        url: "https://oralb.com/en-us/products/pro-1000-rechargeable-electric-toothbrush-twin-pack-black-and-turquoise/",
        source: "Oral-B",
      },
      {
        name: "Oral-B Pro 1000 Twin Pack at Target",
        details: "Current major-retailer listing for the two-handle bundle",
        why: "Useful for checking local fulfillment and the current bundle price.",
        watch: "Keep replacement heads separate and identifiable for each person.",
        url: "https://www.target.com/p/-/A-82842386",
        source: "Target",
      },
    ],
  },
  {
    number: "04",
    slug: "frequent-travel",
    title: "Frequent travel",
    persona: "A frequent traveler who wants the case to charge the handle",
    combination: "Philips Sonicare 9900 Prestige + A3 head + USB charging travel case",
    image: "/images/kumia-toothbrush-travel.png",
    imageAlt: "An unbranded electric toothbrush with an open USB charging travel case",
    ownership: [
      "Current handle snapshot: $379.99",
      "A3 2-pack snapshot: $32.99",
      "Four heads per year: about $65.98",
      "USB charging travel case included",
    ],
    reasoning: [
      "The 9900 Prestige costs far more than the other three setups. Its useful ownership difference for this guide is the included USB charging travel case. The case carries the brush and can charge it, which removes the separate bathroom charging base from a frequent traveler's packing list.",
      "Philips lists up to 14 days of battery life for the US HX9990/11 model, along with five modes, three intensities, a pressure sensor, and app support. Those features are secondary here. The case is what changes the travel routine.",
      "A3 heads cost more to keep replacing. At $32.99 for two and a three-month replacement interval, two packs cover a year at about $65.98. The handle and annual head cost make this a specialized recommendation for someone who will repeatedly use the charging case, rather than a general upgrade for every buyer.",
    ],
    products: [
      {
        name: "Philips Sonicare 9900 Prestige HX9990/11",
        details: "A3 head, charging stand, USB charging travel case, up to 14-day battery",
        why: "The charging case directly solves the frequent-travel use case.",
        watch: "Its handle price and A3 refill cost are much higher than the other setups.",
        url: "https://www.usa.philips.com/p-p/HX9990_11/sonicare-9900-prestige-power-toothbrush-with-senseiq",
        source: "Philips",
      },
      {
        name: "Philips Sonicare 9900 Prestige at Target",
        details: "Current retailer listing with the USB charging travel case",
        why: "Useful for confirming the exact included accessories and current price.",
        watch: "Do not assume every Sonicare travel case can charge a handle.",
        url: "https://www.target.com/p/-/A-82490461",
        source: "Target",
      },
    ],
  },
];

const comparisonRows = [
  ["Predictable cost", "Not stated", "Standard base", "Oral-B standard", "$39.94", "Yes", "No", "Simple first brush"],
  ["Simple charging", "Up to 14 days", "Compact base", "Sonicare click-on", "$42.65", "Yes", "No", "Longer time between charges"],
  ["Two people", "Not stated", "Two bases", "Oral-B standard", "$79.88 household", "Yes", "No", "Couples"],
  ["Frequent travel", "Up to 14 days", "Base + USB case", "Sonicare A3/click-on", "$65.98", "Yes", "Yes", "Frequent travelers"],
];

const costRows = [
  ["Pro 1000", "$49.99", "CrossAction 4-pack, $39.94", "4", "$39.94", "Standard Oral-B; no iO"],
  ["Sonicare 4100", "$49.99", "C2 3-pack, $31.99", "4", "$42.65", "Click-on; no Philips One"],
  ["Pro 1000 Twin", "$79.99 snapshot", "CrossAction 4-pack, $39.94", "8 household", "$79.88 household", "Standard Oral-B; no iO"],
  ["9900 Prestige", "$379.99", "A3 2-pack, $32.99", "4", "$65.98", "A3 / Sonicare click-on"],
];

function Header() {
  return <header className={styles.siteHeader}>
    <Link className={styles.brand} href="/" aria-label="Kumia Labs home">
      <Image src="/brand/kumia-k-mark.png" alt="" width={40} height={40} />
      <span><b>Kumia</b><b>Labs</b></span>
    </Link>
    <nav aria-label="Primary navigation"><Link href="/#latest">Research</Link><Link href="/#latest">Home</Link><Link href="/#meet-kumia">About</Link></nav>
  </header>;
}

function ProductCard({ product }: { product: Product }) {
  return <article className={styles.productCard}>
    <p>{product.source}</p><h4>{product.name}</h4><p className={styles.details}>{product.details}</p>
    <dl><div><dt>Why pick it</dt><dd>{product.why}</dd></div><div><dt>Watch for</dt><dd>{product.watch}</dd></div></dl>
    <a href={product.url} target="_blank" rel="noopener noreferrer">View product <span aria-hidden="true">→</span></a>
  </article>;
}

function SetupSection({ setup }: { setup: Setup }) {
  return <section id={setup.slug} className={styles.setup} aria-labelledby={`${setup.slug}-title`}>
    <header><span>{setup.number}</span><div><p>SETUP {setup.number}</p><h2 id={`${setup.slug}-title`}>{setup.title}</h2></div></header>
    <figure><Image src={setup.image} alt={setup.imageAlt} width={1680} height={945} sizes="(max-width: 700px) 100vw, 1180px" /></figure>
    <div className={styles.setupSummary}>
      <div><p className={styles.eyebrow}>WHO IT’S FOR</p><h3>{setup.persona}</h3></div>
      <div><p className={styles.eyebrow}>THE COMBINATION</p><strong>{setup.combination}</strong></div>
    </div>
    <div className={styles.reasoning}>
      <h3>Why this combination works</h3><div>{setup.reasoning.map((text) => <p key={text}>{text}</p>)}</div>
    </div>
    <div className={styles.ownership}>
      <div><p className={styles.eyebrow}>WHAT OWNERSHIP LOOKS LIKE</p><h3>Costs and routines after purchase</h3></div>
      <ul>{setup.ownership.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
    <section className={styles.readyMade} aria-labelledby={`${setup.slug}-products`}><h3 id={`${setup.slug}-products`}>Ready-made options</h3><p>Prices and availability were checked on September 14, 2026. Confirm the live listing before buying.</p><div>{setup.products.map((product) => <ProductCard key={product.name} product={product} />)}</div></section>
  </section>;
}

export default function ElectricToothbrushGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description: subtitle,
    datePublished: "2026-09-14", dateModified: "2026-09-14", author: { "@type": "Person", name: "Kumia" },
    publisher: { "@type": "Organization", name: "Kumia Labs", url: absoluteUrl() },
    mainEntityOfPage: absoluteUrl(canonicalPath), image: absoluteUrl("/images/kumia-toothbrush-hero.png"),
  };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
    { "@type": "ListItem", position: 2, name: "Home research", item: absoluteUrl("/#latest") },
    { "@type": "ListItem", position: 3, name: title, item: absoluteUrl(canonicalPath) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replaceAll("<", "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replaceAll("<", "\\u003c") }} />
    <Header />
    <article>
      <div className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><Link href="/#latest">Home research</Link><span>/</span><span>Electric toothbrush guide</span></div>
      <header className={styles.hero}>
        <div className={heroLayout.copy}><p>OWNERSHIP GUIDE · 2026.09.14</p><h1>{title}</h1><p>{subtitle}</p></div>
        <figure><Image src="/images/kumia-toothbrush-hero.png" alt="A bright bathroom counter arranged around four electric toothbrush ownership needs" width={1680} height={945} sizes="100vw" preload /></figure>
      </header>

      <div className={styles.content}>
        <section className={styles.intro} aria-label="Introduction">
          <div><Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} sizes="(max-width: 600px) 88px, 140px" /></div>
          <p>A toothbrush handle is only the first purchase. The head you replace every few months, the charger left on the counter, and the case packed for a trip determine what living with it actually costs.</p>
        </section>

        <section className={styles.comparison} aria-labelledby="quick-comparison"><div className={styles.sectionHeading}><p>AT A GLANCE</p><h2 id="quick-comparison">Quick comparison</h2></div><div className={styles.tableScroll}><table><thead><tr>{["Setup", "Battery", "Charging", "Head system", "Head cost/year", "Pressure sensor", "Travel charging", "Best for"].map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={`${row[0]}-${i}`}>{cell}</th> : <td key={`${row[0]}-${i}`}>{cell}</td>)}</tr>)}</tbody></table></div></section>

        <nav className={styles.index} aria-label="Four electric toothbrush setups"><p>FOUR SETUPS</p><ol>{setups.map((setup) => <li key={setup.slug}><span>{setup.number}</span><a href={`#${setup.slug}`}>{setup.title}</a></li>)}</ol></nav>
        {setups.map((setup) => <SetupSection key={setup.slug} setup={setup} />)}

        <section className={styles.cost} aria-labelledby="ownership-cost"><div className={styles.sectionHeading}><p>PRICE SNAPSHOT · 2026.09.14</p><h2 id="ownership-cost">Ownership cost</h2></div><p>Each yearly estimate uses the manufacturer recommendation of one replacement head every three months. Four heads are needed per person each year. Pack prices are converted to a per-head cost, then multiplied by four. The twin setup uses eight heads for two people.</p><div className={styles.tableScroll}><table><thead><tr>{["Setup", "Current handle price", "Replacement pack", "Heads/year", "Approx. yearly head cost", "Ecosystem"].map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{costRows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={`${row[0]}-${i}`}>{cell}</th> : <td key={`${row[0]}-${i}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className={styles.note}>Prices are snapshots, not promises. Sales, pack sizes, and retailer stock can change.</p></section>

        <section className={styles.choose} aria-labelledby="how-to-choose"><div className={styles.sectionHeading}><p>HOW TO CHOOSE</p><h2 id="how-to-choose">Start with the refill and charging routine</h2></div><div><p>Check the exact handle model first, then confirm which head family it accepts. Oral-B&apos;s standard rechargeable heads and iO heads are separate systems. Regular Sonicare click-on heads also do not fit Philips One handles.</p><p>For one person, compare the annual head cost before comparing extra modes. For two people, decide whether you want separate handles and chargers. Frequent travelers should check whether the included case actually charges the handle, since many cases only protect it.</p><p>A pressure sensor and two-minute timer are useful everyday features. If you have pain, bleeding, dental work, or a condition that changes how you should brush, ask a dental professional for guidance rather than relying on a shopping guide.</p></div></section>

        <aside className={styles.closing} aria-label="Kumia's closing note"><Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} sizes="(max-width: 600px) 88px, 126px" /><p>Choose the refill system and charging routine you can live with. The handle matters, but those are the parts you keep dealing with after the first week.</p></aside>

        <section className={styles.sources} aria-labelledby="sources"><h2 id="sources">Sources and methodology</h2><p>Specifications and prices were checked on September 14, 2026. Manufacturer pages were used for compatibility, included accessories, battery claims, and replacement guidance. Major US retailer pages were used for dated price snapshots.</p><ul><li><a href="https://oralb.com/en-us/pro-1000-rechargeable-electric-toothbrush-black/">Oral-B Pro 1000</a></li><li><a href="https://oralb.com/en-us/products/pro-1000-rechargeable-electric-toothbrush-twin-pack-black-and-turquoise/">Oral-B Pro 1000 Twin Pack</a></li><li><a href="https://www.usa.philips.com/c-p/HX3681_23/4100-series-sonic-electric-toothbrush">Philips Sonicare 4100 HX3681/23</a></li><li><a href="https://www.usa.philips.com/p-p/HX9990_11/sonicare-9900-prestige-power-toothbrush-with-senseiq">Philips Sonicare 9900 Prestige HX9990/11</a></li><li><a href="https://www.usa.philips.com/c-f/XC000006600/how-often-should-i-replace-my-philips-sonicare-brush-head">Philips brush-head replacement guidance</a></li><li><a href="https://www.target.com/p/-/A-75455633">Target Oral-B CrossAction 4-pack</a></li><li><a href="https://www.target.com/s/sonicare%2Btoothbrush%2Brefills%2Bc2">Target Sonicare C2 head listings</a></li><li><a href="https://www.target.com/p/-/A-82383944">Target Sonicare A3 2-pack</a></li></ul></section>
      </div>
    </article>
    <SiteFooter />
  </main>;
}
