// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://speechavenues.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Not needed for this site at this point
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      //   { userAgent: "*", disallow: "/forms" },
      //   { userAgent: "*", disallow: "/gallery" },
    ],
  },
};

module.exports = config;
