// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Infographics",
  siteUrl: `https://pandegraphics.com`,
  host: "0.0.0.0",
  titleTemplate: "%s",
  siteDescription: "Información Relacionada al COVID-19 para América Latina",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "graphics/**/*.md",
        typeName: "Graphic",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
