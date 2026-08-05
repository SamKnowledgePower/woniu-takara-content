import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/woniu-takara-content" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGitHubPages ? "/woniu-takara-content/" : "",
  images: {
    unoptimized: true,
  },
  // 給無法用 next/link 處理 basePath 的地方（例如 iframe src）手動組合用。
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
