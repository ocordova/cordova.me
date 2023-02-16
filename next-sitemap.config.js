/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ocordova.me',
  generateRobotsTxt: true,
  generateIndexSitemap: false
}
