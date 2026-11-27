import { describe, it, expect } from "vitest";
import * as site from "@/app/lib/site";

describe("site constants", () => {
  it("has exact URLs", () => {
    expect(site.SITE_URL).toBe("https://finzz.aryantechie.in");
    expect(site.PLAY_STORE_URL).toBe(
      "https://play.google.com/store/apps/details?id=com.aryanseth9795.finzz",
    );
  });
  it("drops the old download exports", () => {
    const keys = Object.keys(site);
    for (const k of ["APK_URL", "PLAY_STORE_LIVE", "DOWNLOAD_URL"]) {
      expect(keys).not.toContain(k);
    }
  });
  it("has no badge file yet", () => {
    expect(site.PLAY_BADGE_SRC).toBeNull();
  });
});
