import React from "react"
import Layout from "../components/Layout/Layout"
import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"

const BlogPage = ({ pageContext }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  const blogImage = pageContext.article?.image.src
  return (
    <Layout>
      <Container my={[16, 16, 16, 16]}>
        <Heading as="h1" fontSize="3xl" color={themeBlue}>
          {pageContext.article?.title}
        </Heading>
        <Box
          my={8}
          dangerouslySetInnerHTML={{ __html: pageContext.article?.body_html }}
        />
        <img src={blogImage} alt={pageContext.article?.title} />
      </Container>
    </Layout>
  )
}

export default BlogPage
