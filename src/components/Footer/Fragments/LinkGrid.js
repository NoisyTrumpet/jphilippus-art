import { Box, SimpleGrid, Stack, Link } from "@chakra-ui/react"
import { Link as ReachLink } from "@reach/router"
import * as React from "react"
import { FooterHeading } from "./FooterHeading"

const LinkGrid = props => (
  <SimpleGrid columns={{base: 1, lg: 2}} {...props}>
    <Box minW="140px">
      <FooterHeading mb="4">Menu</FooterHeading>
      <SimpleGrid columns={{base: 2, lg: 2}}>
        <Box mr="5">
          <Link as={ReachLink} to="/about/">About the Artist</Link>
          <br />
          <Link as={ReachLink} to="/shop">Shop</Link>
        </Box>
        <Box ml="5">
          <Link as={ReachLink} to="/news">News/Press</Link>
          <br />
          <Link as={ReachLink} to="/contact">Contact</Link>
          <br />
          <Link as={ReachLink} to="/faq">FAQ</Link>
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
