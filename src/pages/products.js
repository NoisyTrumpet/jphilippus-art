import * as React from "react"
import { Container, VisuallyHidden } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductListing from "../components/ProductListing/index"
import SEO from "../components/SEO"

const Products = ({ data: { products } }) => {
  return (
    <Layout>
      <SEO title="All Products in J. Philippus Art Studio & Gallery" />
      <VisuallyHidden as="h1">Products</VisuallyHidden>
      <Container py={20}>
        <ProductListing products={products} />
      </Container>
    </Layout>
  )
}

export default Products

// To display all products here, remove the "filter" on the query

export const query = graphql`
  {
    products: allShopifyProduct(
      filter: { productType: { in: ["art", "class", "gift-card"] } }
      sort: { fields: [publishedAt], order: ASC }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
