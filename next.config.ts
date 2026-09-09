import type { NextConfig } from "next";

/* En-têtes de sécurité : HSTS, anti-clickjacking, anti-sniffing, politique de référent et de permissions.
   Pas de CSP stricte pour l'instant (scripts inline de Next et JSON-LD) ; frame-ancestors couvre le clickjacking. */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(self), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 1000,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
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
