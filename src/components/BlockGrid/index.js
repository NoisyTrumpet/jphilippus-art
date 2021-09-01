import * as React from "react"
import { Container, Box, Text, Grid, Center } from "@chakra-ui/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import DiamondButton from "../DiamondButton/DiamondButton"

import "./BlockGrid.scss"

const BlockGrid = () => {
  const { CharcuterieImg, FlowerImg, AcrylicImg } = useStaticQuery(
    graphql`
      query {
        CharcuterieImg: file(relativePath: { eq: "charcuterie.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [WEBP, PNG]
            )
          }
        }
        FlowerImg: file(relativePath: { eq: "flower.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [WEBP, PNG]
            )
          }
        }
        AcrylicImg: file(relativePath: { eq: "acrylic-pour.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [WEBP, PNG]
            )
          }
        }
      }
    `
  )
  // <CallToAction
  //   topCaption="Let us help you plan your special event."
  //   title="BOOK YOUR PRIVATE PARTY TODAY"
  //   subCaption="If you're looking for the perfect way to make your event special, we are happy to customize your experience through our private party offerings. Day or evening parties available. Call us at 210-474-0440 or click the button below to call."
  //   ctaText="Call to Book"
  //   ctaLink="tel:210.474.0440"
  // />

  const Charcuterie = getImage(CharcuterieImg)

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
            color={`primary`}
            pb={2}
            textTransform={`uppercase`}
          >
            {/* Create Your Masterpiece */}
            BOOK YOUR PRIVATE PARTY TODAY
          </Text>
          <Text>
            {/* Browse our selection of classes from Acrylic Pour on Metal Flowers
            to Glass Art, custom charcuterie boards and more! */}
            If you're looking for the perfect way to make your event special, we
            are happy to customize your experience through our private party
            offerings. Day or evening parties available. Call us at 210-474-0440
            or click the button below to call.
          </Text>
          <Center my="10">
            <DiamondButton
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              style={{ textAlign: `center`, margin: `0 auto` }}
              py="10"
              to="tel:210.474.0440"
            >
              Call to Book
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
              Custom
              <br />
              Art Kits
            </DiamondButton>
          </Center>
        </Box>
        <Box className="block-grid-item" zIndex={1} display="grid">
          <GatsbyImage
            className="block-grid-image"
            image={Charcuterie}
            alt="Charcuterie Boards"
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
              to="/products/charcuterie"
            >
              Charcuterie Boards
            </DiamondButton>
          </Center>
        </Box>
      </Grid>
    </Container>
  )
}

export default BlockGrid
