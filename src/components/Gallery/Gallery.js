import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./gallery.css"

export const query = graphql`
  query {
    allImageSharp(filter: {fileAbsolutePath: {regex: "/gallery/"  }}) {
      edges {
        node {
          id
          fluid(quality: 90, fit: CONTAIN) {
            srcSetWebp
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Gallery = () => {
  // const { allImages } = useStaticQuery(
  //   graphql`
  //   query {
  //     allImages: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
  //       edges {
  //         node {
  //           base
  //           childImageSharp {
  //             gatsbyImageData(
  //               formats: [AUTO, WEBP, AVIF]
  //               layout: CONSTRAINED
  //               quality: 90
  //               placeholder: BLURRED
  //             )
  //             fluid(quality: 90, fit: CONTAIN) {
  //               srcSetWebp
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `)

  console.log(allImages)

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      autoRows
      gap={4}
      className="gallery"
    >
      {data.allImageSharp.edges.map(edge => 
        <GatsbyImage fluid={edge.node.fluid} />
      )}
        {/* <GatsbyImage image={galleryImages} /> */}
    </Grid>
  )
}

export default Gallery