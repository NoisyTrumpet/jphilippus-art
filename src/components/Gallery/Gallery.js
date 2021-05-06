import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Grid, GridItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./gallery.css"

const Gallery = ({data}) => {
 
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      autoRows
      gap={4}
      className="gallery"
    >
      {data.galleryImages.edges.map(({node}) => (
        <GridItem>
            <GatsbyImage image={getImage(node.childImageSharp)} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default Gallery

export const {galleryImages} = graphql`
    query {
      galleryImages: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                quality: 90
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
`