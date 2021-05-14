import {
  Box,
  Heading,
  Grid,
  Text,
  useColorModeValue as mode,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DiamondButton from "../DiamondButton/DiamondButton"

const AltHero = ({
  title,
  subcaption,
  body,
  imageAlt,
  productType,
  ctaTitle,
  ctaSubCaption,
  ctaText,
  ctaLink,
  isContact,
}) => {
  // Art Page Image:
  const {
    artHero,
    classHero,
    jewelryHero,
    julieVossLogo,
    allHero,
    charcuterie,
  } = useStaticQuery(
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
        classHero: file(
          relativePath: { eq: "page-heros/class-page-hero.jpg" }
        ) {
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
        jewelryHero: file(
          relativePath: { eq: "page-heros/jewelry-page-hero.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 1054
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        allHero: file(relativePath: { eq: "page-heros/shop-page-hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        julieVossLogo: file(relativePath: { eq: "julie-voss-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        charcuterie: file(relativePath: { eq: "charcuterie.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
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
    if (productType === "Class") {
      return getImage(classHero)
    }
    if (productType === "Jewelry") {
      return getImage(jewelryHero)
    }
    if (productType === "All") {
      return getImage(allHero)
    }
    if (productType === "Charcuterie") {
      return getImage(charcuterie)
    }

    return getImage(allHero)
  }

  const julieImage = getImage(julieVossLogo)

  const bgGray = mode(`bgGray`, `gray.700`)
  const blue = mode(`primary`)
  const yellow = mode(`secondary`)

  return (
    <Box position={`relative`}>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <Box backgroundColor={bgGray} padding={12}>
          {title && (
            <Heading
              as="h1"
              color={blue}
              textTransform="uppercase"
              fontSize={`3xl`}
              fontFamily={`Gill Sans`}
              fontWeight={`500`}
            >
              {title}
            </Heading>
          )}

          {subcaption && (
            <Text color={yellow} my={5} fontWeight={500}>
              {subcaption}
            </Text>
          )}
          {body && <Text>{body}</Text>}
          {productType === "Class" && (
            <UnorderedList mt={4}>
              <ListItem>
                Kitchen With Refrigerator, Microwave, and Ice Maker
              </ListItem>
              <ListItem>Handicap Accessible</ListItem>
              <ListItem>TV Available for Presentation</ListItem>
              <ListItem>
                Open Flex Area in the front, excellent for cocktail receptions
              </ListItem>
            </UnorderedList>
          )}
          {ctaTitle && ctaSubCaption && ctaText && ctaLink && (
            <Box>
              <Heading
                as="h2"
                color={blue}
                textTransform="uppercase"
                fontSize={`2xl`}
                fontFamily={`Gill Sans`}
                fontWeight={`500`}
                marginTop={12}
              >
                {ctaTitle}
              </Heading>
              <Box display="flex" alignItems="center">
                <Text>{ctaSubCaption}</Text>
                <DiamondButton
                  buttonStyle="btn--primary"
                  buttonSize="btn--small"
                  to={ctaLink}
                >
                  {ctaText}
                </DiamondButton>
              </Box>
            </Box>
          )}

          {productType === "Jewelry" && (
            <Box display="grid" placeItems="Center" marginTop={8}>
              <GatsbyImage image={julieImage} alt="Julie Voss Logo" />
            </Box>
          )}
        </Box>
        <Box>
          <GatsbyImage
            image={getImgSrc()}
            alt={`${productType || imageAlt} | Hero Image`}
            style={{ height: `100%` }}
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default AltHero
