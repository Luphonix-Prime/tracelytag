# Pages built from mockups

Every page below is a dedicated component in `src/App.tsx` with a namespaced CSS block appended to `src/index.css`. All copy is transcribed verbatim from the source mockup in `public/reference/img/` — nothing shortened or reworded. Images were extracted from the mockups at 2× into `public/reference/img/*-crops/` unless noted.

**25 pages total.**

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
| `/solutions/analytics-business-intelligence` | `AnalyticsBusinessIntelligence` + `AnalyticsMergedSections` | `.abi-`, `.abi2-` | `analytics-bi-hero-full.png`, `analytics-bi-dashboard.png`, `analytics-dashboard-hero-full.png`, `analytics-insights-hero-full.png`, `analytics-enterprise-monitor.png`, `analytics-boardroom-suite.png` |
| `/solutions/anti-counterfeiting` | `AntiCounterfeiting` | `.anti-` | `anti-counterfeiting-hero-full.png`, `anti-counterfeiting-dashboard.png` |
| `/solutions/apparel-clothing` | `ApparelClothing` | `.aps-` | `apparel-clothing-hero-full.png`, `apparel-clothing-dashboard.png` |
| `/solutions/connected-packaging` | `ConnectedPackaging` | `.cpak-` | `connected-packaging-hero-full.png`, `connected-packaging-dashboard.png` |
| `/solutions/customer-data-platform` | `CustomerDataPlatform` | `.cdp-` | `cdp-hero-full.png`, `cdp-workspace.png`, `consumer-engagement-hero-full.png`, `consumer-engagement-dashboard.png` (all new) |
| `/solutions/digital-warranty` | `DigitalWarranty` | `.dwar-` | see note below |
| `/solutions/premium-product-authentication` | `PremiumProductAuthentication` | `.ppa-` | `product-authentication-counterfeit-map.png` (new) + see note below |
| `/solutions/supply-chain-visibility` | `SupplyChainVisibility` | `.scv-` | `supply-chain-visibility-hero-full.png`, `supply-chain-visibility-dashboard.png` |
| `/solutions/track-and-trace` | `TrackAndTrace` | `.tnt-` | `track-and-trace-hero-full.png`, `track-and-trace-dashboard.png` |
| `/solutions/verification-engine` | `VerificationEngine` | `.vfe-` | `verification-engine-hero-full.png`, `verification-engine-dashboard.png` |

**Analytics merge note:** this page merges three mockups — Analytics & Business Intelligence Solution Page (the original build, unchanged) plus Analytics Dashboard Solution Page and Analytics Dashboard Solution Page (1), appended as `AnalyticsMergedSections` before the closing CTA. The two dashboard mockups share section titles but carry different body copy, so both variants are rendered rather than deduplicated: 4+4 capability cards, both Enterprise Analytics checklists, both Intelligence Workflow subtitles, Advanced Analytics Capabilities *and* Advanced Features (6 cards each), and both Strategic Business Impact treatments (6-item grid + bento). `/solutions/analytics-dashboard` and `/solutions/analytics-dashboard-insights` were removed from `solutionItems` and `solutionPageData` and now redirect here. Two strings say "TraceLogic" rather than TracelyTag — kept verbatim as the mockups have them.

**Customer Data Platform merge note:** this page merges two mockups — Customer Data Platform Solution Page and Consumer Engagement Solution Page — with no content dropped from either. The CDP hero leads; the Consumer Engagement hero follows as a second banner, and the two sets of sections interleave (silos + Why Consumer Engagement, data lifecycle + How Consumer Engagement Works, core capabilities + advanced features, workspace/outcomes + quantifiable benefits + engagement dashboard), closing with both CTAs. `/solutions/consumer-engagement` was removed from `solutionItems` and `solutionPageData` and now 301-style redirects to this page via a `<Redirect>` route.

**Digital Warranty image note:** its mockup has no artwork — both image slots render as empty placeholder rectangles in the source PNG, and the pre-existing `digital-warranty-hero.png` crop is that blank placeholder. The two slots reuse existing repo assets instead: `about-hero-diagram.png` (hero) and `about-dashboard-monitor.png` (Powerful Control Center).

**Premium Product Authentication image note:** only the Counterfeit Challenge illustration renders in its mockup (extracted as `product-authentication-counterfeit-map.png`); the hero and Enterprise Authentication Intelligence slots are blank placeholders, as is the pre-existing `premium-product-authentication-hero.png` crop. Those two reuse `anti-counterfeiting-hero-full.png` and `anti-counterfeiting-dashboard.png`.

## Platform

| Route | Component | CSS prefix | Images (`solution-crops/`) |
| --- | --- | --- | --- |
| `/platform/case-pallet-aggregation` | `CasePalletAggregation` | `.aggr-` | `aggregation-hero-full.png`, `aggregation-control-center.png` |
| `/platform/gs1-standards-compliance` | `Gs1StandardsCompliance` | `.gs1-` | `gs1-compliance-hero-full.png`, `gs1-compliance-dashboard.png` |
| `/platform/loyalty-programs` | `LoyaltyPrograms` | `.loy-` | see note below |
| `/platform/mobile-verification` | `MobileVerification` | `.mvf-` | see note below |
| `/platform/Refined-Product-Authentication` | `RefinedProductAuthentication` | `.rpa-` | see note below |

**Refined Product Authentication note:** built from `platefoam/Refined Product Authentication Solution.png`, whose copy is word-for-word identical to the Premium Product Authentication v2 mockup already implemented at `/solutions/premium-product-authentication`. The only structural difference is the workflow, which uses STEP 01–STEP 06 eyebrow labels here instead of numbered circles. Its own image slots are the same blank placeholders as v2 (hero and Enterprise Authentication Intelligence), and its Counterfeit Challenge illustration has the mockup's overflowing page heading baked into the artwork, so all three slots reuse the existing crops: `anti-counterfeiting-hero-full.png`, `product-authentication-counterfeit-map.png` and `anti-counterfeiting-dashboard.png`.

**Mobile Verification image note:** its mockup ships no artwork either — the hero slot is an empty rounded bar and the Actionable Intelligence slot is empty browser chrome. The two slots reuse `verification-engine-hero-full.png` and `verification-engine-dashboard.png`, whose subject matter (QR scan into a cloud verification engine, and a verification intelligence console) matches this page's copy.

**Loyalty Programs image note:** its mockup ships no artwork — both image slots (hero and Command Center for Customer Engagement) render as empty rounded placeholder bars in the source PNG. The two slots reuse the closest existing crops instead: `consumer-engagement-hero-full.png` (a consumer scanning a product QR out to offers, registration and feedback) and `consumer-engagement-dashboard.png` (scan volume, engagement rate, campaign performance and a geographic heatmap).

## Notes

- Literal `/solutions/<slug>` and `/industries/<slug>` routes are registered **before** the `:slug` catch-alls (`SolutionPage`, `IndustryPage`) in the router — order matters.
- Every page is responsive: 4/3-col → 2-col at `max-width: 1023px` → 1-col at `max-width: 767px`. All verified with no horizontal overflow at 390 / 820 / 1280 px.
- Pages still falling through to the generic `SolutionPage` template: the remaining slugs in `solutionItems` (consumer engagement, customer data platform, marketing automation, product authentication, QR code generation & serialization, supply chain visibility, track & trace, verification engine, and others) — mockups for several of these exist in `public/reference/img/solution/` and `public/reference/img/platefoam/`.
- The site-wide header and footer are shared chrome and intentionally differ from the mockups (which show a `Platform / Solutions / Industries / Resources` nav and a 4-column footer).
