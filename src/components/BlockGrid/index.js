import * as React from "react"
import { Container, Box, Text, Grid, Center } from "@chakra-ui/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import DiamondButton from "../DiamondButton/DiamondButton"

import "./BlockGrid.scss"

const BlockGrid = () => {
  const { JewelryImg, FlowerImg, AcrylicImg } = useStaticQuery(
    graphql`
      query {
        JewelryImg: file(relativePath: { eq: "jewelry.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        FlowerImg: file(relativePath: { eq: "flower.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        AcrylicImg: file(relativePath: { eq: "acrylic-pour.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
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

  const JewelryImage = getImage(JewelryImg)

  const FlowerImage = getImage(FlowerImg)

  const AcrylicImage = getImage(AcrylicImg)

  return (
    <Container maxWidth="container.lg">
      <Grid
        className="block-grid"
        templateColumns={["repeat(2, 1fr)"]}
        gap={25}
      >
        <Box className="block-grid-item" zIndex={1} margin={`0 auto`}>
          <GatsbyImage
            className="block-grid-image"
            image={FlowerImage}
            alt="Flower Art"
          />
        </Box>
        <Box className="block-grid-item" py="5" zIndex={1}>
          <Text
            className="block-grid-title"
            style={{
              color: `#3FA7B6`,
              paddingBottom: `5px`,
              textTransform: `uppercase`,
            }}
          >
            Create Your Masterpiece
          </Text>
          <Text>
            Browse our selection of classes from Acrylic Pour on Metal Flowers
            to Glass Art, custom charcuterie boards and more!
          </Text>
          <Center my="10">
            <DiamondButton
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              style={{ textAlign: `center`, margin: `0 auto` }}
              py="10"
              to="https://j-philippus-art-studio.myshopify.com/pages/calendar"
            >
              Explore Classes
            </DiamondButton>
          </Center>
        </Box>
        <Box
          className="block-grid-item"
          zIndex={1}
          display="grid"
          placeItems="center"
        >
          <GatsbyImage
            className="block-grid-image"
            image={AcrylicImage}
            alt="Acrylic Art"
            style={{ gridArea: "1/1" }}
          />

          <Center
            className="center-grid-diamond"
            style={{
              gridArea: "1/1",
              position: "relative",
            }}
          >
            <DiamondButton
              className="grid-diamond-btn"
              buttonStyle="btn--primary-transparent"
              buttonSize="btn--xl"
              m="0"
              p="0"
              to="/products/art-kit"
            >
              Custom Art Kits
            </DiamondButton>
          </Center>
        </Box>
        <Box className="block-grid-item" zIndex={1} display="grid">
          <GatsbyImage
            className="block-grid-image"
            image={JewelryImage}
            alt="Jewelry Art"
            style={{ gridArea: "1/1" }}
          />
          <Center
            className="center-grid-diamond"
            style={{
              gridArea: "1/1",
              position: "relative",
            }}
          >
            <DiamondButton
              className="grid-diamond-btn"
              buttonStyle="btn--primary-transparent"
              buttonSize="btn--xl"
              to="/products/jewelry"
            >
              Jewelry
            </DiamondButton>
          </Center>
        </Box>
      </Grid>
    </Container>
  )
}

export default BlockGrid
