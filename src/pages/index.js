import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Container,
  Box,
  Text,
  Grid,
  Heading,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { FiArrowRight as ArrowIcon } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Spacer from "../components/Spacer/index"
import Hero from "../components/Hero/Hero.js"
import News from "../components/News/index"
import { DiamondButton } from "../components/DiamondButton"

const IndexPage = () => {
  const headingColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  const fullWidthColor = useColorModeValue(`gray.700`, `gray.300`)
  const fullWidthBg = useColorModeValue(`gray.100`, `black`)

  return (
    <Layout>
      <Hero />

      <Container my={[24, 32, 36, 40]}>
        <Flex alignItems="center" justifyContent="space-between" mb={8}>
          <Heading as="h2" fontSize="3xl">
            Art
          </Heading>
          <Button
            as={GatsbyLink}
            to="/products/art/"
            variant="ghost"
            rightIcon={<ArrowIcon />}
          >
            View all
          </Button>
        </Flex>
        <Grid
          templateColumns={["1fr", null, "repeat(2, 1fr)"]}
          gap={8}
          sx={{
            ".product-image-1": { order: 1 },
            ".product-image-2": { order: [3, null, 2] },
          }}
        >
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
          <Text fontSize="lg" maxWidth="65ch" order={[2, null, 3]}>
            Half-giant jinxes peg-leg gillywater broken glasses large black dog
            Great Hall. Nearly-Headless Nick now string them together, and
            answer me this, which creature would you be unwilling to kiss?
            Poltergeist sticking charm, troll umbrella stand flying cars golden
            locket Lily Potter. Pumpkin juice Trevor wave your wand out glass
            orbs, a Grim knitted hats.
          </Text>
          <Text fontSize="lg" maxWidth="65ch" order={4}>
            Half-giant jinxes peg-leg gillywater broken glasses large black dog
            Great Hall. Nearly-Headless Nick now string them together, and
            answer me this, which creature would you be unwilling to kiss?
            Poltergeist sticking charm, troll umbrella stand flying cars golden
            locket Lily Potter. Pumpkin juice Trevor wave your wand out glass
            orbs, a Grim knitted hats.
          </Text>
        </Grid>
      </Container>
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
    </Layout>
  )
}

export default IndexPage
