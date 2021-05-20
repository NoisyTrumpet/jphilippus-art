import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import { Box, Grid, GridItem, Text, Container } from "@chakra-ui/react"
import DiamondButton from "../DiamondButton/DiamondButton"
import "./Hero.scss"

const Hero = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "heroMobile-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 490
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        desktopImage: file(relativePath: { eq: "heroDesktop-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1800
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  )

  const mobileImageGet = getImage(mobileImage)
  const desktopImageGet = getImage(desktopImage)
  const images = withArtDirection(desktopImageGet, [
    {
      media: "(max-width: 1024px)",
      image: mobileImageGet,
    },
  ])

  return (
    <Box as="section" display="grid">
      <GatsbyImage
        image={images}
        alt="hero image"
        style={{ gridArea: "1/1", objectPosition: "top" }}
        className="hero-image"
      />

      <Box
        style={{
          gridArea: "1/1",
          position: "relative",
        }}
      >
        <Grid
          templateColumns={[
            "1fr",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(6, 1fr)",
          ]}
          templateRows={["1fr", "1fr", "repeat(1, 1fr)"]}
          gap={4}
          py={["1.5rem", "5rem"]}
          px={[0, "1rem"]}
          h={["600px", "800px"]}
          overflow="hidden"
          zIndex={4}
        >
          <GridItem
            colStart={[1, 1, 2, 2, 5]}
            rowStart={1}
            textAlign={["center", "center", "left"]}
            h="min-content"
            w={["100%", "fit-content"]}
            mr={[0, "auto", "auto", "auto"]}
            ml={[0, "auto"]}
            zIndex={4}
          >

              <Text
                as="h1"
                color="secondary"
                textTransform="uppercase"
                fontSize={["3xl", "4xl"]}
                fontWeight={500}
                lineHeight={10}
                maxWidth={[`none`, `none`, 300]}
                mb={{ sm: 2, md: 4 }}
              >
                Teaching Art Studio
              </Text>

            <Text fontSize="21px" color="color">
              We are excited to share that <br />
              The Shard Studio, LLC is now
            </Text>
            <Text
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              color="secondary"
              marginTop={[1, 4]}
              maxWidth={[`none`, `none`, 350]}
              lineHeight={10}
            >
              J.Philippus Art Studio and Gallery, LLC
            </Text>
          </GridItem>

          <GridItem
            className="btn-grid-wrapper"
            colStart={[1, 1, 2, 2, 5]}
            rowStart={2}
            h="min-content"
            pos="relative"
            top={["-15.5rem", "-8rem", "-8rem", "-2rem", "-5rem"]}
            right={["-7.5rem", "0"]}
          >
            <Container
              // w="min-content"
              display="grid"
              placeItems="center"
              pt={[300, 0]}
              // mr={["2rem", "2rem", "8rem", "8rem", "0"]}
            >
              <Grid
                templateColumns={["1fr", "repeat(2, 1fr)"]}
                templateRows={["1fr", "repeat(2, 1fr)"]}
                transform="rotate(45deg)"
                gap={2}
                h="min-content"
                w="min-content"
              >
                <GridItem
                  colStart={ 1 }
                  rowStart={ 1 }
                  d={["grid", "flex"]}
                  placeItems={["right", "center"]}
                  alignItems={["flex-end", "flex-end"]}
                  // transform="rotate(-45deg)"
                >

                    <DiamondButton
                      to="https://j-philippus-art-studio.myshopify.com/pages/calendar"
                      rotate
                      buttonStyle="btn--primary"
                      buttonSize="btn--medium"
                      p={0}
                      m={0}
                      tight
                    >
                      Book a Class &#8594;
                    </DiamondButton>

                </GridItem>
                <GridItem
                  colStart={2}
                  rowStart={1}
                  d={["none", "none", "none", "flex"]}
                >

                    <Box
                      bg="rgba(63, 167, 182, .4)"
                      w={300}
                      h={300}
                      borderRadius="15px"
                    />

                </GridItem>
                <GridItem
                  colStart={2}
                  rowStart={2}
                  d={["none", "none", "none", "flex"]}
                >

                    <Box
                      bg="rgba(63, 167, 182, .4)"
                      w={150}
                      h={150}
                      borderRadius="15px"
                    />

                </GridItem>
              </Grid>
            </Container>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Hero
