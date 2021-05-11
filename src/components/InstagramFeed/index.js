import React from "react"
import PropTypes from "prop-types"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { SimpleGrid } from "@chakra-ui/layout"

const InstagramFeed = ({ images }) => {
  return (
    <SimpleGrid columns={[2, 3]} spacing={4}>
      {images.map(image => (
        <a
          href={image.node.permalink}
          target="_blank"
          rel="noopener noreferrer"
          key={image.node.caption}
        >
          <GatsbyImage
            image={image.node.localImage.childImageSharp.gatsbyImageData}
            alt={image.node.caption}
            style={{
              gridArea: "1/1",
              minHeight: `100%`,
              objectFit: `cover`,
              minWidth: `100%`,
            }}
          />
        </a>
      ))}
    </SimpleGrid>
  )
}

export default InstagramFeed

InstagramFeed.propTypes = {
  images: PropTypes.array,
}
