import React from "react"
import Layout from "../components/Layout/Layout"
import { Container, Text, Heading, useColorModeValue } from "@chakra-ui/react"

const BlogPage = ({ pageContext }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  return (
    <Layout>
      <Container my={[16, 16, 16, 16]}>
        <Heading as="h1" fontSize="3xl" color={themeBlue}>
          {pageContext.article?.title}
        </Heading>
        <Text my={7}>{pageContext.article?.body_html}</Text>
      </Container>
    </Layout>
  )
}

export default BlogPage
