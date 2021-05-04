import React from "React"
import {
  Badge,
  Box,
  Heading,
  Grid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AltHero = ({ title, subcaption, body, logo, imageAlt, productType }) => {
  // Art Page Image:
  const { artHero } = useStaticQuery(
    graphql`
      query {
        artHero: file(relativePath: { eq: "page-heros/art-page-hero.jpg" }) {
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

  const getImgSrc = () => {
    if (productType === "Art") {
      return getImage(artHero)
    }
  }

  return (
    <Box maxHeight={200} position={`relative`}>
      <Grid templateColumns={["repeat(2, 1fr)"]}>
        <Box>
          {title && <Heading as="h1">{title}</Heading>}
          {subcaption && <Heading as="h2">{subcaption}</Heading>}
          {body && <Text>{body}</Text>}
          {/* {logo && } */}
        </Box>
        <Box>
          <GatsbyImage image={getImgSrc()} />
        </Box>
      </Grid>
    </Box>
  )
}

export default AltHero
