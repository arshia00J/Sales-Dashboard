const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/sales-dashboard" : "",
  assetPrefix: isGithubPages ? "/sales-dashboard/" : "",
  images: { unoptimized: true }
};

module.exports = nextConfig;
