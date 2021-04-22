import * as React from "react"
import Roll from "react-reveal/Roll"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Container,
} from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"

import "./Hero.scss"

const Hero = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "heroMobile-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 490
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        desktopImage: file(relativePath: { eq: "heroDesktop-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2160
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

  const mobileImageGet = getImage(mobileImage)
  const desktopImageGet = getImage(desktopImage)
  const desk = convertToBgImage(desktopImageGet)
  const mob = convertToBgImage(mobileImageGet)

  const images = [
    mob.fluid,
    {
      ...desk.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage Tag="section" fluid={images} preserveStackingContext>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(6, 1fr)"]}
        templateRows="repeat(1, 1fr)"
        gap={2}
        py={["3rem", "5rem"]}
        px="1rem"
        h={["700px", "800px"]}
      >
        <GridItem
          colStart={[1, 5]}
          rowStart={1}
          textAlign={["center", "left"]}
          h="min-content"
        >
          <Fade top cascade>
            <Heading as="h1" className="hero-heading">
              Teaching <br /> Art Studio
            </Heading>
            <Text className="hero-text">
              We are excited to share that <br /> The Shard Studio, LLC is now
            </Text>
            <Heading className="hero-sub-heading" as="h2">
              J.Philippus Art Studio <br /> and Gallery, LLC
            </Heading>
          </Fade>
        </GridItem>

        <GridItem
          colStart={[1, 5]}
          rowStart={2}
          h="min-content"
          pos="relative"
          top={["-8rem", "-5rem"]}
        >
          <Container w="min-content" mr={["2rem", "0"]}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              transform="rotate(45deg)"
              gap={4}
              h="min-content"
              w="min-content"
            >
              <GridItem
                colStart={1}
                rowStart={1}
                d="flex"
                alignItems="flex-end"
              >
                <Roll top>
                  <Button
                    className="hero-btn"
                  >
                    <Text transform="rotate(-45deg)" style={{textTransform: `uppercase`}} >
                      Book a <br /> Class
                    </Text>
                  </Button>
                </Roll>
              </GridItem>
              <GridItem colStart={2} rowStart={1} d={["none", "flex"]}>
                <Roll top>
                  <Box
                    className="hero-deco-diamond-lg"
                  />
                </Roll>
              </GridItem>
              <GridItem colStart={2} rowStart={2} d={["none", "flex"]}>
                <Roll top>
                  <Box
                    className="hero-deco-diamond-sm"
                  />
                </Roll>
              </GridItem>
            </Grid>
          </Container>
        </GridItem>
      </Grid>
    </BackgroundImage>
  )
}

export default Hero
