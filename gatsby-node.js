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

const getPolicyData = async () => {
  const token = process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD
  const url = `https://${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/2021-04/policies.json`
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    method: "get",
  })
}

const getBlogData = async () => {
  const token = process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD
  const url = `https://${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/2021-04/blogs/77412401306/articles.json`
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    method: "get",
  })
}

exports.createPages = async ({ actions: { createPage } }) => {
  const result = await getBlogData()
  const policies = await getPolicyData()

  policies.data.policies.map(policy => {
    createPage({
      path: `/${policy.handle}`,
      component: require.resolve("./src/pages/policy.js"),
      context: {
        policy: policy,
      },
    })
  })

  const articles = result.data.articles

  createPage({
    path: `/news`,
    component: require.resolve("./src/templates/news.js"),
    context: {
      articles: articles,
    },
  })

  // Create a page that lists all articles.
  articles.map(article => {
    createPage({
      path: `/news/${article.handle}`,
      component: require.resolve("./src/pages/blogPage.js"),
      context: {
        article: article,
      },
    })
  })
  // Create Pages for Policies
}
