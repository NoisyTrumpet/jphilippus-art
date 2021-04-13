const sharp = require("sharp")

sharp.cache(false)
sharp.simd(false)
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-icons`,
    options: {},
  })
}
