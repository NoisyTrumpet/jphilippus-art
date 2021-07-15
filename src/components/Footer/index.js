import { Box, Stack, Container } from "@chakra-ui/react"
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
            gatsbyImageData(width: 200, quality: 60, formats: [AUTO, WEBP, AVIF, PNG])
          }
        }
        LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
          childImageSharp {
            gatsbyImageData(width: 200, quality: 60, formats: [AUTO, WEBP, AVIF, PNG])
          }
        }
      }
    `
  )

  const dark = getImage(DarkLogo)
  const light = getImage(LightLogo)

  return (
    <>
      <Container>
        <Newsletter />
      </Container>

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
        borderTopStyle={`solid`}
        borderTopWidth={1}
        borderTopColor={`secondary`}
      >
        <Stack spacing={10}>
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
            <Link to="/" alt="Home">
              <GatsbyImage
                image={light}
                alt="Footer Logo Light"
                className="header-logo-reg"
                loading="eager"
              />
            </Link>

            <Stack
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
              textAlign="center"
            />
            <SocialMediaLinks />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Footer
