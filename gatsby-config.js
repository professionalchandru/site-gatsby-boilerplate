module.exports = {
  siteMetadata: {
    title: `title`,
    description: `description`,
    author: `@gatsbyjs`,
    siteUrl: `https://siteurl.com`,
    keywords: [
      
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://siteurl.com",
        sitemap: "https://siteurl.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: ["/"],
            disallow: [
              `/trackback/`,
              `/?s=*`,
              `/search?`,
              `/thanks`,
              `/*?*`,
              `/*?`,
            ],
          },
          {
            userAgent: "NinjaBot",
            allow: ["/"],
          },
          {
            userAgent: "Mediapartners-Google*",
            allow: ["/"],
          },
          {
            userAgent: "Googlebot-Image",
            allow: ["/"],
          },
          {
            userAgent: "Adsbot-Google",
            allow: ["/"],
          },
          {
            userAgent: "Googlebot-Mobile",
            allow: ["/"],
          },
          {
            userAgent: "HTTrack",
            disallow: ["/"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
            },
          },

          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          ""
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `site name`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
