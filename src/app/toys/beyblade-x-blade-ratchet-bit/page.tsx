import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmazonCta, AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { amazonProductUrl } from "@/lib/amazon";
import { absoluteUrl } from "@/lib/site";
import styles from "../../home/what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/toys/beyblade-x-blade-ratchet-bit",
  title = "Beyblade X Names Are Secret Build Recipes",
  seoTitle = "What Does “Sword Dran 3-60F” Mean? Beyblade X Names Explained",
  metaDescription =
    "“Sword Dran 3-60F” looks like a model number. It is actually Blade + Ratchet + Bit — the three swappable parts of a Beyblade X top, spelled out in one name.",
  supportingCopy =
    "“Sword Dran 3-60F” looks like a model number. It is really a map of the three interchangeable parts inside.",
  publishedDate = "2026-09-25",
  updatedDate = "2026-09-26",
  heroImage = "/images/kumia-beyblade-x-blade-ratchet-bit-hero.png",
  cardImage = "/images/kumia-beyblade-x-blade-ratchet-bit-card-16x9.png",
  bodyOneImage = "/images/kumia-beyblade-x-blade-ratchet-bit-body-01.png";

const SOURCES = {
  P1: {
    short: "Beyblade — Parents Guide",
    label: "Beyblade X official English site — Parents Guide",
    url: "https://beyblade.com/parent-guide/",
    claim: "Official English overview: Beyblade X tops are made of three parts, those parts can be mixed and matched, tops can accelerate in battle, and the four types are Attack, Stamina, Defense, and Balance.",
  },
  H1: {
    short: "Hasbro — Xtreme Battle Set",
    label: "Hasbro — Beyblade X Xtreme Battle Set (F9588) official instructions",
    url: "https://instructions.hasbro.com/en-us/instruction/beyblade-x-xtreme-battle-set-with-beystadium-2-right-spinning-top-toys-and-2-launchers",
    claim: "U.S. product page: three interchangeable Blade/Ratchet/Bit pieces, mix-and-match customization, X-Celerator Gear System, set contents, and safety guidance.",
  },
  B1: {
    short: "Official U.S. Beyblade site",
    label: "Beyblade X official U.S. site — product lineup",
    url: "https://usa.beyblade.com/index.html",
    claim: "English U.S. lineup: Sword Dran 3-60F and official Attack, Defense, Stamina, and Balance examples, including Flat- and Taper-Bit behavior.",
  },
  V1: {
    short: "Official video",
    label: "Official English Beyblade video — Meet Sword Dran 3-60F",
    url: "https://www.youtube.com/watch?v=IeplsaDSTX0",
    claim: "English first-party explanation of Sword Dran, the 3-60 Ratchet's three blades and 6 mm height, and the Flat Bit.",
  },
  H2: {
    short: "Hasbro — Fang Leon CX",
    label: "Hasbro — Fang Leon T 4-60U CX official product page",
    url: "https://instructions.hasbro.com/en-us/instruction/bey-blade-bbx-fang-leon",
    claim: "U.S. product page: interchangeable Blade/Ratchet/Bit layers, three-part CX Blade, X-Celerator Gear System, and system-only compatibility.",
  },
  H4: {
    short: "Hasbro — X-treme Battlers Pack",
    label: "Hasbro — Beyblade X X-treme Battlers Pack official product page",
    url: "https://instructions.hasbro.com/en-us/instruction/beyblade-x-x-treme-battlers-pack-3-takara-tomy-tops",
    claim: "Official U.S. example of a combo Ratchet-Bit alongside standard interchangeable Blade/Ratchet/Bit layers.",
  },
  T1: {
    short: "Takara Tomy Asia — CX-13",
    label: "Takara Tomy Asia — CX-13 Starter BahamutBlitz Bk 1-50I official English product page",
    url: "https://www.takaratomyasia.com/en/toys/beyblade-x/cx-line/cx-13-starter-bahamutblitz-bk-1-50i/",
    claim: "Official English catalog entry identifying BahamutBlitz Bk 1-50I as the CX-13 starter, with first-party product images.",
  },
  H5: {
    short: "Hasbro — 2026 Lookbook",
    label: "Hasbro — 2026 Lookbook (official English PDF)",
    url: "https://newsroom.hasbro.com/static-files/bd7a8f8c-7280-468e-b732-1e39efae6f4c",
    claim: "Official U.S. product descriptions: CX Infinity Blades separate into four pieces, and UX Infinity tops convert to reveal hidden features.",
  },
  R1: {
    short: "Toys“R”Us — UX-10",
    label: "Toys“R”Us Thailand — UX-10 Customize Set U (English product page)",
    url: "https://www.toysrus.co.th/en-th/takara-tomy-beyblade-x-ux-10-customize-set-u-10060420.html",
    claim: "Native-English retail product description: four Blades, three Ratchets, six Bits, and 72 combinations.",
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

function NameDecoder() {
  return (
    <figure className={local.decoder} aria-labelledby="decoder-title" aria-describedby="decoder-note">
      <div className={local.techHeading}>
        <div>
          <span>TECH-1 · NAME DECODER</span>
          <h3 id="decoder-title">Sword Dran 3-60F, read as a build</h3>
        </div>
        <p id="decoder-note">Each name segment maps to one physical layer.</p>
      </div>
      <div className={local.decoderRow}>
        <div className={local.decoderSegment}>
          <p className={local.decoderCode}>Sword Dran</p>
          <p className={local.decoderLabel}>Blade</p>
        </div>
        <span className={local.decoderJoin} aria-hidden="true">+</span>
        <div className={local.decoderSegment}>
          <p className={local.decoderCode}>3-60</p>
          <p className={local.decoderLabel}>Ratchet</p>
        </div>
        <span className={local.decoderJoin} aria-hidden="true">+</span>
        <div className={local.decoderSegment}>
          <p className={local.decoderCode}>F</p>
          <p className={local.decoderLabel}>Flat Bit</p>
        </div>
      </div>
      <figcaption>
        Verified for this build only: the official English explanation confirms 3-60 as three Ratchet blades and a 6 mm height. <Src id="V1" />
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
    images: [absoluteUrl(cardImage)],
  },
};

export default function BeybladeXBladeRatchetBit() {
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
    image: absoluteUrl(cardImage),
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
          <Link href="/">Home</Link><span>/</span><Link href="/#latest">Toys research</Link><span>/</span><span>Beyblade X names</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image src={heroImage} alt="" width={1672} height={941} sizes="100vw" priority />
          </figure>
        </header>

        <ArticleResearchMeta left="Beyblade X name" right="Build recipe" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div><Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} /></div>
            <p>That name isn&rsquo;t flavor text. It&rsquo;s a parts list.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>
              At first glance, <strong>Sword Dran 3-60F</strong> looks like a dramatic name followed by a model number. If you are new to Beyblade X, the letters and digits can feel like a code you are expected to understand before entering the hobby.
            </p>
            <p>They are actually trying to help.</p>
            <div className={local.claim}>
              <span>THE REVEAL</span>
              <p>The name is telling you how the Beyblade is built.</p>
            </div>
            <p>
              <strong>Sword Dran</strong> is the Blade. <strong>3-60</strong> is the Ratchet. <strong>F</strong> is the Bit. Put those three named parts together and you get one complete Beyblade X top: <strong>Sword Dran 3-60F</strong>.
            </p>
            <p>
              That one idea turns a shelf of unfamiliar names into a readable system. It also reveals the central appeal of Beyblade X: you are not only choosing a top. You are choosing a build that can be taken apart, rearranged, and tested.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="what-is-it">
            <h2 id="what-is-it">First: what is Beyblade X?</h2>
            <p>
              Beyblade X is a battling-top system. Players launch their tops into a dedicated stadium, where the tops collide, race around the rim, lose spin, or knock one another out. The gear around the Bit can catch the stadium&rsquo;s X-Celerator Rail and send the top into the system&rsquo;s signature Xtreme Dash. <Src id="H1" />
            </p>
            <p>You do not need to learn tournament rules or memorize a catalog to understand the hardware. Start with the stack.</p>
            <p>A standard Beyblade X top has three main parts: <Src id="P1" /> <Src id="H1" /></p>
            <ol>
              <li><strong>Blade</strong> &mdash; the upper contact piece</li>
              <li><strong>Ratchet</strong> &mdash; the middle connector</li>
              <li><strong>Bit</strong> &mdash; the bottom tip that touches the stadium</li>
            </ol>
            <p>
              Twist the top apart and those three layers separate. Twist compatible pieces back together and they become a new build. The official Parents Guide says Beyblade X tops are made of three parts and invites players to mix and match them; Hasbro&rsquo;s U.S. Xtreme Battle Set page names those layers as Blade, Ratchet, and Bit. <Src id="P1" /> <Src id="H1" />
            </p>
          </section>

          <figure className={local.editorialSlot}>
            <Image
              src={bodyOneImage}
              alt="AI-generated editorial illustration showing a conceptual Beyblade X top separated into Blade, Ratchet, and Bit layers."
              width={1536}
              height={1024}
              sizes="(max-width: 700px) 100vw, 1120px"
              className={local.editorialImg}
            />
          </figure>
          <p className={local.caption}>AI-generated editorial illustration of the basic Blade&ndash;Ratchet&ndash;Bit structure; not an official product diagram.</p>

          <section className={local.prose} aria-labelledby="blade-section">
            <h2 id="blade-section">The Blade is the part that makes contact</h2>
            <p>
              The <strong>Blade</strong> sits on top and supplies most of the shape that another Beyblade meets in a collision. Its weight distribution and outer profile influence how the complete top attacks, absorbs contact, and follows through after a hit.
            </p>
            <p>
              That is why the Blade name sounds like the identity of the Beyblade. It is the largest and most visually distinctive layer. Changing it can produce an obvious physical difference: a new outer shape, different contact points, or a different distribution of weight.
            </p>
            <p>None of those traits guarantees a win. The complete build, stadium, launch, and opponent all matter. But the Blade is where the top&rsquo;s contact shape begins.</p>
          </section>

          <section className={local.prose} aria-labelledby="ratchet-section">
            <h2 id="ratchet-section">The Ratchet sets the middle of the build</h2>
            <p>The <strong>Ratchet</strong> connects the Blade to the Bit. It affects the top&rsquo;s height, balance, contact exposure, and the way the layers lock together.</p>
            <p>
              In <strong>3-60</strong>, the first number points to the Ratchet&rsquo;s three protruding blades, while <strong>60</strong> identifies its 6-millimeter height. That reading is confirmed in the official English explanation for Sword Dran 3-60F. <Src id="V1" />
            </p>
            <p>Changing the Ratchet while keeping the other two parts changes where the complete top carries the Blade and exposes its middle layer. The difference may be subtler than replacing the Blade or Bit, but it is still a meaningful design choice.</p>
            <p>This decoder should not be forced onto every newer code. Integrated parts can use different naming patterns. For this foundational example, however, 3-60 gives a newcomer a useful clue: the middle component has its own geometry and height.</p>
          </section>

          <section className={local.prose} aria-labelledby="bit-section">
            <h2 id="bit-section">The Bit makes movement easy to see</h2>
            <p>The <strong>Bit</strong> is the bottom tip. It touches the stadium floor, and its toothed outer gear can engage the X-Celerator Rail for an Xtreme Dash. The shape of the tip strongly affects how the top moves. <Src id="H1" /></p>
            <p>The official Parents Guide and Hasbro&rsquo;s U.S. lineup classify complete tops as Attack, Defense, Stamina, or Balance. Four early stock builds show those categories without pretending that one component controls every result: <Src id="P1" /></p>
            <ul>
              <li><strong>Sword Dran 3-60F</strong> is an Attack Type; its Flat-tipped Bit is described as engaging the rail for Xtreme Dashes.</li>
              <li><strong>Arrow Wizard 4-80B</strong> is a Stamina Type built to keep spinning and outlast an opponent.</li>
              <li><strong>Helm Knight 3-80N</strong> is a Defense Type whose Blade is described as dampening attacks.</li>
              <li><strong>Scythe Incendio 4-60T</strong> is a Balance Type; its tapered Bit balances early attack power with endurance. <Src id="B1" /></li>
            </ul>
            <p>These are stock-build descriptions, not isolated laboratory tests of each Bit. A Flat Bit does not make every launch follow the same path, and a Defense label does not make a top impossible to knock away. The important point is that swapping the Bit changes the part that meets the stadium. Even a newcomer can usually see the result.</p>
          </section>

          <section className={local.prose} aria-labelledby="whole-name">
            <h2 id="whole-name">Now read the whole name</h2>
            <p>The complete build can be written as a simple recipe:</p>
            <div className={local.claim}>
              <span>THE RECIPE</span>
              <p>Sword Dran + 3-60 + F = Sword Dran 3-60F</p>
            </div>
            <p>
              The <strong>name segment before the Ratchet code identifies the Blade</strong>. The middle code identifies the Ratchet. The final letter identifies the Bit&mdash;in this case, Flat. <Src id="V1" />
            </p>
            <p>Once you see the pattern, the name stops looking random. The fantasy-style words identify the top layer. The number code identifies the middle layer. The ending identifies the tip.</p>
            <p>You do not have to memorize what every part does. The useful first step is separating a complete name into its component slots.</p>
          </section>

          <NameDecoder />

          <section className={local.prose} aria-labelledby="change-one">
            <h2 id="change-one">Change one part and ask one question</h2>
            <p>The cleanest way to explore Beyblade X is not to shuffle everything at once. Change one component, then watch what happens.</p>
            <p>Keep the Blade and Ratchet but swap the Bit. Does the top move more aggressively? Does it stay closer to the center? Does it keep spinning longer in this matchup?</p>
            <p>Keep the Blade and Bit but swap the Ratchet. How does a different height or middle shape change contact?</p>
            <p>Keep the Ratchet and Bit but swap the Blade. How does a different weight distribution and outer shape change the way hits feel?</p>
            <p>This is less like finding a universally &ldquo;best&rdquo; top and more like running a small experiment. The most useful result is not only who won. It is noticing which change produced which behavior.</p>
            <p>Changing one part at a time also prevents a common beginner problem: replacing all three, seeing a different result, and having no idea which component caused it.</p>
          </section>

          <section className={local.prose} aria-labelledby="seventy-two">
            <h2 id="seventy-two">Four Blades, three Ratchets, six Bits: 72 builds</h2>
            <p>Customization is not an unofficial enthusiast workaround. It is part of the official Beyblade X play system.</p>
            <p>
              Hasbro&rsquo;s U.S. product pages repeatedly invite players to switch the interchangeable Blade, Ratchet, and Bit with parts from other Beyblade X tops. The manufacturer presents rebuilding as a feature, not a loophole. <Src id="H1" /> <Src id="H2" />
            </p>
            <p>
              Takara Tomy&rsquo;s Japanese-market UX-10 Customize Set U makes the multiplication especially clear. Its native-English retail product description lists four Blades, three Ratchets, and six Bits, allowing 72 combinations:
            </p>
            <div className={local.claim}>
              <span>THE MATH</span>
              <p className={local.mathLine}>4 &times; 3 &times; 6 = 72</p>
            </div>
            <p>Those are 72 arrangements of the listed parts, not 72 claims of equal strength or 72 guaranteed tournament answers. A new Bit can be tested under several compatible Blades and Ratchets already in the set, and each compatible part expands the design space. <Src id="R1" /></p>
            <p>Compatibility still has boundaries. Stay within the Beyblade X system, follow the instructions for the specific product, and do not assume that every newer integrated design accepts the same three separate pieces.</p>
          </section>

          <section className={local.prose} aria-labelledby="try-it">
            <h2 id="try-it">Try the simplest experiment</h2>
            <p>If you already own two compatible standard Beyblade X tops, begin with their Bits.</p>
            <p>
              Launch each stock build a few times so you know how it normally behaves. Then exchange only the Bits and repeat under similar conditions. A different Bit will not erase the influence of the other parts, but changing the contact point with the stadium is often the easiest difference to observe.
            </p>
            <p>After that, return the Bits and try the Ratchets. Finally, try the Blades. You are building intuition for the three slots instead of memorizing a chart.</p>
            <p className={local.safety}>Use only Beyblade X tops with a Beyblade X Beystadium and follow the instructions supplied with the product. Keep faces away from the stadium during play, and do not lean over the stadium while tops are in motion. <Src id="H1" /></p>
          </section>

          <section className={local.prose} aria-labelledby="try-beyblade">
            <h2 id="try-beyblade">Want to try Beyblade X yourself?</h2>
            <p>
              The <strong>Beyblade X Xtreme Battle Set</strong> (Hasbro model F9588) is a simple U.S. starting point: it includes a Beystadium, two complete Beyblade X tops, and two launchers&mdash;enough to battle immediately and start comparing interchangeable parts. <Src id="H1" />
            </p>
            <AmazonDisclosure />
            <AmazonCta href={amazonProductUrl("B0CS8CM4YB")} label="Beyblade X Xtreme Battle Set" />
          </section>

          <section className={local.prose} aria-labelledby="keeps-expanding">
            <h2 id="keeps-expanding">The basic idea keeps expanding</h2>
            <div className={local.claim}>
              <span>THE SHORT VERSION</span>
              <p>Blade &times; Ratchet &times; Bit is the basic idea. Newer Beyblade X systems take that idea even further.</p>
            </div>
            <p>
              Takara Tomy Asia&rsquo;s official English catalog lists BahamutBlitz Bk 1-50I as the CX-13 starter. <Src id="T1" /> In CX models, the Blade itself can separate into three components, while Hasbro&rsquo;s CX Infinity expands that Blade to four. <Src id="H2" /> <Src id="H5" /> Hasbro also describes UX Infinity tops as converting to reveal hidden features, and offers tops that combine the Ratchet and Bit. <Src id="H5" /> <Src id="H4" /> That means that, as of 2026, not every Beyblade X is physically arranged as three separate pieces.
            </p>
            <p>
              The beginner model is still useful: learn what makes contact, what controls the middle connection and height, and what touches the stadium. The newer systems split or combine those functions in more ways. If a future name does not fit the Sword Dran pattern neatly, check its official product page rather than forcing it through the first decoder you learned.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="conclusion">
            <h2 id="conclusion">Read the next name as a recipe</h2>
            <p>Beyblade X names are compact on purpose. They can carry the identity of the Blade, the Ratchet, and the Bit in one line.</p>
            <p>So when you see <strong>Sword Dran 3-60F</strong>, do not read it as a fantasy name with random numbers attached. Read it as an assembly list:</p>
            <ul className={local.recipeRecap}>
              <li><strong>Sword Dran</strong> <span>Blade</span></li>
              <li><strong>3-60</strong> <span>Ratchet</span></li>
              <li><strong>F</strong> <span>Flat Bit</span></li>
            </ul>
            <div className={local.claim}>
              <span>THE REVEAL, AGAIN</span>
              <p>The name is telling you how the Beyblade is built.</p>
            </div>
            <p>Once you can read that recipe, customization stops being an expert-only wall of codes. It becomes a simple question anyone can test: <strong>what changes when I swap one part?</strong></p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>Read the next name you see, and you&rsquo;ll already know its recipe.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Kumia Labs reviewed Hasbro&rsquo;s official U.S. product and instruction pages and 2026 Lookbook, the official English Beyblade Parents Guide and U.S. product lineup, Takara Tomy Asia&rsquo;s official English catalog, an official English product video, and a native-English retail product description for UX-10 on September 25–26, 2026. Every research source linked below was published natively in English. The Ratchet decode for 3-60 is confirmed for that specific part only, not as a universal Ratchet code. The featured Amazon U.S. listing (Beyblade X Xtreme Battle Set, ASIN B0CS8CM4YB) was reverified for product identity and in-stock status immediately before publication. No compatibility checker, build simulator, or name parser is implemented; this article does not decode integrated-part naming such as ATr, HOp, H, or LF.
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
