import * as React from "react"
import Roll from "react-reveal/Roll"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Grid, GridItem, Heading, Text, Button, Container } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "heroMobile-banner.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 490) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "heroDesktop-banner.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }`
  );
  const images = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag="section"
      fluid={images}
      style={{ backgroundAttachment: "fixed" }}
      preserveStackingContext
    >

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
            <Heading as="h1" color="#C09559">
              Teaching <br /> Art Studio
            </Heading>
            <Text fontSize="21px">
              We are excited to share that <br /> The Shard Studio, LLC is now
            </Text>
            <Heading as="h2" fontSize="26px" color="#C09559">
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
          <Container
            w="min-content"
            mr={["2rem", "0"]}
          >
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
                    bg="#3FA7B6"
                    w={100}
                    h={100}
                    borderRadius="15px"
                    color="white"
                    _hover={{ background: "#c09559" }}
                  >
                    <Text transform="rotate(-45deg)">Book a <br /> Class</Text>
                  </Button>
                </Roll>
              </GridItem>
              <GridItem
                colStart={2}
                rowStart={1}
                d={["none", "flex"]}
              >
                <Roll top>
                  <Box
                    bg="rgba(63, 167, 182, .4)"
                    w={300}
                    h={300}
                    borderRadius="15px"
                  />
                </Roll>
              </GridItem>
              <GridItem
                colStart={2}
                rowStart={2}
                d={["none", "flex"]}
              >
                <Roll top>
                  <Box
                    bg="rgba(63, 167, 182, .4)"
                    w={150}
                    h={150}
                    borderRadius="15px"
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
