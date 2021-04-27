import { Box, Link, SimpleGrid, Stack } from "@chakra-ui/react"
import * as React from "react"
import { FooterHeading } from "./FooterHeading"

const LinkGrid = props => (
  <SimpleGrid columns={{base: 1, lg: 2}} {...props}>
    <Box minW="140px">
      <FooterHeading mb="4">Menu</FooterHeading>
      <SimpleGrid columns={{base: 2, lg: 2}}>
        <Box mr="5">
          <Link to="/about">About the Artist</Link>
          <br />
          <Link to="/shop">Shop</Link>
        </Box>
        <Box ml="5">
          <Link to="/news">News/Press</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />
          <Link to="/faq">FAQ</Link>
        </Box>
      </SimpleGrid>
    </Box>
    <Box minW="140px">
      <FooterHeading mb="4">Contact</FooterHeading>
      <Stack>
        <Link>1846 North Loop<br />1604 W<br/>Suite 104</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)

export default LinkGrid
