import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { AmazonCta, AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { amazonProductUrl } from "@/lib/amazon";
import { absoluteUrl } from "@/lib/site";
import styles from "../../home/what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/toys/tamagotchi-paradise-connect-two",
  title = "What Happens When You Connect Two Tamagotchi Paradise Devices?",
  seoTitle = "What Happens When You Connect Two Tamagotchi Paradise Devices?",
  metaDescription =
    "Dock two Tamagotchi Paradise devices and the pets can play, fight, swap gifts, or produce a new egg whose baby may inherit body and eye colors. What Bandai documents, what it doesn't, and which devices connect.",
  supportingCopy =
    "Two pocket pets can play, fight, exchange gifts, or produce a new baby that may inherit colors from both parents.",
  publishedDate = "2026-10-12",
  updatedDate = "2026-10-12",
  checkedDate = "October 12, 2026",
  heroImage = "/images/kumia-tamagotchi-paradise-connect-two-hero.png",
  heroBackground = "/images/kumia-tamagotchi-paradise-connect-two-hero-bg.png",
  cardImage = "/images/kumia-tamagotchi-paradise-connect-two-card-16x9.png",
  bodyOneImage = "/images/kumia-tamagotchi-paradise-connect-two-body-01.png",
  bodyTwoImage = "/images/kumia-tamagotchi-paradise-connect-two-body-02.png",
  conceptNote = "Conceptual illustration — not actual Tamagotchi Paradise hardware.",
  // Official Bandai America product page; the WP keeps Bandai's own URL spelling ("tamgotchi").
  bandaiUsPage = "https://www.bandai.com/brands/tamagotchi/tamgotchi-paradise/tamagotchi-paradise-pink-land";

// "Sources" list from the FINAL Work Package, section 19, plus three first-party
// entries from the section 17 Source Ledger (S12, S13, S18) that back claims
// quoted inline. Community threads (S22) and secondary guides (S20/S21) are not
// used as evidence.
const SOURCES = {
  S1: {
    short: "Bandai — announcement",
    label: "Bandai: Tamagotchi Paradise official announcement and core features",
    url: "https://tamagotchi-official.com/us/news/01_1010/",
    claim: "Zoom Dial, over 50 characters in 12 species, genes, over 50,000 variations, and the two-device surprise.",
  },
  S3: {
    short: "Bandai — FAQ",
    label: "Bandai: Tamagotchi Paradise FAQ",
    url: "https://tamagotchi-official.com/us/series/paradise/faq/",
    claim: "Paradise-only connection, no Uni/Original/Connection link, solo Breed, field limits, and the Jade Forest gift limit.",
  },
  S4: {
    short: "Bandai — manual",
    label: "Bandai: English Paradise manual for the original devices",
    url: "https://tamagotchi-official.com/manual/toy/paradise/paradise_web_manual_IS_EN.pdf?20250725142947=",
    claim: "Controls, life stages, connection steps, Playdate/Gifts/Planets/Download, body and eye color inheritance, and the death screen.",
  },
  S6: {
    short: "Bandai — Tropics/Glacier manual",
    label: "Bandai: English Paradise manual for Orange Tropics / White Glacier",
    url: "https://tamagotchi-official.com/manual/toy/paradise/paradise_web_manual_tropics_glacier_IS_EN.pdf",
    claim: "Playdate, Gifts, and mini-game flow; SHOOTING and HOCKEY; earlier devices excluded from the mini-games; Lab Mode Breed.",
  },
  S7: {
    short: "Bandai — How to Play",
    label: "Bandai: Paradise How to Play",
    url: "https://tamagotchi-official.com/gb/series/paradise/howto/",
    claim: "Growth stages, zoom scales, eyes and colors passing to the baby, hurt and eaten bad-match imagery, and poop-to-biofuel.",
  },
  S8: {
    short: "Bandai — history",
    label: "Bandai: official Tamagotchi history",
    url: "https://tamagotchi-official.com/jp/history/",
    claim: "November 23, 1996 launch, the 2004 infrared revival, and the 2025 Paradise launch.",
  },
  S9: {
    short: "Bandai Namco — 30th anniversary",
    label: "Bandai Namco: 30th anniversary and 100 million units shipped",
    url: "https://renewal.bandainamco.co.jp/en/ir/library/newsletter82_special.html",
    claim: "10 million in Japan within eight months, 100 million shipped by July 2025, and the 2008 color-screen era.",
  },
  S10: {
    short: "Bandai — design story",
    label: "Bandai: 30th-anniversary history and original design story",
    url: "https://www.bandai.co.jp/press/2025/251119.php",
    claim: "Why death and a sense of living were built into the original toy.",
  },
  S12: {
    short: "Bandai — IP initiatives",
    label: "Bandai: intellectual-property initiatives (Paradise design recognition)",
    url: "https://www.bandai.co.jp/chizai/",
    claim: "Zoom Dial and physical contact communication recognized for encouraging direct communication between users.",
  },
  S13: {
    short: "Bandai — Jade Forest",
    label: "Bandai: Jade Forest announcement",
    url: "https://tamagotchi-official.com/gb/series/paradise/news/01_1165/",
    claim: "The FOREST field and new characters added by Jade Forest.",
  },
  S14: {
    short: "Bandai — Orange Tropics",
    label: "Bandai: Orange Tropics",
    url: "https://tamagotchi-official.com/gb/series/paradise/item/01_1441/",
    claim: "TROPICAL / ICE / FOREST fields and Link Play mini-games.",
  },
  S15: {
    short: "Bandai Toys — White Glacier",
    label: "Bandai Toys: White Glacier",
    url: "https://toy.bandai.co.jp/en/item/01_20624/",
    claim: "ICE starting field and the earlier-device mini-game limitation.",
  },
  S16: {
    short: "Bandai Toys — Neon Planets",
    label: "Bandai Toys: Neon Planets — announced for 2026-11-21",
    url: "https://toy.bandai.co.jp/en/item/01_21322/",
    claim: "Pre-release product information: galaxy level and switchable planets. Not released on the research date.",
  },
  S18: {
    short: "Bandai — Lab Tama",
    label: "Bandai: Pacific Island comes to Lab Tama",
    url: "https://tamagotchi-official.com/us/series/paradise/news/01_1340/",
    claim: "In-store Lab Tama mini-games, items, and special breeding partners; remove cases before connecting.",
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

// Desktop keeps the pipeline-composed Hero (brand layer baked in). At 768px and
// below, the title, copy, and icons are live HTML over the text-free background,
// because the composed Hero shrinks its typography past readability.
const heroAlt =
  "Conceptual illustration: two generic egg-shaped digital-pet toys touching on a sunny tabletop, with a small glowing egg above the point where they meet. Not actual Tamagotchi Paradise hardware.";

const HERO_ICONS = [
  { label: "Playdate", path: "M10 14a4 4 0 0 1 0-8h3M14 10a4 4 0 0 1 0 8h-3M8 12h8" },
  { label: "New egg", path: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z" },
  { label: "Traits", path: "M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" },
  { label: "Odds unknown", path: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v5M12 16v.5" },
];

function ResponsiveHero() {
  const common = { alt: heroAlt, sizes: "100vw", loading: "eager" as const, fetchPriority: "high" as const };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: heroImage, width: 1672, height: 941 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: heroBackground, width: 1672, height: 941 });
  return (
    <header className={`${styles.hero} ${local.hero}`}>
      <div className={local.heroText}>
        <p className={local.heroCategory} aria-hidden="true">TOYS &times; CONNECTION</p>
        <h1 className={local.heroTitle}>{title}</h1>
        <p className={local.heroCopy}>Two pocket pets can play, fight, or raise a baby that may inherit colors from both parents.</p>
        <ul className={local.heroIcons} aria-label="Article themes">
          {HERO_ICONS.map((icon) => (
            <li key={icon.label}>
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false"><path d={icon.path} /></svg>
              </span>
              {icon.label}
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <picture>
          <source media="(min-width: 769px)" srcSet={desktop} />
          <source media="(max-width: 768px)" srcSet={mobile} />
          <img {...rest} alt={heroAlt} className={local.heroImg} />
        </picture>
      </figure>
      <p className={local.heroNote}>{conceptNote}</p>
    </header>
  );
}

function BodyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={local.bodyFigure}>
      <Image src={src} alt={alt} width={1672} height={941} sizes="(max-width: 860px) 100vw, 800px" />
      <figcaption>{conceptNote}</figcaption>
    </figure>
  );
}

function DeviceGlyph({ tone }: { tone: "a" | "b" }) {
  return (
    <svg className={local.glyph} viewBox="0 0 48 60" aria-hidden="true" focusable="false">
      <ellipse cx="24" cy="31" rx="21" ry="27" className={tone === "a" ? local.glyphA : local.glyphB} />
      <rect x="13" y="20" width="22" height="18" rx="3" className={local.glyphScreen} />
      <circle cx="15" cy="47" r="2.6" className={local.glyphButton} />
      <circle cx="24" cy="49" r="2.6" className={local.glyphButton} />
      <circle cx="33" cy="47" r="2.6" className={local.glyphButton} />
    </svg>
  );
}

function PlaydateOutcomes() {
  const outcomes = [
    { tag: "PLAY", title: "They play", body: "A friendly encounter between the two characters." },
    { tag: "FIGHT", title: "They fight", body: "The meeting turns into conflict instead." },
    { tag: "FAMILY", title: "A new egg", body: "A good match can add to the family. The baby might inherit body and eye colors from its parents." },
    { tag: "BAD MATCH", title: "A slapstick disaster", body: "Bandai's guide pictures a hurt character and one apparently being eaten. Permanence is not documented." },
  ];
  return (
    <figure className={local.techFigure} aria-labelledby="outcomes-title" aria-describedby="outcomes-note">
      <div className={local.techHeading}>
        <div>
          <span>TECH-1 · DOCUMENTED POSSIBILITIES, NOT ODDS</span>
          <h3 id="outcomes-title">One Playdate, several possible endings</h3>
        </div>
        <p id="outcomes-note">What the manuals and official guide say can happen. Bandai publishes no probabilities.</p>
      </div>

      <ol className={local.flowSteps} aria-label="Connection steps documented in the manual">
        <li>
          <span className={local.glyphPair}><DeviceGlyph tone="a" /><DeviceGlyph tone="b" /></span>
          <strong>Choose PLAYDATE on both</strong>
          <small>Same action on each device</small>
        </li>
        <li>
          <strong>Dock at the top</strong>
          <small>Wait for the standby screen</small>
        </li>
        <li>
          <strong>Press B</strong>
          <small>Do not pull them apart while connected</small>
        </li>
      </ol>

      <div className={local.branchLabel}>
        <span>Result</span>
        <em>Odds: <strong>unknown</strong> — not published by Bandai</em>
      </div>

      <ul className={local.outcomeGrid}>
        {outcomes.map((o) => (
          <li key={o.tag}>
            <span>{o.tag}</span>
            <strong>{o.title}</strong>
            <p>{o.body}</p>
          </li>
        ))}
      </ul>

      <p className={local.flowAside}>
        <strong>Not a Playdate result:</strong> GIFTS, PLANETS, and DOWNLOAD are separate menu choices, and Orange Tropics / White Glacier add MINI GAMES.
      </p>

      <figcaption>
        Schematic only — abstract device symbols, not Tamagotchi hardware or character art. Outcome list from Bandai&rsquo;s manuals and How to Play page; no pair is guaranteed any result. <Src id="S4" /> <Src id="S6" /> <Src id="S7" />
      </figcaption>
    </figure>
  );
}

function WaveTable() {
  const rows: { family: string; status: "Released" | "Pre-release"; fields: string; connection: string; sources: SourceId[] }[] = [
    {
      family: "Pink Land, Blue Water, Purple Sky",
      status: "Released",
      fields: "LAND, WATER, SKY; different starting field by color",
      connection: "Base Playdate, Gifts, Planets, and Download connection",
      sources: ["S3", "S4"],
    },
    {
      family: "Jade Forest",
      status: "Released",
      fields: "FOREST, LAND, WATER",
      connection: "Connects with the original three; Jade-added items cannot be gifted back to those earlier devices",
      sources: ["S3", "S13"],
    },
    {
      family: "Orange Tropics, White Glacier",
      status: "Released",
      fields: "TROPICAL, ICE, FOREST; different starting field",
      connection: "Adds cooperative SHOOTING and competitive HOCKEY Link Play mini-games",
      sources: ["S14", "S15", "S6"],
    },
    {
      family: "Neon Planets",
      status: "Pre-release",
      fields: "Announced: Cosmic, New Tamagotchi, and nostalgic Tamagotchi planets",
      connection: "Pre-release on October 12, 2026; recheck detailed cross-device behavior after the announced November 21 launch in Japan",
      sources: ["S16"],
    },
  ];
  return (
    <figure className={local.techFigure} aria-labelledby="waves-title" aria-describedby="waves-note">
      <div className={local.techHeading}>
        <div>
          <span>TECH-2 · CHECKED {checkedDate.toUpperCase()}</span>
          <h3 id="waves-title">Paradise families and what changes when two connect</h3>
        </div>
        <p id="waves-note">Base connection is not the same as feature parity.</p>
      </div>
      <table className={local.waveTable}>
        <thead>
          <tr>
            <th scope="col">Paradise family</th>
            <th scope="col">Fields / worlds</th>
            <th scope="col">What changes when two connect?</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.family}>
              <th scope="row" data-label="Paradise family">
                {r.family}
                <span className={r.status === "Released" ? local.statusReleased : local.statusPre}>{r.status}</span>
              </th>
              <td data-label="Fields / worlds">{r.fields}</td>
              <td data-label="What changes when two connect?">{r.connection}</td>
              <td data-label="Source" className={local.sourceCell}>
                {r.sources.map((id) => <Src key={id} id={id} />)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption>
        Bandai has not published one matrix covering every pairing of all six released handhelds across every activity. Rows summarize what its FAQ, manuals, and product pages state; Link Play mini-games are excluded on Pink Land, Blue Water, Purple Sky, and Jade Forest. Paradise does not connect to Tamagotchi Uni, Original Tamagotchi, or Tamagotchi Connection. <Src id="S3" />
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

export default function TamagotchiParadiseConnectTwo() {
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
          <Link href="/">Home</Link><span>/</span><Link href="/#latest">Toys research</Link><span>/</span><span>Tamagotchi Paradise</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <ResponsiveHero />

        <ArticleResearchMeta left="Tamagotchi Paradise" right="A second Paradise" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div><Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} /></div>
            <p>Two tiny lives, raised apart, meet for the first time.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>
              Put two Tamagotchi Paradise devices together and you are not guaranteed a polite little multiplayer game.
            </p>
            <p>
              The creatures may become friends. They may fight. A good match can produce a new egg, and the baby may inherit the parents&rsquo; eye and body colors. A bad match can end in something much stranger&mdash;Bandai&rsquo;s own guide shows one character hurt after a fight and another apparently being eaten. <Src id="S7" />
            </p>
            <p>
              That is an absurd amount of drama for two plastic eggs pressed together. To understand why it works so well, though, it helps to begin with a more basic question.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="what-is">
            <h2 id="what-is">First: what is a Tamagotchi?</h2>
            <p>
              A Tamagotchi is a tiny electronic pet that lives on a screen inside a handheld toy. The classic shape is small, rounded, and egg-like, with a chain so it can hang from a bag. The original screen used simple black pixels and three buttons. Tamagotchi Paradise is chunkier and more colorful, but the central promise is the same: a little life is going to depend on you.
            </p>
            <div className={local.realHardware}>
              <p>
                If you have never seen one, <a href={bandaiUsPage} target="_blank" rel="noopener noreferrer">Bandai&rsquo;s official U.S. product page shows what the actual Paradise device looks like</a>. The illustration at the top of this article is conceptual artwork, not a photograph of the hardware.
              </p>
              <a className={local.realHardwareButton} href={bandaiUsPage} target="_blank" rel="noopener noreferrer">
                See actual product photos <span aria-hidden="true">↗</span><span className="sr-only"> (Bandai America, opens in a new tab)</span>
              </a>
            </div>
            <p>
              The creature does not wait patiently for a convenient play session. It gets hungry. It becomes unhappy. It makes a mess. It can get sick. You respond by feeding it, playing with it, cleaning its space, and giving it treatment. The toy runs in real time, so care feels less like clearing a level and more like maintaining a routine.
            </p>
            <p>
              &ldquo;Raising&rdquo; a Tamagotchi means that those small decisions shape what happens next. In Paradise, a character moves through Egg, Baby, Kid, Young, and Adult stages. Its environment, food, and the way you care for it influence the adult it becomes. Good care is not simply a score hidden behind the screen; it changes the creature you get. <Src id="S4" /> <Src id="S7" />
            </p>
            <p>
              And yes, Tamagotchi can die. Paradise&rsquo;s manual warns that an untreated or poorly cared-for character can reach a death screen. You can begin again with a new egg, but the possibility of loss is part of the design. Bandai&rsquo;s own history of the original toy says that including death&mdash;and insisting that the creature feel alive&mdash;helped make the idea emotionally powerful. <Src id="S4" /> <Src id="S10" />
            </p>
          </section>

          <BodyImage
            src={bodyOneImage}
            alt="Conceptual illustration: a generic egg-shaped digital-pet toy on a sunlit table beside a small food bowl and a toy ball, suggesting daily feeding and play. Not actual Tamagotchi Paradise hardware."
          />

          <section className={local.prose} aria-labelledby="phenomenon">
            <h2 id="phenomenon">Why did a plastic egg become a worldwide phenomenon?</h2>
            <p>
              Bandai launched the first Tamagotchi in Japan on November 23, 1996. It was not the most visually impressive electronic game of its era. Its great trick was making responsibility portable. <Src id="S8" />
            </p>
            <p>
              The creature could call for attention while its owner was at school, on a train, or talking to a friend. The chain let it hang from a bag, turning private progress into something other people could see and discuss. Its characters were cute but odd, and the possibility of growth or death made everyday taps feel consequential.
            </p>
            <p>
              The response became a social phenomenon. Bandai says the original sold 10 million units in Japan within eight months, and the company&rsquo;s history records more than 40 million worldwide by March 1999. By the end of July 2025, the wider Tamagotchi series had shipped 100 million units worldwide. <Src id="S9" /> <Src id="S8" />
            </p>
            <p>
              Those figures span different eras and measures, but the reason the idea endured is easier to see: Tamagotchi gives a face to a routine. You do not merely improve a statistic. You watch a creature react to what you remembered&mdash;or forgot&mdash;to do.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="paradise">
            <h2 id="paradise">What is different about Tamagotchi Paradise?</h2>
            <p>Paradise, first released in 2025, turns that one-creature relationship into a small world.</p>
            <p>
              Its defining control is the <strong>Zoom Dial</strong>, a wheel that changes the scale of care. Zoom out and you see the creature&rsquo;s planet in space. Move closer and you reach its field&mdash;the landscape where raised characters and objects collect. Closer still is the active Tamagotchi you are feeding and playing with. At the closest level, you can look inside at its cells and treat illness there. <Src id="S1" /> <Src id="S7" />
            </p>
            <p>
              It is a joke, a toy mechanic, and a design statement at the same time. The old Tamagotchi asked you to keep one tiny life going. Paradise asks you to think about the field around it, the planet holding it, and even what is happening inside its body.
            </p>
            <p>
              You still raise one active character through its life stages, but adult characters can be released into fields while you begin another generation. Over time, the screen becomes less like a cage for one pet and more like a miniature habitat full of past lives.
            </p>
            <p>
              Paradise also preserves Tamagotchi&rsquo;s talent for turning chores into comedy. The official guide says you can recycle the poop you clean up into biofuel for space travel. A task inherited from the 1996 toy becomes infrastructure for a planet. <Src id="S7" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="second-planet">
            <h2 id="second-planet">Then a second planet arrives</h2>
            <p>
              At the top of a Paradise device is a connection area. Open the connection menu on two devices, choose the same activity on both, wait for the standby screen, and physically dock them. The manual tells you to press the B button to begin and not to pull the toys apart during the connection. <Src id="S4" /> <Src id="S6" />
            </p>
            <p>There is no abstract friend request in the documented handheld-to-handheld process. The objects meet because two people bring them together.</p>
            <BodyImage
              src={bodyTwoImage}
              alt="Conceptual illustration: two generic egg-shaped digital-pet toys on a table with a glowing egg between them, suggesting a possible new generation. Not actual Tamagotchi Paradise hardware or an actual breeding result."
            />
            <p>The basic connection menu offers several possibilities:</p>
            <ul>
              <li><strong>Playdate:</strong> the characters can play, fight, or create a new addition to the family.</li>
              <li><strong>Gifts:</strong> one character can send an item to the other, with some limits between device generations.</li>
              <li><strong>Planets:</strong> the device can display planets belonging to previously connected friends.</li>
              <li><strong>Download:</strong> the device can receive supported content, including experiences tied to in-store Lab Tama installations.</li>
            </ul>
            <p>
              The uncertain Playdate is the heart of the idea. Bandai does not give you a simple &ldquo;connection successful&rdquo; animation and send you home. It stages a relationship.
            </p>
            <p>
              Some encounters are friendly. Some turn into fights. If the match succeeds, the two characters may become family and produce a new egg. If it fails, the official Paradise how-to page shows slapstick consequences: a hurt character and an image described as a Tamagotchi getting eaten. <Src id="S7" />
            </p>
            <p>
              The public guide does not say that the eating scene permanently deletes or kills the character, so it should be read as an official bad-date gag&mdash;not a documented save-file catastrophe. Even with that caution, it is a wonderfully strange answer to the question &ldquo;What happens when you connect two toys?&rdquo;
            </p>
          </section>

          <PlaydateOutcomes />

          <section className={local.prose} aria-labelledby="baby">
            <h2 id="baby">A baby can remember both parents</h2>
            <p>
              The family result is more than a cutscene. Paradise&rsquo;s manual says a new baby might inherit <strong>body and eye colors</strong> from its parents. Bandai&rsquo;s how-to page puts it even more directly: eyes and colors pass on to the baby. <Src id="S4" /> <Src id="S7" />
            </p>
            <p>
              That gives the next generation a visible history. One person may have raised a blue water creature; another may have raised something from a forest or tropical field. When the pairing succeeds, the new character can carry part of that meeting forward.
            </p>
            <p>
              The word &ldquo;can&rdquo; matters. Bandai does not publish a complete public genetics table, feature-by-feature odds, or a formula that lets you type in two parents and predict the exact baby. Community guides discuss more detailed patterns, but those should not be upgraded into official rules without first-party evidence.
            </p>
            <p>
              There is another limit: inheritance does not erase the hardware&rsquo;s field lineup. Bandai&rsquo;s FAQ says that even when characters breed through a connection and pass down traits, the characters you can raise are still limited by the fields associated with that device. <Src id="S3" />
            </p>
            <div className={local.claim}>
              <span>THE SHORT VERSION</span>
              <p>The child can remember its parents, but it still grows up in a particular world.</p>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="fifty-thousand">
            <h2 id="fifty-thousand">So are there really more than 50,000 Tamagotchis?</h2>
            <p>
              Bandai officially advertises <strong>over 50,000 variations</strong> in Tamagotchi Paradise. That is not the same thing as 50,000 separately drawn base species. <Src id="S1" />
            </p>
            <p>
              The company describes more than 50 adult characters grouped into 12 species, shaped by care and environment. Breeding then adds inherited differences&mdash;explicitly including eyes and body colors&mdash;to create many more appearances across generations.
            </p>
            <p>That makes the safe reading straightforward:</p>
            <blockquote className={local.quote}>
              Paradise begins with more than 50 adult character outcomes, then multiplies their visible possibilities through breeding and inherited traits, producing an official total of more than 50,000 variations.
            </blockquote>
            <p>
              What Bandai does not publish in the sources reviewed here is the arithmetic. There is no public breakdown showing which traits are counted, how many states each trait has, or how the final number is calculated. &ldquo;Over 50,000&rdquo; is a first-party product claim, not a number this article can independently reconstruct.
            </p>
            <p>
              The distinction is important because the real delight is not the size of a database. It is seeing a recognizable trace of two parents in the next creature you raise.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="one-device">
            <h2 id="one-device">You do not need two devices to breed</h2>
            <p>
              This is the most useful fact for a first-time buyer: <strong>one Tamagotchi Paradise is enough to create new generations</strong>. <Src id="S3" />
            </p>
            <p>
              Hold the Zoom Dial to enter Lab Mode, open HELP, choose NEW TAMA, and select BREED. The device offers candidates, and a successful result creates a new egg. Two-device breeding is therefore not a paywall around the basic generation system. <Src id="S6" />
            </p>
            <p>
              A second device changes the meaning of the result. It lets two independently raised characters meet. It allows friends or siblings to connect their own worlds. It creates gift exchange and shared planet history. And on the 2026 Orange Tropics and White Glacier devices, it also enables two-screen mini-games.
            </p>
            <p>
              Buy two because you want a social ritual or a particular pair of fields&mdash;not because the box has convinced you that a second purchase is required for any baby to exist.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="which-connect">
            <h2 id="which-connect">Which Tamagotchi Paradise devices can connect?</h2>
            <p>
              Paradise is its own connection family. Bandai&rsquo;s FAQ says it connects with other Tamagotchi Paradise devices and in-store Lab Tamas. It explicitly says Paradise cannot connect with earlier product families such as <strong>Tamagotchi Uni, Original Tamagotchi, or Tamagotchi Connection</strong>. <Src id="S3" />
            </p>
            <p>
              That can be confusing because those products may have their own connection features. Tamagotchi Connection uses infrared. Tamagotchi Uni has Wi-Fi features and even received a free Tamagotchi Lab-themed download area. None of that makes them physically compatible with Paradise.
            </p>
            <p>Within Paradise, device generations still matter:</p>
          </section>

          <WaveTable />

          <section className={local.prose} aria-label="Feature limits">
            <p>
              Bandai says the Link Play mini-games cannot be played on Pink Land, Blue Water, Purple Sky, or Jade Forest. That is a feature limit, not permission to say those devices cannot connect at all. <Src id="S14" /> <Src id="S15" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="pairs">
            <h2 id="pairs">The most interesting pairs to try</h2>
            <p>If the story has made you curious, these combinations each answer a different question.</p>
            <div className={local.pairList}>
              <article>
                <h3>Start with one device</h3>
                <p>Use the built-in Breed menu first. You will learn the care loop and generation system without doubling the number of active toys. This is the sensible default for a newcomer.</p>
              </article>
              <article>
                <h3>Pink Land + Blue Water</h3>
                <p>This is the easiest launch-wave contrast: two different starting environments, the same core connection system, and a clean way to see what happens when separately raised characters meet.</p>
              </article>
              <article>
                <h3>Purple Sky + Jade Forest</h3>
                <p>This pair creates the clearest world contrast. Purple Sky belongs to the original LAND/WATER/SKY family. Jade Forest replaces SKY with FOREST. Bandai confirms that Jade can connect to the original three, while the device&rsquo;s own fields still govern what it can raise. <Src id="S3" /></p>
              </article>
              <article>
                <h3>Jade Forest + an original device for Gifts</h3>
                <p>Try this pair to see a real generation boundary. Connection works, but items newly added with Jade Forest cannot be sent to Pink Land, Blue Water, or Purple Sky. <Src id="S3" /></p>
              </article>
              <article>
                <h3>Orange Tropics + White Glacier</h3>
                <p>This is the strongest pair for people who actually want two-player games. Both devices support SHOOTING, in which players cooperate to remove viruses, and HOCKEY, in which they compete across two screens. Their starting fields also complement each other: tropical and ice. <Src id="S6" /></p>
              </article>
              <article>
                <h3>A Paradise + a Lab Tama</h3>
                <p>Some participating stores have large Lab Tama installations. Bandai uses them for mini-games, downloads, items, and special breeding partners. The experience can add traits from characters found at the installation, but availability changes by location and event. Check the official store list before planning a trip. <Src id="S18" /></p>
              </article>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="connection-point">
            <h2 id="connection-point">The connection is the point, not the connector</h2>
            <p>
              Tamagotchi has spent three decades changing its technology. The 1996 original made a solitary creature feel alive. The 2004 revival made relationships and infrared communication central. Color screens made expressions and seasons more visible. Tamagotchi Uni connected to online spaces. Paradise comes back to a very physical gesture: put two objects together and see whether their inhabitants agree. <Src id="S8" /> <Src id="S9" />
            </p>
            <p>
              Bandai says Paradise&rsquo;s Zoom Dial and physical contact communication were recognized for expanding the play experience and encouraging direct communication between users. That is a better explanation of the toy than any connector specification. <Src id="S12" />
            </p>
            <p>
              The hardware connection lasts for a moment. The interesting part is what it joins: two routines, two care histories, two environments, and potentially a family line that looks different because the meeting happened.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="buy">
            <h2 id="buy">Should you buy one or two?</h2>
            <p>
              Buy <strong>one</strong> if you are curious about raising characters, exploring fields, and breeding new generations on your own. You will not be locked out of breeding.
            </p>
            <p>
              Consider <strong>two</strong> if two people want separate pets, if you want cross-device social play and gifts, or if you specifically want the Orange Tropics / White Glacier cooperative and competitive games. Compare fields and feature generations before choosing by shell color alone.
            </p>
            <div className={local.buyBlock}>
              <AmazonDisclosure />
              <div className={local.buyGroups}>
                <section className={local.buyCard} aria-labelledby="buy-one">
                  <h3 id="buy-one">Starting with one Paradise?</h3>
                  <p>You only need one Paradise to raise characters and breed new generations. Choose a starting world you like.</p>
                  {/* U.S. Amazon ASINs verified by product title on Amazon.com, 2026-10-12. */}
                  <AmazonCta href={amazonProductUrl("B0F2QB96LL")} label="View Pink Land" className={local.buyCta} />
                  <AmazonCta href={amazonProductUrl("B0DX8B8XGW")} label="View Blue Water" className={local.buyCta} />
                </section>
                <section className={local.buyCard} aria-labelledby="buy-two">
                  <h3 id="buy-two">Want two-player mini-games?</h3>
                  <p>Orange Tropics and White Glacier support the newer cooperative and competitive Link Play mini-games. Two compatible devices are needed for two-device play.</p>
                  <AmazonCta href={amazonProductUrl("B0GPGVWMTF")} label="View Orange Tropics" className={local.buyCta} />
                  <AmazonCta href={amazonProductUrl("B0GTWSPMCZ")} label="View White Glacier" className={local.buyCta} />
                </section>
              </div>
            </div>
            <p>
              For the real product design, current retailer links, and any published suggested price, check <a href={bandaiUsPage} target="_blank" rel="noopener noreferrer">Bandai America&rsquo;s official Paradise product page</a>. U.S. availability, retailer pricing, and stock vary. Confirm that a listing says <strong>Tamagotchi Paradise</strong>, not Original, Connection, Uni, or a decorative shell for another model.
            </p>
            <p>
              And if a friend already owns one, connect with theirs before buying a second for yourself. The whole premise is better when the other tiny life has genuinely come from somewhere else.
            </p>
            <div className={local.analysisNote}>
              <span>DATED NOTE · {checkedDate.toUpperCase()}</span>
              <p>
                Neon Planets is announced for release in Japan on November 21, 2026, and had not been released when this article was checked. Nothing here is a hands-on result or a U.S. availability claim for it. <Src id="S16" />
              </p>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="takeaway">
            <h2 id="takeaway">The takeaway</h2>
            <p>What happens when you connect two Tamagotchi Paradise devices?</p>
            <p>
              At the simplest level, they exchange data. On the screen, something more charming happens: two creatures meet, and the meeting may become a gift, a game, a fight, a visual joke, or a new generation with traces of both parents.
            </p>
            <p>
              The surprise is not that two modern toys can communicate. It is that Tamagotchi turns communication into lineage. The next creature can look the way it does because two people cared for two different tiny lives&mdash;and then brought them together.
            </p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>Two care histories meet&mdash;and sometimes, a new one begins.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Kumia Labs reviewed Bandai&rsquo;s official Tamagotchi Paradise announcement, FAQ, English manuals, How to Play guide, product pages, and Lab Tama news, plus Bandai and Bandai Namco corporate history pages, on {checkedDate}. No device was purchased or hands-on tested for this article. Bandai does not publish match odds, gene probabilities, or the formula behind &ldquo;over 50,000 variations,&rdquo; and none is implied here. Community threads and fan guides were read only to understand common questions, not as evidence. Neon Planets is pre-release on the check date. The Hero, in-article, and card images are conceptual illustrations, not Bandai photography or actual Paradise hardware; no Bandai image is reproduced. Amazon.com purchase links are paid links. Product facts and compatibility claims are based on Bandai&rsquo;s official sources, not retailer listings.
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
