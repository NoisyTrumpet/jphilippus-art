import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"

import {
  Box,
  Grid,
  Text,
  Center,
  Container,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Gallery from "../components/Gallery/Gallery"
import Seo from "../components/SEO"
import DiamondButton from "../components/DiamondButton/DiamondButton"
import Link from "../components/link"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const AboutPage = () => {
  // Hero Image Query
  const { heroImage, commisioned } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "about-hero.jpg" }) {
          childImageSharp {
            id
            gatsbyImageData(
              width: 1200
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [WEBP, PNG]
            )
          }
        }
        commisioned: allFile(
          filter: { relativeDirectory: { eq: "commisioned" } }
        ) {
          edges {
            node {
              childImageSharp {
                id
                gatsbyImageData(
                  formats: [WEBP, PNG]
                  layout: CONSTRAINED
                  quality: 60
                  placeholder: BLURRED
                  width: 516
                )
              }
            }
          }
        }
      }
    `
  )
  // get image data
  const hero = getImage(heroImage)
  const bgGray = mode(`bgGray`, `gray.700`)

  return (
    <Layout>
      <Seo title={`About the Artist`} />
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        templateRows={["fit-content 1fr", "1fr 1fr", "repeat(1, 1fr)"]}
      >
        <GatsbyImage image={hero} alt="About Jeanne" />
        <Box
          className="bio-text"
          px={[4, 4, 4, 12]}
          py={[8, 8, 8, 12]}
          style={{ lineHeight: `25px` }}
          backgroundColor={bgGray}
        >
          <Text
            tag="h1"
            fontWeight="500"
            color={`primary`}
            textTransform="uppercase"
            fontSize="3xl"
          >
            About Jeanne
          </Text>
          <Text py="5">
            Jeanne grew up on a farm in Shiner, Texas. Inspired by her father's
            love of art, she developed her own style using leftover paint and
            items she found on the farm. In her late twenties, Jeanne lost her
            husband to cancer after only a few short years of marriage. While
            grieving, Jeanne began incorporating broken glass in her art as a
            metaphor for life. Creating art from the broken and discarded
            materials was a crucial part of her healing process. Combining
            acrylics, resins and recycled glass, Jeanne began creating unique
            art that set the stage for her future career.
          </Text>
          <Text>
            Jeanne currently lives in San Antonio, Texas where she owns J.
            Philippus Art Studio & Gallery. One of her greatest passions is her
            love of people and art. She feels blessed to teach classes and
            create abstract, contemporary and coastal art every day.
          </Text>
        </Box>
      </Grid>
      <Box
        className="quote-block"
        display="grid"
        placeItems="center"
        position="relative"
      >
        <Text
          p="10"
          color={`primary`}
          fontStyle={`italic`}
          fontSize={[`xl`, `3xl`]}
          textAlign={[`center`, `center`, `left`]}
        >
          "Creating Art From The Broken Pieces"
        </Text>
      </Box>
      <Box textAlign="end" px={4} pb={2}>
        <Link to="/gallery" color="primary">
          View Jeanne's full gallery
          <ExternalLinkIcon />
        </Link>
      </Box>
      <Gallery />
      <Box backgroundColor={bgGray}>
        <Container textAlign="center" mb={4} pt={4} pb={8}>
          <Text
            my={6}
            fontSize={`2xl`}
            color="primary"
            textTransform="uppercase"
          >
            Commisioned Art
          </Text>
          <Grid templateColumns={[`repeat(2, 1fr)`, `repeat(3, 1fr)`]} gap={4}>
            {commisioned.edges.map(({ node }) => (
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt="Comissioned Art"
                key={node.childImageSharp.id}
              />
            ))}
          </Grid>
          <Text my={6}>
            Custom original art for your home or office. Contact Jeanne to make
            your vision come to life.
          </Text>
          <Center>
            <DiamondButton to="/contact">Contact</DiamondButton>
          </Center>
        </Container>
      </Box>
    </Layout>
  )
}

export default AboutPage
