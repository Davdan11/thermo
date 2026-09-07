import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 1000,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "daikincomfort.com" },
      { protocol: "https", hostname: "www.daikincomfort.com" },
      { protocol: "https", hostname: "www.mitsubishicomfort.com" },
      { protocol: "https", hostname: "dw2p0k56b2hr9.cloudfront.net" },
      { protocol: "https", hostname: "www.fujitsugeneral.com" },
      { protocol: "https", hostname: "www.greecomfort.com" },
      { protocol: "https", hostname: "www.midea.com" },
      { protocol: "https", hostname: "www.lg.com" },
      { protocol: "https", hostname: "images.samsung.com" },
      { protocol: "https", hostname: "www.moovair.ca" },
      { protocol: "https", hostname: "www.moovair.com" },
      { protocol: "https", hostname: "hvacmainline.com" },
      { protocol: "https", hostname: "www.hvacmainline.com" },
      { protocol: "https", hostname: "na.panasonic.ca" },
      { protocol: "https", hostname: "www.panasonic.ca" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
