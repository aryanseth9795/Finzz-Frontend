import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = join(__dirname, "..");
const at = (...p: string[]) => join(root, ...p);

/** Width and height from a PNG's IHDR chunk (bytes 16-23, big-endian). */
function pngSize(path: string): { width: number; height: number } {
  const buf = readFileSync(path);
  expect(buf.subarray(1, 4).toString("ascii")).toBe("PNG");
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

const SCREENS = ["chats", "ledger", "report", "expenses", "analytics", "notes", "pools", "vault"];
const POSTERS = ["promo", "teaser", "friends-pools", "expenses", "vault-notes", "story-hindi"];

describe("static assets (T-030 Task 1)", () => {
  it.each(SCREENS)("screens/%s.png is a 716x1590 phone-only crop", (name) => {
    const file = at("public", "screens", `${name}.png`);
    expect(existsSync(file)).toBe(true);
    expect(pngSize(file)).toEqual({ width: 716, height: 1590 });
  });

  it.each(POSTERS)("videos/posters/%s.jpg exists", (name) => {
    expect(existsSync(at("public", "videos", "posters", `${name}.jpg`))).toBe(true);
  });

  it("has logo A and the Play QR code as SVG", () => {
    expect(readFileSync(at("public", "logo-a.svg"), "utf8")).toContain("<svg");
    expect(readFileSync(at("public", "qr-play.svg"), "utf8")).toContain("<svg");
  });

  it("has app icons from logo A", () => {
    expect(pngSize(at("app", "icon.png"))).toEqual({ width: 512, height: 512 });
    expect(pngSize(at("app", "apple-icon.png"))).toEqual({ width: 180, height: 180 });
    expect(existsSync(at("app", "favicon.ico"))).toBe(true);
  });
});
