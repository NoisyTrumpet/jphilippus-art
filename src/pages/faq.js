import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import Seo from "../components/SEO"
import AltHero from "../components/AltHero"
import { getImage } from "gatsby-plugin-image"

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
              formats: [WEBP, PNG]
            )
          }
        }
      }
    `
  )
  // get image data
  const hero = getImage(heroImage)
  return (
    <Layout>
      <Seo title="Frequently Asked Questions" />
      <AltHero
        title="Frequently Asked Questions"
        body="We are excited to welcome you to J. Philippus Art Studio & Gallery.
            Below you will find a list of frequently asked questions to ensure
            you have the most enjoyable experience creating your own unique
            piece of art during your visit"
        image={hero}
      />
      {/* <Grid
        templateColumns={["100%", "100%", "repeat(2, 1fr)"]}
        // templateRows={["fit-content fit-content", "fit-content fit-content", "repeat(1, 1fr)"]}
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
      </Grid> */}
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
