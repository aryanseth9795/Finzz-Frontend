import { appJsonLd } from "@/app/lib/structuredData";

export default function AppJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(appJsonLd()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
