import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import DiamondButton from "../DiamondButton/DiamondButton"

const NewCallToAction = () => {
  const { AcrylicImg } = useStaticQuery(
    graphql`
      query {
        AcrylicImg: file(relativePath: { eq: "page-heros/class-page-hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 800
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
  const AcrylicImage = getImage(AcrylicImg)
  return (
    <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} marginBottom={10}>
      <GridItem>
        <CallToAction />
      </GridItem>
      <GridItem placeItems={"center"} display="grid" position="relative">
        <GatsbyImage
          className="block-grid-image"
          image={AcrylicImage}
          alt="Book a Class Today!"
          style={{ gridArea: "1/1", minWidth: `100%`, minHeight: `100%` }}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
          }}
        >
          <DiamondButton
            to="https://j-philippus-art-studio.myshopify.com/pages/calendar"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Book a class
          </DiamondButton>
        </div>
      </GridItem>
    </Grid>
  )
}

const CallToAction = () => {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: "6",
          lg: "8",
        }}
        py={{
          base: "16",
          sm: "20",
        }}
        textAlign="center"
      >
        <Text fontWeight="semibold" color={useColorModeValue("primary")}>
          Prices now start at just $23/person
        </Text>
        <Heading
          my="4"
          as="h2"
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
          color={useColorModeValue("gray.600", "white")}
        >
          Discover your inner artist{" "}
          <Box
            as="mark"
            bg="unset"
            color={useColorModeValue("primary", "primary")}
            whiteSpace="nowrap"
          >
            Book a Class Today
          </Box>
        </Heading>
        <Text fontSize="lg" maxW="xl" mx="auto">
          Book a class using our new booking application. Or inquire about a
          custom art class for your special event.
        </Text>
      </Box>
    </Box>
  )
}

export default NewCallToAction
