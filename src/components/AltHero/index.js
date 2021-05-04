import React from "React"
import {
  Badge,
  Box,
  Heading,
  Grid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"

const AltHero = ({ title, subcaption, body, logo, image, imageAlt }) => {
  return (
    <Box>
      <Grid templateColumns={["repeat(2, 1fr)"]}>
        <Box>
          {title && <Heading as="h1">{title}</Heading>}
          {subcaption && <Heading as="h2">{subcaption}</Heading>}
          {body && <Text>{body}</Text>}
          {/* {logo && } */}
        </Box>
      </Grid>
    </Box>
  )
}
