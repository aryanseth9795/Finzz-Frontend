import {
  APP_NAME,
  DEVELOPER,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_URL,
} from "./site";

export function appJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    description: SITE_DESCRIPTION,
    operatingSystem: "Android",
    applicationCategory: "FinanceApplication",
    url: PLAY_STORE_URL,
    image: `${SITE_URL}/screens/ledger.png`,
    author: { "@type": "Person", name: DEVELOPER },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  };
}
