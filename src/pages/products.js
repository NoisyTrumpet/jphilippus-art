import * as React from "react"
import { Container, Flex, Center, useColorModeValue } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductListing from "../components/ProductListing/index"
import SEO from "../components/SEO"
import AltHero from "../components/AltHero/index"
import LinkGrid from "../components/LinkGrid"

const Products = ({ data: { products } }) => {
  const secondary = useColorModeValue(`secondary`, `secondary`)
  return (
    <Layout>
      <SEO title="All Products in J. Philippus Art Studio & Gallery" />
      {/* <VisuallyHidden as="h1">Products</VisuallyHidden> */}
      <AltHero
        title="Create Your Masterpiece"
        productType="All"
        subcaption="Beautiful 1500 Square Foot Facility Including:"
      />
      <Container>
        <Center m="10">
          <Flex
            borderBottomStyle="solid"
            borderBottomWidth="3px"
            borderColor={secondary}
            paddingBottom={4}
          >
            <LinkGrid />
          </Flex>
        </Center>
        <ProductListing products={products} />
      </Container>
    </Layout>
  )
}

export default Products

// To display all products here, remove the "filter" on the query
// filter: { productType: { in: ["Art", "Class", "Gift Cards"] } } etc.

export const query = graphql`
  {
    products: allShopifyProduct(sort: { fields: [publishedAt], order: ASC }) {
      nodes {
        ...ProductCard
      }
    }
  }
`
