"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SearchItem = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string[];
};

const searchIndex: SearchItem[] = [
  {
    title: "Laser, Inkjet, or Tank? Start Here.",
    href: "/home/home-printer-guide",
    category: "Home",
    description: "Five home printer setups based on what you print, how often you print, and what you keep buying.",
    keywords: ["printer", "home printer", "laser", "inkjet", "ink tank", "ecotank", "megatank", "monochrome", "brother", "photo printer"],
  },
  {
    title: "Think Past the Handle.",
    href: "/home/what-electric-toothbrush-should-you-buy",
    category: "Home",
    description: "Four setups that account for replacement heads, charging, shared bathrooms, and travel.",
    keywords: ["toothbrush", "electric toothbrush", "oral-b", "oral b", "dental", "brush heads"],
  },
  {
    title: "The Right PC Starts With the Work.",
    href: "/tech/what-desktop-pc-should-you-buy",
    category: "Tech",
    description: "Five Kumia setups for everyday use, gaming, creative work, and everything in between.",
    keywords: ["pc", "desktop", "computer", "gaming pc", "cpu", "gpu", "graphics card"],
  },
  {
    title: "About",
    href: "/about",
    category: "Info",
    description: "Why Kumia Labs exists, where the name comes from, and how a guide gets written.",
    keywords: ["about", "kumia labs", "mission", "who we are"],
  },
  {
    title: "Contact",
    href: "/contact",
    category: "Info",
    description: "Corrections, product updates, partnerships, and feedback all go through the channels below.",
    keywords: ["contact", "email", "reach us", "support", "get in touch"],
  },
  {
    title: "Editorial Policy",
    href: "/editorial-policy",
    category: "Info",
    description: "How Kumia Labs decides what to recommend, and how that stays separate from how the site makes money.",
    keywords: ["editorial", "policy", "recommendations", "ranking", "testing"],
  },
  {
    title: "Affiliate Disclosure",
    href: "/affiliate-disclosure",
    category: "Info",
    description: "Kumia Labs may use affiliate links. Here is exactly what that does, and does not, change.",
    keywords: ["affiliate", "disclosure", "commission", "sponsored", "links"],
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    category: "Info",
    description: "What Kumia Labs actually collects from visitors today, described in plain language.",
    keywords: ["privacy", "data", "cookies", "tracking", "analytics"],
  },
  {
    title: "Terms of Use",
    href: "/terms",
    category: "Info",
    description: "The terms for using Kumia Labs, in plain language.",
    keywords: ["terms", "legal", "conditions", "use"],
  },
];

function matches(item: SearchItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    item.title.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.keywords.some((keyword) => keyword.includes(q))
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function SearchOverlay() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchIndex.filter((item) => matches(item, query)), [query]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  function go(href: string) {
    close();
    router.push(href);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = results[activeIndex];
      if (target) go(target.href);
    }
  }

  return (
    <>
      <button className="search-button" type="button" aria-label="Search Kumia Labs" onClick={() => setOpen(true)}>
        <SearchIcon />
      </button>
      {open && (
        <div
          className="search-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="search-panel" role="dialog" aria-modal="true" aria-label="Search Kumia Labs">
            <div className="search-input-row">
              <SearchIcon />
              <input
                ref={inputRef}
                type="text"
                value={query}
                placeholder="Search Kumia Labs"
                aria-label="Search Kumia Labs"
                autoComplete="off"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleKeyDown}
              />
              <button className="search-close" type="button" aria-label="Close search" onClick={close}>
                <CloseIcon />
              </button>
            </div>
            <div className="search-results" role="listbox" aria-label="Search results">
              {results.length === 0 ? (
                <p className="search-empty">No results found.</p>
              ) : (
                results.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`search-result${index === activeIndex ? " active" : ""}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={close}
                  >
                    <span className="search-result-top">
                      <span className="search-result-title">{item.title}</span>
                      <span className="search-result-category">{item.category}</span>
                    </span>
                    <p className="search-result-desc">{item.description}</p>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
