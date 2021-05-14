import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"

export const Quotee = props => {
  const { QuoteBlock, name, jobTitle, imageSrc, ...boxProps } = props
  return (
    <Container>
      <Box {...boxProps}>
        <Text
          color={useColorModeValue("bg")}
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
          fontWeight="semibold"
          mt="6"
          textShadow={`0 0 10px #7C3100`}
        >
          {QuoteBlock}
        </Text>
      </Box>
      <Box {...boxProps}>
        <Box mt="3" color={useColorModeValue("bg")}>
          <Text as="cite" fontStyle="normal" fontWeight="bold">
            - {name}
          </Text>
          {jobTitle && <Text fontSize="sm">{jobTitle}</Text>}
        </Box>
      </Box>
    </Container>
  )
}
