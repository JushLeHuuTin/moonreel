import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Character reference uploads go through a server action.
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
      // Codespaces: the tunnel forwards the public host in
      // x-forwarded-host but rewrites Origin to localhost:3000, so the
      // allowlist must match the ORIGIN (localhost:3000), not the tunnel.
      allowedOrigins: [
        "moonreel-g47jvq9jvwqqhpwx7-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
  // pg-boss and pg are server-only Node packages.
  serverExternalPackages: ["pg-boss", "pg"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
