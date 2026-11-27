import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/app/lib/site";

describe("robots", () => {
  it("allows everything and points at the sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://finzz.aryantechie.in/sitemap.xml",
    });
  });
});

describe("sitemap", () => {
  it("lists the home page and the three legal pages", () => {
    expect(sitemap().map((e) => e.url)).toEqual([
      SITE_URL,
      SITE_URL + "/privacy",
      SITE_URL + "/terms",
      SITE_URL + "/delete-account",
    ]);
  });
});
