import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
// import "https://coattend.s3.amazonaws.com/script.min.js?shop=j-philippus-art-studio.myshopify.com"

const ClassSchedule = () => {
  return (
    <Layout>
      <SEO title="Class Schedule" />
      <section>
        <iframe
          id="coattend-iframe"
          width="100%"
          height="600px"
          src="https://widget.coattend.com/calendar?template=true&shop=j-philippus-art-studio.myshopify.com"
          frameBorder="0"
          allowFullScreen=""
          style={{ height: "790px" }}
        />
      </section>
    </Layout>
  )
}

export default ClassSchedule
