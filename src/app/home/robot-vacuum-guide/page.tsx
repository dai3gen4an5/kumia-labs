import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleDateMeta, ArticleResearchMeta } from "@/components/article-research-meta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/site";
import styles from "../what-electric-toothbrush-should-you-buy/page.module.css";

const canonicalPath = "/home/robot-vacuum-guide",
  title = "Match the Robot to the Mess.",
  seoTitle =
    "Robot Vacuum Buying Guide: Pet Hair, Mopping & Self-Empty Docks | Kumia Labs",
  subtitle =
    "Four robot vacuum setups built around your floors, pet hair, mopping needs, and how much maintenance you want to do yourself.",
  publishedDate = "2026-09-14",
  updatedDate = "2026-09-14";
type Product = {
  role: string;
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
  lead: string;
  image: string;
  imageAlt: string;
  ownership: [string, string][];
  reasoning: string[];
  products: Product[];
};
const setups: Setup[] = [
  {
    number: "01",
    slug: "everyday-cleaning",
    title: "Everyday floors",
    persona:
      "Mostly hard floors, ordinary dust and crumbs, and no major pet-hair problem",
    lead: "For light daily cleaning, dependable coverage matters more than buying the robot with the largest suction claim.",
    image: "/images/kumia-robot-01-everyday-floors-16x9-fixed.png",
    imageAlt: "Robot vacuum collecting everyday crumbs from a sunlit hard floor",
    ownership: [
      ["Floor fit", "Mostly hard floors"],
      ["Brush system", "Standard single main brush"],
      ["Mop system", "None or basic pad"],
      ["Carpet handling", "Basic boost or vacuum-only"],
      ["Dock", "Charge or auto-empty"],
      ["Obstacle handling", "Mapping; floors still need tidying"],
      ["Maintenance", "Replace bags; clean brush and filter"],
    ],
    reasoning: [
      "Mapping gives the robot a repeatable plan. LiDAR scans the room with laser light, while point-laser systems use a more compact form of distance sensing. Both approaches can support named rooms, scheduled runs, and routes that move in organized passes instead of changing direction mainly after contact. That consistency matters when the goal is to collect a little dust every day. A robot that reliably reaches the kitchen and entryway is more useful than a stronger one that repeatedly misses them.",
      "Room maps also let the owner clean only the space that needs attention. After breakfast, that may mean sending the robot to the kitchen rather than running the whole house. Schedules can repeat the same route while nobody is thinking about vacuuming. Mapping does not identify every cable or toy, however. It understands the larger layout, so loose objects and awkward chair legs can still interrupt a run.",
      "An auto-empty dock automates one specific handoff. When the robot returns, the dock pulls debris from its small onboard bin into a larger disposable bag. This reduces how often the owner handles dust and prevents a full robot bin from cutting a later run short. It does not make the debris system maintenance-free. The dock bag must be replaced, the robot bin should still be inspected, and airflow depends on a filter that needs cleaning and eventual replacement.",
      "A standard brush is reasonable when the home has ordinary crumbs, short hair, and mostly hard flooring. More elaborate detangling hardware adds cost and complexity that this household may not need. Long human hair can still wind around the roller ends, where suction cannot pull it free. The Q7 M5+ adds a dual anti-tangle arrangement within this entry group, which is useful when hair cleanup is frequent enough to justify it, but the brush should still be checked.",
      "A basic drag pad can collect light surface dust after vacuuming, but it keeps the same pad face against the floor for much of the route. It should not be treated as a substitute for scrubbing dried kitchen marks or managing dirty water. If wet cleaning is a central reason for buying the robot, the roller or continuously refreshed systems in Setup 03 solve a different problem. A wash-and-dry dock is unnecessary here because it adds tanks, a wash tray, and more parts without addressing the main need: regular dry pickup.",
    ],
    products: [
      {
        role: "Simple vacuum",
        name: "iRobot Roomba 105 Vac + AutoEmpty Dock",
        details: "ClearView LiDAR, bristle main brush, auto-empty dock",
        why: "A current vacuum-only system with mapping and a compact maintenance routine.",
        watch: "No mop; the bristle brush still needs hair checks.",
        url: "https://www.irobot.com/en_US/roomba-105-vac-robot-plus-autoempty-dock/Q352020.html",
        source: "iRobot",
      },
      {
        role: "Value mapper",
        name: "Roborock Q7 M5+",
        details: "LiDAR, dual anti-tangle system, basic mop, auto-empty dock",
        why: "Adds a light mop and anti-tangle hardware without moving to a wash dock.",
        watch: "The dock empties dust but does not wash or dry the mop.",
        url: "https://us.roborock.com/pages/roborock-q-series",
        source: "Roborock",
      },
      {
        role: "Low-profile",
        name: "eufy Auto-Empty C10",
        details: "2.85-inch body, point-laser navigation, detangling comb",
        why: "Useful where low furniture and automatic bin emptying matter more than mopping.",
        watch: "No mop, and small objects or cables should still be cleared.",
        url: "https://www.eufy.com/products/t2292111",
        source: "eufy",
      },
    ],
  },
  {
    number: "02",
    slug: "pets-mixed-floors",
    title: "Pets and mixed floors",
    persona: "Dogs or cats, recurring hair, hard floors plus rugs or carpet",
    lead: "Pet hair is a brush and floor-transition problem, not a suction-number contest.",
    image: "/images/kumia-robot-02-pets-mixed-floors-16x9-fixed.png",
    imageAlt: "Robot vacuum moving between a pet-hair-covered rug and hard flooring",
    ownership: [
      ["Floor fit", "Hard floors plus rugs and carpet"],
      ["Brush system", "Dual or active anti-tangle"],
      ["Mop system", "Lift, detach, or controlled spinning pads"],
      ["Carpet handling", "Detect, boost, detach, or avoid"],
      ["Dock", "Auto-empty plus wash and dry"],
      ["Obstacle handling", "Structured-light or camera-assisted"],
      ["Maintenance", "Inspect brush ends, dock tray, bags, filters, and pads"],
    ],
    reasoning: [
      "Airflow can carry loose fur into a bin, but it cannot solve hair that has wound tightly around a roller, its axle, or a side brush. That is why brush geometry matters. Split rollers try to guide hair toward an opening instead of letting it coil across one long shaft. Active detangling systems comb hair away from the roller. A TriCut-style brush uses a cutting mechanism to shorten wrapped strands before collecting them. The purpose is not to make hair disappear. It is to reduce the dense wraps that require scissors and manual pulling.",
      "The selected products approach that problem differently. Roborock describes dual anti-tangle hardware on Qrevo 2 Pro. eufy describes an auto-detangling roller on X10 Pro Omni. Dreame supplies L40s Ultra AE with a liftable rubber brush and a TriCut alternative. These are meaningful ownership features in a shedding household, but none removes the need to inspect brush ends, wheels, and dock passages. Hair can migrate beyond the center roller, especially after repeated carpet runs.",
      "A mixed-floor home adds a second question: what happens to the mop when the robot reaches a rug? Lifting raises the wet pad while the robot crosses carpet and is convenient for low-pile surfaces. Clearance is limited, so a thick or plush rug may still touch the pad. Avoidance keeps the robot away from that carpet during a wet run, which protects the rug but also leaves it unvacuumed until a separate run. Automatic detachment leaves the mop at the dock, allowing the robot to vacuum carpet without carrying a wet pad over it.",
      "Carpet detection is the trigger connecting those behaviors. When sensors recognize carpet, the robot can change vacuum power, raise or detach the mop, or follow an avoidance rule chosen in the app. That is more useful than a feature-list checkmark because it determines whether one scheduled run can move safely between tile and rugs. Detection still depends on the surface and configuration, so delicate, dark, or high-pile rugs deserve a no-mop zone until the behavior is confirmed.",
      "Pet homes also fill a small robot bin faster with fur and tracked litter. Auto-emptying moves that debris into a larger dock bag after a run, reducing frequent bin handling. A wash-and-dry dock then cleans the mop pads and dries them between uses. Maintenance has not vanished; it has moved from after every run to periodic dock care. The owner still refills clean water, disposes of dirty water, cleans the wash tray, replaces bags and filters, and checks the brushes. That trade is worthwhile when the robot runs often enough to save repeated handling.",
    ],
    products: [
      {
        role: "Carpet separation",
        name: "Roborock Qrevo 2 Pro",
        details:
          "Dual anti-tangle brushes, auto mop detachment, multifunction dock",
        why: "Its removable mop approach directly addresses carpets and pet hair in one floor plan.",
        watch: "Mop detachment and some controls depend on correct app setup.",
        url: "https://us.roborock.com/products/roborock-qrevo-2-pro",
        source: "Roborock",
      },
      {
        role: "Brush flexibility",
        name: "Dreame L40s Ultra AE",
        details:
          "Liftable rubber brush plus TriCut brush, spinning mops, PowerDock",
        why: "Offers two brush approaches and configurable carpet cleaning for a hair-heavy home.",
        watch: "Cut hair and debris still accumulate in the robot and dock.",
        url: "https://www.dreametech.com/products/l40s-ultra-ae-robot-vacuum",
        source: "Dreame",
      },
      {
        role: "Balanced alternative",
        name: "eufy X10 Pro Omni",
        details:
          "Auto-detangling roller, mop lift, carpet detection, all-in-one station",
        why: "Combines hair management with an established spinning-mop and dock system.",
        watch: "High-pile or delicate rugs may still need avoidance zones.",
        url: "https://www.eufy.com/products/t2351111",
        source: "eufy",
      },
    ],
  },
  {
    number: "03",
    slug: "mopping-first",
    title: "Mopping-first home",
    persona:
      "Mostly hard flooring with kitchen footprints, dining spills, and dried everyday marks",
    lead: "For a mopping-first home, the important question is what the cleaning surface does after it touches a dirty patch.",
    image: "/images/kumia-robot-03-mopping-first-home-16x9-fixed.png",
    imageAlt: "Robot vacuum mopping a kitchen floor beside a wash-and-dry dock",
    ownership: [
      ["Floor fit", "Mostly sealed hard floors"],
      ["Brush system", "Secondary to mop design"],
      ["Mop system", "Continuously cleaned roller or track"],
      ["Carpet handling", "Cover, lift, or configured avoidance"],
      ["Dock", "Wash, dry, refill, collect dirty water"],
      ["Edge reach", "Extending roller or edge mechanism"],
      ["Maintenance", "Empty dirty water; clean dock and roller"],
    ],
    reasoning: [
      "Mop designs move dirt in different ways. A flat drag pad stays under the robot and uses the same exposed surface across much of a route. It can collect fine dust and fresh marks, but it offers little mechanical action. Spinning pads rotate against the floor, adding movement that can loosen marks while spreading pressure over two discs. A roller or track continuously presents a moving surface to the floor. In systems that wash that surface during the run, the design also separates incoming clean water from collected dirty water.",
      "Narwal says Flow refreshes its track mop with the FlowWash system while cleaning. eufy describes E28 as using a HydroJet roller with dual water reservoirs and scrapers that clean the roller in real time. Those mechanisms suit kitchens and dining spaces because the part touching a footprint or food mark is repeatedly refreshed instead of remaining unchanged for the entire room. The safe claim is about managing the cleaning surface and dirty water. It does not prove that every stain will disappear or support broad hygiene claims.",
      "Floor contact also matters. Water alone does not remove a dried mark; the mop needs movement and consistent contact with the surface. Edge reach is a separate limitation because a round robot cannot naturally place its central mop against every wall or furniture leg. Extending rollers, tracks, or edge mechanisms move the cleaning surface farther outward. They improve access, but tight corners and narrow gaps can still require manual cleaning.",
      "Mopping-first does not mean rug-free. Roomba Max 705 Combo uses a cover for its roller mop when moving onto carpet. Other robots lift the mop or follow an avoidance boundary. A cover keeps the wet cleaning surface separated without leaving it behind, while lifting depends on enough clearance above the rug. Avoidance is the safest configurable option for thick or delicate rugs, though it means the carpet needs a different vacuum pass.",
      "The dock automates the transfer work around mopping. It can refill the robot, wash the roller or pad, collect dirty water, and dry the cleaning surface after a run. It cannot make that water system self-managing. Dirty water should not sit indefinitely, clean water must be replenished, and tanks, rollers, scrapers, filters, and wash trays need periodic cleaning. A continuous-cleaning mop earns its complexity when wet floor care happens often enough to justify those dock chores. For occasional light wiping, Setup 01 remains simpler.",
    ],
    products: [
      {
        role: "Continuous track",
        name: "Narwal Flow",
        details:
          "FlowWash self-cleaning track mop, edge extension, wash-and-dry dock",
        why: "Its cleaning surface is refreshed during the pass, making it the clearest mopping-first choice.",
        watch:
          "The basic dock still requires clean- and dirty-water tank handling.",
        url: "https://us.narwal.com/products/flow-robot-vacuum-and-mop",
        source: "Narwal",
      },
      {
        role: "Covered roller",
        name: "iRobot Roomba Max 705 Combo + AutoWash Dock",
        details:
          "PowerSpin roller, retractable carpet cover, wash-and-dry dock",
        why: "Pairs active roller mopping with a cover intended to keep rugs dry.",
        watch: "Official availability fluctuates; verify live stock.",
        url: "https://www.irobot.com/en_US/roomba-max-705-combo-robot-plus-autowash-dock/X185020.html",
        source: "iRobot",
      },
      {
        role: "Portable spot tool",
        name: "eufy Robot Vacuum Omni E28",
        details: "HydroJet roller, all-in-one station, removable deep cleaner",
        why: "Adds a continuously cleaned roller and a separate tool for stairs and fabric spills.",
        watch: "The extra cleaner adds parts and storage not every home needs.",
        url: "https://www.eufy.com/products/t2352111",
        source: "eufy",
      },
    ],
  },
  {
    number: "04",
    slug: "minimum-intervention",
    title: "Clutter, less intervention",
    persona:
      "Children, pets, toys, cables, irregular furniture, and fewer rescue trips",
    lead: "The value of this setup is fewer rescues and fewer changes between runs, not flagship status by itself.",
    image: "/images/kumia-robot-04-clutter-less-intervention-16x9-fixed.png",
    imageAlt: "Robot vacuum navigating toys, a cable, furniture, and a raised threshold",
    ownership: [
      ["Floor fit", "Complex mixed-floor home"],
      ["Brush system", "Dual anti-tangle or detangling"],
      ["Mop system", "Automatic lift or removal"],
      ["Threshold handling", "Liftable chassis or rated crossing"],
      ["Dock", "Auto-empty, wash, dry, refill, self-clean"],
      ["Obstacle handling", "Advanced object recognition"],
      [
        "Maintenance",
        "Water, bags, filters, brushes, sensors, and dock remain",
      ],
    ],
    reasoning: [
      "Mapping and obstacle avoidance solve different problems. A map records rooms, walls, and repeatable routes. Obstacle avoidance reacts to items that appear during one run, such as a shoe, toy, pet bowl, or cable. Camera-assisted recognition, structured light, and three-dimensional sensing try to estimate an object’s shape or distance so the robot can steer around it rather than discovering it by contact. No robot makes cables, socks, reflective objects, or pet accidents risk-free, so hazardous clutter should still be removed.",
      "Roborock’s StarSight system on Saros 10R is designed around detailed obstacle recognition without a tall rotating LiDAR turret. Its 3.14-inch body can fit beneath furniture that blocks taller robots, potentially cleaning areas that otherwise need a separate vacuum. Thinness is useful only when the whole robot clears the space. Measure the lowest rail or fabric sag under a bed or sofa and leave margin for movement instead of matching the published height exactly.",
      "Room transitions create another kind of rescue. A raised sill can stop a robot even when its map shows the next room. Dreame’s X50 Ultra uses its ProLeap system to raise part of the chassis while crossing supported thresholds, and Saros 10R also uses a liftable chassis. Manufacturer maximums are test-condition limits, not promises for every doorway. Height, a sharp or rounded edge, surface grip, and the spacing between two steps all change whether the robot can climb without grounding itself.",
      "Automatic mop handling reduces preparation in a mixed-floor home. A robot that lifts its pads can move across suitable low carpet without a manual change. A system that removes the mop at the dock can leave wet hardware behind for a vacuum-only carpet run. These features reduce mode changes by the owner, but app rules still need to match each room and thick rugs may require avoidance.",
      "A full-service dock combines several handoffs: it pulls debris into a bag, washes the mop, dries it, refills the robot, and may rinse part of its own wash area. The robot still has brushes, filters, wheels, sensors, tanks, and passages that collect debris. The dock adds bags, clean and dirty water, detergent rules, and surfaces that need periodic attention. Self-cleaning features reduce how often the owner handles the system; they do not mean the machine requires no maintenance.",
      "This setup earns its cost when the combined features remove real friction. Better sensing can mean fewer rescue trips. Threshold hardware can reduce blocked room transitions. Detangling can reduce brush cleanup, and automatic mop handling can reduce pre-cleaning steps and manual mode changes. A tidy, single-floor home may gain little from that complexity. In a busy home where preparation is the reason cleaning runs are skipped, reducing those interruptions is the practical benefit.",
    ],
    products: [
      {
        role: "Low and agile",
        name: "Roborock Saros 10R",
        details:
          "StarSight 2.0, liftable chassis, dual anti-tangle, 10-in-1 dock",
        why: "Its low body, sensing, chassis lift, and dock address several clutter problems together.",
        watch: "Small or reflective objects can still be missed.",
        url: "https://us.roborock.com/products/roborock-saros-10r",
        source: "Roborock",
      },
      {
        role: "Threshold focus",
        name: "Dreame X50 Ultra",
        details:
          "ProLeap threshold system, anti-tangle brushes, mop removal, full dock",
        why: "Fits homes where room transitions and reduced brush or dock intervention are central.",
        watch:
          "Threshold performance depends on shape and spacing; measure first.",
        url: "https://www.dreametech.com/products/x50-ultra-robot-vacuum",
        source: "Dreame",
      },
      {
        role: "Newest automation",
        name: "Narwal Flow 2",
        details:
          "Object recognition, self-cleaning track mop, adaptive base station",
        why: "Combines continuous mop cleaning with current flagship navigation and dock automation.",
        watch:
          "Confirm US availability, consumables, and support for this new system.",
        url: "https://us.narwal.com/products/flow-2-robot-vacuum-and-mop",
        source: "Narwal",
      },
    ],
  },
];
const comparisonRows = [
  [
    "01 Everyday",
    "Mostly hard",
    "Low",
    "None / basic",
    "Basic",
    "Mapping",
    "Charge / empty",
    "Dust and crumbs",
  ],
  [
    "02 Pets + mixed",
    "Mixed",
    "High",
    "Lift / detach",
    "Active",
    "Advanced",
    "Empty + wash",
    "Hair and rugs",
  ],
  [
    "03 Mopping-first",
    "Hard floor",
    "Medium",
    "Roller / track",
    "Cover / lift",
    "Advanced",
    "Full wash",
    "Kitchen mess",
  ],
  [
    "04 Less intervention",
    "Complex mixed",
    "High",
    "Lift / remove",
    "Adaptive",
    "Highest emphasis",
    "Full-service",
    "Clutter",
  ],
];
function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.productCard}>
      <p>
        {product.role} · {product.source}
      </p>
      <h4>{product.name}</h4>
      <p className={styles.details}>{product.details}</p>
      <dl>
        <div>
          <dt>Why pick it</dt>
          <dd>{product.why}</dd>
        </div>
        <div>
          <dt>Watch for</dt>
          <dd>{product.watch}</dd>
        </div>
      </dl>
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        View official product <span aria-hidden>→</span>
      </a>
    </article>
  );
}
function SetupSection({ setup }: { setup: Setup }) {
  return (
    <section
      id={setup.slug}
      className={styles.setup}
      aria-labelledby={`${setup.slug}-title`}
    >
      <header>
        <span>{setup.number}</span>
        <div>
          <p>SETUP {setup.number}</p>
          <h2 id={`${setup.slug}-title`}>{setup.title}</h2>
        </div>
      </header>
      <figure>
        <Image
          src={setup.image}
          alt={setup.imageAlt}
          width={1600}
          height={900}
          sizes="(max-width: 700px) 100vw, 1120px"
        />
      </figure>
      <div className={styles.ownership}>
        <p className={styles.eyebrow}>WHAT OWNERSHIP LOOKS LIKE</p>
        <h3>What the robot handles, and what you still do</h3>
        <dl>
          {setup.ownership.map(([l, v]) => (
            <div key={l}>
              <dt>{l}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={styles.who}>
        <p className={styles.eyebrow}>WHO IT&rsquo;S FOR</p>
        <h3>{setup.persona}</h3>
      </div>
      <div className={styles.reasoning}>
        <h3>Why this combination works</h3>
        <div>
          <p className={styles.reasoningLead}>{setup.lead}</p>
          {setup.reasoning.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
      <section className={styles.readyMade}>
        <h3>Ready-made options</h3>
        <p>
          Models and availability were checked September 14, 2026. Confirm the
          live manufacturer page before buying.
        </p>
        <div>
          {setup.products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>
    </section>
  );
}
export default function RobotVacuumGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: subtitle,
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { "@type": "Person", name: "Kumia" },
    publisher: {
      "@type": "Organization",
      name: "Kumia Labs",
      url: absoluteUrl(),
    },
    mainEntityOfPage: absoluteUrl(canonicalPath),
    image: absoluteUrl("/images/hero004.png"),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      {
        "@type": "ListItem",
        position: 2,
        name: "Home research",
        item: absoluteUrl("/#latest"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: absoluteUrl(canonicalPath),
      },
    ],
  };
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <article>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#latest">Home research</Link>
          <span>/</span>
          <span>Robot vacuum guide</span>
          <ArticleDateMeta publishedAt={publishedDate} updatedAt={updatedDate} />
        </div>
        <header className={styles.hero}>
          <h1 className="sr-only">{title}</h1>
          <figure>
            <Image
              src="/images/hero004.png"
              alt="Kumia Labs robot vacuum guide cover titled Match the Robot to the Mess"
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
          </figure>
        </header>
        <ArticleResearchMeta
          left="Your floors & cleaning routine"
          right="Robot + brush system + mop + dock"
        />
        <div className={styles.content}>
          <section className={styles.intro}>
            <div>
              <Image
                src="/images/kumia-intro-pointing-transparent.png"
                alt="Kumia"
                width={1122}
                height={1402}
              />
            </div>
            <p>
              A robot vacuum is a brush, mop, navigation system, carpet
              strategy, and dock that must suit the floors and mess already in
              your home.
            </p>
          </section>
          <section className={styles.comparison}>
            <div className={styles.sectionHeading}>
              <p>AT A GLANCE</p>
              <h2>Quick comparison</h2>
            </div>
            <div className={styles.tableScroll}>
              <table>
                <thead>
                  <tr>
                    {[
                      "Setup",
                      "Floor mix",
                      "Pet hair",
                      "Mop",
                      "Carpet",
                      "Avoidance",
                      "Dock",
                      "Best for",
                    ].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) =>
                        i === 0 ? (
                          <th key={c}>{c}</th>
                        ) : (
                          <td key={`${r[0]}-${i}`}>{c}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <nav className={styles.index} aria-label="Four robot vacuum setups">
            <p className={styles.eyebrow}>FOUR SETUPS AT A GLANCE</p>
            <ol>
              {setups.map((s) => (
                <li key={s.slug}>
                  <span>{s.number}</span>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.persona}</p>
                  </div>
                  <a href={`#${s.slug}`}>↓</a>
                </li>
              ))}
            </ol>
          </nav>
          {setups.map((s) => (
            <SetupSection key={s.slug} setup={s} />
          ))}
          <section className={styles.choose}>
            <div className={styles.sectionHeading}>
              <p>OWNERSHIP REALITY</p>
              <h2>The dock moves the chores</h2>
            </div>
            <div>
              <p>
                Auto-empty docks add dust bags. Mop docks add clean-water tanks,
                dirty-water tanks, wash trays, pads or rollers, and sometimes
                manufacturer-specified solution. Brushes, filters, wheels,
                sensors, and contacts still need inspection.
              </p>
              <p>
                Before buying, check official replacement parts. A highly
                automated robot is convenient only if its consumables remain
                available and its dock fits where water and debris can be
                handled.
              </p>
            </div>
          </section>
          <aside className={styles.closing}>
            <Image
              src="/images/kumia-conclusion-clasped-transparent.png"
              alt="Kumia"
              width={1122}
              height={1402}
            />
            <p>
              Match the robot to the mess you actually have. The right brush,
              mop, carpet behavior, and dock will matter longer than the biggest
              number on the box.
            </p>
          </aside>
          <section className={styles.sources}>
            <h2>Sources and methodology</h2>
            <p>
              Current US manufacturer pages were checked September 14, 2026.
              Manufacturer test figures were not treated as universal results.
            </p>
            <ul>
              {setups
                .flatMap((s) => s.products)
                .map((p) => (
                  <li key={p.name}>
                    <a href={p.url}>
                      {p.source}: {p.name}
                    </a>
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
export const metadata: Metadata = {
  title: seoTitle,
  description: subtitle,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: seoTitle,
    description: subtitle,
    url: canonicalPath,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    authors: ["Kumia"],
    images: [absoluteUrl("/images/hero004.png")],
  },
};
