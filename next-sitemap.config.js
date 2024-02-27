/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://cordova.me",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
