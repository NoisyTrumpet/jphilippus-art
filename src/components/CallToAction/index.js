import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"
import DiamondButton from "../DiamondButton/DiamondButton"

const CallToAction = () => {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: "6",
          lg: "8",
        }}
        py={{
          base: "16",
          sm: "20",
        }}
        textAlign="center"
      >
        <Text fontWeight="semibold" color={useColorModeValue("primary")}>
          Prices now start at just $23/person
        </Text>
        <Heading
          my="4"
          as="h2"
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
          color={useColorModeValue("gray.600", "white")}
        >
          Discover your inner artist{" "}
          <Box
            as="mark"
            bg="unset"
            color={useColorModeValue("primary", "primary")}
            whiteSpace="nowrap"
          >
            Book a Class Today
          </Box>
        </Heading>
        <Text fontSize="lg" maxW="xl" mx="auto">
          Book a class using our new booking application. Or inquire about a
          custom art class for your special event.
        </Text>
        <Stack
          direction={{
            base: "row",
            sm: "row",
          }}
          mt="10"
          justify="center"
          spacing={{
            base: "3",
            md: "5",
          }}
          maxW="md"
          mx="auto"
        >
          {/* <DiamondButton>

          </DiamondButton> */}
          <DiamondButton
            to="https://j-philippus-art-studio.myshopify.com/pages/calendar"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Book a class
          </DiamondButton>
          {/* <Button
            as="a"
            size="lg"
            h="16"
            px="10"
            href="https://j-philippus-art-studio.myshopify.com/pages/calendar"
            backgroundColor="primary"
            color="white"
            fontFamily="Gill Sans"
            fontWeight={500}
            textTransform="uppercase"
            flex={{
              md: "1",
            }}
          >
            Book a class
          </Button>
          <Button
            as="a"
            flex={{
              md: "1",
            }}
            variant="outline"
            href="#"
            size="lg"
            h="16"
            px="10"
            fontWeight="bold"
          >
            Custom Classes
          </Button> */}
        </Stack>
      </Box>
    </Box>
  )
}

export default CallToAction
