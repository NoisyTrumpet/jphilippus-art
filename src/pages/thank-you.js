import React from "react"
import AltHero from "../components/AltHero"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO"

const ThankYou = () => {
  return (
    <Layout>
      <Seo
        title={"Thank you for your submission"}
        description={"Thank you for submission"}
      />
      <AltHero
        title="Thank you!"
        subcaption="Someone from our team will reach out shortly."
      />
    </Layout>
  )
}

export default ThankYou
