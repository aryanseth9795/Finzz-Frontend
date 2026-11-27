import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    SITE_URL,
    `${SITE_URL}/privacy`,
    `${SITE_URL}/terms`,
    `${SITE_URL}/delete-account`,
  ].map((url) => ({ url }));
}
