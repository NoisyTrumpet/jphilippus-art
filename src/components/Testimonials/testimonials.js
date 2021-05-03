import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Quotee } from './Quotee'
import { QuoteIcon } from './QuoteIcon'
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"

const Testimonials = () => {

  const { desktopImage } = useStaticQuery(
    graphql`
      query {
        desktopImage: file(relativePath: { eq: "goldenTestBg.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2160
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
  const desktopImageGet = getImage(desktopImage)
  const desk = convertToBgImage(desktopImageGet)
  const images = [
    desk.fluid,
  ]


  const testimonial_data = {
    nodes: [
      {
        text:
          "I had so much fun!!! Truly a blessing to have the opportunity to come to a place to make resin art coasters and other art pieces!",
        person: "Sayama Turner",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        text:
          "This is just a test.",
        person: "Marrie Jones",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        text: "Time is just a big ball of wibbly-wobbly, timey-wimey... stuff.",
        person: "Doctor Who",
        image: "https://www.thegallifreytimes.com/wp-content/uploads/2018/07/tenth-doctor.jpg",
      },
    ],
  }
  
  
  const [index, setIndex] = useState(0)
  const length = testimonial_data.nodes.length - 1
  const handleNext = () => index === length ? setIndex(0) : setIndex(index + 1)
  const t = testimonial_data.nodes[index]
  useEffect(() => {
    const timeout = setTimeout(() => handleNext(), 8000)
    return () => clearTimeout(timeout)
  })


  return (
    <BackgroundImage Tag="section" fluid={images} preserveStackingContext>
      <Box as="section" bg={useColorModeValue('rgba(63, 166, 182, 0.7)')} mt="2rem">
        <Box
          maxW="3xl"
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          py="12"
          minH="450px"
        >
          <Flex direction="column" align="center" textAlign="center">
            <QuoteIcon
              color={useColorModeValue('secondary')}
              fontSize={{
                base: '3xl',
                md: '6xl',
              }}
            />

            <Quotee
                name={t.person}
                QuoteBlock={t.text}
                imageSrc={t.image}
                mt="8"
              />

          </Flex>
        </Box>
      </Box>
    </BackgroundImage>
  )
}

export default Testimonials