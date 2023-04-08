/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_URL || 'https://jppdev.vercel.app',

  changefreq: 'weekly',

  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: '/api/' }],
  },

  // ...other options
}
