import * as React from "react"
import { Grid, Container, Box, Image, Text, Link } from "@chakra-ui/react"
import ThemeToggle from "../ThemeToggle/index"

import "./Footer.scss"

import Logo from "../../images/logo-horizontal.png"

const Footer = () => {
  return (
    <Container className="footer-container" as="footer" py={16}>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} m={10}>
        {/* Footer logo */}
        <Box px={10}>
          <Image className="footer-logo" src={Logo} />
        </Box>

        {/* Footer Menu section */}
        <Box pr={5}>
          <Text className="footer-heading" fontSize="xl">
            Menu
          </Text>
          <Grid templateColumns="repeat(2, 1fr)">
            <Box className="footer-menu">
              <Link className="footer-link">About the Artist</Link>
              <br />
              <Link className="footer-link">Shop</Link>
            </Box>
            <Box className="footer-menu">
              <Link className="footer-link">News/Press</Link>
              <br />
              <Link className="footer-link">Contact</Link>
              <br />
              <Link className="footer-link">FAQ</Link>
            </Box>
          </Grid>
        </Box>

        {/* Footer Contact section */}
        <Box pr={5}>
          <Text className="footer-heading" fontSize="xl">
            Contact
          </Text>
          <Box className="footer-menu">
            <Link className="footer-link">
              1846 North Loop
              <br />
              1604 W
              <br />
              Suite 104
            </Link>
          </Box>
        </Box>
      </Grid>

      {/* Footer bottom: Copyright and social */}
      <Grid templateColumns="repeat(2, 1fr)" className="footer-bottom">
        <Box>
          <Text>&copy; 2021 J. Philippus Art Studio</Text>
        </Box>
        <Box>
          <Text>Follow us</Text>
        </Box>
      </Grid>

      {/* Footer theme toggler */}
      <Box className="theme-toggle-container">
        <span>Theme:</span> <ThemeToggle />
      </Box>
    </Container>
  )
}

export default Footer
