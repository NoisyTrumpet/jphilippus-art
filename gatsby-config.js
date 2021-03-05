module.exports = {
  siteMetadata: {
    title: `J. Philippus Art Studio`,
    description: `We are excited to share that The Shard Studio, LLC is now J. Philippus Art Studio and Gallery, LLC!  Please stay tuned for the launch of our new logo, which is coming soon!`,
    author: `@noisytrumpet`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jphilippus-art`,
        short_name: `jp-art`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`, // Gatsby Cloud Hosting?
    `gatsby-plugin-offline`, // this (optional) plugin enables Progressive Web App + Offline functionality
    "gatsby-plugin-sitemap", // Site Map Plugin
  ],
}
