/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { SkipNavContent, SkipNavLink } from "../SkipNav/index"
import Footer from "../Footer/index"
import Header from "../Header/header"
import { theme } from "../../@chakra-ui/gatsby-plugin/theme/index"

const Layout = ({ children }) => (
  <ChakraProvider theme={theme}>
    <SkipNavLink />
    <Header />
    <SkipNavContent>{children}</SkipNavContent>
    <Footer />
  </ChakraProvider>
)

export default Layout
