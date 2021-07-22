import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Grid,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import faqItems from "../constants/faq.js"

const FAQPage = () => {
  // Hero Image Query
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "faq-page-hero.jpg" }) {
          childImageSharp {
            id
            gatsbyImageData(
              width: 1200
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF, PNG]
            )
          }
        }
      }
    `
  )
  // get image data
  const hero = getImage(heroImage)
  const bgGray = mode(`bgGray`, `gray.700`)
  return (
    <Layout>
      <Seo title="Frequently Asked Questions" />
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        templateRows={["fit-content 1fr", "1fr 1fr", "repeat(1, 1fr)"]}
        maxH={`400px`}
      >
        <Box
          className="bio-text"
          px={[4, 4, 4, 12]}
          py={[8, 8, 8, 12]}
          style={{ lineHeight: `25px` }}
          backgroundColor={bgGray}
        >
          <Text
            tag="h1"
            fontWeight="500"
            color={`primary`}
            textTransform="uppercase"
            fontSize="3xl"
          >
            Frequently Asked Questions
          </Text>
          <Text py="5">
            We are excited to welcome you to J. Philippus Art Studio & Gallery.
            Below you will find a list of frequently asked questions to ensure
            you have the most enjoyable experience creating your own unique
            piece of art during your visit
          </Text>
        </Box>
        <GatsbyImage image={hero} alt="Frequently Asked Questions" />
      </Grid>
      {/* FAQ Accordion */}
      <Container mt={30} mb={40}>
        <Accordion allowToggle>
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={index}
              borderBottomColor={`secondary`}
              borderTopColor={`secondary`}
            >
              <h2>
                <AccordionButton
                  color="secondary"
                  fontWeight="500"
                  fontSize="20px"
                >
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon color="#3FA7B6" />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Layout>
  )
}
export default FAQPage
