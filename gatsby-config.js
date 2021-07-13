require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `J. Philippus Art Studio`,
    description: `J. Philippus Art Studio & Gallery offers Glass Art, Acrylic Pour and Resin Art classes for individuals or groups. Shop classes, gifts and original art.`,
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
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: [process.env.GATSBY_YOUTUBE_CHANNEL],
        apiKey: process.env.GATSBY_YOUTUBE_API_KEY, // Optional for public requests
        maxVideos: 50, // Defaults to 50
      },
    },
    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     // username: `jphilippusartstudio`,
    //     // instagram_id: `248164697081484`,
    //     access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
    //     // max_id: `COeOoBYMd22`
    //     //   paginate: 100,
    //     maxPosts: 100,
    //     // hashtags: true
    //   },
    // },
    "gatsby-plugin-webpack-bundle-analyser-v2",
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
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/app-icon.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-remove-fingerprints`,
    `@chakra-ui/gatsby-plugin`,
    "gatsby-plugin-image",
    "gatsby-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
}
