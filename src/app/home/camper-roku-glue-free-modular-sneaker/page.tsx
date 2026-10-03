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

const canonicalPath = "/home/camper-roku-glue-free-modular-sneaker",
  title = "Camper Built a Sneaker With No Glue — So You Can Take the Whole Shoe Apart",
  seoTitle = "Camper ROKU: The No-Glue Sneaker You Can Take Apart",
  metaDescription =
    "Camper's ROKU sneaker separates into six components and rebuilds without glue or tools. How the lace-and-cord system works, why Camper built it, and what “designed for circularity” actually proves.",
  supportingCopy =
    "ROKU turns a normally permanent stack of fabric, foam, and rubber into four replaceable packs—but taking a shoe apart is not the same as closing its recycling loop.",
  publishedDate = "2026-10-02",
  updatedDate = "2026-10-02",
  heroImage = "/images/kumia-camper-roku-glue-free-modular-sneaker-hero.png",
  cardImage = "/images/kumia-camper-roku-glue-free-modular-sneaker-card-16x9.png",
  bodyOneImage = "/images/kumia-camper-roku-glue-free-modular-sneaker-body-01.png";

function publicAssetExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

const hasHeroImage = publicAssetExists(heroImage);
const hasCardImage = publicAssetExists(cardImage);
const hasBodyOneImage = publicAssetExists(bodyOneImage);

// "Sources recommended at article end" from the FINAL Work Package, section 18.
// Product/pack pages and other primary-source-ledger entries are linked inline
// as ordinary editorial links instead, per the Work Package's own instruction
// to keep this public list short.
const SOURCES = {
  C1: {
    short: "Camper — ROKU modularity",
    label: "Camper — ROKU modularity, parts, suppliers, and materials",
    url: "https://www.camper.com/en_US/content/modularity/roku",
    claim: "Six components, four retail packs, materials, suppliers, and current U.S. prices.",
  },
  C2: {
    short: "Camper — assembly manual",
    label: "Camper — illustrated ROKU assembly instructions",
    url: "https://www.camper.com/html/roku-contents/roku-instructions.pdf",
    claim: "Official 9-page, 11-stage tool-free build process.",
  },
  C3: {
    short: "Camper — 2024 report",
    label: "Camper — 2024 Sustainability Report",
    url: "https://static.camper.com/mkt/fw20_landings/csr/files/en/new/2024-Camper-Sustainability%20Report-EN.pdf",
    claim: "2024 launch, three-year development, the “NO GLUE” label, and the Wabi/Finproject context.",
  },
  C4: {
    short: "Camper — Origins",
    label: "Camper — company origins",
    url: "https://www.camper.com/sites/default/files/pdf/EN_01_origins_en.pdf",
    claim: "Antonio Fluxà, 1877 machinery, and the Inca shoemaking lineage.",
  },
  C5: {
    short: "Camper — modularity timeline",
    label: "Camper — Wabi, ROKU, and Right Niko modularity timeline",
    url: "https://www.camper.com/en_US/content/modularity",
    claim: "Wabi → ROKU → Right Niko program dates, including ROKU's January 2021 ideation and March 2024 launch.",
  },
  M1: {
    short: "Inca museum",
    label: "Inca Footwear and Industry Museum — collection and industrial context",
    url: "https://museu.incaciutat.com/en/collection/",
    claim: "Mallorca/Inca's shoemaking history predating Camper by centuries.",
  },
  A1: {
    short: "ASICS — shoe anatomy",
    label: "ASICS — anatomy of a running shoe",
    url: "https://www.asics.com/se/en-se/running-advice/the-anatomy-of-a-running-shoe/",
    claim: "Plain-language definitions of upper, last, midsole, and outsole in conventional construction.",
  },
  N1: {
    short: "Nike — ISPA Link",
    label: "Nike — ISPA Link and the disassembly problem",
    url: "https://about.nike.com/en/magazine/ispa-link-link-axis",
    claim: "A comparable glue-free, interlocking-module approach built around Nike's own return system.",
  },
  RF1: {
    short: "Refashion — sole recycling",
    label: "Refashion — recycling solutions for shoe soles",
    url: "https://pro.refashion.fr/sites/default/files/rapport-etude/study_recycling_solutions_soles_refashion2025.pdf",
    claim: "Why cemented, mixed-material soles are difficult to recover at end of life.",
  },
  SM1: {
    short: "Centre for SMART",
    label: "Centre for SMART — post-consumer footwear material separation",
    url: "https://www.centreforsmart.co.uk/system/publications/attachments/000/000/122/original/An_air-based_automated_material_recycling_system_for_postconsumer_footwear_products.pdf",
    claim: "Mixed footwear construction complicates automated material recovery.",
  },
} as const;

type SourceId = keyof typeof SOURCES;

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
          <span>AWAITING RIGHTS-CLEARED PHOTOGRAPHY</span>
          <strong>{label}</strong>
          <small>Requires written permission from press@camper.com, or original photography of a purchased sample &mdash; not an AI-generated image. See {src}</small>
        </div>
      )}
    </figure>
  );
}

function ConnectionLogicDiagram() {
  return (
    <figure className={local.techFigure} aria-labelledby="connection-title" aria-describedby="connection-note">
      <div className={local.techHeading}>
        <div>
          <span>TECH-1 · CONCEPTUAL, NOT TO SCALE</span>
          <h3 id="connection-title">Two ways to join an upper to a sole</h3>
        </div>
        <p id="connection-note">A typical cemented joint versus ROKU&rsquo;s mechanical path.</p>
      </div>
      <div className={local.connectionPanels}>
        <section aria-labelledby="connection-cemented">
          <p className={local.connectionEyebrow}>Typical cemented sneaker</p>
          <h4 id="connection-cemented">One bonded joint</h4>
          <ol className={local.stackDiagram} aria-label="Conventional sneaker layers">
            <li>Upper</li>
            <li>Strobel board / lasting surface</li>
            <li className={local.glueBand}>Adhesive interface</li>
            <li>Midsole</li>
            <li>Outsole</li>
          </ol>
          <p>Prepared surfaces receive adhesive, then pressure and heat cure a bond that is not meant to separate.</p>
        </section>
        <section aria-labelledby="connection-roku">
          <p className={local.connectionEyebrow}>Camper ROKU</p>
          <h4 id="connection-roku">A traceable mechanical path</h4>
          <ol className={local.rokuFlow} aria-label="ROKU connection sequence">
            <li>Knitted upper loops</li>
            <li>Outsole molded slots</li>
            <li>Figure-eight bottom cord</li>
            <li>Shoelace, sewn around the cord</li>
            <li>Foot pressure seats the stack</li>
          </ol>
          <p>No single joint is doing the whole job. Geometry, tension, and the wearer distribute it instead. <Src id="C2" /></p>
        </section>
      </div>
      <figcaption>Conceptual, not a manufacturer-issued cutaway. Not every cemented sneaker uses identical construction or adhesive coverage. <Src id="A1" /></figcaption>
    </figure>
  );
}

function AssemblyPhasesDiagram() {
  const phases = [
    { title: "Anchor the upper", body: "Hook the rear lace loops through the outsole's slots and pull the shell into alignment." },
    { title: "Load the footbed", body: "Slide the removable footbed into the stretch inner sock." },
    { title: "Insert the sock", body: "Press the sock-and-footbed assembly into the shell." },
    { title: "Seat the cord", body: "Shape the bottom cord into a figure eight and lock its knot into the outsole's slot." },
    { title: "Sew the lace", body: "Starting at eyelet 1, pass the shoelace outside-in, looping it under and around the cord like thread." },
    { title: "Finish and repeat", body: "Cross the remaining eyelets, tighten, check the cord stays seated, then build the other shoe." },
  ];
  return (
    <figure className={local.techFigure} aria-labelledby="phases-title" aria-describedby="phases-note">
      <div className={local.techHeading}>
        <div>
          <span>TECH-2 · CAMPER&rsquo;S 11 STAGES, COMPRESSED TO 6</span>
          <h3 id="phases-title">Six phases, no tools</h3>
        </div>
        <p id="phases-note">An editorial summary of Camper&rsquo;s own manual.</p>
      </div>
      <ol className={local.phaseList}>
        {phases.map((phase, i) => (
          <li key={phase.title}>
            <span>{i + 1}</span>
            <div>
              <strong>{phase.title}</strong>
              <p>{phase.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption>
        Editorial summary only. Follow Camper&rsquo;s own instructions for an actual build, not this diagram. <Src id="C2" />
      </figcaption>
    </figure>
  );
}

function HistoryTimeline() {
  const points = [
    { year: "1877", label: "Fluxà brings shoemaking machinery to Inca" },
    { year: "1975", label: "Camper founded in Inca" },
    { year: "1988", label: "Twins: intentionally mismatched pairs" },
    { year: "2000", label: "Wabi: fewer, simpler components" },
    { year: "2022", label: "Junction: one interchangeable toe cap" },
    { year: "2024", label: "ROKU: the complete shoe becomes six parts" },
    { year: "2026", label: "Right Niko extends the approach" },
  ];
  return (
    <figure className={local.timelineFigure} aria-labelledby="timeline-title">
      <div className={local.techHeading}>
        <div>
          <span>TIMELINE · CAMPER&rsquo;S OWN DATES</span>
          <h3 id="timeline-title">From one factory to six separable parts</h3>
        </div>
      </div>
      <ol className={local.timeline}>
        {points.map((p) => (
          <li key={p.year}>
            <span>{p.year}</span>
            <p>{p.label}</p>
          </li>
        ))}
      </ol>
      <figcaption>
        Company and model dates as published by Camper. <Src id="C4" /> <Src id="C5" />
      </figcaption>
    </figure>
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

export default function CamperRokuGlueFreeModularSneaker() {
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
          <Link href="/">Home</Link><span>/</span><Link href="/#latest">Home research</Link><span>/</span><span>Camper ROKU</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            {hasHeroImage ? (
              <Image src={heroImage} alt="Conceptual modular sneaker shown assembled beside separable components" width={1672} height={941} sizes="100vw" priority />
            ) : (
              <div className={styles.reservedHero} role="img" aria-label="Rights-cleared hero photography pending: an assembled Camper ROKU sneaker beside its six separated components.">
                <div><strong>{title}</strong><p>{supportingCopy}</p><span>Rights-cleared hero photography pending · {heroImage}</span></div>
              </div>
            )}
          </figure>
          <p className={local.heroNote}>Conceptual illustration&mdash;not a product photograph.</p>
        </header>

        <ArticleResearchMeta left="Cemented sneaker construction" right="Camper ROKU, six parts" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div><Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} /></div>
            <p>Most sneakers are built to never come apart. This one is built to.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>
              Most sneakers are built to stay together. Camper built one around the idea that its owner should be able to pull it apart.
            </p>
            <p>
              Camper is a footwear company from Mallorca, Spain&mdash;not a running-shoe giant, but a family business with a long habit of making shoes that behave or look slightly strange. Its ROKU sneaker arrives fully assembled, yet it can be separated into six components and rebuilt without cutting a stitch or dissolving a glue line. The official instructions do not call for tools. They ask you to use the shoe&rsquo;s own laces almost like sewing thread.
            </p>
            <div className={local.analysisNote}>
              <span>SCOPE NOTE</span>
              <p>Here, &ldquo;no glue&rdquo; describes the final joining of ROKU&rsquo;s six components&mdash;not every adhesive, binder, coating, or lamination that may appear in component manufacturing. <Src id="C3" /> <Src id="C2" /></p>
            </div>
            <p>
              That sounds like a repair trick. It is really a different answer to a more basic question: is a sneaker one finished object, or is it a collection of parts that should remain accessible after the factory is done with it?
            </p>
          </section>

          <section className={local.prose} aria-labelledby="resists">
            <h2 id="resists">Why a normal sneaker does not want to come apart</h2>
            <p>
              From the outside, an ordinary sneaker looks simple: a fabric or leather top attached to a rubbery bottom. Inside, it is a stack of specialized layers.
            </p>
            <p>
              The <strong>upper</strong> wraps the foot. Under it, many athletic shoes use a <strong>Strobel board</strong>, a fabric layer stitched to the bottom edge of the upper. That assembly is pulled over a foot-shaped mold called a <strong>last</strong>, which gives the shoe its size and shape. Below it sits a cushioning <strong>midsole</strong>, then a tougher <strong>outsole</strong> that meets the ground. A removable <strong>sockliner</strong> or footbed may sit inside. <Src id="A1" />
            </p>
            <p>
              Those layers do different jobs, so they are often made from different materials: polyester knit, polyurethane reinforcements, EVA foam, rubber, and more. The practical way to turn them into one durable, flexible object is often cemented construction. The factory prepares the mating surfaces, applies adhesive, presses the upper and sole unit together, and lets the bond set. Stitching can reinforce some designs, and vulcanized shoes use heat and rubber chemistry, but the goal is similar: do not let the shoe separate while someone is walking in it.
            </p>
            <p>
              That success becomes a problem at the other end of the shoe&rsquo;s life. Pulling a bonded upper away from foam and rubber can damage all three. Industrial recyclers may have to shred the whole shoe and then try to separate mixed fragments into textile, foam, and rubber streams. The material may be useful, but often for a lower-value application. <Src id="RF1" /> <Src id="SM1" />
            </p>
            <p>
              This is why <strong>recycled content</strong> and <strong>recyclability</strong> are not the same achievement. A shoe can contain plastic recovered from an earlier product and still be difficult to separate after its own useful life. The first claim describes what went in. The second depends on what can be recovered later.
            </p>
          </section>

          <ConnectionLogicDiagram />

          <section className={local.prose} aria-labelledby="six-pieces">
            <h2 id="six-pieces">The six pieces hiding inside ROKU</h2>
            <p>
              ROKU looks unusual even before it comes apart. A thick lace path runs around the edge where an upper would normally disappear into a glue line. Follow that path and the shoe resolves into six component types:
            </p>
            <ol>
              <li>a knitted upper;</li>
              <li>a removable shoelace;</li>
              <li>a bottom cord with a knot;</li>
              <li>a stretch inner sock;</li>
              <li>a removable EVA footbed;</li>
              <li>a slotted EVA outsole.</li>
            </ol>
            <p>
              The name is literal. <strong>Roku means &ldquo;six&rdquo; in Japanese.</strong> Camper also says it draws from Wabi, a shoe the company introduced in 2000 after looking to Japanese minimalism and trying to reduce the number and complexity of components. That is the documented connection. ROKU&rsquo;s name is not an invitation to paste vague &ldquo;Zen&rdquo; ideas onto a Spanish sneaker. <Src id="C5" /> <Src id="C3" />
            </p>
            <p>
              There is one apparent contradiction on Camper&rsquo;s store: a six-piece shoe is sold in <strong>four packs</strong>. The arithmetic becomes clear when you look at the boxes. The{" "}
              <a href="https://www.camper.com/en_US/men/bags-accessories/linea.rku0/camper-roku_shoe_uppers-KS00064-003" target="_blank" rel="noopener noreferrer">$60 Uppers pack</a>{" "}
              contains three of the physical components&mdash;the knitted uppers, shoelaces, and bottom cords for both feet. The other three packs are{" "}
              <a href="https://www.camper.com/en_US/men/bags-accessories/linea.rku0/camper-roku_inner_socks-KS00065-001" target="_blank" rel="noopener noreferrer">Inner Socks ($55)</a>,{" "}
              <a href="https://www.camper.com/en_US/women/bags-accessories/linea.rku0/camper-roku_footbeds-KS00067-003" target="_blank" rel="noopener noreferrer">Footbeds ($45)</a>, and{" "}
              <a href="https://www.camper.com/en_US/men/bags-accessories/linea.rku0/camper-roku_outsoles-KS00066-001" target="_blank" rel="noopener noreferrer">Outsoles ($60)</a>. <Src id="C1" />
            </p>
            <p>
              At the prices checked on Camper&rsquo;s U.S. site in October 2026, a finished ROKU started at $205, while the four component packs totaled $220. The parts system is not a cheaper way to acquire the first shoe; it is a way to change or replace one category later.
            </p>
          </section>

          <EditorialAsset
            src={bodyOneImage}
            available={hasBodyOneImage}
            width={1672}
            height={941}
            label="BODY-1 · the real ROKU and its real six parts"
            alt="Conceptual modular sneaker shown with its separate component types"
          />
          <p className={local.caption}>
            Conceptual illustration of the modular idea, not a photograph of the actual product. Camper&rsquo;s real ROKU consists of six physical component types&mdash;knitted upper, shoelace, bottom cord, inner sock, footbed, and outsole&mdash;sold through four replacement packs.
          </p>

          <section className={local.prose} aria-labelledby="laces">
            <h2 id="laces">How laces do the job of a glue line</h2>
            <p>
              ROKU&rsquo;s outsole is more than the part that touches pavement. It is the chassis. Molded slots around its edge receive loops at the rear of the knitted upper and a separate knotted cord that runs around the perimeter.
            </p>
            <p>
              Camper&rsquo;s build guide starts by hooking the upper into the outsole and pulling it into alignment. The footbed slides into the inner sock, and that soft assembly is pressed inside the shell. Then the unusual work begins. You bend the bottom cord into a figure eight, seat it in the outsole&rsquo;s slots, and lock its knot into place. <Src id="C2" /> <Src id="C1" />
            </p>
            <p>
              The shoelace now becomes thread. Starting at a numbered eyelet, it passes from the outside in, loops under and around the bottom cord, returns through the next eyelet, and continues around the shoe. Near the front it crosses over in a more familiar lacing pattern. The same continuous tension that closes the upper also binds it to the cord anchored in the outsole.
            </p>
            <p>
              In other words, Camper did not discover a glue substitute that can be poured over the same old joint. It redistributed the joint across several visible things: molded geometry locates the pieces, the cord acts as a rail, the lace ties the upper to that rail, the knit stretches around the foot, and the person&rsquo;s weight helps keep the nested forms seated.
            </p>
            <p>
              The official manual shows no tools, but &ldquo;tool-free&rdquo; should not be mistaken for &ldquo;instant.&rdquo; Camper does not publish an assembly time or a rated number of rebuild cycles. Some owners say the concept is comfortable and useful; others describe a fiddly, lengthy build. One official parts reviewer said they would rather buy another finished color than assemble it again.
            </p>
          </section>

          <AssemblyPhasesDiagram />

          <section className={local.prose} aria-labelledby="why-camper">
            <h2 id="why-camper">Why this idea came from Camper</h2>
            <p>
              ROKU makes more sense when you know where Camper came from. Inca, the Mallorcan city where it is headquartered, has a footwear culture that predates the brand by centuries. The city&rsquo;s Footwear and Industry Museum traces local shoemaking back to the thirteenth century. The arrival of rail in 1875 helped workshops in the region move goods toward the port at Palma. <Src id="M1" />
            </p>
            <p>
              Camper&rsquo;s own family story begins in 1877. It says shoemaker Antonio Fluxà returned from England with new manufacturing knowledge and machinery, then brought Inca craftspeople into mechanized production. His grandson Lorenzo Fluxà founded Camper in 1975. The brand name means &ldquo;peasant&rdquo; or &ldquo;farmer&rdquo; in Catalan, a reference to the island rather than to camping. <Src id="C4" />
            </p>
            <p>
              The company never became a smaller imitation of Nike or Adidas. Its defining products tend to treat the shoe itself as a design argument. Runner brought sports-shoe language into the line in 1982. Twins, introduced in 1988, made the left and right shoes intentionally different but complementary. The 1995 Pelotas put 87 ball-like elements underfoot. Wabi simplified. Peu followed with a flexible, foot-shaped form. More recently, Junction made its rubber toe cap interchangeable, while the one-piece EVA Kobarah sandal pursued recyclability by reducing the object to one main material.
            </p>
            <p>
              ROKU chooses the opposite route from Kobarah: instead of making the shoe one material, it keeps different materials but makes the main groups separable. Camper says the project took three years from sketches and testing to its 2024 launch. The result feels less like a sustainability idea dropped onto a finished sneaker than the latest expression of an old Camper habit: make the construction visible, then turn it into the character of the shoe. <Src id="C3" />
            </p>
            <p>
              ROKU was not the end. Camper&rsquo;s timeline shows Right Niko beginning in June 2024 and launching in May 2026, extending modular, glue-free construction to a two-piece ballerina. <Src id="C5" />
            </p>
          </section>

          <HistoryTimeline />

          <section className={local.prose} aria-labelledby="repairable">
            <h2 id="repairable">Repairable, as long as the parts exist</h2>
            <p>
              The obvious advantage of four packs is that a worn outsole does not automatically condemn a good upper. A stained inner sock can be replaced. A different outsole or knit color changes the appearance without buying another complete pair. Camper labels the packs unisex, although they are still size-specific.
            </p>
            <p>
              But a modular product is only as repairable as its replacement system. The smallest physical component is not always the smallest thing Camper sells. The shoelace and thin bottom cord come in the complete $60 Uppers pack. If only the cord fails, the current retail answer is not a $5 cord; it is the larger pack, a warranty claim, or a do-it-yourself repair Camper has not documented.
            </p>
            <p>
              That distinction appears in the reviews. Owners have reported cord or lace failures, including one complaint about repeated degradation and the wait created by returning and reordering an upper pack. Other reviews praise the width, lightness, cushioning, and ability to refresh the shoe. Some dislike the flat support, heel feel, creaking, or assembly labor.
            </p>
            <p>
              These anecdotes cannot establish a defect rate. The samples are small and self-selected, and Camper&rsquo;s product pages may pool colors or regions. They do reveal the system&rsquo;s real bargain: a failure point is more accessible, but the owner now depends on pack pricing, compatible stock, shipping, and Camper&rsquo;s willingness to support the platform. The company has not published a long-term availability guarantee for every size and color.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="circularity">
            <h2 id="circularity">The recycling claim needs seven separate answers</h2>
            <p>
              ROKU is sometimes described with one big word&mdash;&ldquo;circular&rdquo;&mdash;but its evidence becomes clearer when that word is unpacked.
            </p>
            <p>
              <strong>Recycled content:</strong> yes. Camper says the laces and cord use 100% recycled PET; the upper and inner-sock group uses 75% recycled PET; and the XL EXTRALIGHT EVA outsole contains 51% recycled material. Camper&rsquo;s sources conflict on the footbed percentage, so no precise figure is used here. <Src id="C1" />
            </p>
            <p>
              <strong>Modularity:</strong> yes. The product was designed as six components, and Camper sells them through four size- and color-specific replacement packs.
            </p>
            <p>
              <strong>Owner disassembly:</strong> yes. An ordinary user can release and separate the major components without cutting or otherwise destroying them, following Camper&rsquo;s tool-free instructions. <Src id="C2" />
            </p>
            <p>
              <strong>Repairability:</strong> partly. Four replaceable packs are materially better than no parts, but repair depends on the failed component, current inventory, and price.
            </p>
            <p>
              <strong>Recyclability:</strong> conditional. Camper says parts can be upcycled into new shoe components if their quality is preserved, or downcycled for another industry. &ldquo;Designed to be recycled&rdquo; describes intent and preparation; it does not prove that every returned part finds a viable processor. <Src id="C3" />
            </p>
            <p>
              <strong>Take-back:</strong> yes at the brand level. Camper&rsquo;s general{" "}
              <a href="https://www.camper.com/en_US/content/takeback" target="_blank" rel="noopener noreferrer">Take Back program</a>{" "}
              accepts Camper shoes in any condition and sorts them for reuse, recycling, or responsible disposal. Its{" "}
              <a href="https://www.camper.com/en_US/content/recamper" target="_blank" rel="noopener noreferrer">ReCamper program</a>{" "}
              also cleans, repairs, and refurbishes eligible shoes. Camper does not publish a ROKU-specific path through those programs.
            </p>
            <p>
              <strong>Closed loop:</strong> not demonstrated publicly. Camper says it developed the outsole with Finproject so the foam can be shredded into new footwear material. What is missing is a count: how many worn consumer ROKUs have come back, what percentage was recovered, and how much became another ROKU? Without that evidence, &ldquo;old ROKU becomes new ROKU&rdquo; remains a design ambition, not a measured commercial result. <Src id="C3" />
            </p>
            <p>
              Other shoe companies show why the distinctions matter. Nike&rsquo;s glue-free ISPA Link uses three interlocking modules but is organized around Nike&rsquo;s return system rather than a consumer parts store. Adidas&rsquo;s Futurecraft.Loop tried a nearly monomaterial TPU shoe meant to be ground and remade. Salomon&rsquo;s INDEX.01 separates a polyester upper from a TPU bottom after return. On&rsquo;s Cyclon model has also depended on collecting complete shoes. Camper&rsquo;s unusual contribution is not that it invented circular footwear. It puts disassembly and color/part replacement directly in the owner&rsquo;s hands. <Src id="N1" />
            </p>
            <div className={local.analysisNote}>
              <span>EDITORIAL SHORTHAND</span>
              <p>Designed for circularity; not proven closed loop.</p>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="conclusion">
            <h2 id="conclusion">A shoe as a system, not a verdict</h2>
            <p>
              ROKU does not solve footwear waste by coming apart. It still uses several polymers, still needs a collection and processing system, and still relies on replacement packs remaining available. The most important environmental result&mdash;what actually happens to worn shoes at scale&mdash;has not been published.
            </p>
            <p>
              What it does prove is narrower and more tangible. A sneaker&rsquo;s major pieces do not have to become inaccessible the moment they leave a factory. They can stay legible: upper, cord, sock, footbed, outsole. The connection can be something an owner sees, understands, undoes, and rebuilds.
            </p>
            <p>
              That may be ROKU&rsquo;s best trick. Camper did not merely put recycled material into a conventional shoe. It changed the unit of thought. The finished sneaker is no longer the smallest thing you are allowed to own. It is a temporary arrangement of six parts.
            </p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>Six parts, one shoe, and a question worth asking about everything else you own.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Kumia Labs reviewed Camper&rsquo;s official product, modularity, sustainability-report, and company-history pages, its illustrated assembly manual, Inca&rsquo;s municipal footwear-museum history, a manufacturer explainer of conventional shoe construction, a comparable manufacturer disassembly program, and two independent technical sources on footwear-material recycling, on October 2, 2026. &ldquo;No glue&rdquo; is scoped to the joining of ROKU&rsquo;s six finished components; it is not a claim about adhesives used anywhere upstream in component manufacturing. Price, stock, and review snapshots are dated and will drift. Recycled-content and recyclability are reported as separate claims, and no closed-loop outcome is claimed. No Amazon or other commerce link is used; Camper&rsquo;s own product and pack pages are the clearest source for size-compatible parts and current colors.
            </p>
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
