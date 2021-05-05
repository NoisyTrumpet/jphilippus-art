import * as React from "react"
import { Container, SimpleGrid, Box, Center, Text } from "@chakra-ui/react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import DiamondButton from "../DiamondButton/DiamondButton"
import GatsbyImage from "gatsby-image"

import "./News.scss"

const News = () => {
  const { NewsImage } = useStaticQuery(
    graphql`
      query {
        NewsImage: file(relativePath: { eq: "latestNews.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF, PNG]
            )
          }
        }
      }
    `
  )

  const image = getImage(NewsImage)

  const bgImage = convertToBgImage(image)

  return (
    <Container>
      <SimpleGrid columns={{ base: 1, xl: 2 }} mt="5">
        <Box className="latest-news-container" zIndex={1}>
          <BackgroundImage
            className="latest-news-img"
            tag="section"
            p={{ base: 10, lg: 25 }}
            fluid={image}
            {...bgImage}
            preserveStackingContext
          >
            <Center className="center-grid-diamond" pt={{ base: `3rem`, md: `5rem`, lg: `7rem` }}>
              <DiamondButton 
                className="grid-diamond-btn"
                buttonStyle="btn--primary-transparent" 
                buttonSize="btn--xl">
                  Latest News
              </DiamondButton>
            </Center>
          </BackgroundImage>
        </Box>

        <Box className="social-container" mt="10">
          <Center>
            <Text className="social-heading">Let's Get Social</Text>
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default News
