# SEO & discovery roadmap

_Written 2026-11-12. Covers what to build after the quick fixes (article `lastmod` in the sitemap, article → service callouts)._

## Where the site stands

- **6 service pages, 23 articles** (RO + EN), solid technical base: hreflang, localized slugs, `Organization` / `RecyclingCenter` / `Service` / `BlogPosting` / `FAQPage` JSON-LD with geo coordinates, IndexNow script, image sitemap entries.
- 13 of the 23 articles were published between 2026-09-18 and 2026-10-04, five of them on a single day. The site already has a lot of **informational** content (“how does X work”) for a local business.
- What's missing is the layer between articles and services: pages for people who are **ready to sell or book** — “cumpăr cupru Deva”, “preț fier vechi kg”, “unde vând alamă Hunedoara”.

**Conclusion:** pause new articles. More of them now gives diminishing returns and increases the risk of articles competing with each other. Build the commercial pages below, and do the off-site work. That is where rankings for a local scrap and waste business come from.

---

## 1. Look at Search Console first (half a day, no code)

Do this before building anything, because it decides the order of everything below.

1. Search Console → Performance → last 3 months, filter page contains `/articole/`.
2. Export queries. Look for:
   - **Queries with impressions but position 8–30.** These are topics Google already associates with you. Each one is a candidate for a dedicated page (section 2) or for strengthening an existing one.
   - **Queries where 2+ of your URLs appear.** That's cannibalization (section 5).
   - **Commercial queries landing on articles** (contains “preț”, “cumpăr”, “vând”, “unde”, a city name). These should land on a material page or a service page instead.
3. Filter page = each `/servicii/...` URL. Note which services get almost no impressions. Those need the internal links and the material pages most.
4. Check Indexing → Pages. Confirm all 23 articles are indexed. “Crawled – currently not indexed” on several articles is a strong signal to stop publishing and consolidate.

Repeat monthly. Keep a simple sheet: query, URL, impressions, clicks, position, month.

---

## 2. Material pages: “Ce cumpărăm” hub + one page per material (highest priority)

**Why:** These match the searches that convert (“cumpăr cupru”, “predare alamă”, “unde vând acumulatori”) and they sit between the articles and the service pages.

**Proposed URLs (RO / EN):**

| Key | RO | EN |
|---|---|---|
| `/materials` | `/ce-cumparam` | `/what-we-buy` |
| `/materials/copper` | `/ce-cumparam/cupru` | `/what-we-buy/copper` |
| `/materials/brass` | `/ce-cumparam/alama` | `/what-we-buy/brass` |
| `/materials/aluminium` | `/ce-cumparam/aluminiu` | `/what-we-buy/aluminium` |
| `/materials/aluminium-cans` | `/ce-cumparam/doze-aluminiu` | `/what-we-buy/aluminium-cans` |
| `/materials/stainless-steel` | `/ce-cumparam/inox` | `/what-we-buy/stainless-steel` |
| `/materials/lead-batteries` | `/ce-cumparam/acumulatori-plumb` | `/what-we-buy/lead-batteries` |
| `/materials/cables` | `/ce-cumparam/cabluri` | `/what-we-buy/cables` |
| `/materials/ferrous-scrap` | `/ce-cumparam/fier-vechi` | `/what-we-buy/ferrous-scrap` |

Only add materials you actually buy. Check each against the service copy in `messages/ro.ts`.

**Each page should have:**

- H1 with the material and intent, e.g. “Vindem cupru? Predare cupru la Deva / Cristur”.
- What counts as this material, with **your own photos** from the yard (original photography is a ranking asset, see `PAGE_IMAGES` in `app/sitemap.ts`).
- Grades you accept and how they're priced differently (clean vs. tinned vs. mixed copper, etc.).
- How to prepare it (strip, separate, drain), minimum quantity, pickup vs. drop-off, documents needed (link the existing article).
- Price: a link to the price page (section 3) or “call for today's price”.
- FAQ (3–5 questions, real ones from the phone). Rendered on the page, mirrored in `FAQPage` JSON-LD like the articles.
- Links: to the parent service, to 1–3 related articles, and back from those articles.
- JSON-LD: `WebPage` + `BreadcrumbList` + an `Offer`/`Service` node pointing at the existing `Service` `@id`.

**How to build it in this codebase:** follow the services pattern.
- Add the keys to `pathnames` and a `materialKeys` array in `lib/i18n/routing.ts`. The sitemap and hreflang update automatically.
- Facts (material → service, image) in a `lib/site/materials.ts`. Copy in `messages/ro.ts` + `en.ts` under `materials.items.<slug>`.
- Route: `app/[locale]/(marketing)/materials/[material]/page.tsx` + index.
- Add a “Ce cumpărăm” link to the header/footer nav and the HTML site map page.
- Add `material` (optional) to `ARTICLE_FACTS` later, so article callouts can point to the most specific page.

---

## 3. Price page: “Prețuri fier vechi și metale” (only if someone will maintain it)

**Why:** “preț fier vechi kg”, “preț cupru kg azi”, “preț aluminiu kg” are among the biggest searches in this niche in Romania. Today the site has **no prices anywhere** (0 mentions of “lei/kg”). A page with prices that people come back to also earns links and repeat visits.

**Rules:**
- Show **ranges per grade** (e.g. “Cupru curat: 28–32 lei/kg”) with a clear **“Actualizat la: <date>”**. Note that prices depend on quantity and quality.
- Update **every week or two, without exception**. A page showing month-old prices hurts trust and rankings more than having no page. If nobody owns this, skip it and put “Sună pentru prețul zilei” on the material pages instead.
- Keep prices in one data file (e.g. `lib/site/prices.ts` with `updatedAt`) so the page, the material pages and the sitemap `lastModified` all read the same date. Then send the date via `scripts/indexnow.mjs` on every update.
- JSON-LD: `WebPage` with `dateModified`. Optionally an `ItemList` of `Offer`s. Don't mark it up as `Product` with review stars.

**URL:** `/preturi-fier-vechi` / `/scrap-metal-prices`. Link it from the homepage, the metal-waste service and every material page. Link the existing articles “scrap-metal-prices-explained” and “copper-scrap-grades-and-prices” to it.

---

## 4. City pages (only with real local content)

`areaServed` already lists Deva, Hunedoara, Simeria, Călan, Orăștie, Hațeg, Brad, Petroșani.

**Build a city page only if it can contain something true and specific to that town:**
- Pickup days or response time for that town, distance from the Cristur yard, whether you place containers there.
- 1–2 real jobs done there (type of client, material, volume; no names without permission).
- A map/directions block and a local phone CTA.

**Don't** copy the same template and swap the town name. Google treats that as doorway pages and can demote the whole site.

Start with the 2–3 towns that Search Console (section 1) shows impressions for. Likely Deva and Hunedoara, which already have an article: “where-to-sell-scrap-metal-deva-hunedoara”. Decide whether that article becomes the Deva page or links to it. Don't keep both covering the same intent.

---

## 5. Merge or separate articles that compete with each other

Groups that likely target the same queries:

- **Prices:** `scrap-metal-prices-explained`, `copper-scrap-grades-and-prices`, `aluminium-cans-scrap-value`. Once the price page exists, these should explain *why* prices vary and link to it, not compete for “preț … kg”.
- **What/where to sell:** `what-you-can-sell-as-scrap-metal`, `where-to-sell-scrap-metal-deva-hunedoara`, `why-companies-sell-scrap-metal`, `documents-needed-to-sell-scrap-metal`.
- **Metal types:** `ferrous-vs-non-ferrous-waste`, `how-to-tell-copper-brass-aluminium-apart`, `aluminium-scrap-recycling`.

For each group, check Search Console. If two URLs share the same queries, either:
- **merge** them (301 the weaker into the stronger, bump `updatedAt`), or
- **give each one a different angle** in the title, H1 and intro, and link between them.

When an article is meaningfully edited, bump `updatedAt` in `lib/site/article-facts.ts`. That now feeds the sitemap `lastmod`, `dateModified` and OG `modified_time`. Never bump it for typo fixes.

---

## 6. Off-site work (as important as everything above)

For local searches (“fier vechi Deva”, “colectare deșeuri Hunedoara”), the map results are driven mainly by the Google Business Profile and reviews, not the website.

- **Google Business Profile**
  - Primary category: the most accurate one (e.g. “Centru de reciclare” / “Comerciant de fier vechi”). Add secondary categories for each service.
  - List every service and material as Products/Services, matching the site's wording.
  - Photos: yard, trucks, scale, containers, grab crane. Add new ones monthly.
  - Hours identical to the `OpeningHoursSpecification` in `lib/site/structured-data.ts`.
  - Posts: price updates, new equipment, announcements. Same rhythm as the price page.
- **Reviews:** this matters most. Ask every satisfied customer, with a short link (WhatsApp or SMS after pickup or payment) and a printed QR at the scale. Reply to every review. The `/recenzii` page can show them, but never mark up your own reviews of yourself with `AggregateRating`.
- **Directory listings (citations):** same name, address and phone everywhere: listafirme.ro, termene.ro, paginiaurii.ro, cylex.ro, Waze, Apple Maps, Bing Places. Fix any old address or phone you find.
- **Links from other sites:**
  - Local news (Deva/Hunedoara outlets): new equipment, jobs, a recycling collection event.
  - Industrial clients and partners who'd list you as their waste partner.
  - Industry and authorization registries (ANPM/APM lists of authorized operators). Make sure the listing links to the site.
  - The Chamber of Commerce (CCI Hunedoara) member directory.

---

## 7. Smaller technical items

- **IndexNow:** run `scripts/indexnow.mjs` after each deploy that adds or changes content. Consider wiring it into the deploy pipeline.
- **`lastmod` for other pages:** when material/price pages exist, give them a real `updatedAt` the same way articles have one, and add them to `lastModifiedFor` in `app/sitemap.ts`.
- **Article hero images:** articles currently use generated `MediaTile` gradients. Real photos (with descriptive alt text) on the strongest 5–10 articles would help Google Images and click-through.
- **Show “Actualizat la” on articles** when `updatedAt` ≠ `publishedAt`. The `updatedLabel` string already exists in `messages/articles-*.ts` but isn't rendered.

---

## What not to do

- Don't publish more articles just to have more URLs indexed. Indexed but low-value pages lower how Google rates the whole site.
- Don't create location or material pages that differ only by a swapped word.
- Don't fake `lastmod`/`dateModified`, and don't bump dates without content changes.
- Don't add review/rating schema for your own reviews of yourself.

## Suggested order

1. Search Console review (section 1). Note the top 20 queries and any cannibalization.
2. Google Business Profile cleanup and a review-request routine (section 6). Start now, it compounds.
3. Materials hub + the 3–4 materials with the most demand (section 2).
4. Price page, **if** someone owns updating it (section 3).
5. Merge or separate competing articles based on the data (section 5).
6. City pages for the 2–3 towns with real demand (section 4).
7. Resume articles only where Search Console shows a real gap. Roughly one or two a month is plenty.
