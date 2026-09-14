import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl } from "@/lib/site";

const canonicalPath = "/tech/what-desktop-pc-should-you-buy";
const title = "What Desktop PC Should You Buy?";
const subtitle =
  "Five Kumia setups for everyday use, gaming, creative work, and everything in between.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description: subtitle,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description: subtitle,
    url: canonicalPath,
    images: [absoluteUrl("/images/kumia-pc-hero.png")],
  },
};

const setups = [
  "Everyday PC",
  "All-Purpose PC",
  "Gaming PC",
  "Creator PC",
  "Premium All-Purpose PC",
];
const setupSlugs = ["everyday-pc", "all-purpose-pc", "gaming-pc", "creator-pc", "premium-all-purpose-pc"];

const specifications = [
  ["CPU", "Intel Core Ultra 5 225"],
  ["Graphics", "Integrated Intel Graphics"],
  ["Memory", "16GB"],
  ["Storage", "1TB SSD"],
];

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

function HomeOfficeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36">
      <circle cx="11" cy="10" r="4" />
      <path d="M4.5 25.5c.5-5.1 2.7-7.7 6.5-7.7s6 2.6 6.5 7.7" />
      <rect x="19" y="8" width="13" height="10" rx="1" />
      <path d="M23 23h5m-2.5-5v5" />
    </svg>
  );
}

type ProductOption = {
  role: string;
  name: string;
  identifier?: string;
  specs: string[];
  why: string;
  watch: string;
  url: string;
};

const everydayProducts: ProductOption[] = [
  {
    role: "Recommended",
    name: "HP OmniDesk Desktop AI M03-0155t",
    identifier: "SKU B6NG1AA#ABA",
    specs: ["Core Ultra 5 225", "Intel Graphics", "16GB", "1TB SSD"],
    why: "This is the closest ready-made match to Kumia’s Everyday PC setup, without paying for a discrete graphics card you probably do not need.",
    watch: "The standard 16GB configuration may use a single memory module depending on the current SKU.",
    url: "https://www.hp.com/us-en/shop/pdp/hp-omnidesk-desktop-ai-m03-0155t-pc",
  },
  {
    role: "Alternative",
    name: "Dell Slim Desktop ECS1250",
    specs: ["Core Ultra 5 225", "Intel integrated graphics", "16GB", "512GB SSD (base SKU)"],
    why: "A compact major-brand alternative with the right CPU and memory level for ordinary home and office use.",
    watch: "The currently verified configuration has 512GB rather than Kumia’s preferred 1TB, so check storage before buying.",
    url: "https://www.dell.com/en-us/shop/desktop-computers/dell-slim-desktop/spd/dell-ecs1250-slim-desktop",
  },
  {
    role: "Alternative",
    name: "Lenovo IdeaCentre Tower Gen 10 (Intel)",
    specs: ["Core Ultra 5 / 7 family", "Integrated graphics configurations", "16GB-class memory", "Up to 1TB-class SSD"],
    why: "A conventional home tower for buyers who prefer Lenovo and want a straightforward, expandable desktop.",
    watch: "Lenovo sells several configurations under this family, so verify the exact CPU, memory and storage before ordering.",
    url: "https://www.lenovo.com/us/en/p/desktops/ideacentre/ideacentre-tower-series/lenovo-ideacentre-tower-gen-10-intel-desktop/91cf000dus",
  },
];

type PcSetup = {
  number: string;
  slug: string;
  title: string;
  persona: string;
  icon: "mixed" | "gaming" | "creator" | "premium";
  audience: string[];
  specs: [string, string][];
  lead: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageClass: string;
  optionsIntro: string;
  products: ProductOption[];
};

const expandedSetups: PcSetup[] = [
  {
    number: "02",
    slug: "all-purpose-pc",
    title: "All-Purpose PC",
    persona: "People who do a bit of everything",
    icon: "mixed",
    audience: [
      "You use one desktop for almost everything: everyday work, lots of browser tabs, photo editing, occasional video work and some gaming.",
      "You want enough graphics performance to go beyond a basic home PC, but you do not need a machine built around one specialized workload.",
    ],
    specs: [["CPU", "Intel Core Ultra 5 250K Plus class"], ["Graphics", "GeForce RTX 5060 / 5060 Ti class"], ["Memory", "32GB"], ["Storage", "2TB SSD"]],
    lead: "The goal here is not maximum performance. It is to avoid having one obvious weak point.",
    body: [
      "An Everyday PC can leave out the graphics card because most of its work never needs one. An All-Purpose PC is different. Once gaming, photo editing or occasional video work becomes part of the plan, a dedicated GPU starts to earn its place.",
      "An RTX 5060-class card gives this PC enough graphics capability to handle much more than web and office work without pushing the whole machine into high-end gaming territory. It also means GPU-accelerated applications have real hardware to work with when you need them.",
      "The CPU should follow the same idea. A modern Core Ultra 5-class desktop processor gives everyday applications plenty of headroom while still leaving a meaningful part of the budget for the graphics card. Spending heavily on a premium CPU would make less sense here if the GPU, memory or storage had to be cut back to pay for it.",
      "32GB of memory is a good fit because this is the setup most likely to have several different jobs happening at once. A browser with many tabs, Office, a photo editor, Discord and a game can all end up sharing memory during a normal day. That kind of mixed use is where 32GB becomes more useful than it looks from any single application’s requirements.",
      "2TB of SSD storage also fits the role better than a small drive. An All-Purpose PC tends to collect everything: applications, photos, videos, games and everyday files. It does not need an exotic premium SSD, but it benefits from having enough space that storage management does not become a regular chore.",
      "This setup is deliberately less specialized than the next two. If gaming is the main reason you are buying the computer, the Gaming PC puts more emphasis on the graphics side. If editing and production are the priority, the Creator PC spends more on CPU, memory and GPU capability.",
      "For someone who wants one desktop that can comfortably move between ordinary work and heavier personal use, this is the middle ground.",
    ],
    image: "/images/kumia-pc-all-purpose.png",
    imageAlt: "A versatile desktop workspace for everyday tasks, creative work and gaming",
    imageClass: "is-all-purpose",
    optionsIntro: "Prefer to buy a complete PC? Here are current systems that follow this setup closely.",
    products: [
      {
        role: "Recommended",
        name: "HP OMEN 16L TG03-0085t",
        identifier: "SKU B73MMAA#ABA",
        specs: ["Core Ultra 7 265F", "RTX 5060 8GB", "32GB", "1TB SSD"],
        why: "The most balanced ready-made option here: enough GPU for gaming and accelerated apps, 32GB of memory, and no extreme high-end parts.",
        watch: "Storage is 1TB instead of Kumia’s preferred 2TB.",
        url: "https://www.hp.com/us-en/shop/pdp/omen-16l-gaming-desktop-tg03-0085t-pc-b73mmaa-aba",
      },
      {
        role: "Alternative",
        name: "ASUS ROG G700",
        identifier: "Model family G700TF",
        specs: ["Core Ultra 5 225F-class", "RTX 5060 Ti-class", "32GB-class", "1TB SSD"],
        why: "A more graphics-focused version of the All-Purpose idea without requiring a high-end CPU.",
        watch: "The ROG styling is much more gaming-oriented, and exact RAM/storage vary by SKU.",
        url: "https://rog.asus.com/us/desktops/full-tower/rog-g700-2025-g700/spec/",
      },
      {
        role: "Step-up",
        name: "Alienware Aurora ACT1250",
        specs: ["Core Ultra 7 265F", "RTX 5070 12GB", "32GB", "1TB SSD"],
        why: "A step-up option for someone who wants considerably more graphics headroom while keeping strong general-purpose performance.",
        watch: "It goes beyond the RTX 5060-class target and costs more than this category strictly requires.",
        url: "https://www.dell.com/en-us/shop/desktop-computers/alienware-aurora-gaming-desktop/spd/alienware-aurora-act1250-gaming-desktop/",
      },
    ],
  },
  {
    number: "03",
    slug: "gaming-pc",
    title: "Gaming PC",
    persona: "PC gamers",
    icon: "gaming",
    audience: [
      "Gaming is the main reason you are buying the desktop, and you want strong modern game performance without paying for top-end parts everywhere.",
      "You may use the PC for ordinary work as well, but game performance decides where most of the budget should go.",
    ],
    specs: [["CPU", "AMD Ryzen 5 9600X class"], ["Graphics", "Radeon RX 9060 XT 16GB class"], ["Memory", "32GB"], ["Storage", "2TB SSD"]],
    lead: "For a gaming PC, the graphics card deserves more of the budget than an oversized CPU.",
    body: [
      "It is easy to look at CPU model numbers and assume that moving to a Ryzen 9 or another premium processor automatically makes a gaming PC much better. In this class of machine, that can be the wrong place to spend the extra money.",
      "A Ryzen 5 9600X-class processor gives the system a strong modern CPU without consuming the budget that should be supporting the graphics card. For most people shopping in this part of the market, pairing a capable midrange CPU with a stronger GPU produces a more sensible gaming machine than pairing an expensive CPU with a weaker graphics card.",
      "The RX 9060 XT 16GB class is where this setup puts the extra emphasis. The goal is a PC that is comfortable with modern games at 1440p rather than a machine that simply looks impressive on a specification sheet. The 16GB of graphics memory also gives the GPU more room for demanding textures and newer titles than lower-capacity alternatives.",
      "32GB of system memory fits the way a gaming PC is actually used. The game is rarely the only thing running. Discord, a browser, launchers, recording tools and background applications can all be open at the same time. The point is not that every game needs 32GB by itself. It is that the whole PC should remain comfortable while gaming.",
      "Storage deserves more attention here too. Large game installations make a 1TB drive feel smaller very quickly. A 2TB SSD lets you keep a useful library installed without immediately turning storage management into part of the gaming routine.",
      "This setup is not trying to be a workstation. If you spend most of your day rendering, editing large video projects or working with heavy production software, the Creator PC makes better use of the budget.",
      "For someone who mainly wants to play current PC games well, the combination stays focused on the part of the machine that does most of the visual work.",
    ],
    image: "/images/kumia-pc-gaming.png",
    imageAlt: "A focused desktop gaming setup with the monitor and PC clearly visible",
    imageClass: "is-gaming",
    optionsIntro: "Prefer to buy a complete gaming PC? Here are current systems that follow this setup closely.",
    products: [
      {
        role: "Recommended",
        name: "CyberPowerPC GML 99730",
        identifier: "Model ET99730",
        specs: ["Ryzen 7 9700X", "Radeon RX 9060 XT 16GB", "32GB", "2TB SSD"],
        why: "The closest complete system to Kumia’s Gaming PC target, including the 16GB GPU, 32GB memory and 2TB storage.",
        watch: "The Ryzen 7 CPU is one tier above the Ryzen 5-class target, so part of the budget is going into extra CPU performance.",
        url: "https://www.cyberpowerpc.com/system/Prebuilt-PC-GML-99730",
      },
      {
        role: "Alternative",
        name: "iBUYPOWER RDY Slate 8MP R01",
        specs: ["Ryzen 7 9700X", "Radeon RX 9060 XT 16GB", "32GB", "2TB SSD"],
        why: "Similar core specs to the CyberPowerPC, with a different case, support experience and warranty route.",
        watch: "The specification is very close to the first option, so compare current warranty, shipping and total price.",
        url: "https://www.ibuypower.com/store/rdy-slate-8mp-r01",
      },
      {
        role: "Value-oriented alternative",
        name: "Skytech Azure 3",
        identifier: "Model ST-AZURE3-1986-B-AL",
        specs: ["Ryzen 7 7700", "Radeon RX 9060 XT 16GB", "32GB", "1TB SSD"],
        why: "Keeps the important 16GB RX 9060 XT and 32GB of RAM while using an older CPU platform to reduce cost.",
        watch: "The CPU is older and storage drops to 1TB.",
        url: "https://skytechgaming.com/prebuilt-gaming-pc/st-azure3-1986-b-al/azure-3/1986-r7-7700-radeon-9060xt-16gb-32gb-1tb",
      },
    ],
  },
  {
    number: "04",
    slug: "creator-pc",
    title: "Creator PC",
    persona: "Video, photo & creative professionals",
    icon: "creator",
    audience: [
      "You regularly edit video, work with large photo libraries, create graphics, render projects or use other demanding production software.",
      "Waiting for exports, previews and heavy workloads matters more to you than saving a few hundred dollars on the initial PC.",
    ],
    specs: [["CPU", "Intel Core Ultra 7 270K Plus class"], ["Graphics", "GeForce RTX 5070 Ti class"], ["Memory", "64GB"], ["Storage", "2TB+ SSD"]],
    lead: "Creative work can lean on the CPU, GPU and memory at different times, so this setup cannot afford to make only one part fast.",
    body: [
      "The budget changes once the computer becomes a production tool. A Gaming PC can keep the CPU relatively modest and direct more money toward graphics performance. A Creator PC needs a stronger balance across several parts because different applications and different stages of the same project can stress different hardware.",
      "A Core Ultra 7 270K Plus-class processor gives this machine more CPU resources for work such as encoding, rendering, background processing and other tasks that can benefit from sustained multi-core performance. That extra CPU capacity has a much clearer purpose here than it does in an ordinary home PC.",
      "The graphics card still matters. Modern editing, effects, 3D and creative applications can use GPU acceleration heavily, so pairing a strong processor with a weak GPU would simply move the bottleneck. An RTX 5070 Ti-class card gives the system substantial GPU capability and broad support across popular creative software.",
      "64GB of memory is part of the same balance. Large projects, high-resolution media and several creative applications open together can consume much more memory than normal desktop use. The purpose of 64GB is not to make Word or a browser faster. It is to keep a production workflow from becoming constrained when project sizes grow.",
      "Storage needs a slightly different mindset too. 2TB should be treated as a starting point rather than an unusually large drive. Source footage, project files, caches and exports can consume space quickly. Some creators will eventually want separate project or archive drives, but the main system should begin with enough local SSD capacity to work comfortably.",
      "This PC can obviously play games, but gaming is not the reason its budget is distributed this way. The extra CPU and memory are there because they can save real time during production work.",
      "If creative applications are something you only open occasionally, the All-Purpose PC is the more economical choice. This setup makes sense when producing content is a regular part of what the computer is for.",
    ],
    image: "/images/kumia-pc-creator.png",
    imageAlt: "A creative production workstation with editing displays and a desktop PC",
    imageClass: "is-creator",
    optionsIntro: "Prefer to buy a complete workstation-style PC? Here are current systems that follow this setup closely.",
    products: [
      {
        role: "Recommended",
        name: "iBUYPOWER Intel Core Ultra Workstation",
        specs: ["Core Ultra 7 270K Plus (configurable)", "RTX 5070 Ti 16GB", "64GB", "2TB SSD"],
        why: "The closest match to Kumia’s Creator PC and one of the few systems built explicitly around workstation-style use.",
        watch: "It is configurable rather than one fixed SKU, so verify every selected component before ordering.",
        url: "https://www.ibuypower.com/store/intel-core-ultra-ai-workstation-pc",
      },
      {
        role: "Step-up",
        name: "HP OMEN 45L GT22-3000t",
        specs: ["Core Ultra 9 285K-class", "RTX 5070 Ti (configurable)", "64GB", "2TB SSD"],
        why: "A major-OEM option with more CPU headroom for demanding production workloads.",
        watch: "It is substantially more expensive and must be configured carefully to keep the RTX 5070 Ti and 64GB target.",
        url: "https://www.hp.com/us-en/shop/custom/omen-hp-45l-gaming-desktop-gt22-3000t-pc-intel-core-ultra9-64gb-ram-2tb-ssd-A4ND8AV_272328",
      },
      {
        role: "Alternative",
        name: "Alienware Aurora ACT1250",
        specs: ["Core Ultra 9 285K", "RTX 5070 Ti 16GB", "64GB", "2TB SSD"],
        why: "A major-brand alternative for creators who also want a gaming-capable desktop in a ready-made chassis.",
        watch: "The chassis and product positioning are gaming-first rather than creator/workstation-first.",
        url: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-aurora-act1250-gaming-desktop/useact1250wcto13",
      },
    ],
  },
  {
    number: "05",
    slug: "premium-all-purpose-pc",
    title: "Premium All-Purpose PC",
    persona: "Power users who want one PC for everything",
    icon: "premium",
    audience: [
      "You want one desktop for high-end gaming, serious creative work and demanding everyday use without maintaining separate machines.",
      "Price matters, but reducing compromises matters more.",
    ],
    specs: [["CPU", "AMD Ryzen 9 9950X3D"], ["Graphics", "GeForce RTX 5080 class"], ["Memory", "64GB"], ["Storage", "4TB SSD"]],
    lead: "This setup only makes sense if you will actually use both sides of its performance.",
    body: [
      "A premium desktop should not exist just to put the most expensive parts in one case. The reason to move this far beyond the other four setups is that the computer is expected to handle demanding gaming and demanding production work without being rebuilt around one of them.",
      "The Ryzen 9 9950X3D fits that role because it combines a high-end multi-core CPU with a design aimed at strong gaming performance as well. Instead of choosing a gaming-focused system that gives up production performance, or a workstation-style CPU that is more than the gaming side needs, this class of processor is meant for users who genuinely care about both.",
      "An RTX 5080-class GPU follows the same logic. It gives the machine enough graphics performance for demanding games while also providing substantial acceleration for creative and GPU-heavy applications. At this point the GPU is no longer being chosen just because the PC needs a display output or occasional graphics capability. It is one of the core reasons the system costs what it does.",
      "64GB of memory keeps the rest of the system consistent with that level of use. A premium machine that runs large creative workloads should not have to close ordinary applications simply to free memory for a project. At the same time, going far beyond 64GB would be unnecessary for many people unless their professional workload specifically calls for it.",
      "4TB of SSD storage is also easier to justify in a machine that combines roles. A large game library can occupy hundreds of gigabytes, and creative project files can consume storage even faster. Giving both types of work room on the same system prevents an expensive PC from immediately depending on constant file cleanup.",
      "The important part is who should not buy this setup. A person who mainly browses the web will never use most of it. Someone who only games can build a more focused Gaming PC. Someone who only creates content may prefer a workstation configured specifically around those applications.",
      "The Premium All-Purpose PC is for the smaller group of people who genuinely want one desktop to cover both high-end gaming and serious work, and are willing to pay to keep compromises low.",
    ],
    image: "/images/kumia-pc-premium.png",
    imageAlt: "A refined high-end desktop setup for demanding work and gaming",
    imageClass: "is-premium",
    optionsIntro: "Prefer to buy a complete high-end PC? Here are current systems that follow this setup closely.",
    products: [
      {
        role: "Recommended",
        name: "Skytech King 95",
        identifier: "Model ST-KING95-1684-B-AL",
        specs: ["Ryzen 9 9950X3D", "RTX 5080 16GB", "64GB", "4TB SSD"],
        why: "A near-exact match to Kumia’s Premium setup, including the CPU, GPU, memory and 4TB storage target.",
        watch: "This is firmly premium-priced and only makes sense if both gaming and heavy work matter.",
        url: "https://skytechgaming.com/prebuilt-gaming-pc/st-king95-1684-b-al/king-95/r9-9950x3d-rtx-5080-16gb-64gb-4tb",
      },
      {
        role: "Value choice",
        name: "CyberPowerPC GML 99699",
        identifier: "Model ET99699",
        specs: ["Ryzen 9 9950X3D", "RTX 5080 16GB", "64GB", "4TB SSD"],
        why: "Another exact-spec match that can be compelling when priced below similarly equipped premium systems.",
        watch: "Kumia has not yet confirmed a direct publisher affiliate path for CyberPowerPC.",
        url: "https://www.cyberpowerpc.com/system/Prebuilt-PC-GML-99699",
      },
      {
        role: "Alternative",
        name: "iBUYPOWER AMD Ryzen Creator Gaming PC",
        specs: ["Ryzen 9 9950X3D", "RTX 5080", "64GB", "2TB standard / 4TB configurable"],
        why: "A configurable option designed around both gaming and creator workloads, which fits the purpose of this category well.",
        watch: "CPU and storage choices must be checked because this is not one fixed specification.",
        url: "https://www.ibuypower.com/store/amd-ryzen-creator-gaming-pc",
      },
    ],
  },
];

function PersonaIcon({ kind }: { kind: PcSetup["icon"] }) {
  if (kind === "gaming") return <svg aria-hidden="true" viewBox="0 0 36 36"><path d="M10 14h16c3.5 0 5.5 2.8 6 8.6.3 3.5-2.8 5.2-5 2.7l-3-3.3H12l-3 3.3c-2.2 2.5-5.3.8-5-2.7.5-5.8 2.5-8.6 6-8.6Z"/><path d="M11 18v5m-2.5-2.5h5M24 19h.1m3 3h.1"/></svg>;
  if (kind === "creator") return <svg aria-hidden="true" viewBox="0 0 36 36"><circle cx="11" cy="9" r="3.5"/><path d="M5 23c.5-4.6 2.5-7 6-7s5.5 2.4 6 7M21 8h11v9H21zM24 21h8M27 17v4M18 28h15"/></svg>;
  if (kind === "premium") return <svg aria-hidden="true" viewBox="0 0 36 36"><path d="m18 4 3.7 8.1 8.8 1-6.5 6 1.8 8.6-7.8-4.4-7.8 4.4 1.8-8.6-6.5-6 8.8-1L18 4Z"/></svg>;
  return <svg aria-hidden="true" viewBox="0 0 36 36"><circle cx="9" cy="9" r="3.5"/><path d="M3.5 22c.5-4.5 2.3-6.8 5.5-6.8s5 2.3 5.5 6.8M18 7h14v10H18zM22 22h7m-3.5-5v5M17 28h16"/></svg>;
}

function ProductCard({ index, product }: { index: number; product: ProductOption }) {
  return (
    <article className="pc-product-card">
      <div className="pc-product-card-top">
        <span className="pc-product-index" aria-hidden="true">{String(index).padStart(2, "0")}</span>
        <span className="pc-product-role">{product.role}</span>
      </div>
      <h4 className="pc-product-name">{product.name}</h4>
      {product.identifier && <p className="pc-product-id">{product.identifier}</p>}
      <ul className="pc-product-specs">
        {product.specs.map((spec) => <li key={spec}>{spec}</li>)}
      </ul>
      <p className="pc-product-why"><span>Why pick it</span>{product.why}</p>
      <p className="pc-product-watch"><span>Watch for</span>{product.watch}</p>
      <a className="pc-product-link" href={product.url} target="_blank" rel="noopener noreferrer">
        View product <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

function ReadyMadeOptions({ id, intro, products, setupTitle }: { id: string; intro: string; products: ProductOption[]; setupTitle: string }) {
  return (
    <section className="pc-ready-made" aria-labelledby={`${id}-options-title`}>
      <div className="pc-ready-made-heading">
        <div>
          <h3 id={`${id}-options-title`}>Ready-made options</h3>
          <p>{intro}</p>
        </div>
        <p>Configurations and availability can change. Check the linked product page for current details.</p>
      </div>
      <div className="pc-product-cards" aria-label={`Three ready-made product options for ${setupTitle}`}>
        {products.map((product, i) => <ProductCard key={product.name} index={i + 1} product={product} />)}
      </div>
    </section>
  );
}

function ExpandedSetup({ setup }: { setup: PcSetup }) {
  return <section id={setup.slug} className={`pc-setup-section pc-expanded-setup ${setup.imageClass}`} aria-labelledby={`${setup.slug}-title`}>
    <header className="pc-setup-heading"><p className="pc-setup-number">{setup.number}</p><div><p className="section-label">SETUP {setup.number}</p><h2 id={`${setup.slug}-title`}>{setup.title}</h2></div></header>
    <figure className="pc-setup-visual"><Image src={setup.image} alt={setup.imageAlt} width={1672} height={941} sizes="(max-width: 700px) 100vw, 1120px" /></figure>
    <div className="pc-setup-summary">
      <div className="pc-who"><p className="section-label">WHO IT’S FOR</p><h3><span><PersonaIcon kind={setup.icon} /></span>{setup.persona}</h3>{setup.audience.map(text => <p key={text}>{text}</p>)}</div>
      <div className="pc-combination"><p className="section-label">THE COMBINATION</p><dl>{setup.specs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></div>
    </div>
    <section className="pc-reasoning" aria-labelledby={`${setup.slug}-reasoning-title`}><h3 id={`${setup.slug}-reasoning-title`}>Why this combination works</h3><div className="pc-reasoning-copy"><p className="pc-reasoning-lead">{setup.lead}</p>{setup.body.map(text => <p key={text}>{text}</p>)}</div></section>
    <ReadyMadeOptions id={setup.slug} intro={setup.optionsIntro} products={setup.products} setupTitle={setup.title} />
  </section>;
}

export default function DesktopPcGuidePrototype() {
  return (
    <main className="article-page pc-guide-page">
      <header className="site-header article-site-header">
        <Link className="brand-lockup" href="/" aria-label="Kumia Labs home">
          <Image src="/brand/kumia-k-mark.png" alt="" width={40} height={40} />
          <span className="header-wordmark"><b>Kumia</b><b>Labs</b></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#latest">Research</Link><Link href="/#latest">Tech</Link><Link href="/#meet-kumia">About</Link>
        </nav>
        <button className="search-button" type="button" aria-label="Search"><SearchIcon /></button>
      </header>

      <article>
        <div className="article-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#latest">Tech</Link><span>/</span><span>Desktop PC guide</span></div>

        <header className="pc-guide-hero">
          <h1 className="sr-only">{title}</h1>
          <figure className="pc-guide-cover">
            <Image
              src="/images/kumia-pc-hero.png"
              alt="Kumia presenting five desktop PC setups for different kinds of work"
              width={1672}
              height={941}
              sizes="(max-width: 700px) 100vw, 1280px"
              preload
            />
          </figure>
        </header>

        <div className="pc-guide-content">
          <section className="pc-guide-intro" aria-label="Introduction">
            <div className="pc-intro-conversation">
              <div className="pc-intro-kumia"><Image src="/images/kumia-intro-pointing-transparent.png" alt="Kumia" width={1122} height={1402} sizes="(max-width: 600px) 92px, 150px" /></div>
              <p className="pc-intro-bubble">Buying a desktop gets complicated fast. CPU names pile up, graphics cards can add hundreds of dollars, and it is easy to spend more without making the computer noticeably better for what you actually do.</p>
            </div>
            <div className="pc-intro-prose">
              <p>Kumia starts from the opposite direction. Pick the kind of work the computer needs to handle, then build a balanced combination around it.</p>
              <p>These five setups cover the most common starting points, from a simple home PC to a machine built for gaming and creative work. The exact models will change over time. The balance between the parts is what matters.</p>
            </div>
          </section>

          <nav className="pc-setup-index" aria-label="Five desktop PC setups">
            <p className="section-label">FIVE SETUPS AT A GLANCE</p>
            <ol>
              {setups.map((setup, index) => (
                <li key={setup} className={index === 0 ? "is-current" : undefined}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{setup}</strong>
                  <a href={`#${setupSlugs[index]}`} aria-label={`Jump to ${setup}`}>↓</a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="everyday-pc" className="pc-setup-section" aria-labelledby="everyday-title">
            <header className="pc-setup-heading">
              <p className="pc-setup-number">01</p>
              <div><p className="section-label">SETUP 01</p><h2 id="everyday-title">Everyday PC</h2></div>
            </header>

            <figure className="pc-setup-visual">
              <Image
                src="/images/kumia-pc-everyday.png"
                alt="A bright home desk arranged for everyday computer tasks"
                width={1672}
                height={941}
                sizes="(max-width: 700px) 100vw, 1120px"
              />
            </figure>

            <div className="pc-setup-summary">
              <div className="pc-who"><p className="section-label">WHO IT’S FOR</p><h3><span><HomeOfficeIcon /></span>Home &amp; office users</h3><p>You mainly use your computer for web browsing, email, Microsoft Office, YouTube, video calls, shopping, banking and storing personal photos.</p><p>You want it to feel quick and comfortable, but you do not need a gaming PC.</p></div>
              <div className="pc-combination"><p className="section-label">THE COMBINATION</p><dl>{specifications.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></div>
            </div>

            <section className="pc-reasoning" aria-labelledby="reasoning-title">
              <h3 id="reasoning-title">Why this combination works</h3>
              <div className="pc-reasoning-copy">
                <p className="pc-reasoning-lead">The most important decision here is actually what not to buy.</p>
                <p>For normal home and office use, a separate graphics card usually adds cost without fixing a problem you have. Modern integrated graphics can handle Windows, web video, multiple monitors and the visual work involved in everyday applications. Leaving out the graphics card also keeps the system simpler and usually reduces its power and cooling requirements.</p>
                <p>That lets more of the budget go toward the parts you notice every day.</p>
                <p>A Core Ultra 5-class processor gives this kind of PC plenty of CPU headroom without moving into expensive high-end territory. Opening a large spreadsheet while keeping a browser full of tabs in the background should not require a premium gaming processor.</p>
                <p>16GB of memory is the practical starting point here. An everyday PC is rarely running one program at a time. Chrome or Edge may already be using several gigabytes while Outlook, Word, Spotify and a video call are open beside it. Going below 16GB saves relatively little on a new desktop and makes that normal multitasking more likely to feel cramped.</p>
                <p>The same reasoning makes 1TB a better default than a tiny SSD. Windows and applications take part of the drive before you save anything yourself. Photos, downloaded files and phone backups slowly accumulate, and a computer that starts with very little free storage can become annoying long before its processor becomes obsolete.</p>
                <p>There is also no reason to chase an ultra-fast premium SSD for this setup. Opening a browser or Word document does not suddenly become twice as pleasant because the SSD has a much higher benchmark number. Capacity matters more here than buying the fastest drive available.</p>
                <p>Put together, these parts give the Everyday PC enough performance to stay comfortable without paying for capabilities its owner probably will not use.</p>
                <p>It is not meant for modern AAA gaming, regular 4K video production or heavy 3D work. Once those become part of the plan, adding a real graphics card changes the combination enough that one of the next setups makes more sense.</p>
              </div>
            </section>

            <ReadyMadeOptions
              id="everyday-pc"
              intro="Prefer to buy a complete PC? Here are current systems that follow this setup closely."
              products={everydayProducts}
              setupTitle="Everyday PC"
            />
          </section>
          {expandedSetups.map(setup => <ExpandedSetup setup={setup} key={setup.slug} />)}
          <aside className="pc-guide-signoff" aria-label="Kumia’s closing note">
            <div className="pc-guide-signoff-kumia">
              <Image src="/images/kumia-conclusion-clasped-transparent.png" alt="Kumia" width={1122} height={1402} sizes="(max-width: 600px) 92px, 132px" />
            </div>
            <p>Start with what you actually do on your PC. Once that is clear, choosing the right balance of CPU, graphics, memory and storage gets much easier.</p>
          </aside>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
