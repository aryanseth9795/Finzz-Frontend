import { describe, expect, it } from "vitest";
import { siteMetadata } from "@/app/lib/metadata";

describe("siteMetadata", () => {
  it("has the base url, title and description", () => {
    expect((siteMetadata.metadataBase as URL).href).toBe("https://finzz.aryantechie.in/");
    expect(siteMetadata.title).toBe("Finzz: Expenses & IOUs with friends");
    expect(siteMetadata.description).toBe(
      "Track expenses and who owes whom with friends, plus notes and a password vault.",
    );
  });

  it("has a canonical of /", () => {
    expect(siteMetadata.alternates?.canonical).toBe("/");
  });

  it("has open graph and twitter cards", () => {
    expect(siteMetadata.openGraph).toMatchObject({
      type: "website",
      siteName: "Finzz",
      url: "/",
      title: "Finzz: Expenses & IOUs with friends",
      description:
        "Track expenses and who owes whom with friends, plus notes and a password vault.",
    });
    expect(siteMetadata.twitter).toMatchObject({ card: "summary_large_image" });
  });
});
