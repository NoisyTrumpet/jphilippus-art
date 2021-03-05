import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Future Home of J.Philippus Art Studio</h1>
    <p>
      We are excited to share that The Shard Studio, LLC is now J. Philippus Art
      Studio and Gallery, LLC!
    </p>
    <p>Please stay tuned for the launch of our new website.</p>
    <StaticImage
      src="../images/texas.webp"
      width={300}
      quality={95}
      formats={["WEBP"]}
      alt="Texas glass art"
      style={{
        margin: "0 auto",
      }}
    />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
