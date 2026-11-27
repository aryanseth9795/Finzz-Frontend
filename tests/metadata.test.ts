import { describe, expect, it } from "vitest";
import { homeMetadata, siteMetadata } from "@/app/lib/metadata";

describe("siteMetadata", () => {
  it("has the base url, title and description", () => {
    expect((siteMetadata.metadataBase as URL).href).toBe("https://finzz.aryantechie.in/");
    expect(siteMetadata.title).toBe("Finzz: Expenses & IOUs with friends");
    expect(siteMetadata.description).toBe(
      "Track expenses and who owes whom with friends, plus notes and a password vault.",
    );
  });

  it("has no canonical or og url (they would be inherited by every page)", () => {
    expect(siteMetadata.alternates).toBeUndefined();
    expect(
      (siteMetadata.openGraph as Record<string, unknown>).url,
    ).toBeUndefined();
  });

  it("has open graph and twitter cards", () => {
    expect(siteMetadata.openGraph).toMatchObject({
      type: "website",
      siteName: "Finzz",
      title: "Finzz: Expenses & IOUs with friends",
      description:
        "Track expenses and who owes whom with friends, plus notes and a password vault.",
    });
    expect(siteMetadata.twitter).toMatchObject({ card: "summary_large_image" });
  });
});

describe("homeMetadata", () => {
  it("canonicalises the home page to /", () => {
    expect(homeMetadata.alternates?.canonical).toBe("/");
  });
});
