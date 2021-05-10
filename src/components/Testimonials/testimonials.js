import { Box, Circle, Flex, HStack, useColorModeValue } from "@chakra-ui/react"
import React, { useState } from "react"
import { Quotee } from "./Quotee"
import { QuoteIcon } from "./QuoteIcon"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Testimonials = () => {
  const { desktopImage } = useStaticQuery(
    graphql`
      query {
        desktopImage: file(relativePath: { eq: "goldenTestBg.jpg" }) {
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

  const testimonial_data = {
    nodes: [
      {
        text:
          "I had so much fun!!! Truly a blessing to have the opportunity to come to a place to make resin art coasters and other art pieces!",
        person: "Sayama Turner",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      // {
      //   text: "This is just a test.",
      //   person: "Marrie Jones",
      //   image:
      //     "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      // },
      // {
      //   text: "Time is just a big ball of wibbly-wobbly, timey-wimey... stuff.",
      //   person: "Doctor Who",
      //   image:
      //     "https://www.thegallifreytimes.com/wp-content/uploads/2018/07/tenth-doctor.jpg",
      // },
    ],
  }

  const [index, setIndex] = useState(0)
  // const length = testimonial_data.nodes.length - 1
  const handleClick = key => setIndex(key)
  // index === length ? setIndex(0) : setIndex(index + 1)
  const t = testimonial_data.nodes[index]

  return (
    <Box
      as="section"
      display="grid"
      placeItems={`center`}
      height={`fit-content`}
      mt={12}
    >
      <GatsbyImage
        image={desktopImageGet}
        alt="Testimonial Background Image"
        style={{ gridArea: "1/1", minHeight: `100%`, objectFit: `cover` }}
        className={`testimonial-image`}
      />
      <Box
        as="section"
        bg={useColorModeValue(
          "rgba(102, 117, 138, 0.4)",
          "rgba(102, 117, 138, 0.4)"
        )}
        width={`100%`}
        height={`100%`}
        placeItems={`center`}
        style={{
          gridArea: "1/1",
          position: "relative",
        }}
      >
        <Box width="100%" height="100%" display="grid" placeItems={`center`}>
          <Flex direction="column" align="center" textAlign="center">
            <QuoteIcon
              color={useColorModeValue("secondary", "secondary")}
              fontSize={{
                base: "3xl",
                md: "6xl",
              }}
            />
            <Quotee
              name={t.person}
              QuoteBlock={t.text}
              // imageSrc={t.image}
              mt="8"
              maxWidth={700}
            />

            <HStack
              justify="center"
              spacing="4"
              mt="8"
              color={useColorModeValue("gray.600", "gray.600")}
            >
              {testimonial_data.nodes.map((n, key) => (
                <Circle
                  w="3"
                  h="3"
                  bg={key === index ? `primary` : `secondary`}
                  key={n.person}
                  onClick={() => handleClick(key)}
                />
              ))}
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Testimonials
