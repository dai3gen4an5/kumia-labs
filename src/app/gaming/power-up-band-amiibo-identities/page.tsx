import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { PowerUpBandExplorer } from "@/components/power-up-band-explorer";
import { OneBandThreeReaders } from "@/components/power-up-band-visuals";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  COMMERCE_CANDIDATES,
  SOURCES,
  type SourceId,
} from "@/data/power-up-band-explorer";
import { absoluteUrl } from "@/lib/site";
import styles from "../../home/what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/gaming/power-up-band-amiibo-identities";
const title = "The Theme-Park Wristband Your Nintendo Switch Reads as an amiibo";
const metaDescription =
  "A SUPER NINTENDO WORLD Power-Up Band is a park player identity, character Team, play record, and corresponding amiibo on Nintendo Switch and Switch 2.";
const ogDescription =
  "The same Power-Up Band means one thing in a Universal park and another in a Nintendo game. Here is what follows the character—and what stays park-specific.";
const publishedDate = "2026-09-21";
const updatedDate = "2026-09-21";
const heroImage = "/images/kumia-power-up-band-amiibo-identities-hero.png";

const ARTICLE_SOURCE_IDS: SourceId[] = [
  "S1",
  "S2",
  "S3",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
  "S11",
  "S12",
  "S13",
  "S14",
  "S17",
  "S18",
  "S20",
];

function Src({ id }: { id: SourceId }) {
  return (
    <a
      className={local.src}
      href={SOURCES[id].url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Source: ${SOURCES[id].label}`}
    >
      {SOURCES[id].short} ↗
    </a>
  );
}

function EditorialImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={local.editorialSlot}>
      <Image src={src} alt={alt} width={1672} height={941} sizes="(max-width: 700px) 100vw, 1120px" className={local.editorialImg} />
    </figure>
  );
}

function CommerceCandidate({
  variant,
  eyebrow,
  name,
  url,
  image,
  imageAlt,
  children,
}: {
  variant: "primary" | "secondary";
  eyebrow: string;
  name: string;
  url: string;
  image: string | null;
  imageAlt: string | null;
  children: React.ReactNode;
}) {
  const cardClass = variant === "primary" ? local.commerceCardPrimary : local.commerceCardSecondary;
  return (
    <article className={cardClass}>
      {image && (
        <div className={local.commerceImage}>
          <Image src={image} alt={imageAlt ?? ""} width={640} height={360} />
        </div>
      )}
      <div className={local.commerceBody}>
        <p className={local.eyebrow}>{eyebrow}</p>
        <h3>{name}</h3>
        <p>{children}</p>
        <span className={local.commerceCtaRow}>
          <a className={local.commerceCta} href={url} target="_blank" rel="noopener noreferrer sponsored">
            View {name} on Amazon.com →
          </a>
          <span className={local.paidLink}>(paid link)</span>
        </span>
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
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

export default function PowerUpBandAmiiboIdentitiesPage() {
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
      { "@type": "ListItem", position: 2, name: "Gaming research", item: absoluteUrl("/#latest") },
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
          <Link href="/#latest">Gaming research</Link>
          <span>/</span>
          <span>Power-Up Band identities</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image
              src={heroImage}
              alt="Kumia Labs cover: The Theme-Park Wristband Your Nintendo Switch Reads as an amiibo. A blue and yellow Power-Up Band on a sunlit theme-park wall, with icons for park ID, character link, and new role."
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
          </figure>
        </header>

        <ArticleResearchMeta left="Power-Up Band" right="Nintendo amiibo" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} />
            </div>
            <p>The Band supplies an identity; the place or game decides what that identity means.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>A Power-Up Band looks like a souvenir from SUPER NINTENDO WORLD, but it does not keep one job.</p>
            <p>
              SUPER NINTENDO WORLD is a Nintendo-themed area inside three operating Universal destinations: Universal Studios Japan in Osaka, Universal Studios Hollywood in California, and Universal Epic Universe in Florida. The colorful lands turn familiar game ideas—hitting blocks, collecting coins, winning keys—into physical theme-park activities.
            </p>
            <p>
              The Power-Up Band is the optional character wristband used for that interactive play. It is not a park ticket, not an area-entry reservation, and not a rechargeable smartwatch. It gives the park a way to recognize a player and connect activities to a play history.
            </p>
            <p>
              amiibo are Nintendo character accessories that compatible games can read at a nearby NFC touchpoint. Most look like figures or cards. The surprising exception is on your wrist: <strong>touch a Power-Up Band to a Nintendo Switch or Switch 2, and a compatible game reads it as the amiibo for the character on the Band.</strong>
            </p>
            <p className={local.openingSources}>
              <Src id="S1" /> <Src id="S3" /> <Src id="S11" />
            </p>
            <div className={local.thesis}>
              <span>THE IDENTITY RULE</span>
              <p>The Band supplies an identity; the place or game decides what that identity means.</p>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="choice">
            <h2 id="choice">Your character choice matters twice</h2>
            <p>
              At the park, choosing Mario instead of Yoshi does not buy a stronger Band. Universal&apos;s current guide says the standard styles operate identically. One character does not collect better coins or unlock an easier version of a Key Challenge. <Src id="S8" />
            </p>
            <p>
              The choice still matters. The character places you on that character&apos;s Team for park rankings. Take the Band home and the same choice becomes its amiibo identity. A Peach Band means Team Peach in the park and Peach amiibo in a compatible game. A Toad Band means Team Toad in the park and Toad amiibo at home. <Src id="S1" /> <Src id="S5" />
            </p>
            <p>
              The current standard lineup differs by park. Universal Studios Hollywood documents six: Mario, Luigi, Princess Peach, Princess Daisy, Toad, and Yoshi. Universal Studios Japan documents those six plus Donkey Kong and Diddy Kong. Epic Universe documents the same eight, with the two Kongs available at Universal Orlando Resort in the United States rather than Hollywood. <Src id="S5" /> <Src id="S8" /> <Src id="S20" />
            </p>
            <p>That gives one design decision two meanings. In the park, the character is your team affiliation. At home, it is the identity a game receives.</p>
          </section>

          <EditorialImage
            src="/images/kumia-power-up-band-amiibo-identities-body-01.png"
            alt="An editorial illustration of a guest touching a Power-Up Band to a park interaction point at a Universal theme park. It shows the Band as a wearable player identity, not proof of any specific park mechanism."
          />

          <section className={local.prose} aria-labelledby="readers">
            <h2 id="readers">One Band, three readers</h2>
            <p>It is tempting to explain every role with one magic chip. The official descriptions are more careful—and more interesting.</p>
            <p>
              Inside Universal Studios Japan, the park system uses ambient radio-frequency technology to read an anonymous ID associated with the Band. That is how the physical land recognizes a player and triggers park features. <Src id="S7" />
            </p>
            <p>
              The park app approaches the Band through the QR code on its underside. Scan the code to link the Band, see its park-side record, choose a player name, and check rankings. <Src id="S5" /> <Src id="S8" />
            </p>
            <p>
              Nintendo hardware uses the circular character face on top. Touch that face to the NFC point on a compatible Switch or Switch 2 controller, and the game receives the corresponding amiibo identity. <Src id="S1" /> <Src id="S3" />
            </p>
            <p>The important point is not what lives in an undocumented memory region. It is that three readers ask three different questions of the same object.</p>
            <OneBandThreeReaders />
          </section>

          <section className={local.prose} aria-labelledby="memory">
            <h2 id="memory">The park remembers the Band</h2>
            <p>A Power-Up Band is not only a momentary controller. At Universal Studios Japan, its player identity can continue across visits.</p>
            <p>
              USJ says scores and play logs are stored in the cloud. Register the same Band again after reinstalling the app or removing it from the app, and the earlier play log can be viewed again. The USJ app can hold up to ten Bands, allowing a family to switch among several player records on one device. <Src id="S5" />
            </p>
            <p>
              That persistence also creates a limit. USJ says an existing play log cannot be transferred to a different Power-Up Band. Buying a new Mario or Yoshi design does not turn it into the old player. <Src id="S5" />
            </p>
            <p>
              The numbers visible in the app do not all run on the same clock. USJ documents an individual history, a daily individual score that resets each day, and a character Team score that resets every hour. Coins, keys, stamps, rankings, and play records are related parts of the park experience, not one universal balance traveling everywhere. <Src id="S5" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="travel">
            <h2 id="travel">The Band can cross the Pacific; the park records do not merge</h2>
            <p>
              Universal Studios Japan explicitly says a Power-Up Band bought at Universal Studios Hollywood can be used in Japan. Universal&apos;s Hollywood guide states that a Hollywood Band works in Japan as well. The reuse is real and should be stated plainly. <Src id="S5" /> <Src id="S9" />
            </p>
            <p>
              The same sources draw the boundary just as clearly. Japan and Hollywood require their respective park apps. Coins and stamps appear in the app for the park where they were earned. The three keys required for the Bowser Jr. finale must be collected separately in each park. Registering a Band in the other park does not erase the first park&apos;s data, but it does not merge the two records either. <Src id="S5" />
            </p>
            <p>
              Epic Universe creates a third park context through the Universal Orlando app. Current Universal guidance explains how to link a Band there, and an official Universal staff reply says a Japan-purchased Band can work at Epic Universe after being linked to the Orlando app. That is useful evidence for one direction. It is not a complete, durable promise that every Band, app, progress type, and travel direction is interchangeable among all three parks. <Src id="S8" /> <Src id="S12" />
            </p>
            <div className={local.boundaryBox}>
              <span>VERIFIED BOUNDARY</span>
              <p><strong>Japan and Hollywood mutually accept the physical Band, with separate app and progress contexts.</strong> For Epic Universe, follow the destination&apos;s current official instructions rather than assume a global shared account.</p>
            </div>
          </section>

          <EditorialImage
            src="/images/kumia-power-up-band-amiibo-identities-body-02.png"
            alt="An editorial illustration of a Power-Up Band on a coffee table in a home living room, near a game console and controller. It shows the Band's second life at home, not a technical diagram of how it is read."
          />

          <section className={local.prose} aria-labelledby="games">
            <h2 id="games">At home, the game writes the verb</h2>
            <p>“This is a Mario amiibo” tells a game which character identity arrived. It does not tell the game what to do next.</p>
            <p>
              Super Smash Bros. Ultimate provides a clean example. Nintendo says the Mario, Luigi, Peach, Daisy, and Yoshi Power-Up Bands can become Figure Players—fighters that learn and change as they battle. Toad is not a playable Smash fighter, so the Toad Band produces a reward instead. <Src id="S14" />
            </p>
            <p>The Band did not change characters between those results. The game changed the meaning of the character it received.</p>
            <p>
              Donkey Kong Bananza on Switch 2 offers an even more specific example. Nintendo says the Donkey Kong and Diddy Kong Power-Up Bands produce the same gold KONG panels as the corresponding Donkey Kong and Diddy Kong amiibo figures. The panels can be thrown to explode against enemies or terrain. <Src id="S13" />
            </p>
            <p>That is the identity thesis in miniature. In Epic Universe or USJ, a Donkey Kong Band is a park player and Team identity. In Donkey Kong Bananza, the same character identity becomes an explosive in-game object.</p>
          </section>

          <section className={local.prose} aria-labelledby="gold">
            <h2 id="gold">Gold can still mean Mario</h2>
            <p>Limited designs add another role: collectible.</p>
            <p>
              Universal Studios Japan sold a Golden Power-Up Band in 2023. Nintendo says that discontinued Golden Band works as a Mario amiibo. The finish changed; the amiibo character did not. <Src id="S2" />
            </p>
            <p>
              Universal Studios Hollywood later released its own commemorative Golden Power-Up Band, and USJ introduced an “Invincible Mario” anniversary design in 2026. Their existence is official, but the sources used here do not directly state the amiibo identity of those exact editions. They stay out of the Explorer. Appearance is not evidence enough to invent a mapping. <Src id="S17" /> <Src id="S18" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="limits">
            <h2 id="limits">“Acts as an amiibo” still has limits</h2>
            <p>
              Ordinary amiibo figures can work with older Nintendo hardware, including Wii U and members of the Nintendo 3DS family. Power-Up Bands cannot. Nintendo explicitly limits Power-Up Band amiibo use to compatible software on Nintendo Switch and Switch 2. <Src id="S1" /> <Src id="S3" />
            </p>
            <p>The same restraint applies to games. A game can support some character amiibo but not others. It can turn one Band into a trainable fighter and another into a reward. It can give Donkey Kong a special response and treat unrelated amiibo generically.</p>
            <p>Do not read “Power-Up Band = amiibo” as “every game does something special.” The Band supplies a character identity; compatibility and function still belong to the game.</p>
          </section>

          <section className={styles.comparison} aria-labelledby="explorer-title">
            <div className={styles.sectionHeading}>
              <p>POWER-UP BAND IDENTITY EXPLORER</p>
              <h2 id="explorer-title">Which identity does your Power-Up Band carry?</h2>
            </div>
            <p className={local.explorerIntro}>Select one of the eight standard characters. The result shows the Band&apos;s park Team, documented standard park availability, corresponding amiibo identity, console support, one verified game example, and the travel boundary that applies.</p>
            <PowerUpBandExplorer />
          </section>

          <section className={local.prose} aria-labelledby="commerce">
            <h2 id="commerce">Two games that make the second life visible</h2>
            <p>
              If you already own a Donkey Kong or Diddy Kong Band and a Switch 2, Donkey Kong Bananza is the most direct modern demonstration in this article: Nintendo explicitly documents the Power-Up Band reaction.
            </p>
            <p>
              Super Smash Bros. Ultimate is the secondary example because it reveals a different kind of identity: five Bands become Figure Players, while Toad becomes a reward.
            </p>
            <figure className={local.videoWrap}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/WLu7e8RZoYc"
                title="Super Smash Bros. Ultimate — official Nintendo video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <figcaption className={local.videoCaption}>Official Super Smash Bros. Ultimate video by Nintendo of America.</figcaption>
            </figure>

            <AmazonDisclosure />
            <div className={local.commerceStack}>
              <CommerceCandidate
                variant="primary"
                eyebrow="RECOMMENDED"
                name={COMMERCE_CANDIDATES.bananza.name}
                url={COMMERCE_CANDIDATES.bananza.url}
                image={COMMERCE_CANDIDATES.bananza.image}
                imageAlt={COMMERCE_CANDIDATES.bananza.imageAlt}
              >
                Nintendo documents Donkey Kong and Diddy Kong Power-Up Bands producing gold KONG panels. This does not imply that the game requires a Band, and it does not promise the Pauline amiibo&apos;s Diva Dress.
              </CommerceCandidate>
              <CommerceCandidate
                variant="secondary"
                eyebrow="ALSO WORTH A LOOK"
                name={COMMERCE_CANDIDATES.smash.name}
                url={COMMERCE_CANDIDATES.smash.url}
                image={COMMERCE_CANDIDATES.smash.image}
                imageAlt={COMMERCE_CANDIDATES.smash.imageAlt}
              >
                Mario, Luigi, Peach, Daisy, and Yoshi Bands can become Figure Players. Nintendo says the Toad Band gives a reward instead.
              </CommerceCandidate>
            </div>
            <p className={local.switchNote}>
              Donkey Kong Bananza requires a Nintendo Switch 2. If you don&apos;t already own one, that&apos;s a separate purchase from the game or the Band.
            </p>
            <p className={local.disclosureNote}>
              As an Amazon Associate, Kumia Labs earns from qualifying purchases. See the <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
            </p>
            <div className={local.officialCard}>
              <p className={local.eyebrow}>OFFICIAL · NON-AFFILIATE</p>
              <h3>Looking for a Power-Up Band in the United States?</h3>
              <p>Universal&apos;s current guide lists purchase locations in and around its U.S. parks. Kumia does not substitute a resale listing or invent an online Universal checkout page.</p>
              <a href={SOURCES.S8.url} target="_blank" rel="noopener noreferrer">
                Check Universal&apos;s current U.S. purchase locations and app setup →
              </a>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="closing">
            <h2 id="closing">One object, many worlds</h2>
            <p>A Power-Up Band can begin as a souvenir you wear. At a park interaction, it becomes a player identity, a character Team, and the thread connecting today&apos;s play to a later visit. In another documented park, the same physical object can enter a separate local record. At home, a Switch reads its character face as an amiibo.</p>
            <p>None of those roles is the single “real” one. They gather around the same object, waiting for a park system, phone camera, or Nintendo game to ask a different question.</p>
            <p>The clever part is not only that a wristband works with a console. It is that the Band keeps supplying the same character identity while each world decides what that identity can do.</p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>The Band keeps the character. Every world supplies a new verb.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              This article uses Nintendo and Universal first-party pages reviewed for the final Kumia research package and checked September 21, 2026. Kumia did not reverse-engineer or physically test a Power-Up Band. Japan/Hollywood mutual reuse is stated only with separate app and progress contexts; the article does not claim complete three-park interoperability. Limited-edition mappings are omitted unless a first-party source states them. Amazon links use verified ASINs for the two named products above; Kumia Labs earns from qualifying purchases through those links. Prices, sellers, stock, resale Bands, and unofficial NFC products are outside this article.
            </p>
            <ul className={local.sourceList}>
              {ARTICLE_SOURCE_IDS.map((id) => (
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
