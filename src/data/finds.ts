export type FindResult = "MATCH" | "PARTIAL" | "NO MATCH";

export type KumiaFind = {
  id: string; number: number; slug: string; title: string; category: string; subCategory?: string;
  result?: FindResult; hostItem: string; testedItem: string; publishedAt: string; image?: string; href?: string; condition?: string; imagePosition?: string; summary?: string; sources?: string[]; editionLabel?: string; visualLabel?: string;
};

export const finds: KumiaFind[] = [
  { id: "v2-find-001", number: 1, editionLabel: "V2 FIND", slug: "cordless-tool-starter-setup", href: "/tools/cordless-tool-starter-setup", title: "8 cordless tool combinations to start—and grow—your DIY setup.", category: "TOOLS", hostItem: "Projects + budget", testedItem: "Tool + battery platform", publishedAt: "2026-09-13", image: "/images/kumia-v2-001-thumbnail-16x9.png" },
  { id: "find-001", number: 1, editionLabel: "V1 ARCHIVE", slug: "apple-watch-ultra-band-compatibility", href: "/tech/apple-watch-ultra-band-compatibility", title: "That giant Ultra band fits a regular Apple Watch.", category: "TECH", result: "MATCH", hostItem: "Apple Watch 44 / 45 / 46mm", testedItem: "49mm Ultra Band", publishedAt: "2026-09-13", image: "/finds/002-ultra-band-apple-watch.png", imagePosition: "center 48%" },
  { id: "find-002", number: 2, editionLabel: "V1 ARCHIVE", slug: "gamecube-controller-switch-2", title: "Your old GameCube controller still works on Switch 2.", category: "GAMING", result: "PARTIAL", hostItem: "Switch 2", testedItem: "Original GameCube Controller", condition: "Adapter required · TV mode only", publishedAt: "2026-09-12", image: "/finds/001-gamecube-switch2.png", imagePosition: "center 62%" },
  { id: "find-003", number: 3, editionLabel: "V1 ARCHIVE", slug: "switch-sd-card-switch-2", title: "Your old Switch SD card doesn't work the way you think.", category: "GAMING", result: "NO MATCH", hostItem: "Switch 2", testedItem: "Switch 1 SD Card", publishedAt: "2026-09-12", image: "/finds/003-switch-sd-card.png", imagePosition: "center 55%" },
];
