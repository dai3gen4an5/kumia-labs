"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { KumiaFind } from "@/data/finds";

const filters = [
  { value: "ALL", label: "All" },
  { value: "GAMING", label: "Gaming" },
  { value: "TECH", label: "Tech" },
  { value: "TOOLS", label: "Tools" },
  { value: "HOME", label: "Home" },
  { value: "AUTO", label: "Auto" },
] as const;
const formatNumber = (number: number) => number.toString().padStart(3, "0");
const formatDate = (date: string) => date.replaceAll("-", ".");

function FindVisual({ find }: { find: KumiaFind }) {
  const href = find.href ?? `#${find.slug}`;
  return <a className="find-visual" href={href} aria-label={`Read ${find.title}`}><Image src={find.image} alt="" width={1672} height={941} sizes="(max-width: 900px) calc(100vw - 40px), 460px" /></a>;
}

function StatusBadge({ result }: { result: KumiaFind["result"] }) {
  const icon = result === "MATCH" ? "check" : result === "PARTIAL" ? "partial" : "cross";
  return (
    <span className={`status-badge status-${result.toLowerCase().replace(" ", "-")}`}>
      <span className="status-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          {icon === "check" && <path d="m6.5 12.3 3.3 3.3 7.7-8" />}
          {icon === "cross" && <path d="m7 7 10 10M17 7 7 17" />}
          {icon === "partial" && <path d="M12 6.5v6M12 16.8v.2" />}
        </svg>
      </span>
      <strong>{result}</strong>
    </span>
  );
}

export function FindsDirectory({ finds }: { finds: KumiaFind[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("ALL");
  const filteredFinds = useMemo(() => active === "ALL" ? finds : finds.filter((find) => find.category === active || find.subCategory === active), [active, finds]);
  return (
    <section className="latest" id="latest" aria-label="Latest Research">
      <div className="latest-heading">
        <h2 id="latest-title">Latest Research</h2>
        <div className="filters" role="group" aria-label="Filter latest research">
          {filters.map((filter) => <button key={filter.value} type="button" className={active === filter.value ? "active" : ""} aria-pressed={active === filter.value} onClick={() => setActive(filter.value)}>{filter.label}</button>)}
        </div>
        <a className="view-all" href="#latest">View All <span aria-hidden="true">→</span></a>
      </div>
      <div className="find-list" aria-live="polite">
        {filteredFinds.map((find) => (
          <article className="find-row" key={find.id}>
            <div className="find-meta"><strong>{formatNumber(find.number)}</strong><time dateTime={find.publishedAt}>{formatDate(find.publishedAt)}</time><i aria-hidden="true" /><span>{find.category}</span></div>
            <FindVisual find={find} />
            <h3><a href={find.href ?? `#${find.slug}`}>{find.title}</a></h3>
            <div className="find-result">
              <StatusBadge result={find.result} />
              <div className="combination"><span>{find.hostItem}</span><b>×</b><span>{find.testedItem}</span></div>
              {find.condition && <p className="find-condition">{find.condition}</p>}
              <a className="read-more" href={find.href ?? `#${find.slug}`} aria-label={`Read ${find.title}`}>Read more <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
