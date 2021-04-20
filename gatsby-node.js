const sharp = require("sharp")
const axios = require("axios")
const path = require("path")

sharp.cache(false)
sharp.simd(false)
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-icons`,
    options: {},
  })
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const token = process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD
  const url = `https://${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/2021-04/blogs/77412401306/articles.json`

  const result = await axios({
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    method: "get",
    url: url,
  })

  if (result.status !== 200) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const blogPostTemplate = path.resolve(`src/pages/blogPage.js`)
  result.data.articles.forEach(article => {
    const path = article.handle
    createPage({
      path: `/news/${path}`,
      component: blogPostTemplate,
      context: {
        data: article,
      },
    })
  })
}
