import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SUPPLIER_CHECK, supplierCheckPaymentUrl } from "@/lib/supplier-check";
import { PaymentButton, ResearchChrome } from "./research-chrome";
import styles from "./landing.module.css";

const title = "Japan Supplier Evidence Check | Kumia Research";
const description = "Japanese-source research before you spend time contacting a supplier. $29 pilot for up to 3 named Japanese suppliers, delivered within 3 business days.";
const canonicalPath = SUPPLIER_CHECK.basePath;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Japan Supplier Evidence Check",
    description,
    url: canonicalPath,
    siteName: SUPPLIER_CHECK.brand,
    type: "website",
  },
};

const samplePages = [
  { src: "/research/sample/marujyu-oya-worked-sample-p1.jpg", label: "Executive summary", note: "Outcome, English baseline and Japanese-source findings" },
  { src: "/research/sample/marujyu-oya-worked-sample-p2.jpg", label: "Evidence ledger", note: "English vs. Japanese evidence, fact vs. inference, source links" },
  { src: "/research/sample/marujyu-oya-worked-sample-p3.jpg", label: "Buyer action sheet", note: "Questions to ask the supplier before you invest more time" },
];

const deliverables: { title: string; body: string; icon: ReactNode }[] = [
  { title: "A clear outcome", body: "One research outcome per supplier, so the next step is easy to decide.", icon: <IconFlag /> },
  { title: "Japanese-source evidence", body: "What relevant Japanese primary sources say, summarized in English.", icon: <IconLanguage /> },
  { title: "The English vs. Japanese gap", body: "Where Japanese sources add to, or confirm, the English-accessible picture.", icon: <IconCompare /> },
  { title: "What to verify next", body: "Specific questions to raise with the supplier before you commit time.", icon: <IconChecklist /> },
  { title: "Direct source links", body: "Every material finding links to its source, with fact and inference separated.", icon: <IconLink /> },
];

const outcomes = [
  { name: "CONTACT", body: "Public evidence supports reaching out now." },
  { name: "VERIFY FIRST", body: "Worth contacting, with specific points to confirm first." },
  { name: "DEPRIORITIZE", body: "Public evidence suggests looking at other options first." },
  { name: "NO MATERIAL GAP", body: "Japanese sources didn’t change what English sources already show. No meaningful gap found is still a valid completed result." },
];

const steps = [
  { title: "Pay $29 and send the supplier names", body: "After checkout, a short form asks for up to 3 Japanese companies and the decision you’re making." },
  { title: "We check English and Japanese public sources", body: "English-accessible information first, then relevant Japanese primary sources." },
  { title: "Receive the evidence report", body: "By email within 3 business days after we receive your completed order form." },
];

const goodFit = [
  "Small importers",
  "Specialty-food and retail buyers",
  "Sourcing consultants",
  "Brands evaluating Japanese suppliers",
];

const notIncluded = [
  "Supplier discovery",
  "Supplier contact",
  "Quotation requests",
  "Negotiation",
  "Factory audit",
  "Credit check",
  "Certification verification",
  "Legal advice",
  "Food-safety review",
  "Import-compliance advice",
];

export default function SupplierCheckPage() {
  const paymentUrl = supplierCheckPaymentUrl();

  return (
    <ResearchChrome wide>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Japan Supplier Evidence Check</p>
            <h1 className={styles.heroTitle}>Find what English supplier research misses.</h1>
            <p className={styles.heroLead}>
              Send us up to 3 Japanese suppliers you’re already considering. We compare their English-facing information with relevant Japanese primary sources, then tell you what to do next.
            </p>
            <ul className={styles.outcomeChips} aria-label="Possible outcomes">
              {outcomes.map((o) => <li key={o.name}>{o.name}</li>)}
            </ul>
            <dl className={styles.facts}>
              <div><dt>Pilot price</dt><dd>$29</dd></div>
              <div><dt>Scope</dt><dd>Up to 3 suppliers</dd></div>
              <div><dt>Delivery</dt><dd>3 business days</dd></div>
            </dl>
            <div className={styles.ctaRow}>
              <PaymentButton paymentUrl={paymentUrl} label="Check my suppliers" className={styles.ctaPrimary} />
              <a className={styles.ctaSecondary} href={SUPPLIER_CHECK.samplePdf} target="_blank" rel="noopener">View a worked sample</a>
            </div>
            <p className={styles.microcopy}>{SUPPLIER_CHECK.pilotLimit} · Public-source research · Full refund if we can’t complete the research</p>
          </div>

          <a className={styles.heroPreview} href={SUPPLIER_CHECK.samplePdf} target="_blank" rel="noopener" aria-label="Open the Marujyu Oya worked sample (PDF)">
            <span className={styles.stack} aria-hidden="true">
              <Image className={styles.stackBack2} src={samplePages[2].src} alt="" width={760} height={984} sizes="(max-width: 860px) 60vw, 360px" />
              <Image className={styles.stackBack1} src={samplePages[1].src} alt="" width={760} height={984} sizes="(max-width: 860px) 60vw, 360px" />
              <Image className={styles.stackFront} src={samplePages[0].src} alt="" width={760} height={984} sizes="(max-width: 860px) 70vw, 400px" priority />
            </span>
            <span className={styles.previewCaption}>
              <span className={styles.previewLabel}>Worked sample · 3 pages</span>
              <span>Marujyu Oya · Outcome: <b>VERIFY FIRST</b></span>
            </span>
          </a>
        </div>
      </section>

      {/* Trust strip */}
      <div className={styles.trustBand}>
        <ul className={`${styles.container} ${styles.trustList}`} aria-label="How the research works">
          <li>Public sources only</li>
          <li>Direct source links</li>
          <li>Checked date on every report</li>
          <li>Fact / inference separated</li>
          <li>NO MATERIAL GAP allowed</li>
          <li>No supplier contact</li>
        </ul>
      </div>

      {/* English vs Japanese comparison */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>From the worked sample</p>
          <h2 className={styles.h2}>What the Japanese sources added</h2>
          <p className={styles.sectionLead}>Marujyu Oya, a Yamagata soy sauce and miso maker, checked for a U.S. specialty-food importer. Sources checked September 27, 2026.</p>
          <ol className={styles.compare}>
            <li className={styles.compareCard}>
              <p className={styles.compareStep}>1 · English-accessible view</p>
              <ul>
                <li>Products, English contact form, email and phone</li>
                <li>Overseas sales network listed, including the USA</li>
                <li>Halal certification from Japan Islamic Trust (JIT)</li>
              </ul>
              <p className={styles.compareVerdict}>Looks worth contacting.</p>
            </li>
            <li className={`${styles.compareCard} ${styles.compareJp}`}>
              <p className={styles.compareStep}>2 · Japanese primary-source check</p>
              <ul>
                <li>The company’s MAFF export plan states that exports were routed through a domestic Japanese trading company</li>
                <li>The plan’s FY2021 markets and FY2029 targets do not include the U.S.</li>
                <li>The plan identifies capacity, product-adaptation and direct-export know-how issues</li>
                <li>Public sources cite different halal certifiers <span className={styles.inference}>Inference</span></li>
              </ul>
            </li>
            <li className={`${styles.compareCard} ${styles.compareOutcome}`}>
              <p className={styles.compareStep}>3 · What changes</p>
              <p className={styles.shift}><s>CONTACT</s> <span aria-hidden="true">→</span> <b>VERIFY FIRST</b></p>
              <p>Still worth contacting. Confirm the buying route, available capacity, U.S. product versions and current certificate scope first.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Worked sample */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.container}>
          <p className={styles.kicker}>What you receive</p>
          <h2 className={styles.h2}>See the report before you buy</h2>
          <p className={styles.sectionLead}>These are the three pages of the Marujyu Oya worked sample, unedited. Your report covers the same elements for each supplier you send.</p>
          <ul className={styles.pages}>
            {samplePages.map((p, i) => (
              <li key={p.src}>
                <a href={SUPPLIER_CHECK.samplePdf} target="_blank" rel="noopener" className={styles.pageCard}>
                  <Image src={p.src} alt={`Worked sample page ${i + 1}: ${p.label}`} width={760} height={984} sizes="(max-width: 700px) 80vw, 300px" className={styles.pageThumb} />
                  <span className={styles.pageMeta}>
                    <b>Page {i + 1} · {p.label}</b>
                    <span>{p.note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.midCta}>
            <a className={styles.ctaSecondary} href={SUPPLIER_CHECK.samplePdf} target="_blank" rel="noopener">View the Marujyu Oya worked sample (PDF)</a>
            <PaymentButton paymentUrl={paymentUrl} label="Check my suppliers — $29" className={styles.ctaPrimary} />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>For each supplier</p>
          <h2 className={styles.h2}>What you get</h2>
          <ul className={styles.cards}>
            {deliverables.map((d) => (
              <li key={d.title} className={styles.card}>
                <span className={styles.cardIcon} aria-hidden="true">{d.icon}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={styles.container}>
          <p className={styles.kicker}>Research outcomes</p>
          <h2 className={styles.h2}>Every supplier gets one of four outcomes</h2>
          <ul className={styles.outcomes}>
            {outcomes.map((o) => (
              <li key={o.name} className={`${styles.outcome} ${o.name === "NO MATERIAL GAP" ? styles.outcomeNoGap : ""}`}>
                <span className={styles.outcomeBadge}>{o.name}</span>
                <p>{o.body}</p>
              </li>
            ))}
          </ul>
          <div className={styles.policy}>
            <p className={styles.policyLabel}>No-gap policy</p>
            <p>We do not manufacture findings. If English-language evidence already answers the commercial question, we may return <b>NO MATERIAL GAP</b>. This is a valid completed research result.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>How it works</p>
          <h2 className={styles.h2}>From checkout to report</h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit + scope */}
      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={styles.container}>
          <p className={styles.kicker}>Scope</p>
          <h2 className={styles.h2}>Is this for you?</h2>
          <div className={styles.fit}>
            <div className={styles.fitCard}>
              <h3>Good fit</h3>
              <p className={styles.fitLead}>You already have Japanese supplier names and want a public-source evidence check before you spend time on them.</p>
              <ul className={styles.checkList}>{goodFit.map((g) => <li key={g}>{g}</li>)}</ul>
            </div>
            <div className={`${styles.fitCard} ${styles.fitNot}`}>
              <h3>Not included</h3>
              <p className={styles.fitLead}>This is public-source research only.</p>
              <ul className={styles.dashList}>{notIncluded.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          </div>
          <div className={styles.terms}>
            <p><b>Delivery.</b> Delivered by email within 3 business days after we receive the completed order form following successful payment.</p>
            <p><b>Refunds.</b> Full refund only if the research cannot be completed. A NO MATERIAL GAP result is a completed result and is not itself a reason for a refund.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalBand}>
        <div className={`${styles.container} ${styles.finalGrid}`}>
          <div>
            <p className={styles.finalPrice}>$29 <span>pilot</span></p>
            <h2 className={styles.finalTitle}>Check up to 3 Japanese suppliers</h2>
            <ul className={styles.finalFacts}>
              <li>Delivered within 3 business days</li>
              <li>Public-source research with direct source links</li>
              <li>Full refund if we can’t complete the research</li>
            </ul>
            <p className={styles.finalNote}>{SUPPLIER_CHECK.pilotLimit}</p>
          </div>
          <PaymentButton paymentUrl={paymentUrl} label="Start my supplier check" className={styles.ctaLight} />
        </div>
      </section>
    </ResearchChrome>
  );
}

function Svg({ children }: { children: ReactNode }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}
function IconFlag() { return <Svg><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></Svg>; }
function IconLanguage() { return <Svg><path d="M4 6h9M8.5 4v2c0 4-2 7-4.5 8.5M6 10c1.2 2 3 3.5 5 4.5" /><path d="M13 20l4-9 4 9M14.5 17h5" /></Svg>; }
function IconCompare() { return <Svg><rect x="3" y="5" width="7" height="14" rx="1.5" /><rect x="14" y="5" width="7" height="14" rx="1.5" /><path d="M10 12h4" /></Svg>; }
function IconChecklist() { return <Svg><path d="M9 6h11M9 12h11M9 18h11" /><path d="M3.5 6l1.5 1.5L7.5 5M3.5 12l1.5 1.5L7.5 11M3.5 18l1.5 1.5L7.5 17" /></Svg>; }
function IconLink() { return <Svg><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></Svg>; }
