# Kumia Labs Amazon Associates Commerce Rollout — 2026-09-22

## Tracking ID
Use Amazon.com Associates Tracking ID: `kumialabs-20`.

## Goal
Add Amazon.com affiliate monetization to existing Kumia Labs articles without turning research articles into product-list pages. Preserve editorial independence and article structure.

## Compliance requirements
1. Add this exact site disclosure clearly and conspicuously:
   **As an Amazon Associate I earn from qualifying purchases.**
2. Place a clear link-level disclosure near Amazon affiliate CTAs, e.g. **(paid link)** or **#CommissionsEarned**.
3. Every Amazon Special Link must contain `tag=kumialabs-20`.
4. Do not display scraped Amazon prices, ratings, review counts, seller claims, or Amazon product imagery.
5. Do not route through a hidden/obscuring redirect.
6. Do not replace first-party technical sources with Amazon listings. Amazon is the purchase destination, not the source of compatibility claims.

## Architecture
Create a small shared Amazon link helper rather than hard-coding tags in every article.

Suggested API:
```ts
export const AMAZON_TAG = "kumialabs-20";

export function amazonProductUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export function amazonSearchUrl(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
```

Prefer direct ASIN links when the exact US Amazon listing is verified. Until then, use a narrowly targeted Amazon.com search URL rather than guessing an ASIN.

Create/reuse a shared commerce CTA/card that:
- clearly says Amazon.com;
- uses `target="_blank" rel="noopener noreferrer sponsored"`;
- shows **(paid link)** adjacent to the CTA;
- does not show price unless sourced through an approved Amazon API workflow;
- does not use an Amazon product image unless obtained through an approved Amazon Program Content/API workflow.

## Phase 1 — implement now

### 1. Power-Up Band × amiibo
Current commerce candidates already exist.
- Donkey Kong Bananza — ASIN `B0F66KLYVH`
  - `https://www.amazon.com/dp/B0F66KLYVH?tag=kumialabs-20`
- Super Smash Bros. Ultimate — ASIN `B01N5OKGLH`
  - `https://www.amazon.com/dp/B01N5OKGLH?tag=kumialabs-20`

Changes:
- replace current untagged URLs;
- change copy saying “not affiliate links today”;
- remove methodology text saying there is no confirmed Associates tag;
- add near-link disclosure;
- keep Switch 2 as optional/text-only unless a verified US Amazon listing is deliberately added.

### 2. KitchenAid attachments + bowls
Do not add a generic “buy a mixer” CTA. The article explicitly says an existing mixer may already be enough.

Best commerce placements:
- KSMICM Ice Cream Maker
  - `https://www.amazon.com/s?k=KitchenAid+KSMICM+Ice+Cream+Maker&tag=kumialabs-20`
- KSM2CB5BGS Bread Bowl
  - `https://www.amazon.com/s?k=KitchenAid+KSM2CB5BGS+Bread+Bowl&tag=kumialabs-20`
- KSMB60 6-quart bowl
  - `https://www.amazon.com/s?k=KitchenAid+KSMB60+6+quart+bowl&tag=kumialabs-20`

Rule: retain the exact-model warning next to each CTA. Do not imply universal bowl compatibility.

### 3. Electric toothbrush guide
Use the article’s existing named combinations, not new recommendations.

Primary affiliate candidates:
- Oral-B Pro 1000
  - `https://www.amazon.com/s?k=Oral-B+Pro+1000+electric+toothbrush&tag=kumialabs-20`
- Philips Sonicare 4100 HX3681/23
  - `https://www.amazon.com/s?k=Philips+Sonicare+4100+HX3681%2F23&tag=kumialabs-20`
- Oral-B CrossAction replacement heads
  - `https://www.amazon.com/s?k=Oral-B+CrossAction+replacement+heads&tag=kumialabs-20`
- Philips Sonicare C2 Plaque Control heads
  - `https://www.amazon.com/s?k=Philips+Sonicare+C2+Plaque+Control+heads&tag=kumialabs-20`

Keep the existing compatibility caveats:
- standard Oral-B heads are not iO heads;
- Sonicare model/configuration names can vary by retailer;
- do not claim a retailer listing is the technical source.

### 4. Home printer guide
Do not monetize all 15 printers at once. Start with one representative machine per major ownership path.

Initial candidates:
- Brother HL-L2460DW — mono laser
  - `https://www.amazon.com/s?k=Brother+HL-L2460DW&tag=kumialabs-20`
- Epson EcoTank ET-2980 — general tank
  - `https://www.amazon.com/s?k=Epson+EcoTank+ET-2980&tag=kumialabs-20`
- Canon PIXMA MegaTank G3270 — general tank alternative
  - `https://www.amazon.com/s?k=Canon+PIXMA+G3270&tag=kumialabs-20`
- Epson EcoTank Photo ET-8500 — photo path
  - `https://www.amazon.com/s?k=Epson+EcoTank+Photo+ET-8500&tag=kumialabs-20`

Keep manufacturer links as the technical/spec source. Add Amazon only as a purchase CTA.

### 5. Robot vacuum guide
The article already has many current products. Avoid turning every card into an Amazon ad. Monetize one representative product per setup first.

Initial candidates:
- iRobot Roomba 105 Vac + AutoEmpty Dock
  - `https://www.amazon.com/s?k=Roomba+105+Vac+AutoEmpty+Dock&tag=kumialabs-20`
- eufy X10 Pro Omni
  - `https://www.amazon.com/s?k=eufy+X10+Pro+Omni&tag=kumialabs-20`
- Narwal Flow
  - `https://www.amazon.com/s?k=Narwal+Flow+robot+vacuum&tag=kumialabs-20`
- Roborock Saros 10R
  - `https://www.amazon.com/s?k=Roborock+Saros+10R&tag=kumialabs-20`

Keep first-party product URLs as source links and add a separate Amazon purchase CTA.

## Phase 2 — selective monetization

### DeWalt 20V MAX × Bauer 20V
Monetize the genuine DeWalt battery only at first:
- DeWalt DCB203:
  `https://www.amazon.com/s?k=DeWalt+DCB203&tag=kumialabs-20`

Keep Bauer linked to Harbor Freight. Do not make a third-party battery adapter the main affiliate CTA because the article’s core finding is direct incompatibility and the adapter adds safety/quality uncertainty.

### Pressure washer hose + gun
Use exact model/part-number searches only where the article already verifies the fitting context:
- DEWALT DXPA25PH:
  `https://www.amazon.com/s?k=DEWALT+DXPA25PH&tag=kumialabs-20`
- Simpson replacement gun:
  `https://www.amazon.com/s?k=Simpson+pressure+washer+replacement+gun&tag=kumialabs-20`

Do not imply an accessory is compatible merely because the Amazon title says M22. Preserve the article’s M22-14/M22-15 and pressure-rating warnings.

### LEGO Train × old track
Use purchase links as examples, not proof of historical compatibility.
Initial safe search CTAs:
- `https://www.amazon.com/s?k=LEGO+City+train+set&tag=kumialabs-20`
- `https://www.amazon.com/s?k=LEGO+train+track+set&tag=kumialabs-20`

Do not push vintage 9V marketplace listings as a primary recommendation.

### LEGO × DUPLO
Use one basic current construction set from each ecosystem, ideally after confirming an exact US listing:
- `https://www.amazon.com/s?k=LEGO+Classic+brick+box&tag=kumialabs-20`
- `https://www.amazon.com/s?k=LEGO+DUPLO+Classic+brick+box&tag=kumialabs-20`

Keep article language clear that a retail set is only an easy way to try the connection; it is not evidence for the geometry/history claim.

### Desktop PC guide
Do not add affiliate links yet as a blanket rollout.
Reason:
- exact configurations, prices, and availability change quickly;
- the guide contains 15 named systems;
- stale links would reduce trust.

Revisit with a separate current-US inventory pass and use exact model/configuration links only.

## Disclosure changes

### Affiliate Disclosure page
Update it so this exact sentence is present prominently:
**As an Amazon Associate I earn from qualifying purchases.**

Retain the broader Kumia explanation about editorial independence.

Remove/adjust any statement that implies affiliate links are not currently configured once Phase 1 is live.

### Article-level disclosure
Near each group of Amazon CTAs:
> Amazon links below are paid links. Kumia Labs may earn from qualifying purchases at no extra cost to you.

The exact Amazon-required site sentence should also appear sitewide or on the disclosure page in a clearly discoverable/prominent manner.

## QA
Before deploy:
- search repo for `amazon.com` and verify every monetized link contains `tag=kumialabs-20`;
- search for obsolete phrases such as:
  - “not affiliate links today”
  - “no confirmed Amazon Associates tag”
  - “affiliate link is not yet configured”
- verify all affiliate anchors use `rel="noopener noreferrer sponsored"`;
- no Amazon prices, ratings, review counts, or scraped images;
- manufacturer/source links remain unchanged;
- npm lint/test/build all pass;
- mobile 390px and desktop 1440px visual QA;
- no horizontal overflow;
- ensure cards still read as editorial recommendations rather than an Amazon storefront.

## Deployment scope
Phase 1 should touch only:
- shared Amazon/affiliate helper or shared commerce component;
- affiliate disclosure page/component;
- Power-Up Band article/data;
- KitchenAid article;
- Electric Toothbrush article;
- Home Printer article;
- Robot Vacuum article;
- minimal shared CSS needed for disclosure/CTA consistency.

Do not refactor unrelated article layouts during this pass.
