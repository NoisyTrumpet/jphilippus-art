import * as React from "react"
import { Container, VisuallyHidden } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductListing from "../components/ProductListing/index"
import SEO from "../components/SEO"
import AltHero from "../components/AltHero/index"

const Products = ({ data: { products } }) => {
  return (
    <Layout>
      <SEO title="All Products in J. Philippus Art Studio & Gallery"  />
      {/* <VisuallyHidden as="h1">Products</VisuallyHidden> */}
      <AltHero title="Create Your Masterpiece" productType="All" subcaption="Beautiful 1500 Suqare Foot Facility Including:"/>
      <Container paddingBottom={20}>
        <ProductListing products={products} />
      </Container>
    </Layout>
  )
}

export default Products

// To display all products here, remove the "filter" on the query
// filter: { productType: { in: ["Art", "Class", "Gift Cards"] } }

export const query = graphql`
  {
    products: allShopifyProduct(sort: { fields: [publishedAt], order: ASC }) {
      nodes {
        ...ProductCard
      }
    }
  }
`
