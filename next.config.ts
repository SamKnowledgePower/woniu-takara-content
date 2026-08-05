import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/woniu-takara-content" : "",
  assetPrefix: isGitHubPages ? "/woniu-takara-content/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
