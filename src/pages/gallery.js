import React from "react"
import Layout from "../components/Layout/Layout"
import Gallery from "../components/Gallery/Gallery"
import AltHero from "../components/AltHero/index"
import Seo from "../components/SEO"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <AltHero
        title="Gallery"
        subcaption="Take a look, and be inspired"
        body="Browse through our gallery of unique, hand-crafted artwork and be inspired to create your own piece with the assistance of our instructors. You can create ANYTHING your imagination comes up with."
      />
      <Gallery isPage />
    </Layout>
  )
}

export default GalleryPage
