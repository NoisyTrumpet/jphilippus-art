import * as React from "react"
import { Container, Text, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero.js"
import Link from "../components/link"
import BlockGrid from "../components/BlockGrid/index"

const IndexPage = () => {
  // const headingColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  // const fullWidthColor = useColorModeValue(`gray.700`, `gray.300`)
  // const fullWidthBg = useColorModeValue(`gray.100`, `black`)

  const themeBlue = useColorModeValue(`primary`, `gray.300`)

  return (
    <Layout>
      <Hero />
      <Container my={[16, 16, 16, 16]} textAlign="center">
        <Heading
          as="h2"
          fontSize="3xl"
          textAlign="center"
          fontWeight="extrabold"
          letterSpacing="tight"
          color={themeBlue}
        >
          2021 Parade of Homes
        </Heading>
        <Text
          textAlign="center"
          my={7}
          maxWidth={450}
          mx="auto"
          mt="4"
          fontSize="lg"
        >
          Featured artist of all original art in the "Rohare Custom Home" at the
          2021 San Antonio Parade of Homes
        </Text>
        <Link
          to="/news/parade-of-homes/"
          style={{ textAlign: "center" }}
          color={themeBlue}
        >
          read more
        </Link>
      </Container>
      <BlockGrid />
    </Layout>
  )
}

export default IndexPage
