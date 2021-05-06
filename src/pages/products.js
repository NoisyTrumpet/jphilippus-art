import * as React from "react"
import { Container, VisuallyHidden, Center, Flex } from "@chakra-ui/react"
import Link from "../components/link"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductListing from "../components/ProductListing/index"
import SEO from "../components/SEO"

const Products = ({ data: { products } }) => {
  return (
    <Layout>
      <SEO title="All Products in J. Philippus Art Studio & Gallery" />
      <VisuallyHidden as="h1">Products</VisuallyHidden>
      <Center m="10">
        <Flex style={{ textTransform: `uppercase` }}>
          <Link to="/products/class" p="5">Classes</Link>
          <Link to="/products/art" p="5">Art</Link>
          <Link to="/products/jewelry" p="5">Jewelry</Link>
          <Link to="/products/" p="5">All Products</Link>
        </Flex>
      </Center>
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
    products: allShopifyProduct(sort: { 
      fields: [publishedAt], order: ASC }) {
      nodes {
        ...ProductCard
      }
    }
  }
`
