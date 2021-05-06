import * as React from "react"
import { Container, VisuallyHidden, Center, Flex } from "@chakra-ui/react"
import Link from "../../../components/link"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout/Layout"
import ProductListing from "../../../components/ProductListing/index"
import SEO from "../../../components/SEO"

import "../../../styles/product.scss"

const ProductTypeIndex = ({
  data: { products },
  pageContext: { productType },
}) => {
  return (
    <Layout>
      <SEO title={`Category: ${productType}`} />
      <VisuallyHidden as="h1">{productType}</VisuallyHidden>
      <Center m="10">
        <Flex className="product-links-flexbox" style={{ textTransform: `uppercase` }}>
            <Link className="product-link" to="/products/class" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>Classes</Link>
            <Link className="product-link" to="/products/art" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>Art</Link>
            <Link className="product-link" to="/products/jewelry" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>Jewelry</Link>
            <Link className="product-link" to="/products/" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>All Products</Link>
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
