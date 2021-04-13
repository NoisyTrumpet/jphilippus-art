/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { SkipNavContent, SkipNavLink } from "../SkipNav/index"
import Footer from "../Footer/index"
import Header from "../Header/header"
import { ChakraHelpersProvider } from "../../context/chakra-helpers-context"

const Layout = ({ children }) => (
  <ChakraHelpersProvider>
    <SkipNavLink />
    <Header />
    <SkipNavContent>{children}</SkipNavContent>
    <Footer />
  </ChakraHelpersProvider>
)

export default Layout
