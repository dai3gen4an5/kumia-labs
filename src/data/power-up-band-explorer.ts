// Power-Up Band Identity Explorer.
// Source of truth: docs/research/power-up-band-amiibo-identities-work-package-final.md
// Only the eight standard character identities are encoded. Limited editions are
// deliberately excluded, and no game behavior is inferred beyond the two verified examples.

export const VERIFIED_DATE = "2026-09-21";

export type SourceId =
  | "S1"
  | "S2"
  | "S3"
  | "S5"
  | "S6"
  | "S7"
  | "S8"
  | "S9"
  | "S11"
  | "S12"
  | "S13"
  | "S14"
  | "S17"
  | "S18"
  | "S20";

export const SOURCES: Record<
  SourceId,
  { label: string; short: string; url: string; claim: string }
> = {
  S1: {
    label: "Nintendo U.S.: Power-Up Band amiibo detail",
    short: "Nintendo Band detail",
    url: "https://www.nintendo.com/us/amiibo/detail/power-up-band/",
    claim: "Corresponding-character amiibo identity, Switch and Switch 2 support, NFC touch location, legacy-hardware exclusion, and U.S. DK/Diddy availability.",
  },
  S2: {
    label: "Nintendo Japan: Power-Up Band",
    short: "Nintendo Japan Band page",
    url: "https://www.nintendo.com/jp/hardware/amiibo/powerupband/index.html",
    claim: "Corresponding-character rule and the discontinued USJ Golden Band acting as Mario amiibo.",
  },
  S3: {
    label: "Nintendo Support: Power-Up Band overview",
    short: "Nintendo Support",
    url: "https://en-americas-support.nintendo.com/app/answers/detail/p/1120/a_id/61864",
    claim: "Park functions, amiibo role, touch instructions, and Wii U / Nintendo 3DS-family exclusion.",
  },
  S5: {
    label: "Universal Studios Japan: Power-Up Band app and FAQ",
    short: "USJ Band FAQ",
    url: "https://www.usj.co.jp/web/en/us/areas/super-nintendo-world/app",
    claim: "Eight standard types, equal benefits, Teams, cloud play log, ten-Band app limit, no log transfer, and Japan/Hollywood reuse with separate data.",
  },
  S6: {
    label: "Universal Studios Japan: Power-Up Band Key Challenges",
    short: "USJ Key Challenges",
    url: "https://www.usj.co.jp/web/en/us/attractions/power-up-band-key-challenges",
    claim: "Coins, stamps, keys, amiibo use, and the distinction between the Band and park admission.",
  },
  S7: {
    label: "Universal Studios Japan: Power-Up Features terms",
    short: "USJ RF terms",
    url: "https://www.usj.co.jp/web/en/us/about",
    claim: "The park system reads an anonymous Band ID using ambient radio-frequency technology.",
  },
  S8: {
    label: "Discover Universal: Complete Guide to Power-Up Bands",
    short: "Universal U.S. guide",
    url: "https://blog.discoveruniversal.com/guides-and-tips/power-up-bands-at-super-nintendo-world/",
    claim: "Current Hollywood/Epic lineups, equal standard operation, Teams, QR setup, amiibo role, and official U.S. purchase locations.",
  },
  S9: {
    label: "Discover Universal: SUPER NINTENDO WORLD Hollywood guide",
    short: "Hollywood guide",
    url: "https://blog.discoveruniversal.com/guides-and-tips/guide-to-super-nintendo-world-at-universal-studios-hollywood/",
    claim: "Hollywood features, persistent play history, Team framing, and explicit Japan portability.",
  },
  S11: {
    label: "Nintendo: SUPER NINTENDO WORLD overview",
    short: "Nintendo park overview",
    url: "https://www.nintendo.com/jp/snw/index.html",
    claim: "The three operating destinations and the Band's park and amiibo roles.",
  },
  S12: {
    label: "Universal Orlando: SUPER NINTENDO WORLD details",
    short: "Universal Orlando",
    url: "https://media.universalparksusa.com/press-releases/trade-universal-orlando-resort-unveils-new-details-about-super-nintendo-world/",
    claim: "Epic Universe activities and its Super Mario Land and Donkey Kong Country areas.",
  },
  S13: {
    label: "Nintendo: Donkey Kong Bananza amiibo support",
    short: "Bananza support",
    url: "https://www.nintendo.com/jp/hardware/amiibo/game/aaaca_2/index.html",
    claim: "Donkey Kong and Diddy Kong Power-Up Bands produce the verified gold KONG-panel reaction.",
  },
  S14: {
    label: "Nintendo Support: Super Smash Bros. Ultimate update history",
    short: "Smash update",
    url: "https://en-americas-support.nintendo.com/app/answers/detail/a_id/42809/",
    claim: "Mario, Luigi, Peach, Daisy, and Yoshi Bands work as Figure Players; Toad gives a reward.",
  },
  S17: {
    label: "Universal Studios Hollywood: 2024 Golden Band release",
    short: "Hollywood Golden release",
    url: "https://media.universalparksusa.com/press-releases/universal-studios-hollywood-powers-up-for-the-one-year-anniversary-celebration-of-super-nintendo-world-with-exciting-offerings-including-the-all-new-power-up-cafe-serving-super-mario-power-up-themed/",
    claim: "The commemorative Hollywood Golden Power-Up Band existed; the source does not establish its amiibo identity.",
  },
  S18: {
    label: "Nintendo: Universal Studios Japan fifth anniversary",
    short: "USJ anniversary",
    url: "https://www.nintendo.com/jp/topics/article/cd0c7c96-d39f-4903-a644-a053735b0ce7",
    claim: "The Invincible Mario anniversary design exists; the source does not establish its amiibo identity.",
  },
  S20: {
    label: "Nintendo: SUPER NINTENDO WORLD Hollywood opening",
    short: "Nintendo Hollywood",
    url: "https://www.nintendo.com/us/whatsnew/super-nintendo-world-at-universal-studios-hollywood-is-officially-open-so-lets-a-go/",
    claim: "Hollywood's six standard designs, individual and Team scores, coins, keys, and ride integration.",
  },
};

export type CharacterId =
  | "mario"
  | "luigi"
  | "peach"
  | "daisy"
  | "toad"
  | "yoshi"
  | "donkey-kong"
  | "diddy-kong";

export type BandIdentity = {
  id: CharacterId;
  character: string;
  parkIdentity: string;
  standardLocations: string;
  amiiboIdentity: string;
  consoleSupport: string;
  notSupported: string;
  gameExample: string;
  travelNote: string;
  sources: SourceId[];
};

const SIX_PARKS = "Universal Studios Japan, Universal Studios Hollywood, and Universal Epic Universe";
const SIX_TRAVEL =
  "Japan and Hollywood mutually accept the physical Band, but each park keeps a separate app and progress record. Epic Universe uses a separate Orlando setup; complete three-park interoperability is not verified.";
const KONG_PARKS = "Universal Studios Japan and Universal Epic Universe; not a Hollywood standard design";
const KONG_TRAVEL =
  "A current official Universal staff answer supports a Japan-purchased Band at Epic Universe after Orlando-app linking. That does not establish every reverse direction or shared progress, and DK/Diddy are not standard Hollywood designs.";

export const BAND_IDENTITIES: BandIdentity[] = [
  {
    id: "mario",
    character: "Mario",
    parkIdentity: "Team Mario",
    standardLocations: SIX_PARKS,
    amiiboIdentity: "Mario amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Super Smash Bros. Ultimate: can become a Figure Player.",
    travelNote: SIX_TRAVEL,
    sources: ["S1", "S5", "S8", "S14"],
  },
  {
    id: "luigi",
    character: "Luigi",
    parkIdentity: "Team Luigi",
    standardLocations: SIX_PARKS,
    amiiboIdentity: "Luigi amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Super Smash Bros. Ultimate: can become a Figure Player.",
    travelNote: SIX_TRAVEL,
    sources: ["S1", "S5", "S8", "S14"],
  },
  {
    id: "peach",
    character: "Princess Peach",
    parkIdentity: "Team Peach",
    standardLocations: SIX_PARKS,
    amiiboIdentity: "Peach amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Super Smash Bros. Ultimate: can become a Figure Player.",
    travelNote: SIX_TRAVEL,
    sources: ["S1", "S5", "S8", "S14"],
  },
  {
    id: "daisy",
    character: "Princess Daisy",
    parkIdentity: "Team Daisy",
    standardLocations: SIX_PARKS,
    amiiboIdentity: "Daisy amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Super Smash Bros. Ultimate: can become a Figure Player.",
    travelNote: SIX_TRAVEL,
    sources: ["S1", "S5", "S8", "S14"],
  },
  {
    id: "toad",
    character: "Toad",
    parkIdentity: "Team Toad",
    standardLocations: SIX_PARKS,
    amiiboIdentity: "Toad amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Super Smash Bros. Ultimate: gives a reward instead of becoming a Figure Player.",
    travelNote: SIX_TRAVEL,
    sources: ["S1", "S5", "S8", "S14"],
  },
  {
    id: "yoshi",
    character: "Yoshi",
    parkIdentity: "Team Yoshi",
    standardLocations: SIX_PARKS,
    amiiboIdentity: "Yoshi amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Super Smash Bros. Ultimate: can become a Figure Player.",
    travelNote: SIX_TRAVEL,
    sources: ["S1", "S5", "S8", "S14"],
  },
  {
    id: "donkey-kong",
    character: "Donkey Kong",
    parkIdentity: "Team Donkey Kong",
    standardLocations: KONG_PARKS,
    amiiboIdentity: "Donkey Kong amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Donkey Kong Bananza: produces a gold KONG panel that can be thrown to explode against enemies or terrain.",
    travelNote: KONG_TRAVEL,
    sources: ["S1", "S5", "S8", "S13"],
  },
  {
    id: "diddy-kong",
    character: "Diddy Kong",
    parkIdentity: "Team Diddy Kong",
    standardLocations: KONG_PARKS,
    amiiboIdentity: "Diddy Kong amiibo",
    consoleSupport: "Nintendo Switch and Nintendo Switch 2",
    notSupported: "Nintendo 3DS family and Wii U",
    gameExample: "Donkey Kong Bananza: produces a gold KONG panel that can be thrown to explode against enemies or terrain.",
    travelNote: KONG_TRAVEL,
    sources: ["S1", "S5", "S8", "S13"],
  },
];

export function getBandIdentity(id: CharacterId): BandIdentity {
  const identity = BAND_IDENTITIES.find((item) => item.id === id);
  if (!identity) throw new Error(`Unknown Power-Up Band identity: ${id}`);
  return identity;
}

// Amazon.com (US) product targets, verified against the live listing on 2026-09-21.
// url is a plain, untagged amazon.com product URL — no Associates tag exists in the
// repository yet. When one is confirmed, add it as a query param here; the component
// does not need to change. image is null until a rights-cleared product image is
// available; the component omits the image area rather than showing a placeholder.
export const COMMERCE_CANDIDATES = {
  bananza: {
    name: "Donkey Kong Bananza",
    asin: "B0F66KLYVH",
    role: "PRIMARY",
    url: "https://www.amazon.com/dp/B0F66KLYVH",
    image: null as string | null,
    imageAlt: null as string | null,
  },
  smash: {
    name: "Super Smash Bros. Ultimate",
    asin: "B01N5OKGLH",
    role: "SECONDARY",
    url: "https://www.amazon.com/dp/B01N5OKGLH",
    image: null as string | null,
    imageAlt: null as string | null,
  },
  switch2: { name: "Nintendo Switch 2", asin: "B0F3GWXLTS", role: "OPTIONAL_TEXT_ONLY" },
} as const;

export const EXPLORER_BOUNDARY =
  "Game effects vary by title. This does not transfer park progress to a console or merge progress between parks.";
