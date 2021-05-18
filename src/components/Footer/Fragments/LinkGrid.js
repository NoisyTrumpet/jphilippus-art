import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import * as React from "react"
import { FooterHeading } from "./FooterHeading"
import Link from "../../link"

const LinkGrid = props => (
  <SimpleGrid columns={[2, 3]} {...props}>
    <Box minW="140px">
      <FooterHeading mb="4">Menu</FooterHeading>
      <SimpleGrid columns={{ base: 1, lg: 1 }}>
        <Box>
          <Link to="/about" alt="About the Artist" display="block">
            About the Artist
          </Link>
          <Link to="/products" alt="Shop our Products" display="block">
            Shop
          </Link>
          <Link to="/gallery" alt="Contact Us" display="block">
            Gallery
          </Link>
          <Link to="/contact" alt="Contact Us" display="block">
            Contact
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
    <Box minW="140px">
      <FooterHeading mb="4">Policies</FooterHeading>
      <SimpleGrid columns={{ base: 1, lg: 1 }}>
        <Box>
          <Link to="/privacy-policy" alt="About the Artist" display="block">
            Privacy
          </Link>
          <Link to="/terms-of-service" alt="Shop our Products" display="block">
            Terms & Conditions
          </Link>
          {/* <Link to="/refund-policy" alt="Contact Us" display="block">
            Refunds
          </Link> */}
        </Box>
      </SimpleGrid>
    </Box>
    <Box minW="140px" mt={[4, 0]}>
      <FooterHeading mb="4">Address</FooterHeading>
      <Stack>
        <a
          href="https://www.google.com/maps/dir//J+Philippus+Art+Studio+%26+Gallery,+1846+N+Loop+1604+W+STE+104,+San+Antonio,+TX+78248/@29.6065838,-98.5237701,16.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x865c611c33dc2b73:0x5f7bc89cd7fcdf47!2m2!1d-98.5215116!2d29.6067463"
          rel="noopener noreferrer"
          target="_blank"
        >
          1846 North Loop 1604 W<br />
          Suite 104
          <br />
          San Antonio, TX 78248
        </a>
      </Stack>
    </Box>
  </SimpleGrid>
)

export default LinkGrid
