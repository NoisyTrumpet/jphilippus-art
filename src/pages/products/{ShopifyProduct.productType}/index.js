import * as React from "react"
import { Container, VisuallyHidden, Center, Flex } from "@chakra-ui/react"
import Link from "../../../components/link"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout/Layout"
import ProductListing from "../../../components/ProductListing/index"
import SEO from "../../../components/SEO"

const ProductTypeIndex = ({
  data: { products },
  pageContext: { productType },
}) => {
  return (
    <Layout>
      <SEO title={`Category: ${productType}`} />
      <VisuallyHidden as="h1">{productType}</VisuallyHidden>
      <Center m="10">
        <Flex style={{ textTransform: `uppercase` }}>
          <Link to="/products/class" p="5">Classes</Link>
          <Link to="/products/art" p="5">Art</Link>
          <Link to="/products/jewelry" p="5">Jewelry</Link>
          <Link to="/products/" p="5">All Products</Link>
        </Flex>
      </Center>
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
