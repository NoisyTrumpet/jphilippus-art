import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import DiamondButton from "../DiamondButton/DiamondButton"

const NewCallToAction = ({
  topCaption,
  title,
  subCaption,
  ctaText,
  ctaLink,
}) => {
  const { AcrylicImg } = useStaticQuery(
    graphql`
      query {
        AcrylicImg: file(
          relativePath: { eq: "page-heros/class-page-hero.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
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
  const AcrylicImage = getImage(AcrylicImg)
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
      marginBottom={10}
    >
      <GridItem display="grid" placeItems="center" marginBottom={12}>
        <CallToAction
          topCaption={topCaption}
          title={title}
          subCaption={subCaption}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />
      </GridItem>
      <GridItem placeItems={"center"} display="grid" position="relative">
        <GatsbyImage
          className="block-grid-image"
          image={AcrylicImage}
          alt="Book a Class Today!"
          style={{ gridArea: "1/1", minWidth: `100%`, minHeight: `100%` }}
        />
      </GridItem>
    </Grid>
  )
}

const CallToAction = ({ topCaption, title, subCaption, ctaText, ctaLink }) => {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: "6",
          lg: "8",
        }}
        pt={8}
        pb={8}
        textAlign="center"
        display="grid"
        placeItems="center"
      >
        {topCaption && (
          <Text fontWeight="normal" color={"secondary"} maxWidth={350}>
            {topCaption}
          </Text>
        )}
        {title && (
          <Heading
            my="4"
            as="h2"
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            fontWeight={500}
            textTransform="uppercase"
            letterSpacing="tight"
            lineHeight="1.2"
            maxWidth={450}
            color={"primary"}
          >
            {title}
          </Heading>
        )}
        {subCaption && (
          <Text fontSize="lg" maxW="xl" mx="auto" mb={8} maxWidth={450}>
            {subCaption}
          </Text>
        )}
        {ctaText && ctaLink && (
          <DiamondButton
            to={ctaLink}
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            {ctaText}
          </DiamondButton>
        )}
      </Box>
    </Box>
  )
}

export default NewCallToAction
