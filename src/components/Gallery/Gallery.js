import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, GridItem } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./gallery.css"

const Gallery = ({ isPage, isEventPage }) => {
  const {
    galleryImages,
    someGalleryImages,
    eventImages,
  } = useStaticQuery(graphql`
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
                formats: [WEBP, PNG]
                layout: CONSTRAINED
                quality: 95
                placeholder: BLURRED
                width: 1920
              )
            }
          }
        }
      }

      eventImages: allFile(
        filter: { relativeDirectory: { eq: "event-images" } }
        limit: 5
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              id
              gatsbyImageData(
                formats: [WEBP, PNG]
                layout: CONSTRAINED
                quality: 90
                placeholder: BLURRED
                width: 800
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
                formats: [WEBP, PNG]
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

  if (isEventPage) {
    return (
      <Grid templateColumns={["repeat(2, 1fr)"]} className="gallery">
        {eventImages.edges.map(({ node }) => (
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
