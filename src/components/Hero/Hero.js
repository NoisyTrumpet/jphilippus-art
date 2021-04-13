import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Portal, Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Spacer from "../Spacer/index"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)
  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div style={{ minHeight: 1000, minWidth: 1000 }}>
        <Grid
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={2}
          style={{ height: "800px" }}
        >
          <GridItem colSpan={2} rowSpan={2} rowStart={2} colStart={4}>
            <Box bg="blue.100">This is only a test on just Hero.</Box>
          </GridItem>
        </Grid>
      </div>
    </BackgroundImage>
  )
}

export default Hero
