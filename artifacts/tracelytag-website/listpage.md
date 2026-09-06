# Pages built from mockups

Every page below is a dedicated component in `src/App.tsx` with a namespaced CSS block appended to `src/index.css`. All copy is transcribed verbatim from the source mockup in `public/reference/img/` — nothing shortened or reworded. Images were extracted from the mockups at 2× into `public/reference/img/*-crops/` unless noted.

**16 pages total.**

## Core

| Route | Component | CSS prefix | Images |
| --- | --- | --- | --- |
| `/` | `Home` | `.hm-` | yes |
| `/about-us` | `About` | `.abt-` | `about-hero-diagram.png`, `about-dashboard-monitor.png` |
| `/why-tracelytag` | `Why` | `.why2-` | `why-hero-full.png`, `why-hero-diagram.png`, `why-dashboard-full.png`, `why-dashboard-monitor.png` |

## Industries

| Route | Component | CSS prefix | Images (`industry-crops/`) |
| --- | --- | --- | --- |
| `/industries/agriculture-agtech` | `AgricultureAgTech` | `.agri-` | `agriculture-agtech-hero.png`, `agriculture-agtech-dashboard.png` |
| `/industries/apparel-fashion` | `ApparelFashion` | `.appa-` | `apparel-fashion-hero.png`, `apparel-fashion-dashboard.png` |
| `/industries/cosmetics-beauty` | `CosmeticsBeauty` | `.cosm-` | `cosmetics-beauty-hero.png`, `cosmetics-beauty-dashboard.png` |
| `/industries/electronics-high-tech` | `ElectronicsHighTech` | `.elec-` | `electronics-high-tech-hero.png`, `electronics-dashboard-monitor.png` |
| `/industries/fmcg-consumer-goods` | `FmcgConsumerGoods` | `.fmcg-` | `fmcg-consumer-goods-hero.png`, `fmcg-consumer-goods-dashboard.png` |
| `/industries/food-beverage` | `FoodBeverage` | `.fbev-` | `food-beverage-hero.png` (dashboard is an FMCG stand-in) |
| `/industries/pharmaceuticals` | `Pharmaceuticals` | `.phar-` | `pharmaceuticals-hero.png`, `pharmaceuticals-dashboard.png` |

## Solutions

| Route | Component | CSS prefix | Images (`solution-crops/`) |
| --- | --- | --- | --- |
| `/solutions/analytics-business-intelligence` | `AnalyticsBusinessIntelligence` | `.abi-` | `analytics-bi-hero-full.png`, `analytics-bi-dashboard.png` |
| `/solutions/anti-counterfeiting` | `AntiCounterfeiting` | `.anti-` | `anti-counterfeiting-hero-full.png`, `anti-counterfeiting-dashboard.png` |
| `/solutions/apparel-clothing` | `ApparelClothing` | `.aps-` | `apparel-clothing-hero-full.png`, `apparel-clothing-dashboard.png` |
| `/solutions/connected-packaging` | `ConnectedPackaging` | `.cpak-` | `connected-packaging-hero-full.png`, `connected-packaging-dashboard.png` |
| `/solutions/digital-warranty` | `DigitalWarranty` | `.dwar-` | see note below |
| `/solutions/premium-product-authentication` | `PremiumProductAuthentication` | `.ppa-` | `product-authentication-counterfeit-map.png` (new) + see note below |

**Digital Warranty image note:** its mockup has no artwork — both image slots render as empty placeholder rectangles in the source PNG, and the pre-existing `digital-warranty-hero.png` crop is that blank placeholder. The two slots reuse existing repo assets instead: `about-hero-diagram.png` (hero) and `about-dashboard-monitor.png` (Powerful Control Center).

**Premium Product Authentication image note:** only the Counterfeit Challenge illustration renders in its mockup (extracted as `product-authentication-counterfeit-map.png`); the hero and Enterprise Authentication Intelligence slots are blank placeholders, as is the pre-existing `premium-product-authentication-hero.png` crop. Those two reuse `anti-counterfeiting-hero-full.png` and `anti-counterfeiting-dashboard.png`.

## Notes

- Literal `/solutions/<slug>` and `/industries/<slug>` routes are registered **before** the `:slug` catch-alls (`SolutionPage`, `IndustryPage`) in the router — order matters.
- Every page is responsive: 4/3-col → 2-col at `max-width: 1023px` → 1-col at `max-width: 767px`. All verified with no horizontal overflow at 390 / 820 / 1280 px.
- Pages still falling through to the generic `SolutionPage` template: the remaining slugs in `solutionItems` (consumer engagement, customer data platform, marketing automation, product authentication, QR code generation & serialization, supply chain visibility, track & trace, verification engine, and others) — mockups for several of these exist in `public/reference/img/solution/` and `public/reference/img/platefoam/`.
- The site-wide header and footer are shared chrome and intentionally differ from the mockups (which show a `Platform / Solutions / Industries / Resources` nav and a 4-column footer).
