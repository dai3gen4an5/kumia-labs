import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmazonCta, AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { LegoTrainsExplorer } from "@/components/lego-trains-explorer";
import { PowerPathDiagram } from "@/components/lego-trains-visuals";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SOURCES, type SourceId } from "@/data/lego-trains-explorer";
import { amazonSearchUrl } from "@/lib/amazon";
import { absoluteUrl } from "@/lib/site";
import styles from "../../home/what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/toys/lego-trains-old-track",
  title = "LEGO Never Changed the Track Width. It Changed Where the Electricity Lives.",
  seoTitle = "Can New LEGO Trains Run on Old Track? The Width Stayed the Same",
  metaDescription =
    "LEGO says its train-track width never changed. See why new battery trains run on old rails—and why old 9V motors lose power on plastic track.",
  ogDescription = "The rails still guide trains across generations, but the source of power moved from batteries to metal track and back onboard.",
  publishedDate = "2026-09-20",
  updatedDate = "2026-09-20",
  heroImage = "/images/kumia-lego-trains-old-track-hero.png";

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

export default function LegoTrainsOldTrack() {
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
          <span>LEGO trains and old track</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image
              src={heroImage}
              alt="Kumia Labs cover: LEGO Never Changed the Track Width. It Changed Where the Electricity Lives. A modern white and blue LEGO-style train on a curved track in a sunlit playroom, with icons for track width, rail power, and onboard battery."
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
          </figure>
        </header>

        <ArticleResearchMeta left="Modern LEGO train" right="Old LEGO track" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} />
            </div>
            <p>One measurement stayed the same. Everything that powers the train moved around it.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>
              Imagine finding a loop of old LEGO train track in a box from childhood. Some rails look metallic. Recent motorized LEGO trains use plastic track and onboard batteries with wireless control. They appear to belong to different worlds—and electrically, they do.
            </p>
            <p>
              But LEGO says one crucial measurement never moved: the width of the track.
              <Src id="S1" />
            </p>
            <p>
              That means a current battery-powered train can run on old rails. Put an old 9V rail-powered locomotive on today’s plastic track, however, and you get a stranger result. The wheels fit. The rails guide them. The motor receives no electricity.
              <Src id="S1" />
              <Src id="S2" />
            </p>
            <p>The track remembers the train. The power system does not always return the favor.</p>
          </section>

          <section className={local.prose} aria-labelledby="road">
            <h2 id="road">The road stayed; the power moved</h2>
            <p>The easiest way to understand this is to forget the generation names for a moment.</p>
            <p>A modern LEGO train carries its energy onboard. Its battery hub sends power to the motor, and Bluetooth sends the driver’s instructions. The track mostly supplies a path.</p>
            <p>
              An older 9V train treats the layout as part of the machine. Electricity runs through metal rails and enters the motor through metal contacts in the wheels. Replace those conductive rails with all-plastic track and the path remains, but the circuit disappears.
              <Src id="S2" />
              <Src id="S7" />
            </p>
            <p>That is why compatibility here is lopsided. The self-contained modern train asks very little of old track. The old train asks modern track for electricity it was never designed to provide.</p>
            <p>
              LEGO’s own Help page puts the distinction plainly: newer Power Functions and Powered Up trains can run on both old and current track because they carry an internal battery box. Old 9V and 12V systems need their appropriate older metal-equipped powered track and control equipment to move under their original power arrangements.
              <Src id="S2" />
            </p>
          </section>

          <EditorialImage
            src="/images/kumia-lego-trains-old-track-body-01.png"
            alt="An editorial illustration split by era: on the left, an older black steam-style LEGO train on metal-looking rails; on the right, a modern battery-powered train with a small battery icon above it. It illustrates the story of power moving aboard the train, not a technical diagram of any track or connection."
          />
          <p className={local.caption}>The width stayed useful while power moved from specialized rails back aboard the train.</p>

          <PowerPathDiagram />

          <section className={local.prose} aria-labelledby="moved">
            <h2 id="moved">LEGO trains have moved the electricity before</h2>
            <p>The funny part is that power did not travel in one direction through history.</p>
            <p>
              The first fully movable plastic LEGO train appeared in 1964. In 1966, LEGO put a 4.5-volt battery onboard a train running on blue rails.
              <Src id="S3" />
              <Src id="S4" />
            </p>
            <p>
              Two years later came a control system that now sounds like a smart-home experiment from the wrong decade: a special whistle made the train drive, stop, and reverse.
              <Src id="S3" />
            </p>
            <p>
              Then electricity moved into the layout. In 1969, a 12-volt system added powered rails between the running rails and connected them to a transformer. In 1991, the 9-volt system sent electricity through the running rails themselves and molded the rail sections in one piece.
              <Src id="S3" />
              <Src id="S4" />
            </p>
            <p>
              Later battery systems moved the source onboard again. A 2010 Power Functions passenger train used a battery box and infrared remote. By 2018, Powered Up trains were using Bluetooth.
              <Src id="S6" />
              <Src id="S8" />
              <Src id="S5" />
            </p>
            <p>So the story is not a clean march from primitive to modern. It is more like a relay race: onboard battery, powered center rails, powered running rails, onboard battery again.</p>
            <p>Through those changes, LEGO says the width never changed.</p>
          </section>

          <section className={local.prose} aria-labelledby="grow">
            <h2 id="grow">A system designed to keep growing</h2>
            <p>
              One account from LEGO’s 1969 train leaflet makes the continuity feel less accidental. It described a child starting with a push-along train, adding a battery motor, and later adding a 12-volt motor and transformer. The same train would grow in function, the leaflet explained, and nothing had to be thrown away.
              <Src id="S3" />
            </p>
            <p>That promise belonged to its own era; it is not proof that every part made since then plugs into every other part. But it shows the idea LEGO was selling: a system could change without making earlier play meaningless.</p>
            <p>The surviving track width is a remarkably visible version of that idea. An old wagon can still roll in a new layout. A newer battery locomotive can travel over an older rail. The electricity may have changed address, but the wheels still know where home is.</p>
            <p>
              LEGO preserved another surprising bridge between generations of play in a completely different size: <Link href="/toys/lego-duplo-hidden-connection">DUPLO looks separate, yet was designed to connect back to standard LEGO</Link>.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="time">
            <h2 id="time">The combinations that feel like time travel</h2>
            <p>
              <strong>A Powered Up train on old metal track.</strong> The train brings its own battery, so the old rail does not have to provide power.
              <Src id="S1" />
              <Src id="S2" />
            </p>
            <p>
              <strong>An older unpowered car behind a new train.</strong> LEGO says train cars from earlier models run on new tracks and attach to new trains. That makes a mixed-generation train more than a display idea.
              <Src id="S1" />
            </p>
            <p>
              <strong>An old 9V locomotive on current plastic track.</strong> It demonstrates the limit: physical fit survives, original rail power does not. Do not force or energize unfamiliar equipment.
              <Src id="S2" />
              <Src id="S7" />
            </p>
            <p>
              <strong>A running train, lifted off the rails.</strong> A Powered Up train can even keep running when lifted off the track, according to LEGO’s City FAQ—a neat clue that the power is onboard.
              <Src id="S1" />
            </p>
            <p>
              <strong>A 12V and a 9V layout side by side.</strong> Both are “old electric LEGO trains,” but 12V used separate electric rails between the running rails; 9V powered the running rails themselves. One label should never erase that difference.
              <Src id="S3" />
            </p>
          </section>

          <EditorialImage
            src="/images/kumia-lego-trains-old-track-body-02.png"
            alt="An editorial illustration of a steam-style LEGO train and a modern white and red LEGO train sharing one miniature railway with a stone viaduct and tunnel. It illustrates trains from different eras on one layout, not proof of how any track pieces connect."
          />
          <p className={local.caption}>LEGO says newer onboard-battery trains can run on older track because the train carries its own power.</p>

          <section className={local.prose} aria-labelledby="limits">
            <h2 id="limits">Where the neat story stops</h2>
            <p>“LEGO never changed the width” is not the same as “nothing changed.”</p>
            <p>It does not prove that every old track piece directly clips to every new one. Track connectors and construction changed. It does not guarantee that a long custom locomotive clears every curve or switch. It does not make brittle wiring, corroded contacts, or incomplete transformers safe.</p>
            <p>
              It also does not make Power Functions and Powered Up electronics interchangeable. One used infrared and older connectors; the other uses Bluetooth and new plugs. They share the ability to bring batteries onboard, not the same electronic language.
              <Src id="S5" />
              <Src id="S8" />
            </p>
            <p>
              And 9V is not shorthand for every old electric train. A 12V train needs its appropriate center power rails and transformer/control system. A 9V train needs the correct conductive running rails and control equipment. Today’s plastic track powers neither through the rails.
              <Src id="S2" />
              <Src id="S3" />
            </p>
            <p>The useful sentence is narrower and better: the same width preserves a path, while the power source decides whether a motor can use it.</p>
          </section>

          <section className={styles.comparison} aria-labelledby="explorer-title">
            <div className={styles.sectionHeading}>
              <p>A SMALL EXPLORER · OPTIONAL</p>
              <h2 id="explorer-title">Will it run here?</h2>
            </div>
            <p className={local.priority}>
              Use the small explorer here to choose a train type and a track type. It returns one of four results: <strong>FITS &amp; RUNS</strong>, <strong>FITS — NEEDS THE RIGHT POWER</strong>, <strong>ROLLS — NO MOTOR NEEDED</strong>, or <strong>CHECK FIRST</strong>.
            </p>
            <p>It deliberately does not answer whether two generations of track pieces clip directly together. LEGO’s official sources establish train-on-track behavior much more broadly than they establish every track-to-track joint.</p>
            <LegoTrainsExplorer />
          </section>

          <section className={local.prose} aria-labelledby="try">
            <h2 id="try">What you can try today</h2>
            <p>Start with the least expensive experiment: use what is already in the box.</p>
            <p>If the train has a battery box or hub onboard, place it on clean, intact old LEGO train track of the same family width and follow its normal operating instructions. If it runs, the old track is acting as a road, not a wire.</p>
            <p>If the locomotive is an old 9V or 12V model and you have only current plastic track, expect it to fit but not receive rail power. Roll an unpowered wagon by hand instead, or let a supported newer locomotive pull an older car.</p>
            <p>For a visual demonstration, place one section of old metal-looking rail beside one current plastic section without claiming they connect. The difference tells the story before the motor even starts.</p>
            <p className={local.safety}>
              <strong>Old electrical equipment deserves restraint.</strong> If the correct controller, transformer, cable, or instructions are missing—or any wiring looks damaged—stop at the unpowered rolling experiment.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="buy">
            <h2 id="buy">If the story makes you want a train again</h2>
            <p className={local.commerceNote}>Already have a newer battery-powered train and old LEGO track? Buy nothing first. LEGO says the new train can use old track; inspect the pieces and follow the train’s normal instructions.</p>
            <p>
              LEGO currently sells plastic track packs, including straight, curved, flexible, and switch sections. Those are useful for a current battery-powered layout, but they do not restore rail power to an old 9V or 12V motor.
            </p>
            <Product
              problem="More track for a battery-powered layout"
              name="LEGO Tracks 60205"
              facts="Current plastic track: 8 straight, 4 curved, and 8 flexible sections."
              watch="it guides trains but supplies no rail power. Check the current price and availability at LEGO."
              id="S11"
              link="View at LEGO"
            />
            <Product
              problem="Optional: a bigger layout"
              name="LEGO Switch Tracks 60238"
              facts="Current plastic track with 4 curves and left and right switches."
              watch="it is current plastic track, not a solution for old 9V or 12V power. Check the current price and availability at LEGO."
              id="S12"
              link="View at LEGO"
            />
            <p className={local.commerceNote}>These are current sets you can try the connection with, not evidence for the historical width claim.</p>
            <AmazonDisclosure />
            <AmazonCta href={amazonSearchUrl("LEGO City train set")} label="LEGO City train set" />
            <AmazonCta href={amazonSearchUrl("LEGO train track set")} label="LEGO train track set" />
            <p>
              The current Vintage Steam Train and Harbor Freight Train are appealing story-led starting points, but <strong>neither is motorized in the box</strong>.
            </p>
            <Product
              problem="A story-led train to build"
              name="Vintage Steam Train 60511"
              facts="575 pieces, marked for ages 7+, with a track section and station."
              watch="it is not motorized in the box. Motorization needs separate Powered Up parts, listed below. Check the current price and availability at LEGO."
              id="S9"
              link="View at LEGO"
            />
            <Product
              problem="A larger train to build"
              name="Harbor Freight Train with Crane & Truck 60509"
              facts="803 pieces, marked for ages 7+."
              watch="it is not motorized in the box either. Motorization needs the same separate Powered Up parts. Check the current price and availability at LEGO."
              id="S10"
              link="View at LEGO"
            />
            <div className={local.checklist}>
              <h4>To motorize one of these, LEGO lists separate Powered Up parts</h4>
              <ul>
                <li>
                  <a href={SOURCES.S14.url} target="_blank" rel="noopener noreferrer">Hub 88009</a>, which needs batteries
                </li>
                <li>
                  <a href={SOURCES.S13.url} target="_blank" rel="noopener noreferrer">Train Motor 88011</a>, which requires that hub
                </li>
                <li>
                  <a href={SOURCES.S15.url} target="_blank" rel="noopener noreferrer">Remote Control 88010</a> or an app, for control
                </li>
              </ul>
              <p>Availability of individual parts changes, so confirm that each one is in stock before planning a build. Kumia does not treat this as one ready-to-order bundle.</p>
            </div>
            <p>If you already own old track and a modern battery train, buy nothing first. The most interesting product in this story may be the rail you forgot you had.</p>
          </section>

          <section className={local.prose} aria-labelledby="closing">
            <h2 id="closing">The rails kept one promise</h2>
            <p>LEGO trains changed color, voltage, controls, rail construction, and the place where electricity enters the system. A whistle once drove a train. Metal rails once completed the circuit. Bluetooth now carries the command.</p>
            <p>Yet the wheels still find the same-width path.</p>
            <p>That is the clever part hiding in an ordinary toy railway: compatibility did not require every generation to stay the same. It required one useful relationship to survive while almost everything around it changed.</p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>The next time an old rail and a new train share a table, ask which one is carrying the electricity.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Sources are LEGO’s own Help, FAQ, history, and product pages, reviewed for the Kumia research package and last checked September 20, 2026. LEGO’s 1969 leaflet account is paraphrased and is not proof of universal compatibility. Kumia Labs did not test these trains or tracks. Third-party rail, conductive tape, altered wiring, custom motors, DUPLO train track, and the direct joining of old and new track sections are outside this article, and the explorer covers only broad official cases. Prices and availability are not shown; confirm them on each LEGO page.
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
