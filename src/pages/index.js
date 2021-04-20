import * as React from "react"
import { Container, Text, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero.js"
<<<<<<< HEAD
import Link from "../components/link"
=======
import News from "../components/News/index"
import { DiamondButton } from "../components/DiamondButton"
>>>>>>> page/about

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
          textTransform="uppercase"
          color={themeBlue}
        >
          2021 Parade of Homes
        </Heading>
        <Text textAlign="center" my={7} maxWidth={450} mx="auto">
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
<<<<<<< HEAD
=======
      <Box py={[20, null, 28]} bg={fullWidthBg} color={fullWidthColor}>
        <Container>
          <Grid templateColumns={["1fr", null, "repeat(2, 1fr)"]} gap={8}>
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              maxWidth="60ch"
            >
              <Heading as="h2" color={headingColor}>
                About Jeanne
              </Heading>
              <Spacer axis="vertical" size={3} />
              <Text fontSize="lg">
                Jeanne grew up on a farm in Shiner, Texas. Inspired by her
                father's love of art, she developed her own stlyle using
                leftover paint and items she found on the farm. In her late
                twenties, Jeanne lost her husband to cancer after only a few
                short years of marriage. While grieving such a great loss,
                Jeanne began incorporating broken glass in her art as a metaphor
                for her life. Creating art from the brokern and discarded
                materials was a crucial part of her healing process. Combining
                acrylics, resins and recycled glass, Jeanne began creating
                unique art that set the stage for hr future career.
              </Text>
              <Spacer axis="vertical" size={3} />
              <Text fontSize="lg">
                Jeanne currently lives in San Antonio, Texas where she owns The
                Shard Studio. One of her greatest passions is her love of people
                and art and she feels blessed to teach classes and create
                abstract, contemporary and coastal art everyday.
              </Text>
            </Flex>
            <StaticImage
              src="../images/texas.webp"
              width={300}
              quality={95}
              formats={["WEBP"]}
              alt="Texas glass art"
              style={{
                margin: "0 auto",
              }}
            />
          </Grid>
        </Container>
      </Box>
      {/* Latest News and Social */}
      <Grid templateColumns={["1fr", null, "repeat(2, 1fr)"]}
          gap={8}>
        <News>
          <DiamondButton buttonStyle="btn--primary" buttonSize="btn--large">LATEST NEWS</DiamondButton>
        </News>
        <span>Social placeholder</span>
      </Grid>
>>>>>>> page/about
    </Layout>
  )
}

export default IndexPage
