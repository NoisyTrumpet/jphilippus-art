import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, GridItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./gallery.css"

const Gallery = ({ isPage }) => {
  const { galleryImages, someGalleryImages } = useStaticQuery(graphql`
    query {
      galleryImages: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              id
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF, PNG]
                layout: CONSTRAINED
                quality: 60
                placeholder: BLURRED
                width: 1920
              )
            }
          }
        }
      }
      someGalleryImages: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        limit: 3
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              id
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF, PNG]
                layout: CONSTRAINED
                quality: 60
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
    <Grid templateColumns={["repeat(2, 1fr)"]} className="gallery">
      {isPage
        ? galleryImages.edges.map(({ node }) => (
            <GridItem key={node.childImageSharp.id}>
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt={`Gallery Image`}
                style={{ minWidth: `100%` }}
              />
            </GridItem>
          ))
        : someGalleryImages.edges.map(({ node }) => (
            <GridItem key={node.childImageSharp.id}>
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt={`Gallery Image`}
                style={{ minWidth: `100%` }}
              />
            </GridItem>
          ))}
    </Grid>
  )
}

Gallery.propTypes = {
  isPage: PropTypes.bool,
}

export default Gallery
