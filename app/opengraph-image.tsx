import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DEVELOPER, TAGLINE } from "@/app/lib/site";

export const alt = "Finzz: Expenses & IOUs with friends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PILLS = [
  "Friend ledgers",
  "Pools",
  "Expenses",
  "Notes",
  "Private vault",
];

export default async function Image() {
  const svg = await readFile(join(process.cwd(), "public", "logo-a.svg"));
  const logo = `data:image/svg+xml;base64,${svg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #4338CA 0%, #3B4FD8 45%, #2563EB 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            width={150}
            height={150}
            alt=""
            style={{ borderRadius: 34 }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 136,
              fontWeight: 700,
              marginLeft: 36,
            }}
          >
            Finzz
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 52, marginTop: 28 }}>
          {TAGLINE}
        </div>
        <div style={{ display: "flex", marginTop: 44 }}>
          {PILLS.map((p) => (
            <div
              key={p}
              style={{
                display: "flex",
                fontSize: 28,
                padding: "10px 24px",
                marginRight: 16,
                borderRadius: 999,
                background: "rgba(255,255,255,0.18)",
              }}
            >
              {p}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 48,
            color: "#34D399",
          }}
        >
          Developed by {DEVELOPER}
        </div>
      </div>
    ),
    { ...size },
  );
}
