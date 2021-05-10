import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, GridItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./gallery.css"

const Gallery = () => {
  const { galleryImages } = useStaticQuery(graphql`
    query {
      galleryImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              id
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                quality: 90
                placeholder: BLURRED
                width: 1920
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      templateColumns={["repeat(1fr)", "repeat(3, 1fr)"]}
      gap={2}
      className="gallery"
    >
      {galleryImages.edges.map(({ node }) => (
        <GridItem key={node.childImageSharp.id}>
          <GatsbyImage
            image={getImage(node.childImageSharp)}
            alt={`Gallery Image`}
          />
        </GridItem>
      ))}
    </Grid>
  )
}

export default Gallery
