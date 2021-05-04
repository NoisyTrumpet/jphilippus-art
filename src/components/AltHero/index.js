import {
  Badge,
  Box,
  Heading,
  Grid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
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
              layout: FULL_WIDTH
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

  const bgGray = mode(`bgGray`, `gray.700`)
  const blue = mode(`primary`)
  const yellow = mode(`secondary`)

  return (
    <Box position={`relative`}>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <Box backgroundColor={bgGray} padding={8}>
          {title && (
            <Heading as="h1" color={blue} textTransform="uppercase">
              {title}
            </Heading>
          )}
          {subcaption && (
            <Text color={yellow} fontWeight="semibold">
              {subcaption}
            </Text>
          )}
          {body && <Text>{body}</Text>}
          {/* {logo && } */}
        </Box>
        <Box>
          <GatsbyImage
            image={getImgSrc()}
            alt={`${productType} | Hero Image`}
            style={{ height: `100%` }}
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default AltHero
