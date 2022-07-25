/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://dklog.vercel.com',
  generateRobotsTxt: true,
};

module.exports = config;
