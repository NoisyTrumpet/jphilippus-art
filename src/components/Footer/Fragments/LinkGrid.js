import { Box, SimpleGrid, Stack, VStack } from "@chakra-ui/react"
import * as React from "react"
import { FooterHeading } from "./FooterHeading"
import Link from "../../link"

const LinkGrid = props => (
  <SimpleGrid columns={{base: 1, lg: 2}} {...props}>
    <Box minW="140px">
      <FooterHeading mb="4">Menu</FooterHeading>
      <SimpleGrid columns={{base: 2, lg: 2}} mb={{ base: 4, lg: 0 }}>
        <VStack align="stretch" spacing={2} mr={{ base: 0, lg: 2 }}>
          <Link to="/about" display="block">About the Artist</Link>
          <Link to="/shop" display="block">Shop</Link>
        </VStack>
        <VStack align="stretch" spacing={2} ml={{ base: 0, lg: 2 }}>
          {/* <Link to="/news" display="block">News/Press</Link> */}
          <Link to="/contact" display="block">Contact</Link>
          <Link to="/faq" display="block">FAQ</Link>
        </VStack>
      </SimpleGrid>
    </Box>
    <Box minW="140px">
      <FooterHeading mb="4">Contact</FooterHeading>
      <VStack align="stretch" spacing={2}>
        <Link>1846 North Loop<br />1604 W<br/>Suite 104</Link>
      </VStack>
    </Box>
  </SimpleGrid>
)

export default LinkGrid
