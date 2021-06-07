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
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react"
import { AiFillPlayCircle } from "react-icons/ai"

const VideoModal = ({ title, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <IconButton
        fontSize={`6xl`}
        aria-label={title}
        icon={<AiFillPlayCircle />}
        onClick={onOpen}
        ref={btnRef}
        id={id}
        width={`fit-content`}
        height={`fit-content`}
        color={`primary`}
        variant={`ghost`}
      />
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
        </ModalContent>
      </Modal>
    </>
  )
}

const VideoGallery = ({ data: videos }) => {
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
                    <VideoModal
                      // isOpen={isOpen}
                      // onClose={onClose}
                      title={video.node.title}
                      id={video.node.videoId}
                    />
                    {/* <IconButton  */}
                  </Center>
                </Box>
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
