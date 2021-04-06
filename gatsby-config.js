require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `J. Philippus Art Studio`,
    description: `We are excited to share that The Shard Studio, LLC is now J. Philippus Art Studio and Gallery, LLC!  Please stay tuned for the launch of our new logo, which is coming soon!`,
    author: `@noisytrumpet`,
    siteUrl: `https://jphilippusart.com`,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  plugins: [
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
    {
      resolve: "gatsby-source-shopify",
      options: {
        apiKey: process.env.GATSBY_SHOPIFY_ADMIN_API_KEY,
        password: process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        downloadImages: true,
      },
    },
    `@chakra-ui/gatsby-plugin`,
    "gatsby-plugin-image",
    "gatsby-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
}
