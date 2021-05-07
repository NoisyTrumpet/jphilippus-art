import { Text } from "@chakra-ui/react"
import * as React from "react"

export const FooterHeading = props => (
  <Text
    color="secondary"
    fontSize="md"
    fontWeight="500"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
)
