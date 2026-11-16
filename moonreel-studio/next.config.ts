import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Character reference uploads go through a server action.
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
      // Codespaces forwarded URL: the browser's Origin differs from the
      // dev server's localhost host, so Server Actions need this allowlist.
      allowedOrigins: [
        "moonreel-g47jvq9jvwqqhpwx7-3000.app.github.dev",
        "*.app.github.dev",
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
