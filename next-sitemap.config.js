/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://dklog.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    if (path.includes("tag")) {
      return null;
    }

    const defaultConfig = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };

    if (path === "/") {
      return {
        ...defaultConfig,
        changefreq: "daily",
        priority: 1,
      };
    }

    if (path.includes("posts/")) {
      return {
        ...defaultConfig,
        changefreq: "monthly",
        priority: 0.8,
      };
    }

    return defaultConfig;
  },
};

module.exports = config;
