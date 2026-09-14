import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), lastModified: "2026-09-14", changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/tech/what-desktop-pc-should-you-buy"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/tech/apple-watch-ultra-band-compatibility"), lastModified: "2026-09-13", changeFrequency: "monthly", priority: 0.8 },
  ];
}
