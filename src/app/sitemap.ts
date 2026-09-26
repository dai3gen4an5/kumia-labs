import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), lastModified: "2026-09-14", changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/home/beyblade-x-blade-ratchet-bit"), lastModified: "2026-09-25", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/brio-thomas-ikea-wooden-railway"), lastModified: "2026-09-23", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/gaming/power-up-band-amiibo-identities"), lastModified: "2026-09-21", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/lego-trains-old-track"), lastModified: "2026-09-20", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/lego-duplo-hidden-connection"), lastModified: "2026-09-20", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/kitchenaid-attachments-bowls"), lastModified: "2026-09-19", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/tools/pressure-washer-hose-and-gun-fit"), lastModified: "2026-09-19", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/tools/dewalt-20v-max-bauer-20v-compatibility"), lastModified: "2026-09-19", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/tech/what-desktop-pc-should-you-buy"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/what-electric-toothbrush-should-you-buy"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/home/robot-vacuum-guide"), lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.9 },
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
