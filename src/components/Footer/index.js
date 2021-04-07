import * as React from "react"
import { Grid, Container, Box, Image, Text, Stack, Link } from "@chakra-ui/react"
import ThemeToggle from "../ThemeToggle/index"

import "./Footer.scss"

import Logo from "../../images/logo-horizontal.png"

const Footer = () => {
  return (
    <Container as="footer" py={16}>
      <Grid
      templateColumns="repeat(3, 1fr)" 
      gap={3} 
      m={10}>
        
        {/* Footer logo */}
        <Box px={10}>
          <Image src={Logo} />
        </Box>

        {/* Footer Menu section */}
        <Box pr={5}>
          <Text className="footer-heading" fontSize="xl">Menu</Text>
          <Grid
          templateColumns="repeat(2, 1fr)">
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
          <Text className="footer-heading" fontSize="xl">Contact</Text>
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
      {/* <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr auto 1fr"]}
        alignItems="center"
        gap={[3, 3, 12]}
      >
        <Text textAlign={["center", "center", "left"]}>
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </Text>
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent={["center", "center", "flex-end"]}
        >
          <span>Theme:</span> <ThemeToggle />
        </Stack>
        <Link
          justifySelf={["center", "center", "flex-end"]}
          href="https://github.com/NoisyTrumpet/jphilippus-art"
        >
          Source Code
        </Link>
      </Grid> */}
    </Container>
  )
}

export default Footer
