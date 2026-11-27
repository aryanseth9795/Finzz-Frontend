import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Smoke test against a running server: SMOKE_URL (default http://localhost:3000).
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL(".", import.meta.url)) },
  },
  test: {
    environment: "node",
    include: ["tests/e2e/**/*.test.ts"],
    testTimeout: 20000,
  },
});
