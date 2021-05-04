import * as React from "react"
import {
  Container,
  Text,
  Heading,
  useColorModeValue,
  Box,
} from "@chakra-ui/react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Hero from "../components/Hero/Hero.js"
import Testimonials from "../components/Testimonials/testimonials.js"
import Link from "../components/link"
import BlockGrid from "../components/BlockGrid/index"
import ProductListing from "../components/ProductListing"
import SEO from "../components/SEO"
import CallToAction from "../components/CallToAction/index"

const IndexPage = ({ data: products }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  const bgGray = useColorModeValue(`bgGray`, `gray.700`)
  const featuredProducts = {
    nodes: products?.shopifyCollection?.products,
  }
  return (
    <Layout>
      <SEO title="J. Philippus Art Studio & Gallery" />
      <Hero />
      <Container my={[16, 16, 16, 16]} textAlign="center">
        <Heading
          as="h2"
          fontSize="3xl"
          textAlign="center"
          fontWeight="extrabold"
          letterSpacing="tight"
          color={themeBlue}
        >
          2021 Parade of Homes
        </Heading>
        <Text
          textAlign="center"
          my={7}
          maxWidth={450}
          mx="auto"
          mt="4"
          fontSize="lg"
        >
          Featured artist of all original art in the "Rohare Custom Home" at the
          2021 San Antonio Parade of Homes
        </Text>
        <Link
          to="/news/parade-of-homes/"
          style={{ textAlign: "center" }}
          color={themeBlue}
        >
          read more
        </Link>
      </Container>
      <Box py={8} backgroundColor={bgGray}>
        <BlockGrid />
      </Box>
<<<<<<< HEAD
      <Box>
        <CallToAction />
      </Box>
      <Container px={8} maxWidth="100%">
        <ProductListing featured products={featuredProducts} />
      </Container>
=======

>>>>>>> testimonials
      <Testimonials />
    </Layout>
  )
}

export const query = graphql`
  query FeaturedProductsQuery {
    shopifyCollection(title: { eq: "Featured Products" }) {
      products {
        title
        slug: gatsbyPath(
          filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
        )
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                formats: [AUTO, WEBP, AVIF]
                quality: 90
                width: 640
              )
            }
          }
        }
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`
export default IndexPage
