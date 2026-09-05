#!/usr/bin/env node
/**
 * Submits every URL in the sitemap to IndexNow.
 *
 * IndexNow is a push protocol: instead of waiting for a crawler to come round,
 * you tell it what changed. Bing and Yandex act on it within hours rather than
 * weeks. That matters here beyond Bing's own traffic share, because ChatGPT's
 * web search is served by Bing's index — being absent from Bing means being
 * uncitable by it, no matter how good the pages are.
 *
 * Google does not participate.
 *
 * Ownership is proved by hosting a file at `/<key>.txt` whose entire body is
 * the key. That file is committed under `public/`; if it is ever regenerated,
 * update INDEXNOW_KEY here to match or every submission is rejected.
 *
 * Run after a deploy that changed content:
 *   node scripts/indexnow.mjs
 *   node scripts/indexnow.mjs --dry-run
 */

const INDEXNOW_KEY = "ddc89f46572c12f76a775931e1f1997a";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ecoplasthart.com";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const dryRun = process.argv.includes("--dry-run");

const host = new URL(SITE_URL).host;

/** Pull `<loc>` values straight out of the deployed sitemap. */
async function sitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`GET ${SITE_URL}/sitemap.xml -> ${res.status}`);
  }
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

/**
 * The key file has to be reachable before submitting: IndexNow fetches it to
 * verify ownership, and a 404 there rejects the whole batch.
 */
async function assertKeyFileLive() {
  const url = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Key file not reachable: ${url} -> ${res.status}`);

  const body = (await res.text()).trim();
  if (body !== INDEXNOW_KEY) {
    throw new Error(`Key file body does not match the key (got ${JSON.stringify(body)})`);
  }
}

async function main() {
  await assertKeyFileLive();

  const urlList = await sitemapUrls();
  if (urlList.length === 0) throw new Error("Sitemap contained no <loc> entries");

  console.log(`${urlList.length} URLs from ${SITE_URL}/sitemap.xml`);
  for (const u of urlList) console.log("  " + u);

  if (dryRun) {
    console.log("\n--dry-run: nothing submitted.");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`, urlList }),
  });

  // 200 accepted, 202 accepted but key still being validated. Both are fine.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow -> ${res.status} ${await res.text()}`);
  }
  console.log(`\nSubmitted. IndexNow responded ${res.status}.`);
}

main().catch((err) => {
  console.error("IndexNow submission failed:", err.message);
  process.exitCode = 1;
});
