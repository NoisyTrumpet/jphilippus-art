import { Container, Text } from "@chakra-ui/layout"
import React from "react"
import Gallery from "../components/Gallery/Gallery"
import Layout from "../components/Layout/Layout"
import AltHero from "../components/AltHero/index"
import SEO from "../components/SEO"

const GalleryPage = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <AltHero
        title="Gallery"
        subcaption="Lorem Ipsum"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
      />
      <Gallery isPage />
    </Layout>
  )
}

export default GalleryPage
