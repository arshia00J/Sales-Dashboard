const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/Sales-Dashboard" : "",
  assetPrefix: isGithubPages ? "/Sales-Dashboard/" : "",
  images: { unoptimized: true }
};

module.exports = nextConfig;
