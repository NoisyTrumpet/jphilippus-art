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
import styles from "../../styles/main.scss"

const Layout = ({ children }) => (
  <ChakraProvider theme={theme}>
    <SkipNavLink />
    <Header />
    <SkipNavContent>
      {children}
      <Footer />
    </SkipNavContent>
  </ChakraProvider>
)

export default Layout
