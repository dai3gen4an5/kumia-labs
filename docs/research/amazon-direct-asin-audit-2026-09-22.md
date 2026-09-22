# Kumia Labs Amazon Direct-ASIN Audit — 2026-09-22

## Scope
Audit all 24 currently rendered Amazon CTAs across the 9 monetized Kumia Labs articles.

Tracking ID remains `kumialabs-20`.

Rule: convert a search link to `amazonProductUrl(asin)` only when the exact US Amazon listing could be verified with high confidence. If there is ambiguity, variant drift, conflicting identifiers, or the CTA is intentionally generic, keep the current Amazon search link.

## Existing direct links — keep as-is
1. Donkey Kong Bananza — `B0F66KLYVH`
2. Super Smash Bros. Ultimate — `B01N5OKGLH`

## High-confidence conversions to direct ASIN

### Electric toothbrush
3. Oral-B Pro 1000 — `B003UKM9CO`
4. Oral-B CrossAction replacement heads, 4-count — `B019MEPPIG`
5. Philips Sonicare 4100 HX3681/23, White — `B09LD8T445`

Keep Philips Sonicare C2 Plaque Control heads as search for now: pack/count and current Amazon variants are not sufficiently pinned down in this audit.

### Home printer
6. Brother HL-L2460DW — `B0CPL2N5H6`
7. Epson EcoTank ET-2980 — `B0F1F2XRW9`
8. Epson EcoTank Photo ET-8500 — `B08R57JK88`

Keep Canon PIXMA G3270 as search for now: North-American color/variant listings are not sufficiently pinned down in this audit.

### Robot vacuum
9. eufy X10 Pro Omni — `B0CPFBBHP4`
10. NARWAL Flow — `B0F6CWKBTN`
11. Roborock Saros 10R — `B0DHCJ571Z`

Keep iRobot Roomba 105 Vac + AutoEmpty Dock as search for now. Current third-party web indexes expose conflicting Amazon product codes for the apparently same named bundle, so do not guess.

### Tools
12. DEWALT DCB203 20V MAX 2.0Ah single battery — `B00BYKVMES`
13. SIMPSON Universal Pressure Washer Spray Gun 80148 — `B0773YTNGN`

The SIMPSON ASIN is especially strong: SIMPSON's own official 80148 product page links directly to that Amazon.com listing.

Keep DEWALT DXPA25PH replacement hose as search for now; exact US Amazon ASIN not verified confidently enough.

### LEGO
14. LEGO Classic Medium Creative Brick Box 10696 — `B00NHQFA1I`
15. LEGO DUPLO Classic Brick Box 10913 — `B08FF6BDWV`

Do not use the newer `B0G4S9R2WX` result for 10913 in this pass; current deal pages indicate that listing can represent a multi-pack/variant rather than the simple single 10913 set used by the article.

Keep the two LEGO Train CTAs as search:
- LEGO City train set
- LEGO train track set

Reason: those CTAs are intentionally generic examples. Narrowing them to one specific set would silently change the editorial meaning. The article's manufacturer cards can remain the exact historical/current evidence.

## Keep as Amazon search links
These 9 CTAs should remain exactly as search links until a later verification pass:
- KitchenAid KSMB60 6-quart bowl
- KitchenAid KSM2CB5BGS Bread Bowl
- KitchenAid KSMICM Ice Cream Maker
- Philips Sonicare C2 Plaque Control heads
- Canon PIXMA G3270
- iRobot Roomba 105 Vac + AutoEmpty Dock
- DEWALT DXPA25PH replacement hose
- LEGO City train set
- LEGO train track set

## Implementation instructions
Convert only the 13 search links listed under "High-confidence conversions" to `amazonProductUrl(asin)`.

Do not touch:
- the 2 Power-Up Band direct links;
- the 9 links marked "keep as Amazon search links";
- CTA labels, editorial copy, manufacturer/source URLs, compatibility warnings, disclosures, prices, product imagery, layouts, or CSS.

For each converted link, preserve:
- `tag=kumialabs-20` via the shared helper;
- `rel="noopener noreferrer sponsored"`;
- the visible `(paid link)` label.

## QA
After implementation:
1. Verify exactly 24 Amazon CTAs still render across the 9 monetized articles.
2. Verify exactly 15 are direct `/dp/<ASIN>?tag=kumialabs-20` links:
   - 2 pre-existing Power-Up Band direct links
   - 13 new conversions from this audit
3. Verify exactly 9 remain search links.
4. Verify zero Amazon links are missing `tag=kumialabs-20`.
5. Verify zero Amazon links are missing `sponsored` in `rel`.
6. Verify all 24 still show `(paid link)`.
7. Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`.
8. Run quick 390px and 1440px visual QA on all touched articles.
9. Stop before commit/push/deploy.

## Evidence notes
The audit used current web evidence including direct Amazon product pages where available, recent Amazon-linked deal pages, and for SIMPSON 80148 the manufacturer's own "Buy Now" Amazon link. Search links were deliberately retained where evidence was ambiguous rather than inferring an ASIN.
