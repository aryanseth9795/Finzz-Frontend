import type { NextConfig } from "next";
import { DOWNLOAD_PATH, PLAY_STORE_URL } from "./app/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: DOWNLOAD_PATH, destination: PLAY_STORE_URL, permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
