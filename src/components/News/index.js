import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { DiamondButton } from "../DiamondButton"
import GatsbyImage from "gatsby-image"

const News = () => {
  const { NewsImage } = useStaticQuery(
    graphql`
      query {
        NewsImage: file(relativePath: { eq: "texas.webp" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 60
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [WEBP, PNG]
            )
          }
        }
      }
    `
  )

  const image = getImage(NewsImage)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      tag="section"
      fluid={image}
      {...bgImage}
      preserveStackingContext
    >
      <div style={{ minHeight: 500, minWidth: 500 }}>
        <GatsbyImage image={image} alt={"news placeholder image"}>
          <DiamondButton buttonStyle="btn--primary" buttonSize="btn--large">
            LATEST NEWS
          </DiamondButton>
        </GatsbyImage>
      </div>
    </BackgroundImage>
  )
}

export default News
