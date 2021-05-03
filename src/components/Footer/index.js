import { Box, Stack, useColorMode, StackDivider } from "@chakra-ui/react"
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Copyright from "./Fragments/Copyright"
import LinkGrid from "./Fragments/LinkGrid"
import Link from "../link"

import SocialMediaLinks from "./Fragments/SocialMediaLinks"
import Newsletter from "../Newsletter/Newsletter"

const Footer = () => {
  const { DarkLogo, LightLogo } = useStaticQuery(
    graphql`
      query {
        DarkLogo: file(relativePath: { eq: "logo-horizontal-dark.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const { colorMode } = useColorMode()
  const dark = getImage(DarkLogo)
  const light = getImage(LightLogo)

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      marginTop={8}
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
      justifyContent="center"
    >
      <Stack spacing={10} divider={<StackDivider />}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "10",
            lg: "28",
          }}
          justify="space-between"
        >

            {colorMode === "dark" ? (
              <Link to="/" alt="Home" width={{ base: `150px`, lg: `300px` }}>
                <GatsbyImage
                  image={dark}
                  alt="Footer Logo Dark"
                  className="header-logo-dark"
                />
              </Link>
            ) : (
              <Link to="/" alt="Home" width={{ base: `150px`, lg: `300px` }}>
                <GatsbyImage
                  image={light}
                  alt="Footer Logo Light"
                  className="header-logo-reg"
                />
              </Link>
            )}

          <Stack
          className="footer-links"
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "10",
              md: "20",
            }}
          >
            <LinkGrid />
            <Newsletter />
          </Stack>
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright
            alignSelf={{
              base: "center",
              sm: "start",
            }}
          />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer