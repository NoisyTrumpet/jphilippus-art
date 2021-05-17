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
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        // username: `jphilippusartstudio`,
        // instagram_id: `248164697081484`,
        access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
        // max_id: `COeOoBYMd22`
        //   paginate: 100,
        // maxPosts: 1000,
        // hashtags: true
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-preload-fonts",
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: [
          "https://localhost:8000",
          "https://jphilippusart.com",
          `https://development--jphilippusart.com`,
        ],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Gill Sans"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/index.css",
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        // web: [{
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: "Staatliches",
        //     /* URL to the font CSS file with @font-face definition */
        //     file: "https://fonts.googleapis.com/css2?family=Staatliches",
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jphilippus-art`,
        short_name: `jp-art`,
        start_url: `https://jphilippusart.com`,
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
        shopifyConnections: ["collections"],
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
