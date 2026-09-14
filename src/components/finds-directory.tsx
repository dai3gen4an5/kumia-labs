"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { KumiaFind } from "@/data/finds";

const CATEGORY_LABELS: Record<string, string> = {
  GAMING: "Gaming",
  TECH: "Tech",
  TOOLS: "Tools",
  HOME: "Home",
  AUTO: "Auto",
};
const CATEGORY_ORDER = ["GAMING", "TECH", "TOOLS", "HOME", "AUTO"];

const formatNumber = (number: number) => number.toString().padStart(3, "0");
const formatDate = (date: string) => date.slice(0, 10).replaceAll("-", ".");

type PublishedFind = KumiaFind & { href: string };

function isPublished(find: KumiaFind): find is PublishedFind {
  return find.showOnHome !== false && Boolean(find.href);
}

function byNewestFirst(a: KumiaFind, b: KumiaFind) {
  if (a.publishedAt !== b.publishedAt) return a.publishedAt < b.publishedAt ? 1 : -1;
  return b.number - a.number;
}

function FindVisual({ find }: { find: PublishedFind }) {
  return (
    <a className={`find-visual${find.image ? "" : " find-visual-editorial"}`} href={find.href} aria-label={`Read ${find.title}`}>
      {find.image ? (
        <Image src={find.image} alt="" width={1672} height={941} sizes="(max-width: 900px) calc(100vw - 40px), 460px" />
      ) : (
        <strong>{find.visualLabel}</strong>
      )}
    </a>
  );
}

export function FindsDirectory({ finds }: { finds: KumiaFind[] }) {
  const publishedFinds = useMemo(() => finds.filter(isPublished).sort(byNewestFirst), [finds]);
  const availableCategories = useMemo(
    () => CATEGORY_ORDER.filter((category) => publishedFinds.some((find) => find.category === category)),
    [publishedFinds]
  );
  const filters = useMemo(
    () => [{ value: "ALL", label: "All" }, ...availableCategories.map((category) => ({ value: category, label: CATEGORY_LABELS[category] }))],
    [availableCategories]
  );
  const showFilters = publishedFinds.length > 1 && availableCategories.length > 1;
  const showViewAll = publishedFinds.length > 1;
  const [active, setActive] = useState<string>("ALL");
  const filteredFinds = useMemo(
    () => (active === "ALL" ? publishedFinds : publishedFinds.filter((find) => find.category === active || find.subCategory === active)),
    [active, publishedFinds]
  );
  return (
    <section className="latest" id="latest" aria-label="Latest Research">
      <div className="latest-heading">
        <h2 id="latest-title">Latest Research</h2>
        {showFilters && (
          <div className="filters" role="group" aria-label="Filter latest research">
            {filters.map((filter) => <button key={filter.value} type="button" className={active === filter.value ? "active" : ""} aria-pressed={active === filter.value} onClick={() => setActive(filter.value)}>{filter.label}</button>)}
          </div>
        )}
        {showViewAll && <a className="view-all" href="#latest">View All <span aria-hidden="true">→</span></a>}
      </div>
      <div className="find-list" aria-live="polite">
        {filteredFinds.map((find) => (
          <article className="find-row" key={find.id}>
            <div className="find-meta"><strong>{formatNumber(find.number)}</strong><time dateTime={find.publishedAt}>{formatDate(find.publishedAt)}</time><i aria-hidden="true" /><span>{find.category}</span></div>
            <FindVisual find={find} />
            <h3><a href={find.href}>{find.title}</a></h3>
            <div className="find-result">
              <span className="pairing-label">RESEARCHED COMBINATION</span>
              <div className="combination"><span>{find.hostItem}</span><b>×</b><span>{find.testedItem}</span></div>
              {find.condition && <p className="find-condition">{find.condition}</p>}
              <a className="read-more" href={find.href} aria-label={`Read ${find.title}`}>Read more <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
