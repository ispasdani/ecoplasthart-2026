# Ecoplast Hart — SEO Follow-Up Checklist

_Created 2026-11-21 after deploying technical SEO fixes, per-page static OG cards, faststart MP4 videos/posters, `/ce-cumparam/*` commercial material pages, topic-clustered related articles, `llms.txt`, and IndexNow automation._

---

## Check-in #1 — In 2–3 days (~2026-11-24): Indexing & Technical Health

Open **Google Search Console** on property `https://www.ecoplasthart.com/`:

- [ ] **Sitemap-uri → `/sitemap.xml`**
  - Status is **Succes** (not *Nu s-a putut prelua*).
  - Discovered URLs updated from **40 → 94** (47 RO + 47 EN).
  - If still 40, re-submit `sitemap.xml` once in *"Adaugă un sitemap nou"*.
- [ ] **Pagini → Indexate vs. Neindexate**
  - Confirm pages are moving into **Indexate** (especially `/`, `/servicii/*`, `/ce-cumparam/*`, `/articole/*`).
  - Click every **Neindexate** reason to verify there are no surprises:
    - *Expected / OK:* `?topic=` filtered URLs under *Exclusă de eticheta „noindex”*, or `/ro/...` under *Pagină cu redirecționare*.
    - *Investigate:* Any core page stuck in *Duplicate / Canonical* or *Eroare de server (5xx)* or *404*.
- [ ] **Inspectarea adresei URL (spot check 3 priority pages)**
  - `https://www.ecoplasthart.com/ce-cumparam`
  - `https://www.ecoplasthart.com/ce-cumparam/fier-vechi`
  - `https://www.ecoplasthart.com/ce-cumparam/cupru`
  - If still *Adresa URL nu este pe Google*, click **Solicită indexarea**.
- [ ] **IndexNow & Bing / AI Search**
  - Check **GitHub → Actions → IndexNow Sitemap Ping** ran with a green checkmark (or run `npm run seo:indexnow` locally once).
  - Confirm `https://www.ecoplasthart.com/llms.txt` loads cleanly in the browser.
- [ ] **Social Preview Smoke Test**
  - Paste one service URL, one material URL (`/ce-cumparam/cupru`), and one article URL into WhatsApp or Facebook Sharing Debugger — verify each displays its own custom Ecoplast Hart card instead of the homepage card.
- [ ] **Optional GSC Domain Property**
  - Consider also adding a **Domain property** (`ecoplasthart.com`, via DNS TXT record) so `www`, non-`www`, `http`, and `https` can be monitored together.

---

## Check-in #2 — In 1–2 weeks (~2026-12-01 to 2026-12-05): Local SEO & Off-Site Authority

These off-site actions are the biggest ranking lever for local searches (*fier vechi Deva*, *colectare deșeuri Hunedoara*):

- [ ] **Google Business Profile (Cristur / Deva yard)**
  - Website URL set to `https://www.ecoplasthart.com`.
  - Primary category: *Centru de reciclare* / *Comerciant de fier vechi* + secondary categories for services.
  - Exact matching NAP & hours: `Șos. Hunedoarei nr. 13, Sat Cristur, Deva, jud. Hunedoara` · `+40 740 072 256` · `L–V 08:00–17:00, S 08:00–13:00`.
  - Add 5–10 real photos of the yard, truck scale, grab crane, containers, and cable line.
  - Set up a review routine: printed QR code at the scale + short WhatsApp review link sent after pickups. Reply to every review.
- [ ] **Romanian Directory Citations (NAP consistency + link to `https://www.ecoplasthart.com`)**
  - Check/update: `listafirme.ro`, `termene.ro`, `paginiaurii.ro`, `colectaredeseuri.ro`, `fier-vechi.com`, ANPM/APM Hunedoara operator lists, CCI Hunedoara.
- [ ] **Save Verified External Profile URLs for `Organization.sameAs`**
  - Collect your real, verified URLs (Google Business Profile / Maps link, Facebook / LinkedIn if active) and add them to `sameAs` in `lib/site/structured-data.ts`.
- [ ] **Real Yard Photos for Website (Phase 2.3)**
  - Collect original photos for the remaining 4 service pages (`waste-collection`, `recycling-recovery`, `cable-processing`, `logistics`) and material pages (`copper`, `aluminium`, `brass`, `cables`) to replace placeholder gradients and expand `PAGE_IMAGES` in `app/sitemap.ts`.

---

## Check-in #3 — In 3–4 weeks (~2026-12-15 to 2026-12-21): GSC Query Audit & Phase 4 Decisions

Open **Google Search Console → Performanță** (last 28 days) and export queries:

- [ ] **Quick Ranking Wins (Positions 8–30)**
  - List queries with impressions in positions 8–30 — tighten titles, headings, FAQs, and internal links on the pages already getting impressions for them.
- [ ] **Commercial Intent Check**
  - Check whether searches with *preț*, *cumpăr*, *vând*, *Deva*, *Hunedoara* are landing on `/ce-cumparam/*` or still landing on `/articole/*`.
- [ ] **Cannibalization Check**
  - Look for queries where 2+ Ecoplast Hart URLs appear (especially across the metal-price, what/where-to-sell, and metal-types article groups). Decide whether to merge weaker articles (with 301 redirects in `next.config.ts`) or further differentiate angles.
- [ ] **Next Build Decisions (Data-Driven)**
  - **Indicative Price Page (`/preturi-fier-vechi`):** build *only* if someone commits to updating `lei/kg` ranges every 1–2 weeks.
  - **Local City Pages (2–3 towns, e.g. Deva, Hunedoara, Simeria):** build *only* for towns showing real GSC demand, using genuine local details (distance from Cristur yard, pickup schedule, container availability, anonymized job examples — never duplicated templates).
  - **Additional Material Pages:** if GSC shows strong demand for *inox*, *doze aluminiu*, *DEEE*, or *uleiuri uzate*, add dedicated `/ce-cumparam/*` pages using the existing pattern in `lib/site/materials.ts`.
