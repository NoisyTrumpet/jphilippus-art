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
      <SEO title="All Products in J. Philippus Art Studio & Gallery" />
      {/* <VisuallyHidden as="h1">Products</VisuallyHidden> */}
      <AltHero
        title="Create Your Masterpiece"
        productType="All"
        subcaption="Beautiful 1500 Suqare Foot Facility Including:"
      />
      <Container paddingBottom={20}>
        {/* <Center m="10">
        <Flex className="product-links-flexbox" style={{ textTransform: `uppercase` }}>
          <Link className="product-link" to="/products/class" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>Classes</Link>
          <Link className="product-link" to="/products/art" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>Art</Link>
          <Link className="product-link" to="/products/jewelry" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>Jewelry</Link>
          <Link className="product-link" to="/products/" p="5" activeStyle={{ textDecoration: `none`, borderBottom: `1.5px solid #C09559`, color: `#C09559` }}>All Products</Link>
        </Flex>
      </Center> */}
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
