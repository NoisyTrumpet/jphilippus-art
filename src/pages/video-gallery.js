import { Container, Grid, GridItem, Box, Text, Center } from "@chakra-ui/layout"
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
  IconButton,
  Button,
} from "@chakra-ui/react"
import { AiFillPlayCircle } from "react-icons/ai"

const VideoModal = ({ isOpen, onClose, btnRef, title, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      opacity={1}
      initialFocusRef={btnRef}
      finalFocusRef={btnRef}
      key={id}
      aria-label={id}
    >
      <ModalOverlay background={`blackAlpha.100`} />
      <ModalContent
        zIndex={99999999999999}
        opacity={1}
        style={{ opacity: `100%!important` }}
        width={`fit-content`}
        aria-label={id}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <iframe
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const VideoGallery = ({ data: videos }) => {
  console.log(videos)

  const { isOpen, onOpen, onClose, id } = useDisclosure()
  const btnRef = React.useRef()

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
                <Box display="grid" placeItems="center" position="relative">
                  <GatsbyImage
                    image={getImage(video.node.localThumbnail)}
                    alt={video.node.title}
                    style={{ gridArea: "1/1" }}
                  />
                  <Center
                    style={{
                      gridArea: "1/1",
                      position: "relative",
                    }}
                  >
                    <IconButton
                      fontSize={`6xl`}
                      aria-label={video.node.title}
                      icon={<AiFillPlayCircle />}
                      onClick={onOpen}
                      ref={btnRef}
                      id={video.node.videoId}
                      width={`fit-content`}
                      height={`fit-content`}
                      color={`primary`}
                      variant={`ghost`}
                    />
                    {/* <IconButton  */}
                  </Center>
                </Box>
                <Text>{video.node.title}</Text>
              </Box>
              <VideoModal
                isOpen={isOpen}
                onClose={onClose}
                btnRef={btnRef}
                title={video.node.title}
                id={video.node.videoId}
              />
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
