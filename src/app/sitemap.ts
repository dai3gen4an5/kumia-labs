import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), lastModified: "2026-09-14", changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/tech/what-desktop-pc-should-you-buy"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/what-electric-toothbrush-should-you-buy"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/home-printer-guide"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/tech/apple-watch-ultra-band-compatibility"), lastModified: "2026-09-13", changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/contact"), lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/editorial-policy"), lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/affiliate-disclosure"), lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/privacy"), lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
  ];
}
