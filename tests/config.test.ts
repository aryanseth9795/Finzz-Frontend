import { describe, expect, it } from "vitest";
import config from "@/next.config";
import { PLAY_STORE_URL } from "@/app/lib/site";

describe("next.config", () => {
  it("redirects /download to Google Play with a 307", async () => {
    const redirects = await config.redirects!();
    expect(redirects).toContainEqual({
      source: "/download",
      destination: PLAY_STORE_URL,
      permanent: false,
    });
  });

  it("keeps the videos cache header", async () => {
    const headers = await config.headers!();
    const videos = headers.find((h) => h.source === "/videos/:path*");
    expect(videos?.headers).toContainEqual({
      key: "Cache-Control",
      value: "public, max-age=86400",
    });
  });
});
