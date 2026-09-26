import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmazonCta, AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { LegoDuploExplorer } from "@/components/lego-duplo-explorer";
import { StudDiagram } from "@/components/lego-duplo-visuals";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SOURCES, type SourceId } from "@/data/lego-duplo-explorer";
import { amazonProductUrl } from "@/lib/amazon";
import { absoluteUrl } from "@/lib/site";
import styles from "../../home/what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/toys/lego-duplo-hidden-connection",
  title = "DUPLO Looks Like a Different Toy. It Was Designed to Fit LEGO.",
  seoTitle = "DUPLO Was Designed to Fit LEGO — Here’s the Hidden Connection",
  metaDescription =
    "A regular 2×2 LEGO brick fits one hollow DUPLO stud. Discover the 1960s design story, the clever reason it works, and the limits.",
  ogDescription = "The empty space inside one DUPLO stud reveals how LEGO kept two very different scales inside the same system.",
  publishedDate = "2026-09-20",
  updatedDate = "2026-09-20",
  heroImage = "/images/kumia-lego-duplo-hidden-connection-hero.png";

function EditorialImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={local.editorialSlot}>
      <Image src={src} alt={alt} width={1672} height={941} sizes="(max-width: 700px) 100vw, 1120px" className={local.editorialImg} />
    </figure>
  );
}

function Src({ id }: { id: SourceId }) {
  return (
    <a className={local.src} href={SOURCES[id].url} target="_blank" rel="noopener noreferrer" aria-label={`Source: ${SOURCES[id].label}`}>
      {SOURCES[id].short} ↗
    </a>
  );
}

function Product({ problem, name, facts, watch, id, link }: { problem: string; name: string; facts: string; watch: string; id: SourceId; link: string }) {
  return (
    <div className={local.example}>
      <p className={local.eyebrow}>{problem}</p>
      <h4>{name}</h4>
      <p>{facts}</p>
      <p>
        <strong>Watch for:</strong> {watch}
      </p>
      <p>
        <a href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">{link} →</a>
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: `${seoTitle} | Kumia Labs`,
  description: metaDescription,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description: ogDescription,
    url: canonicalPath,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    authors: ["Kumia"],
    images: [absoluteUrl(heroImage)],
  },
};

export default function LegoDuploHiddenConnection() {
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
    image: absoluteUrl(heroImage),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      { "@type": "ListItem", position: 2, name: "Toys research", item: absoluteUrl("/#latest") },
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
          <Link href="/#latest">Toys research</Link>
          <span>/</span>
          <span>LEGO and DUPLO</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image
              src={heroImage}
              alt="Kumia Labs cover: DUPLO Looks Like a Different Toy. It Was Designed to Fit LEGO. Stacked large DUPLO-style bricks in primary colors beside smaller LEGO-style bricks on a sunlit playroom table, with icons for 2× scale, hollow studs, and 1969 launch."
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
          </figure>
        </header>

        <ArticleResearchMeta left="LEGO brick" right="DUPLO brick" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} />
            </div>
            <p>One plastic bump has an empty space inside it. That empty space is the whole story.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>
              Put one ordinary 2×2 LEGO brick over a single hollow stud on a DUPLO brick. It fits.
              <Src id="S1" />
              <Src id="S2" />
            </p>
            <p>That sounds like a party trick—until you learn that the connection is the reason DUPLO ended up at its familiar size.</p>
            <p>
              DUPLO is not merely a preschool copy made larger and placed in a different box. LEGO spent the 1960s testing enlarged bricks at several scales. The company wanted something safer and easier for young children to handle, but it also wanted the new brick to remain inside the LEGO System in Play.
              <Src id="S3" />
            </p>
            <p>So the large brick had to do two jobs that seem to pull in opposite directions: become dramatically bigger, and still connect to the smaller brick that already existed.</p>
            <p>The answer is hiding in plain sight. It is the empty space inside a DUPLO stud.</p>
          </section>

          <section className={local.prose} aria-labelledby="twice">
            <h2 id="twice">Twice in every direction</h2>
            <p>
              LEGO describes a DUPLO brick as twice the size of a regular LEGO brick in every dimension: twice the length, twice the width, and twice the height.
              <Src id="S4" />
              <Src id="S5" />
            </p>
            <p>That produces the first visual clue. A regular 2×2 brick has the same basic footprint as one DUPLO stud. One big bump can therefore receive a square of four small bumps’ worth of brick.</p>
            <p>There is another piece of dinner-table trivia here. Double three dimensions and the comparable bounding volume becomes eight times larger. That is simple arithmetic, not an official weight or material claim. DUPLO does not just look a little chunkier. It occupies an entirely different physical scale.</p>
            <p>
              That larger scale is intentional. LEGO says its research found the larger pieces suitable for younger builders, and current DUPLO pages emphasize bricks designed for small hands, toddler safety, and early gripping and stacking.
              <Src id="S9" />
              <Src id="S10" />
            </p>
            <p>But “make it bigger” was only half the assignment.</p>
          </section>

          <EditorialImage
            src="/images/kumia-lego-duplo-hidden-connection-body-01.png"
            alt="An editorial photo-style image of a large yellow DUPLO-style brick on a wooden table while an adult’s hand holds a much smaller red LEGO-style brick nearby, showing the difference in scale. It is not a technical drawing and does not show how the pieces connect."
          />
          <p className={local.caption}>LEGO says DUPLO is twice the regular brick size in every dimension and designed for little hands.</p>

          <section className={local.prose} aria-labelledby="bigger">
            <h2 id="bigger">LEGO tried bigger versions that did not become DUPLO</h2>
            <p>
              In the mid-1960s, LEGO Futura experimented with enlarged bricks at 2:1, 3:1, and 4:1 scales.
              <Src id="S3" />
              <Src id="S4" />
            </p>
            <p>The three-times version made it surprisingly far. LEGO says it was briefly manufactured and tested in several European markets as sets 501, 502, and 503. The four-times version was not pursued at that stage.</p>
            <p>The winning size was two-to-one. The name DUPLO refers to that idea of doubling.</p>
            <p>Why 2:1? LEGO’s own history gives a more interesting answer than “it looked right.” The large brick was supposed to join the LEGO System, and that meant it had to interlock with the standard brick.</p>
            <p>This was not a late bonus feature. It was a condition of belonging.</p>
          </section>

          <section className={local.prose} aria-labelledby="hole">
            <h2 id="hole">The clever part is the hole</h2>
            <p>
              Turn a regular LEGO brick over and you will see tubes underneath. LEGO’s modern stud-and-tube principle dates to 1958; the tubes grip between studs and brick walls to create the clutch that keeps a model together.
              <Src id="S7" />
              <Src id="S8" />
            </p>
            <p>Now look at the top of a classic DUPLO brick. Its studs are hollow.</p>
            <p>
              LEGO says that hollow was the solution: the tube beneath a standard LEGO brick could enter the larger DUPLO stud. The two scales did not need an adapter because the adapter was designed into the stud itself.
              <Src id="S3" />
            </p>
            <StudDiagram />
            <p>
              The mixed-scale construction method was patented in 1967. DUPLO bricks were tested in Sweden in 1968, adjusted, and launched globally in 1969 as sets 510 and 511.
              <Src id="S3" />
            </p>
            <p>
              LEGO’s 50th-anniversary telling adds a wonderfully human footnote. It says Godtfred Kirk Christiansen arrived at the hollow-stud idea during sleep in 1968. That is a corporate origin anecdote, not an engineering transcript, but it fits the object: a small empty circle solved a problem that several larger prototypes had not.
              <Src id="S4" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="why">
            <h2 id="why">Why preserve a connection at all?</h2>
            <p>By the time DUPLO was being developed, LEGO had already spent more than a decade thinking in terms of a system.</p>
            <p>
              The LEGO System in Play, introduced in 1955, was built around continuity: pieces should combine in many ways and retain their usefulness when new pieces arrive. The 1958 stud-and-tube brick made that promise physically stronger.
              <Src id="S6" />
              <Src id="S7" />
            </p>
            <p>
              LEGO’s DUPLO history applies the same logic to the large brick. Compatibility protects the value of pieces a family already owns instead of turning every new purchase into a separate island.
              <Src id="S3" />
            </p>
            <p>
              The company also gives a more human reason. The 2:1 bridge let younger children build alongside older siblings, then carry familiar bricks and ideas forward as they moved toward smaller LEGO pieces.
              <Src id="S9" />
            </p>
            <p>That is the real design story. DUPLO enlarged the entrance to the system without sealing the door behind it.</p>
          </section>

          <EditorialImage
            src="/images/kumia-lego-duplo-hidden-connection-body-02.png"
            alt="An editorial illustration of shared play: a child’s hand holds a large green DUPLO-style brick while an adult’s hand holds a small red LEGO-style brick nearby. It illustrates the story of two scales sharing one play world, not a fit test."
          />
          <p className={local.caption}>LEGO says the 2:1 system let younger builders play with older siblings and later move toward smaller bricks.</p>

          <section className={local.prose} aria-labelledby="limits">
            <h2 id="limits">It is compatible, not completely interchangeable</h2>
            <p>This is where the satisfying headline needs an honest boundary.</p>
            <p>
              LEGO’s current help page gives regular 2×2 and 2×4 bricks as examples that fit with DUPLO. It gives 1×2 and 2×3 bricks as examples that do not. It also says regular bricks fit on DUPLO pieces when the DUPLO studs on top are hollow.
              <Src id="S1" />
            </p>
            <p>
              The figures draw another line. DUPLO figures do not fit regular LEGO bricks, and standard LEGO minifigures do not fit DUPLO bricks.
              <Src id="S1" />
            </p>
            <p>So “LEGO and DUPLO are compatible” does not mean any piece can be pressed onto any other piece. The connection is a designed family of alignments with visible conditions.</p>
            <p>That limitation makes the trick better, not worse. The system did not erase the difference between toddler play and fine-detail building. It left a few deliberate doorways between them.</p>
          </section>

          <section className={local.prose} aria-labelledby="explore">
            <h2 id="explore">The year DUPLO disappeared without becoming incompatible</h2>
            <p>The strangest proof that continuity matters arrived decades later as a branding problem.</p>
            <p>
              In 2002, LEGO replaced the DUPLO name with LEGO Explore, a preschool discovery system organized around stages of child development. The elements still belonged to the DUPLO building system. The physical connection had not vanished.
              <Src id="S3" />
            </p>
            <p>But LEGO’s history says shoppers became confused. Would the new Explore products work with the DUPLO pieces already at home? Packaging tried to reassure them, yet doubt remained and sales fell. In 2004, the DUPLO name returned.</p>
            <p>The episode says something charming about a plastic brick: compatibility is not valuable if families no longer recognize it.</p>
          </section>

          <section className={styles.comparison} aria-labelledby="explorer-title">
            <div className={styles.sectionHeading}>
              <p>A SMALL EXPLORER · OPTIONAL</p>
              <h2 id="explorer-title">What Connects?</h2>
            </div>
            <p className={local.priority}>
              Try the small explorer here. Start with the famous pairing—a regular 2×2 brick and one hollow DUPLO stud—then compare it with a 1×2, a 2×3, and the two figure systems.
            </p>
            <p>The result is not a giant compatibility database. It is a quick way to see the rule and its edge.</p>
            <LegoDuploExplorer />
          </section>

          <section className={local.prose} aria-labelledby="try">
            <h2 id="try">Five things you can try today</h2>
            <h3>Do the one-stud reveal</h3>
            <p>Use one standard 2×2 brick and one hollow DUPLO stud. It is the entire story in two pieces.</p>
            <h3>Build a two-stud bridge</h3>
            <p>Use a regular 2×4 brick across suitable hollow DUPLO studs.</p>
            <h3>Start big, finish small</h3>
            <p>Build a DUPLO tower or wall, then use verified 2×2 and 2×4 regular bricks to add a smaller-scale roof or top.</p>
            <h3>Build with two ages at once</h3>
            <p>Let a younger builder handle the large foundation while an older child or adult adds detail at the verified connection points.</p>
            <p className={local.safety}>
              <strong>Small parts:</strong> standard LEGO pieces are small parts and must stay away from children under three. DUPLO’s toddler age marking does not carry over to regular LEGO bricks.
            </p>
            <h3>Test the limit on purpose</h3>
            <p>Put a 2×2 beside a 1×2, then a 2×4 beside a 2×3. The pieces look closely related, but only the official examples with the right geometry connect.</p>
            <p>You can also place DUPLO figures and minifigures in the same invented world—just keep each figure on its own compatible brick base, matching LEGO’s current guidance.</p>
          </section>

          <section className={local.prose} aria-labelledby="buy">
            <h2 id="buy">If you want a fresh pile of bricks</h2>
            <p className={local.commerceNote}>Already have both systems? Buy nothing. Find a regular 2×2 or 2×4 brick and a DUPLO piece with hollow studs.</p>
            <p>You need only a verified regular 2×2 or 2×4 brick and a DUPLO piece with hollow studs to see the idea work. Check what you already own first.</p>
            <p>For an open-ended starting point, LEGO currently sells the 65-piece DUPLO Brick Box and the 484-piece LEGO Medium Creative Brick Box.</p>
            <Product
              problem="A compact open-ended DUPLO starting point"
              name="DUPLO Brick Box 10913"
              facts="65 pieces, marked for ages 1½+."
              watch="not every piece in a box will cross-connect. Look for the exact 2×2 and 2×4 examples and hollow DUPLO studs. Check the current price and availability at LEGO."
              id="S13"
              link="View at LEGO"
            />
            <AmazonDisclosure />
            <AmazonCta href={amazonProductUrl("B08FF6BDWV")} label="LEGO DUPLO Classic brick box" />
            <Product
              problem="A lower-cost open-ended standard-brick companion"
              name="LEGO Medium Creative Brick Box 10696"
              facts="484 pieces, marked for ages 4–99."
              watch="it contains small parts, so keep it away from children under three. Check the current price and availability at LEGO."
              id="S11"
              link="View at LEGO"
            />
            <AmazonCta href={amazonProductUrl("B00NHQFA1I")} label="LEGO Classic brick box" />
            <p>The larger LEGO Classic box offers more standard pieces if you want broader free-building.</p>
            <Product
              problem="Optional: more standard bricks"
              name="LEGO Large Creative Brick Box 10698"
              facts="790 pieces, marked for ages 4–99."
              watch="the same small-parts caution applies, and no box is fully interchangeable with DUPLO. Check the current price and availability at LEGO."
              id="S12"
              link="View at LEGO"
            />
            <p>Not every element in any assortment will cross-connect, so use the exact examples above rather than treating the boxes as fully interchangeable.</p>
          </section>

          <section className={local.prose} aria-labelledby="closing">
            <h2 id="closing">One system, two scales</h2>
            <p>DUPLO looks like the moment LEGO leaves its familiar system behind. It is larger, simpler, easier for small hands to hold, and built around a different stage of childhood.</p>
            <p>But look into one hollow stud and the separation becomes less complete.</p>
            <p>The big brick was not designed as a dead end. It was designed as another entrance: large enough for a toddler, connected enough to share a world with the bricks that came before and after it.</p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>The next time you see a big bump and a small brick, check what is inside the bump.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Sources are LEGO’s own Help, history, newsroom, DUPLO, and product pages, reviewed for the Kumia research package and last checked September 20, 2026. LEGO’s account of the hollow-stud dream is LEGO’s own anecdote, not independently verified engineering history. Kumia Labs did not test these pieces. Third-party bricks, adapters, QUATRO, Soft bricks, storage bricks, and damaged pieces are outside this article, and the explorer covers only the seven official examples. Prices and availability are not shown; confirm them on each LEGO page.
            </p>
            <ul className={local.sourceList}>
              {(Object.keys(SOURCES) as SourceId[]).map((id) => (
                <li key={id}>
                  <a href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">{SOURCES[id].label}</a>
                  <span>{SOURCES[id].claim}</span>
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
