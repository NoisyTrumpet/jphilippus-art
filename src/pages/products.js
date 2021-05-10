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
        subcaption="SHOP ART, CLASSES, KITS & MORE"
        body={`Explore our variety of classes, art kits and products below. Let your imagination soar by booking one of our in-studio glass art or charcuterie board classes. We also offer take-home kits for your convenience. If you are looking for the perfect gift, we offer gift cards and commissioned art for purchase.`}
      />
      <Container>
        <Center my="10" mx="0">
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
