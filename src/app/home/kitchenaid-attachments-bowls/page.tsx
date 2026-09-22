import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmazonCta, AmazonDisclosure } from "@/components/amazon-cta";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { KitchenAidExplorer } from "@/components/kitchenaid-explorer";
import { BowlFamilies, BowlSupportSketches, EvolutionCompare, HubFlowDiagram, IceCreamBridge } from "@/components/kitchenaid-visuals";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SOURCES, type SourceId } from "@/data/kitchenaid-explorer";
import { amazonSearchUrl } from "@/lib/amazon";
import { absoluteUrl } from "@/lib/site";
import styles from "../what-electric-toothbrush-should-you-buy/page.module.css";
import local from "./page.module.css";

const canonicalPath = "/home/kitchenaid-attachments-bowls",
  title = "The KitchenAid Connection That Reaches Back to 1919",
  metaDescription =
    "KitchenAid says today’s power-hub attachments fit stand mixers made since 1919. Discover why that connection endured—and why bowls follow different rules.",
  ogDescription = "One KitchenAid connection crosses generations. The bowls beneath it tell a different compatibility story.",
  publishedDate = "2026-09-19",
  updatedDate = "2026-09-19",
  heroImage = "/images/kumia-kitchenaid-attachments-bowls-hero.png";

function Src({ id }: { id: SourceId }) {
  return (
    <a className={local.src} href={SOURCES[id].url} target="_blank" rel="noopener noreferrer" aria-label={`Source: ${SOURCES[id].label}`}>
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

function Product({ problem, name, facts, watch, url, link }: { problem: string; name: string; facts: string; watch: string; url: string; link: string }) {
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

export default function KitchenAidAttachmentsBowls() {
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
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#latest">Home research</Link>
          <span>/</span>
          <span>KitchenAid attachments and bowls</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>

        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image
              src={heroImage}
              alt="Kumia Labs cover: The KitchenAid Connection That Reaches Back to 1919. KitchenAid says today’s power-hub attachments fit stand mixers made since 1919. Bowls are a very different story. A cream stand mixer and a red stand mixer on a kitchen counter, with a pasta roller, whisk, flat beater, and food grinder, and icons for 1919, power hub, attachments, bowls, and exceptions."
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
          </figure>
        </header>

        <ArticleResearchMeta left="KitchenAid stand mixer" right="Attachments + bowls" />

        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} />
            </div>
            <p>One hidden connection outlasted a century of kitchen design. The bowl right beneath it did not.</p>
          </section>

          <section className={local.prose} aria-label="Opening">
            <p className={local.lead}>
              KitchenAid currently says that all of its power-hub attachments fit every KitchenAid stand mixer model made since 1919.
              <Src id="S1" />
            </p>
            <p>
              Read that once more. A tool sold for a modern kitchen—something like a pasta roller, food grinder, or slicer—belongs to an attachment ecosystem that KitchenAid says reaches back to stand mixers made more than a century ago.
            </p>
            <p>How did a kitchen appliance preserve that kind of cross-generation compatibility?</p>
            <p>
              The answer is not that the entire mixer stayed the same. It did not. KitchenAid changed the body, bowl mounting system, capacity, controls, materials, and specialized tools over generations. What endured was one particular kind of connection: the covered power hub at the front of the machine.
            </p>
            <p>
              Then comes the twist. The bowl directly beneath that hub does not inherit the same sweeping rule. KitchenAid divides current bowls into Mini tilt-head, full-size tilt-head, and bowl-lift families, and it warns that bowls are not interchangeable across those types.
              <Src id="S9" />
            </p>
            <p>
              One machine therefore contains two different compatibility stories. The front hub is about transferring power. The bowl is about physically supporting the work in precisely the right place.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="y1919">
            <h2 id="y1919">1919: the mixer was already more than a mixer</h2>
            <p>
              KitchenAid dates its household stand-mixer story to the H-5 of 1919. The remarkable detail is not merely that the machine existed. KitchenAid’s official history says the H-5 offered attachments for slicing and straining and was conceived as a food-preparation tool.
              <Src id="S4" />
            </p>
            <p>
              From the beginning, the motor could be shared with another job. Instead of buying a separate powered machine for every task, the owner could connect a different mechanism to the mixer.
            </p>
            <p>
              That platform-like idea remains visible in today’s catalog. Current KitchenAid power-hub attachments roll pasta, grind meat, slice and shred vegetables, spiralize produce, mill grain, dice ingredients, sift flour, and make shave ice.
              <Src id="S7" />
            </p>
            <EvolutionCompare />
            <p>
              The oldest story and the newest catalog even rhyme. Slicing and straining appeared in KitchenAid’s 1919 history; slicer/shredder and fruit-and-vegetable-strainer systems remain modern options. This is a continuity of purpose, not proof that the 1919 and current hardware are identical.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="y1937">
            <h2 id="y1937">1937: the famous shape and a new bowl relationship</h2>
            <p>The attachment idea came before the KitchenAid silhouette most people now recognize.</p>
            <p>
              KitchenAid credits industrial designer Egmont Arens with work on the Model K family. Its timeline places the Model K launch in 1937 and says that model introduced a bowl secured to the base with an interlocking motion, along with the form that became KitchenAid’s visual signature.
              <Src id="S4" />
              <Src id="S5" />
            </p>
            <p>
              A Museum of Modern Art exhibition checklist independently identifies a KitchenAid electric mixer designed by Arens and manufactured by Hobart. The mixer had become not only a kitchen tool but an industrial-design object.
              <Src id="S6" />
            </p>
            <p>
              That 1937 milestone matters to this story because it makes the two paths visible. The mixer’s front connection continued to turn external tools. Underneath, the bowl was becoming part of a specific physical architecture: it had to lock to the machine and align with the moving beater.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="y1969">
            <h2 id="y1969">1969: the K-45 milestone</h2>
            <p>
              KitchenAid describes the K-45, introduced in 1969, as its most popular mixer to that point. It sits in the historical line between the early household machines and the familiar tilt-head family that many owners recognize today.
              <Src id="S4" />
            </p>
            <p>
              The mixer continued evolving around a recognizable design language. KitchenAid had introduced color in 1955; later generations expanded capacities, materials, controls, and specialized tools. The object remained familiar without remaining physically identical.
              <Src id="S3" />
            </p>
          </section>

          <EditorialImage
            src="/images/kumia-kitchenaid-attachments-bowls-body-01.png"
            alt="A worn vintage-style cream stand mixer and a glossy red modern stand mixer on a kitchen counter, with a pasta roller, food grinder, whisk, flat beater, and dough hook laid out between them. An editorial illustration of one attachment idea spanning generations, not a photograph of a specific historical model."
          />

          <section className={local.prose} aria-labelledby="present">
            <h2 id="present">Present: an attachment claim that reaches back to 1919</h2>
            <p>
              KitchenAid’s current wording is unusually broad. Its UK product page says all power-hub attachments fit every KitchenAid stand mixer model made since 1919. Its US support material says attachments that enter the universal power hub fit all stand mixers regardless of age.
              <Src id="S1" />
              <Src id="S2" />
            </p>
            <p>That evidence supports a strong, carefully attributed statement:</p>
            <div className={local.claim}>
              <span>Sourced claim</span>
              <p>KitchenAid says today’s power-hub attachments fit stand mixer models made since 1919.</p>
            </div>
            <p>
              It does not support several more dramatic claims. It does not prove that every internal dimension, material, or manufacturing detail stayed literally unchanged. It does not mean every object marketed as a KitchenAid “attachment” uses the front hub. It does not certify the condition or safety of an antique mixer or incomplete used accessory. And it does not mean we tested a current attachment on a 1919 H-5.
            </p>
            <p>The documented achievement is cross-generation fit, not a machine frozen in time.</p>
          </section>

          <section className={local.prose} aria-labelledby="hub">
            <h2 id="hub">Why the small front hub could carry the long story</h2>
            <p>
              Remove the cap at the front of a KitchenAid stand mixer and a power connection appears. KitchenAid’s installation guidance describes an attachment shaft entering a square socket and being secured with the attachment knob. The mixer motor then turns the mechanism inside the connected tool.
              <Src id="S8" />
            </p>
            <p>
              In plain language, the hub lends the mixer’s motor to another small machine. The pasta roller, grinder, slicer, or mill does its work in front of the mixer.
            </p>
            <HubFlowDiagram />
            <p>
              That physical separation helps explain the compatibility story. A front-mounted pasta roller does not need to know whether the mixing bowl below twists into the base or hangs from lift arms. It does not need the bowl to be stainless steel, glass, or ceramic.
            </p>
            <div className={local.interp}>
              <span>Engineering interpretation</span>
              <p>
                This is an interpretation of documented product architecture, not KitchenAid’s stated century-long strategy. No reviewed primary source says that the company deliberately froze an identical standard in 1919 with a hundred-year plan. What KitchenAid documents is the present result: broad hub-attachment fit across age and model.
              </p>
            </div>
            <p>The front hub is a <strong>POWER INTERFACE</strong>. It primarily has to transmit rotation securely to a separate mechanism.</p>
          </section>

          <EditorialImage
            src="/images/kumia-kitchenaid-attachments-bowls-body-02.png"
            alt="Three stand mixers of different sizes and colors, mint, cream, and navy, side by side on a kitchen counter, each with its own stainless-steel bowl. An editorial illustration that the same brand does not mean one universal bowl fit."
          />

          <section className={local.prose} aria-labelledby="twist">
            <h2 id="twist">The twist: bowls obey physical support and geometry</h2>
            <p>
              A mixing bowl solves a different problem. It is not simply a container sitting near the machine. It must mount securely, remain stable under load, sit at the correct height, clear the mixer body, and match the path of the beater, whip, or dough hook.
            </p>
            <BowlFamilies />
            <BowlSupportSketches />
            <p>
              KitchenAid currently organizes bowls into three broad families: Mini tilt-head, full-size tilt-head, and bowl-lift. KitchenAid says bowls are not interchangeable across these mixer types.
              <Src id="S9" />
              <Src id="S10" />
            </p>
            <p>
              The Mini and full-size models both tilt, but the Mini is a smaller system with its own bowl geometry. A full-size tilt-head bowl twists into a clamping plate on the base. A bowl-lift bowl attaches to support arms, locks at the rear, and rises toward a fixed head.
            </p>
            <p>
              These are <strong>PHYSICAL SUPPORT / BOWL GEOMETRY</strong> systems. Changing the mixer architecture changes where the bowl sits and how the tool moves inside it.
            </p>
            <div className={local.interp}>
              <span>Engineering interpretation</span>
              <p>
                KitchenAid does not provide one historical statement declaring why all bowl families diverged. The factual part is the documented separation of bowl types and model lists. The conceptual explanation, that bowl compatibility is constrained by mount, position, depth, height, and tool path, is an interpretation grounded in that documented architecture.
              </p>
            </div>
          </section>

          <section className={local.prose} aria-labelledby="quart">
            <h2 id="quart">“Six quart” is not an interface</h2>
            <p>Capacity is a useful measurement, but it is not a compatibility standard.</p>
            <p>
              KitchenAid lists the KSMB60 six-quart stainless bowl for current residential bowl-lift models beginning with KSM55, KSM60, KSM70, and KSM75. A different six-quart bowl, KN2B6PEH, lists older KD2661, KL26M, KP26, and KV25 families.
              <Src id="S20" />
              <Src id="S21" />
            </p>
            <p>Both are KitchenAid bowls. Both are bowl-lift products. Both are described as six quart. Their official model lists differ.</p>
            <p>The number tells you how much a bowl holds. It does not tell you where support pins sit, how the bowl latches, or which tool sweeps it correctly.</p>
            <Product
              problem="A second bowl for a bowl-lift mixer"
              name="KSMB60 six-quart stainless bowl"
              facts="Listed for current residential bowl-lift models beginning with KSM55, KSM60, KSM70, and KSM75."
              watch="match your exact model to the list on KitchenAid’s page. Don’t choose by capacity."
              url={SOURCES.S20.url}
              link="View at KitchenAid"
            />
            <AmazonDisclosure />
            <AmazonCta href={amazonSearchUrl("KitchenAid KSMB60 6 quart bowl")} label="KSMB60 six-quart bowl" />
            <Product
              problem="A second bowl for an older bowl-lift mixer"
              name="KN2B6PEH six-quart bowl"
              facts="Lists older KD2661, KL26M, KP26, and KV25 families."
              watch="its model list differs from the KSMB60’s, so confirm your exact model."
              url={SOURCES.S21.url}
              link="View at KitchenAid"
            />
          </section>

          <section className={local.prose} aria-labelledby="ice">
            <h2 id="ice">The Ice Cream Maker exposes the boundary</h2>
            <IceCreamBridge />
            <p>The Ice Cream Maker is the most useful weird exception because it looks like a bowl but behaves like a small system.</p>
            <p>
              The KSMICM replaces the ordinary mixing bowl with a freeze bowl. A dasher churns inside it, and a drive assembly transfers motion from the mixer. KitchenAid documents different positioning for tilt-head and bowl-lift machines.
              <Src id="S14" />
              <Src id="S15" />
            </p>
            <p>
              That extra hardware lets one product bridge two mixer architectures, but not universally. KitchenAid’s current product page says the KSMICM fits all tilt-head stand mixers except the Artisan Mini KSM3316 and KSM3317, and all bowl-lift stand mixers except the K5SS, KSM50, KSM500, and KSM450. Older models are murkier: its how-to material, manual, and printable guide do not present identical lists for every older model.
              <Src id="S14" />
              <Src id="S16" />
            </p>
            <p>
              The correct lesson is narrow and useful: when an accessory depends on bowl/base geometry rather than only the universal front hub, model-specific exceptions return. Do not generalize beyond the officially documented models. For legacy models appearing inconsistently across KitchenAid sources, the result remains <strong>VERIFY MODEL</strong>.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="others">
            <h2 id="others">Other exceptions that reveal the system</h2>
            <h3>The attachment fits; the supplied carafe does not</h3>
            <p>
              KitchenAid says the Juice and Sauce attachment fits the Artisan Mini’s power hub, but the supplied carafe is too tall. The company recommends using a suitable shorter vessel.
              <Src id="S2" />
            </p>
            <p>The power connection works. The full kitchen arrangement does not, until a third object changes.</p>
            <h3>A visible gap can still be correct</h3>
            <p>
              KitchenAid says a gap of up to 1/8 inch between an attachment housing and the mixer can be acceptable when the attachment is correctly inserted, secured, and unable to move.
              <Src id="S2" />
            </p>
            <p>The visually seamless fit is not the only test of mechanical fit.</p>
            <h3>The mixer matches; the bowl material does not</h3>
            <p>
              The KSMPB7 bowl-lift pastry beater supports a list of mixers, yet KitchenAid approves it only with stainless-steel bowl-lift bowls. A listed mixer using a glass bowl is not the approved combination.
              <Src id="S18" />
              <Src id="S19" />
            </p>
            <h3>The sifter accepts common bowls, then rejects special systems</h3>
            <p>
              KitchenAid says the Sifter + Scale can work with accessory stainless-steel, glass, and ceramic bowls. It separately excludes use with the Ice Cream Maker, Precise Heat Mixing Bowl, and Pouring Shield configuration.
              <Src id="S17" />
            </p>
            <h3>A small-batch bowl can bring its own whip</h3>
            <p>
              The KN3CW three-quart bowl for selected bowl-lift mixers is supplied with a Combi-Whip. It is a paired small-batch system, not evidence that every ordinary bowl-lift tool belongs in the shallower bowl.
              <Src id="S23" />
            </p>
          </section>

          <section className={local.prose} aria-labelledby="combos">
            <h2 id="combos">Old and new combinations worth trying</h2>
            <p className={local.commerceNote}>Your existing mixer may already support the modern power-hub attachment. A new mixer may not be necessary.</p>

            <h3>A modern pasta roller on an inherited mixer</h3>
            <p>
              This is the cleanest expression of KitchenAid’s current hub claim. Confirm that the product is a genuine power-hub attachment and that both the mixer and accessory are complete, maintained, and safe to use.
            </p>
            <Product
              problem="Add a modern function to an inherited mixer"
              name="Genuine KitchenAid power-hub attachments"
              facts="Pasta rollers, grinders, slicers, spiralizers, grain mills, and other attachments that use the front power hub."
              watch="check that the piece is genuine and that a used accessory is complete and safe. Your existing mixer may already be enough."
              url={SOURCES.S7.url}
              link="See KitchenAid’s attachment guide"
            />

            <h3>A 1919 job with a modern tool</h3>
            <p>
              Use a current slicer/shredder or fruit-and-vegetable-strainer path to revisit jobs KitchenAid associated with the H-5. Describe this as continuity of function, never identical hardware lineage.
            </p>
            <Product
              problem="Revisit an early slicing or straining job"
              name="Current slicer/shredder or fruit-and-vegetable-strainer path"
              facts="Modern versions of the jobs KitchenAid’s 1919 history associates with the H-5."
              watch="the strainer needs the companion hardware KitchenAid specifies. This is continuity of function, not the same hardware."
              url={SOURCES.S7.url}
              link="See KitchenAid’s attachment guide"
            />

            <h3>Grain to loaf on a full-size tilt-head</h3>
            <p>
              A Grain Mill or Sifter + Scale uses the front hub; the Bread Bowl uses the tilt-head bowl mount. The workflow deliberately combines the broadly compatible power interface with a model-specific support interface.
            </p>
            <Product
              problem="Bake in one vessel"
              name="KSM2CB5BGS Bread Bowl"
              facts="Documented for supported 4.5/5-quart full-size tilt-head mixers. The product page states a 500°F limit."
              watch="the KN15E1X is excluded, and the beater clearance may need adjusting. Not for the Mini or bowl-lift models."
              url={SOURCES.S12.url}
              link="View at KitchenAid"
            />
            <AmazonDisclosure />
            <AmazonCta href={amazonSearchUrl("KitchenAid KSM2CB5BGS Bread Bowl")} label="KSM2CB5BGS Bread Bowl" />

            <h3>Ice cream on a supported tilt-head or bowl-lift mixer</h3>
            <p>
              KSMICM demonstrates how a drive assembly can bridge two architectures while retaining named exclusions. Exact model verification is part of the combination.
            </p>
            <Product
              problem="Make frozen desserts"
              name="KSMICM Ice Cream Maker"
              facts="Freeze bowl, dasher, and drive assembly, with different positioning for tilt-head and bowl-lift machines."
              watch="it excludes the Artisan Mini KSM3316 and KSM3317 and the K5SS, KSM50, KSM500, and KSM450. KitchenAid’s lists for some older models differ, so verify your exact model."
              url={SOURCES.S14.url}
              link="View at KitchenAid"
            />
            <AmazonCta href={amazonSearchUrl("KitchenAid KSMICM Ice Cream Maker")} label="KSMICM Ice Cream Maker" />

            <h3>Small batches through two different systems</h3>
            <p>
              A listed full-size tilt-head model can use the KB3SS three-quart bowl. A listed bowl-lift model can use the KN3CW bowl with its supplied Combi-Whip. The goal is the same; the mount and tool assumptions are not.
            </p>
            <Product
              problem="Make small batches on a tilt-head mixer"
              name="KB3SS three-quart stainless bowl"
              facts="Documented for full-size tilt-head models."
              watch="KitchenAid’s page lists supported models, and its lists differ between sections. Check every list for your exact model."
              url={SOURCES.S22.url}
              link="View at KitchenAid"
            />
            <Product
              problem="Make small batches on a bowl-lift mixer"
              name="KN3CW three-quart bowl with Combi-Whip"
              facts="A paired small-batch set for bowl-lift models."
              watch="the bowl and Combi-Whip are one system, and KitchenAid’s model lists differ between sections of the page. Check every list for your exact model."
              url={SOURCES.S23.url}
              link="View at KitchenAid"
            />

            <h3>Pastry through two architectures</h3>
            <p>
              Full-size tilt-head and bowl-lift mixers use different pastry-beater families. The bowl-lift version can add a material condition: stainless steel only for the documented product.
            </p>
            <Product
              problem="Cut cold butter in a bowl-lift mixer"
              name="KSMPB7W pastry beater"
              facts="Documented for listed bowl-lift models."
              watch="KitchenAid approves it only with stainless-steel bowl-lift bowls, not glass."
              url={SOURCES.S18.url}
              link="View at KitchenAid"
            />
          </section>

          <section className={styles.comparison} aria-labelledby="explorer-title">
            <div className={styles.sectionHeading}>
              <p>ONLY NOW: THE PRACTICAL PART</p>
              <h2 id="explorer-title">What Survived? KitchenAid Combination Explorer</h2>
            </div>
            <KitchenAidExplorer />
          </section>

          <section className={local.prose} aria-labelledby="verify">
            <h2 id="verify">What to verify before buying</h2>
            <h3>Find the exact mixer model</h3>
            <p>
              KitchenAid advises checking the identification label on the bottom of the base. Model number is more reliable than color, apparent age, or estimated capacity.
            </p>
            <h3>Identify the interface</h3>
            <p>
              Does the item enter the front power hub, attach to the beater shaft, or replace/support the bowl? The word “attachment” is too broad to answer compatibility by itself.
            </p>
            <h3>Check the hidden condition</h3>
            <p>
              Look for bowl material, exact exclusions, required companion pieces, drive orientation, clearance, receiving-container height, and regional SKU.
            </p>
            <h3>Keep uncertainty honest</h3>
            <p>
              When current KitchenAid sources disagree about a legacy model, do not convert uncertainty into a recommendation. Confirm the current manual or ask KitchenAid about the exact mixer and accessory SKU.
            </p>
          </section>

          <section className={local.prose} aria-labelledby="closing">
            <h2 id="closing">The connection and the constraint</h2>
            <p>
              KitchenAid’s longest-running documented connection is not the famous bowl, the color, or even the silhouette. It is the small power hub hidden behind a cover at the front.
            </p>
            <p>
              KitchenAid says today’s power-hub attachments fit stand mixer models made since 1919. Around that connection, the machine kept changing: the H-5’s food-preparation idea gained the Model K’s interlocking bowl and iconic form, the K-45 became a major household milestone, and modern mixers divided into new sizes, materials, and support systems.
            </p>
          </section>

          <aside className={styles.closing}>
            <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} />
            <p>The front hub tells the story of what KitchenAid kept connected. The bowls tell the story of what physical design forced it to change.</p>
          </aside>

          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Sources are KitchenAid’s own history, support, product, and guide pages, plus one institutional record from the Museum of Modern Art. They were reviewed for the Kumia research package and last checked September 19, 2026. The 1919 claim is KitchenAid’s current statement; Kumia Labs did not test any attachment on a vintage mixer. Third-party attachments, commercial mixers, and discontinued items are outside this article, and the explorer covers only the verified dataset. Prices, stock, and availability are not shown. Confirm current details on each KitchenAid page.
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
