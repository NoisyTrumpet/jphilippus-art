import React from "react"
import Layout from "../components/Layout/Layout"
// import axios from "axios"
import PropTypes from "prop-types"
import Pin from "../images/SVG/Pin"
import {
  Text,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue as mode,
  Wrap,
  WrapItem,
  Box,
  Container,
} from "@chakra-ui/react"
import { graphql } from "gatsby"
import GoogleMapReact from "google-map-react"
import "../styles/contact.scss"
import DiamondButton from "../components/DiamondButton/DiamondButton"
import Seo from "../components/SEO"
import Recaptcha from "react-recaptcha"

const center = {
  lat: 29.606779288223038,
  lng: -98.52148720604819,
}
const PinWrapper = () => (
  <div>
    <Box
      style={{
        padding: "15px 10px",
        width: "55px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      }}
      className="pinWrapper"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/dir//J+Philippus+Art+Studio+%26+Gallery,+1846+N+Loop+1604+W+STE+104,+San+Antonio,+TX+78248/@29.6065838,-98.5237701,16.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x865c611c33dc2b73:0x5f7bc89cd7fcdf47!2m2!1d-98.5215116!2d29.6067463",
          "_blank"
        )
      }
    >
      <Pin />
    </Box>

    <div className="hidden">
      <h3>J.Philippus Art Studio and Gallery, LLC</h3>
      <p>
        1846 North Loop 1604W Suite 104
        <br />
        San Antonio, Tx 78248
      </p>
    </div>
  </div>
)

const Contact = () => {
  const bgGray = mode(`bgGray`, `gray.700`)
  return (
    <Layout>
      <Seo title="Contact Us" />
      {/* <AltHero
        title="Contact"
        subcaption="Have Questions?"
        body="Our knowledgeable staff will provide answers to any of your
            questions. You can expect an email response by the next business
            day."
      /> */}
      <Box backgroundColor={bgGray}>
        <Container>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2 ,1fr)",
            ]}
            templateRows={[
              "repeat(1fr, fit-content ,1fr)",
              "repeat(1fr, fit-content ,1fr)",
              "repeat(1fr fit-content)",
            ]}
            gap={(2, 6, 6)}
            py="2rem"
          >
            <GridItem
              colStart={1}
              colSpan={[1, 2, 1]}
              rowStart={1}
              rowSpan={[1, 1, 2]}
              pb={12}
              height={[`450px`, `700px`]}
            >
              <Text
                as="h1"
                fontSize="3xl"
                textTransform="uppercase"
                color="primary"
              >
                Contact
              </Text>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={center}
                defaultZoom={15}
              >
                <PinWrapper lat={29.606779288223038} lng={-98.52148720604819} />
              </GoogleMapReact>
            </GridItem>
            <GridItem
              colStart={[1, 1, 2]}
              colSpan={1}
              rowStart={[2, 2, 1]}
              rowSpan={1}
            >
              <Text
                as="h2"
                color="primary"
                fontSize={`3xl`}
                textTransform={`uppercase`}
              >
                Address
              </Text>
              <a
                href="https://www.google.com/maps/dir//J+Philippus+Art+Studio+%26+Gallery,+1846+N+Loop+1604+W+STE+104,+San+Antonio,+TX+78248/@29.6065838,-98.5237701,16.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x865c611c33dc2b73:0x5f7bc89cd7fcdf47!2m2!1d-98.5215116!2d29.6067463"
                target="_blank"
                rel="noopnener noreferrer"
              >
                <Text>1846 North Loop 1604W Suite 104</Text>
                <Text>San Antonio, Tx 78248</Text>
              </a>
              <a href="tel:210.474.0440">
                <Text>210.474.0440</Text>
              </a>
              <Text
                as="h2"
                color="primary"
                fontSize={`3xl`}
                mt={4}
                textTransform={`uppercase`}
              >
                Hours
              </Text>

              <Text mt={4}> M-F 11am-6pm • Sat 11am-5pm</Text>
              {/* <Text mt={4}>
                Closed Monday's in April & May for the showcasing of my original
                art in the Robare Custom Home at the 2021 Parade of Homes.
              </Text> */}
              <Text
                as="h2"
                color="primary"
                fontSize={`3xl`}
                textTransform={`uppercase`}
                mt={4}
              >
                Have Questions?
              </Text>
              <Text>
                Our knowledgeable staff will provide answers to any of your
                questions. You can expect an email response by the next business
                day. Use the form below, or send us an email -{" "}
                <a href="mailto:jphilippus@jphilippusart.com">
                  jphilippus@jphilippusart.com
                </a>
              </Text>
            </GridItem>
            <GridItem
              colStart={[1, 2, 2]}
              colSpan={1}
              rowStart={[3, 2, 2]}
              rowSpan={1}
            >
              <form
                action="https://getform.io/f/5d9b4c2f-392c-41fa-82b4-c3c176621c15"
                method="POST"
              >
                <FormControl id="first-name" isRequired>
                  <Wrap justify="space-between">
                    <WrapItem flexDir="column" w={["100%", "100%", "48%"]}>
                      <FormLabel>First name</FormLabel>
                      <Input
                        type="text"
                        placeholder="First name"
                        name="first name"
                        backgroundColor="white"
                      />
                    </WrapItem>
                    <WrapItem flexDir="column" w={["100%", "100%", "48%"]}>
                      <FormLabel>Last name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Last name"
                        name="last name"
                        backgroundColor="white"
                      />
                    </WrapItem>
                  </Wrap>
                  <FormLabel mt={2}>Email Address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    backgroundColor="white"
                  />
                  <FormLabel mt={2}>Message</FormLabel>
                  <Textarea
                    type="text"
                    placeholder="Message Area"
                    minH="150px"
                    name="message"
                    mb={4}
                    backgroundColor="white"
                  />
                  <Box display="flex" justifyContent="flex-end">
                    <DiamondButton type="submit" to="submit">
                      Submit
                    </DiamondButton>
                  </Box>
                  <Recaptcha sitekey={`${process.env.RECATCHA_SITE_KEY}`} />
                </FormControl>
              </form>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

Contact.propTypes = {
  isHome: PropTypes.bool,
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "commisioned" } }) {
      edges {
        node {
          childImageSharp {
            id
            gatsbyImageData(
              formats: [WEBP, PNG]
              layout: CONSTRAINED
              quality: 60
              placeholder: BLURRED
              width: 1920
            )
          }
        }
      }
    }
  }
`

export default Contact
