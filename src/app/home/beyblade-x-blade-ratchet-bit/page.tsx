import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/site";
import styles from "../what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/home/beyblade-x-blade-ratchet-bit",
  title = "Beyblade X Names Are Secret Build Recipes",
  seoTitle = "What Does “Sword Dran 3-60F” Mean? Beyblade X Names Explained",
  metaDescription =
    "“Sword Dran 3-60F” looks like a model number. It is actually Blade + Ratchet + Bit — the three swappable parts of a Beyblade X top, spelled out in one name.",
  supportingCopy =
    "“Sword Dran 3-60F” looks like a model number. It is really a map of the three interchangeable parts inside.",
  publishedDate = "2026-09-25",
  updatedDate = "2026-09-25",
  heroImage = "/images/kumia-beyblade-x-blade-ratchet-bit-hero.png",
  cardImage = "/images/kumia-beyblade-x-blade-ratchet-bit-card-16x9.png",
  bodyOneImage = "/images/kumia-beyblade-x-blade-ratchet-bit-body-01.png";

const SOURCES = {
  S1: {
    short: "Takara Tomy guide",
    label: "Takara Tomy — Beyblade X Beginner Guide",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/guide/",
    claim: "Names are composed from Blade, Ratchet, and Bit names; the Bit determines official type.",
  },
  S2: {
    short: "Gear structure",
    label: "Takara Tomy — Gear Structure",
    url: "https://beyblade.takaratomy.co.jp/gear/",
    claim: "Plain-language roles of Blade, Ratchet, and Bit.",
  },
  S3: {
    short: "BX-01 product page",
    label: "Takara Tomy — BX-01 Dran Sword 3-60F",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx01.html",
    claim: "Foundational build; Japanese product name and 2023 release.",
  },
  S4: {
    short: "BX-01 manual",
    label: "Takara Tomy — BX-01 manual",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/manual/BX-01_manual.pdf",
    claim: "Box contents separately list the Dran Sword Blade, 3-60 Ratchet, and F Bit.",
  },
  S5: {
    short: "Official video",
    label: "Official English Beyblade video — Meet Sword Dran 3-60F",
    url: "https://www.youtube.com/watch?v=IeplsaDSTX0",
    claim: "First-party confirmation that 3-60 has three Ratchet blades and a 6 mm height.",
  },
  S6: {
    short: "BX-02 product page",
    label: "Takara Tomy — BX-02 Hells Scythe 4-60T",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx02.html",
    claim: "Taper stock build's balance-oriented behavior.",
  },
  S7: {
    short: "BX-03 product page",
    label: "Takara Tomy — BX-03 Wizard Arrow 4-80B",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx03.html",
    claim: "Ball stock build's endurance / long-spin behavior.",
  },
  S8: {
    short: "BX-04 product page",
    label: "Takara Tomy — BX-04 Knight Shield 3-80N",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx04.html",
    claim: "Needle stock build's center-holding, defense-oriented behavior.",
  },
  S9: {
    short: "F/T/B/N Bit set",
    label: "Takara Tomy — F/T/B/N Bit Set",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx00-bit_silver_white.html",
    claim: "Official Flat, Taper, Ball, and Needle names and four-type framing.",
  },
  S10: {
    short: "UX-10 product page",
    label: "Takara Tomy — UX-10 Customize Set U",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/ux10.html",
    claim: "Four Blades, three Ratchets, six Bits, and an explicit 72 combinations.",
  },
  S11: {
    short: "UX-10 manual",
    label: "Takara Tomy — UX-10 manual",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/manual/UX-10_manual.pdf",
    claim: "Exact included part list for UX-10.",
  },
  S12: {
    short: "CX-07 product page",
    label: "Takara Tomy — CX-07 Pegasus Blast ATr",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/cx07.html",
    claim: "Three-component CX Blade and a Ratchet-integrated Bit.",
  },
  S14: {
    short: "UX Expand warning",
    label: "Takara Tomy — UX Expand customization warning",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/help/noratchet/",
    claim: "A Ratchet-integrated Blade cannot accept a normal Ratchet or Ratchet-integrated Bit.",
  },
  S17: {
    short: "CX-13 product page",
    label: "Takara Tomy — CX-13 Bahamut Blitz BK1-50I",
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/cx13.html",
    claim: "A CX Expand Blade separating into four parts.",
  },
  S19: {
    short: "Hasbro 2026 Lookbook",
    label: "Hasbro 2026 Lookbook",
    url: "https://newsroom.hasbro.com/static-files/bd7a8f8c-7280-468e-b732-1e39efae6f4c",
    claim: "CX Infinity four-piece Blades and current U.S. line labels.",
  },
  S20: {
    short: "Hasbro 2026 Lookbook (alt.)",
    label: "Hasbro 2026 Lookbook — alternate host",
    url: "https://corp.hasbro.com/static-files/5836743c-70fc-436f-b385-ab8faaf1d9e1",
    claim: "Sneak Attack Battle Set; UX Infinity tops with Ratchet-integrated Blades.",
  },
  S22: {
    short: "Hasbro 2024 Lookbook",
    label: "Hasbro 2024 Holiday Lookbook",
    url: "https://newsroom.hasbro.com/static-files/572c0fc1-d4f3-478a-81c0-a7302cf0f56c",
    claim: "U.S. “Sword Dran 3-60F” name and three interchangeable parts.",
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
        Verified for this build only: the official English explanation confirms 3-60 as three Ratchet blades and a 6 mm height. <Src id="S5" /> <Src id="S4" />
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
          <Link href="/">Home</Link><span>/</span><Link href="/#latest">Home research</Link><span>/</span><span>Beyblade X names</span>
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
              At first glance, <strong>Sword Dran 3-60F</strong> &mdash; known as <strong>Dran Sword 3-60F</strong> in Takara Tomy&rsquo;s Japanese line &mdash; looks like a dramatic name followed by a model number. If you are new to Beyblade X, the letters and digits can feel like a code you are expected to understand before entering the hobby.
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
              Beyblade X is a battling-top system. Players launch their tops into a dedicated stadium, where the tops collide, race around the rim, lose spin, or knock one another out. The toothed gear around the bottom component can catch the stadium&rsquo;s rail and send the top into the system&rsquo;s signature high-speed dash.
            </p>
            <p>You do not need to learn tournament rules or memorize a catalog to understand the hardware. Start with the stack.</p>
            <p>A standard Beyblade X top has three main parts:</p>
            <ol>
              <li><strong>Blade</strong> &mdash; the upper contact piece</li>
              <li><strong>Ratchet</strong> &mdash; the middle connector</li>
              <li><strong>Bit</strong> &mdash; the bottom tip that touches the stadium</li>
            </ol>
            <p>Twist the top apart and those three layers separate. Twist compatible pieces back together and they become a new build. <Src id="S1" /> <Src id="S2" /></p>
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
              In <strong>3-60</strong>, the first number points to the Ratchet&rsquo;s three protruding blades, while <strong>60</strong> identifies its 6-millimeter height. That reading is confirmed in the official English explanation for Sword Dran 3-60F. <Src id="S5" />
            </p>
            <p>Changing the Ratchet while keeping the other two parts changes where the complete top carries the Blade and exposes its middle layer. The difference may be subtler than replacing the Blade or Bit, but it is still a meaningful design choice.</p>
            <p>This decoder should not be forced onto every newer code. Integrated parts can use different naming patterns. For this foundational example, however, 3-60 gives a newcomer a useful clue: the middle component has its own geometry and height.</p>
          </section>

          <section className={local.prose} aria-labelledby="bit-section">
            <h2 id="bit-section">The Bit determines the official type</h2>
            <p>The <strong>Bit</strong> is the bottom tip. It touches the stadium floor, and its toothed outer gear can engage the stadium&rsquo;s rail for an Xtreme Dash. The shape of the tip strongly affects how the top moves.</p>
            <p>The official beginner guide makes an especially helpful point: the Bit determines whether a build is classified as Attack, Defense, Stamina, or Balance type. <Src id="S1" /></p>
            <p>Four early Bits make the relationship easy to see:</p>
            <ul>
              <li><strong>F: Flat</strong> supports aggressive movement and attack-oriented behavior. <Src id="S3" /></li>
              <li><strong>B: Ball</strong> supports stable, long-spinning movement associated with Stamina builds. <Src id="S7" /></li>
              <li><strong>N: Needle</strong> tends to hold position near the center for Defense-oriented behavior. <Src id="S8" /></li>
              <li><strong>T: Taper</strong> mixes movement and stability for a Balance approach. <Src id="S6" /></li>
            </ul>
            <p>These are tendencies, not remote controls. A Flat Bit does not make every launch follow the same path, and a Needle Bit does not make a top impossible to knock away. The important point is that swapping the Bit changes the part that meets the stadium. Even a newcomer can usually see the result. <Src id="S9" /></p>
          </section>

          <section className={local.prose} aria-labelledby="whole-name">
            <h2 id="whole-name">Now read the whole name</h2>
            <p>The complete build can be written as a simple recipe:</p>
            <div className={local.claim}>
              <span>THE RECIPE</span>
              <p>Sword Dran + 3-60 + F = Sword Dran 3-60F</p>
            </div>
            <p>
              The <strong>name segment before the Ratchet code identifies the Blade</strong>. The middle code identifies the Ratchet. The final letter identifies the Bit&mdash;in this case, Flat.
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
              Takara Tomy&rsquo;s UX-10 Customize Set U makes that especially clear. It includes four Blades, three Ratchets, and six Bits. The number of possible three-part builds is:
            </p>
            <div className={local.claim}>
              <span>THE MATH</span>
              <p className={local.mathLine}>4 &times; 3 &times; 6 = 72</p>
            </div>
            <p>
              Those are 72 combinations from one set&rsquo;s listed parts&mdash;not 72 claims of equal strength and not 72 guaranteed tournament answers. Some builds will make more sense than others. The point is that a modest group of components becomes a large design space because every slot multiplies the choices in the other slots.
            </p>
            <p>A new Bit is not just one new object. It can be tested under several Blades and Ratchets already in a collection. A new Blade can be paired with multiple existing middle pieces and tips. Each compatible part adds possibilities across the whole system. <Src id="S10" /> <Src id="S11" /></p>
            <p>UX-10 is a Japanese-market product, so it is evidence for the official customization concept rather than an automatic U.S. shopping recommendation.</p>
          </section>

          <section className={local.prose} aria-labelledby="try-it">
            <h2 id="try-it">Try the simplest experiment</h2>
            <p>If you already own two compatible standard Beyblade X tops, begin with their Bits.</p>
            <p>
              Launch each stock build a few times so you know how it normally behaves. Then exchange only the Bits and repeat under similar conditions. A Flat, Ball, Needle, or Taper tip will not erase the influence of the other parts, but changing the contact point with the stadium is often the easiest difference to observe.
            </p>
            <p>After that, return the Bits and try the Ratchets. Finally, try the Blades. You are building intuition for the three slots instead of memorizing a chart.</p>
            <p className={local.safety}>Use a compatible Beyblade X stadium and follow the instructions supplied with the product. Keep faces away from the stadium during play, and do not mix Beyblade X parts with earlier systems such as Beyblade Burst.</p>
          </section>

          <section className={local.prose} aria-labelledby="keeps-expanding">
            <h2 id="keeps-expanding">The basic idea keeps expanding</h2>
            <div className={local.claim}>
              <span>THE SHORT VERSION</span>
              <p>Blade &times; Ratchet &times; Bit is the basic idea. Newer Beyblade X systems take that idea even further.</p>
            </div>
            <p>
              In CX models, the Blade itself can separate into additional components. <Src id="S12" /> <Src id="S17" /> Some newer designs also integrate the Ratchet function into either the Blade or the Bit. <Src id="S14" /> That means that, as of 2026, not every Beyblade X is physically arranged as three separate pieces. <Src id="S19" /> <Src id="S20" />
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
              Kumia Labs reviewed Takara Tomy&rsquo;s official guides, product pages, and manuals, an official English product video, and Hasbro&rsquo;s U.S. catalog materials on September 25, 2026. The Ratchet decode for 3-60 is confirmed for that specific part only, not as a universal Ratchet code. U.S. and Japanese product names are kept separate rather than blended. No compatibility checker, build simulator, or name parser is implemented; this article does not decode integrated-part naming such as ATr, HOp, H, or LF.
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
