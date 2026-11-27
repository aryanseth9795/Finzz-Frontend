import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/app/lib/site";

// Root layout metadata: inherited by every page, so no canonical or og:url here.
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Finzz",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
};

// Exported from app/page.tsx only.
export const homeMetadata: Metadata = {
  alternates: { canonical: "/" },
};
