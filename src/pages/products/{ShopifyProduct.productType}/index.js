import * as React from "react"
import { Container, VisuallyHidden } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout/Layout"
import ProductListing from "../../../components/ProductListing/index"
import SEO from "../../../components/SEO"
import AltHero from "../../../components/AltHero"

const ProductTypeIndex = ({
  data: { products },
  pageContext: { productType },
}) => {
  return (
    <Layout>
      <SEO title={`Category: ${productType}`} />
      <VisuallyHidden as="h1">{productType}</VisuallyHidden>
      <AltHero
        title={productType}
        productType={productType}
        subcaption="Lorem Ipsum"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
      />
      <Container py={20}>
        <ProductListing products={products} />
      </Container>
    </Layout>
  )
}

export default ProductTypeIndex

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: [publishedAt], order: ASC }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
