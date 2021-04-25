import { Text } from "@chakra-ui/layout"
import * as React from "react"

const Copyright = props => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} J. Philippus Art Studio & Gallery LLC. All
    rights reserved.
  </Text>
)

export default Copyright
