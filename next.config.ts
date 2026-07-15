import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: "/Moonlight-web",
        assetPrefix: "/Moonlight-web/",
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
