import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import * as React from "react"
import { FooterHeading } from "./FooterHeading"
import Link from "../../link"

const LinkGrid = props => (
  <SimpleGrid columns={{ base: 2, lg: 2 }} {...props}>
    <Box minW="140px">
      <FooterHeading mb="4">Menu</FooterHeading>
      <SimpleGrid columns={{ base: 1, lg: 1 }}>
        <Box>
          <Link to="/about" display="block">
            About the Artist
          </Link>
          <Link to="/shop" display="block">
            Shop
          </Link>
          <Link to="/contact" display="block">
            Contact
          </Link>
        </Box>
        {/* <Box ml="5" mb={8}>
          <Link to="/news" display="block">News/Press</Link>

          <Link to="/faq" display="block">
            FAQ
          </Link>
        </Box> */}
      </SimpleGrid>
    </Box>
    <Box minW="140px">
      <FooterHeading mb="4">Contact</FooterHeading>
      <Stack>
        <Link>
          1846 North Loop
          <br />
          1604 W<br />
          Suite 104
        </Link>
      </Stack>
    </Box>
  </SimpleGrid>
)

export default LinkGrid
