/**
 * Smoke test for the redesigned site (T-030), run against a live server:
 *   npm run build; npm start   (then, in another shell)   npm run smoke
 * Set SMOKE_URL to check a deployed host. Expected values are literal copies
 * of the design (Agent/2026-11-27-website-redesign-design.md), on purpose:
 * this test checks the site against the spec, not against its own code.
 */
import { beforeAll, describe, expect, it } from "vitest";

const BASE = (process.env.SMOKE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const SITE_URL = "https://finzz.aryantechie.in";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.aryanseth9795.finzz";
const SUPPORT_EMAIL = "official.aryan9795@gmail.com";

const FEATURE_TITLES = [
  "A ledger for every friend",
  "Shared money for groups",
  "Know where your money went",
  "Notes you can share",
  "Passwords that stay on your phone",
];
const VIDEO_FILES = [
  "finzz-promo-9x16.mp4",
  "finzz-story-hindi-9x16.mp4",
  "finzz-v1-friends-pools-9x16.mp4",
  "finzz-v2-expenses-9x16.mp4",
  "finzz-v3-vault-notes-9x16.mp4",
  "finzz-teaser-9x16.mp4",
];

const count = (haystack: string, needle: string) => haystack.split(needle).length - 1;

describe("home page", () => {
  let html = "";
  let status = 0;

  beforeAll(async () => {
    const res = await fetch(`${BASE}/`);
    status = res.status;
    html = await res.text();
  });

  it("responds 200 with the hero headline", () => {
    expect(status).toBe(200);
    expect(html).toContain("Money between friends");
  });

  it.each(FEATURE_TITLES)("shows the feature row %s", (title) => {
    expect(html).toContain(title);
  });

  it.each(["how-it-works", "features", "videos", "faq"])(
    "links to the #%s section",
    (id) => {
      expect(html.includes(`href="#${id}"`) || html.includes(`href="/#${id}"`)).toBe(true);
    },
  );

  it("has seven FAQ entries as <details>", () => {
    expect(count(html, "<details")).toBe(7);
  });

  it("lists all six videos, none preloaded", () => {
    for (const file of VIDEO_FILES) expect(html).toContain(file);
    expect(count(html, 'preload="none"')).toBe(6);
  });

  it("links to the Play listing at least three times", () => {
    expect(count(html, `href="${PLAY_STORE_URL}"`)).toBeGreaterThanOrEqual(3);
  });

  it("has app structured data and a canonical on the site host", () => {
    expect(html).toContain("application/ld+json");
    expect(html).toContain(`<link rel="canonical" href="${SITE_URL}`);
  });

  it("never hides content in the server HTML", () => {
    expect(html).not.toMatch(/opacity:\s*0(?![.\d])/);
  });

  it("makes no APK or unproven claims", () => {
    expect(html).not.toMatch(/\bapk\b/i);
    expect(html).not.toMatch(/thousands|★|⭐/);
  });

  it("serves a share image under the site host", async () => {
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    expect(match, "og:image meta tag").not.toBeNull();
    const ogUrl = match![1].replace(/&amp;/g, "&");
    expect(ogUrl.startsWith(`${SITE_URL}/`)).toBe(true);
    const res = await fetch(`${BASE}${ogUrl.slice(SITE_URL.length)}`);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("image/png");
  });
});

describe("pages the App and Play Console link to", () => {
  it.each(["/privacy", "/terms", "/delete-account"])("%s responds 200 with the support address", async (path) => {
    const res = await fetch(`${BASE}${path}`);
    expect(res.status).toBe(200);
    expect(await res.text()).toContain(SUPPORT_EMAIL);
  });

  it("/download redirects (307) to the Play listing", async () => {
    const res = await fetch(`${BASE}/download`, { redirect: "manual" });
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(PLAY_STORE_URL);
  });

  it("streams videos with range requests and a day of caching", async () => {
    const res = await fetch(`${BASE}/videos/finzz-promo-9x16.mp4`, {
      headers: { Range: "bytes=0-99" },
    });
    expect(res.status).toBe(206);
    expect(res.headers.get("content-type")).toContain("video/mp4");
    expect(res.headers.get("cache-control") ?? "").toContain("max-age=86400");
    await res.arrayBuffer();
  });
});

describe("search and icons", () => {
  it("robots.txt points at the sitemap", async () => {
    const res = await fetch(`${BASE}/robots.txt`);
    expect(res.status).toBe(200);
    expect(await res.text()).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });

  it("sitemap.xml lists four pages", async () => {
    const res = await fetch(`${BASE}/sitemap.xml`);
    expect(res.status).toBe(200);
    expect(count(await res.text(), "<loc>")).toBe(4);
  });

  it.each(["/icon.png", "/favicon.ico"])("%s responds 200", async (path) => {
    const res = await fetch(`${BASE}${path}`);
    expect(res.status).toBe(200);
  });
});
