import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
import { HiArrowRight } from "react-icons/hi"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const NewHero = () => {
  const { acrylicImg } = useStaticQuery(
    graphql`
      query {
        acrylicImg: file(relativePath: { eq: "acrylic-pour.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [ WEBP,  PNG]
            )
          }
        }
      }
    `
  )

  const image = getImage(acrylicImg)
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
      pb="24"
      pos="relative"
      px={{
        base: "6",
        lg: "12",
      }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{
            lg: "md",
            xl: "xl",
          }}
          pt={{
            base: "20",
            lg: "40",
          }}
          pb={{
            base: "16",
            lg: "24",
          }}
        >
          <HStack
            className="group"
            px="2"
            py="2"
            bg={mode("gray.200", "gray.700")}
            rounded="full"
            fontSize="sm"
            mb="8"
            display="inline-flex"
            minW="18rem"
            as="a"
            href="/products/event/turn-art-into-charcuterie-special-event/"
          >
            <Badge
              px="2"
              pt="1"
              variant="solid"
              bg="secondary"
              rounded="full"
              textTransform="capitalize"
            >
              New
            </Badge>
            <Box fontWeight="medium">Turn Art Into Charcuterie Event</Box>
            <Box
              aria-hidden
              transition="0.2s all"
              _groupHover={{
                transform: "translateX(2px)",
              }}
              as={HiArrowRight}
              display="inline-block"
            />
          </HStack>
          <Heading
            as="h1"
            size="3xl"
            lineHeight="1"
            fontWeight="medium"
            letterSpacing="tight"
          >
            Create Your{" "}
            <Box as="mark" color="primary" bg="transparent">
              Masterpiece
            </Box>
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode("gray.600", "gray.400")}
          >
            We are excited to share that The Shard Studio, LLC is now
          </Text>
          <Text
            as="h2"
            fontSize={["2xl", "3xl"]}
            color="secondary"
            marginTop={[1, 4]}
            lineHeight={10}
          >
            J.Philippus Art Studio and Gallery, LLC
          </Text>
          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            spacing="4"
            mt="8"
          >
            <Button
              size="lg"
              bg="primary"
              color="white"
              height="14"
              px="8"
              fontSize="md"
              textTransform="uppercase"
              fontWeight="medium"
            >
              Book a class
            </Button>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{
                bg: "gray.50",
              }}
              height="14"
              px="8"
              shadow="base"
              fontSize="md"
              fontWeight="medium"
            >
              Check the schedule
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{
          lg: "absolute",
        }}
        insetY={{
          lg: "0",
        }}
        insetEnd={{
          lg: "0",
        }}
        bg="gray.50"
        w={{
          base: "full",
          lg: "50%",
        }}
        height={{
          base: "96",
          lg: "100%",
        }}
        sx={{
          clipPath: {
            lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
        }}
      >
        <GatsbyImage
          image={image}
          alt="hero image"
          objectFit="cover"
          objectPosition="left"
          style={{ width: "100%", height: "100%" }}
          className="hero-image"
        />
        {/* <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt="Lady working"
          /> */}
      </Box>
    </Box>
  )
}

export default NewHero
