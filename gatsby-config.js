require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `J. Philippus Art Studio`,
    description: `We are excited to share that The Shard Studio, LLC is now J. Philippus Art Studio and Gallery, LLC!  Please stay tuned for the launch of our new logo, which is coming soon!`,
    author: `@noisytrumpet`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    // Shopify API Setup
    {
      resolve: "gatsby-source-shopify-experimental",
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
        // downloadImages: true,
      },
    },
    `@chakra-ui/gatsby-plugin`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    // `gatsby-plugin-offline`, // this (optional) plugin enables Progressive Web App + Offline functionality
    "gatsby-plugin-sitemap",
  ],
}