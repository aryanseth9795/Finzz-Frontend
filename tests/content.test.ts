import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  FEATURES,
  VIDEOS,
  FEATURED_VIDEO_ID,
  SCREENS,
  FAQ,
  PRIVACY_CARDS,
} from "@/app/lib/content";
import { appJsonLd } from "@/app/lib/structuredData";
import { PLAY_STORE_URL } from "@/app/lib/site";

const root = path.resolve(__dirname, "..");
const pub = (p: string) => path.join(root, "public", p);

describe("content", () => {
  it("has the five features in order, three points each", () => {
    expect(FEATURES.map((f) => f.id)).toEqual([
      "chats",
      "pool",
      "expenses",
      "notes",
      "vault",
    ]);
    for (const f of FEATURES) expect(f.points).toHaveLength(3);
  });
  it("has six videos, featured first", () => {
    expect(VIDEOS).toHaveLength(6);
    expect(VIDEOS[0].id).toBe(FEATURED_VIDEO_ID);
  });
  it("points at files that exist", () => {
    for (const v of VIDEOS) {
      expect(fs.existsSync(pub(`videos/${v.file}`)), v.file).toBe(true);
      expect(fs.existsSync(pub(v.poster.replace(/^\//, ""))), v.poster).toBe(true);
    }
    for (const s of Object.values(SCREENS)) {
      expect(fs.existsSync(pub(s.src.replace(/^\//, ""))), s.src).toBe(true);
    }
  });
  it("has 4 privacy cards and 7 FAQs", () => {
    expect(PRIVACY_CARDS).toHaveLength(4);
    expect(FAQ).toHaveLength(7);
    expect(FAQ[0].q).toBe("Is Finzz free?");
  });
});

describe("appJsonLd", () => {
  const ld = appJsonLd();
  it("describes the Android app", () => {
    expect(ld["@type"]).toBe("SoftwareApplication");
    expect(ld.operatingSystem).toBe("Android");
    expect(ld.applicationCategory).toBe("FinanceApplication");
    expect(ld.offers).toEqual({ "@type": "Offer", price: "0", priceCurrency: "INR" });
    expect(ld.url).toBe(PLAY_STORE_URL);
  });
  it("has no ratings or reviews", () => {
    const json = JSON.stringify(ld);
    expect(json).not.toMatch(/aggregateRating/);
    expect(json).not.toMatch(/review/i);
  });
});

function walk(dir: string, out: string[] = []): string[] {
  const skip = ["privacy", "terms", "delete-account"].map((d) => path.join(root, "app", d));
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!skip.includes(p)) walk(p, out);
    } else if (/\.tsx?$/.test(e.name)) out.push(p);
  }
  return out;
}

describe("claims guard", () => {
  const bad = [
    /\bbest\b/i,
    /#1\b/,
    /top[- ]rated/i,
    /(thousands|millions|lakhs?) of users/i,
    /\d+\s*[kK]\+?\s*users/,
    /★|⭐/,
    /\bapk\b/i,
    /aggregateRating/,
  ];
  it("finds no unproven claims under app/", () => {
    const hits: string[] = [];
    for (const f of walk(path.join(root, "app"))) {
      const t = fs.readFileSync(f, "utf8");
      for (const re of bad) if (re.test(t)) hits.push(`${path.relative(root, f)} ${re}`);
    }
    expect(hits).toEqual([]);
  });
});
