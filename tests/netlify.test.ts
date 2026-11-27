import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Netlify serves files in public/ straight from its CDN and ignores the
 * headers() rule in next.config.ts for them, so the live videos came back
 * with "max-age=0, must-revalidate". The cache rule has to live in
 * netlify.toml as well.
 */
const tomlPath = join(__dirname, "..", "netlify.toml");

/** The [[headers]] blocks as { for, values } pairs (a tiny reader for this file's shape). */
function headerRules(toml: string): { for: string; values: Record<string, string> }[] {
  return toml
    .split(/^\[\[headers\]\]\s*$/m)
    .slice(1)
    .map((block) => {
      const target = block.match(/^\s*for\s*=\s*"([^"]+)"/m)?.[1] ?? "";
      const valuesPart = block.split(/^\s*\[headers\.values\]\s*$/m)[1] ?? "";
      const values: Record<string, string> = {};
      for (const m of valuesPart.matchAll(/^\s*([A-Za-z-]+)\s*=\s*"([^"]*)"/gm)) {
        values[m[1]] = m[2];
      }
      return { for: target, values };
    });
}

describe("netlify.toml", () => {
  it("exists", () => {
    expect(existsSync(tomlPath)).toBe(true);
  });

  it("caches the App's videos and posters for a day", () => {
    const rules = headerRules(readFileSync(tomlPath, "utf8"));
    const videos = rules.find((r) => r.for === "/videos/*");
    expect(videos?.values["Cache-Control"]).toBe("public, max-age=86400");
  });

  it("sets no build settings, so Netlify's UI settings stay in charge", () => {
    expect(readFileSync(tomlPath, "utf8")).not.toMatch(/^\s*\[build\]/m);
  });
});
