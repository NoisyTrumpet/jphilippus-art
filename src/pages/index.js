import * as React from "react"
import {
  Container,
  Text,
  useColorModeValue,
  Box,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Hero from "../components/Hero/Hero.js"
import Testimonials from "../components/Testimonials/testimonials.js"
import Link from "../components/link"
import BlockGrid from "../components/BlockGrid/index"
import ProductListing from "../components/ProductListing"
import SEO from "../components/SEO"
import CallToAction from "../components/CallToAction/index"
import InstagramFeed from "../components/InstagramFeed/index"
import { GatsbyImage } from "gatsby-plugin-image"
import DiamondButton from "../components/DiamondButton/DiamondButton"

const IndexPage = ({ data: products, data }) => {
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
        <Text
          as="h2"
          fontSize="3xl"
          textAlign="center"
          fontWeight="semi-bold"
          letterSpacing="tight"
          color={themeBlue}
          textTransform="uppercase"
        >
          2021 Parade of Homes
        </Text>
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
          textAlign="center"
          alignItems="center"
          color={themeBlue}
          fontSize="xl"
          alt={`Read more about Jeanne Philippus, the featured artist of all original art in the "Rohare Custom Home" at the 2021 San Antonio Parade of Homes`}
        >
          read full release here <ExternalLinkIcon />
        </Link>
      </Container>
      <Box py={8} backgroundColor={bgGray}>
        <BlockGrid />
      </Box>
      <Box>
        <CallToAction />
      </Box>
      <Container px={8} maxWidth="100%">
        <ProductListing featured products={featuredProducts} />
      </Container>
      <Testimonials />
      <Container>
        <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr"]} mt={8} gap={2}>
          <GridItem position="relative" display="grid" placeItems="center">
            <Box
              display="grid"
              placeItems={`center`}
              height="100%"
              width="100%"
              paddingTop={[0, 4, 14]}
            >
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="Latest News"
                style={{ width: `100%`, gridArea: "1/1", height: "100%" }}
              />
              <Center
                className="center-grid-diamond"
                style={{
                  gridArea: "1/1",
                  position: "relative",
                }}
              >
                <DiamondButton
                  buttonStyle="btn--primary-transparent"
                  buttonSize="btn--xl"
                  to="/news/parade-of-homes/"
                >
                  Latest News
                </DiamondButton>
              </Center>
            </Box>
          </GridItem>
          <GridItem px={2}>
            <Text
              textAlign="center"
              textTransform="uppercase"
              fontWeight={500}
              color="primary"
              fontSize="2xl"
              my={4}
            >
              Let's Get Social
            </Text>
            <InstagramFeed images={data.allInstagramContent.edges} />
          </GridItem>
        </Grid>
      </Container>
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
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 90
                width: 220
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
    allInstagramContent(limit: 6) {
      edges {
        node {
          caption
          permalink
          localImage {
            childImageSharp {
              gatsbyImageData(
                width: 500
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 90
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
    file(relativePath: { eq: "news-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 569, quality: 90, layout: CONSTRAINED)
      }
    }
  }
`
export default IndexPage
