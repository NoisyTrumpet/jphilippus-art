import { Container, Grid, GridItem, Box, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout/Layout"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

const VideoGallery = ({ data: videos }) => {
  console.log(videos)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Container>
        <Grid
          templateColumns={[
            `repeat(1, 1fr)`,
            `repeat(2, 1fr)`,
            `repeat(3, 1fr)`,
            `repeat(4, 1fr)`,
          ]}
          gap={4}
        >
          {videos.allYoutubeVideo.edges.map(video => (
            <GridItem key={video.node.id}>
              <Box>
                <GatsbyImage
                  image={getImage(video.node.localThumbnail)}
                  alt={video.node.title}
                />
                <Text>{video.node.title}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default VideoGallery

export const query = graphql`
  query VideoPageQuery {
    allYoutubeVideo {
      edges {
        node {
          id
          title
          localThumbnail {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                formats: WEBP
                placeholder: BLURRED
                quality: 90
                layout: CONSTRAINED
              )
            }
          }
          description
          videoId
        }
      }
    }
  }
`
