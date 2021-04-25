import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"

import { Box, Grid, Text, Center } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutPage = () => {
  // Hero Image Query
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "about-hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  // get image data
  const hero = getImage(heroImage)

  return (
    <Layout>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        templateRows={["1fr 1fr", "1fr 1fr", "repeat(1, 1fr)"]}
      >
        <GatsbyImage image={hero} alt="About Jeanne" />
        <Box
          className="bio-text"
          px="100"
          py="75"
          style={{ lineHeight: `25px` }}
        >
          <Text
            Tag="h1"
            style={{
              color: `#3FA7B6`,
              fontSize: `25px`,
              fontWeight: `600`,
              textTransform: `uppercase`,
            }}
          >
            About Jeanne
          </Text>
          <Text py="5">
            Jeanne grew up on a farm in Shiner, Texas. Inspired by her father's
            love of art, she developed her own style using leftover paint and
            items she found on the farm. In her late twenties, Jeanne lost her
            husband to cancer after only a few short years of marriage. While
            grieving such a loss, Jeanne began incorporating broken glass in her
            art as a metaphor for life. Creating art from the broken and
            discarded materials was a crucial part of her healing process.
            Combining acrylics, resins and recycled glass, Jeanne began creating
            unique art that set the stage for her future career.
          </Text>
          <Text>
            Jeanne currently lives in San Antonio, Texas where she owns J.
            Philippus Art Studio & Gallery. One of her greatest passions is her
            love of people and art. She feels blessed to teach classes and
            create abstract, contemporary and coastal art every day.
          </Text>
        </Box>
      </Grid>
      <Center className="quote-block">
        <Text
          p="10"
          style={{ color: `#3FA7B6`, fontStyle: `italic`, fontSize: `25px` }}
        >
          "Creating Art From The Broken Pieces"
        </Text>
      </Center>
    </Layout>
  )
}

export default AboutPage
