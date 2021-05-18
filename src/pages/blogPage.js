import React from "react"
import Layout from "../components/Layout/Layout"
import {
  Container,
  Box,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react"

const BlogPage = ({ pageContext }) => {
  const themeBlue = useColorModeValue(`secondary`, `gray.300`)
  const gray = useColorModeValue(`bgGray`)
  const blogImage = pageContext.article?.image.src
  return (
    <Layout>
      <Box backgroundColor={gray} py={6}>
        <Container my={[16, 16, 16, 16]}>
          <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`]} gap={4}>
            <GridItem>
              <Text
                as="span"
                fontSize="2xl"
                color={`primary`}
                textTransform="uppercase"
              >
                Latest News
              </Text>
              <Text as="h1" fontSize="3xl" color={themeBlue}>
                {pageContext.article?.title}
              </Text>
              <Box
                my={8}
                dangerouslySetInnerHTML={{
                  __html: pageContext.article?.body_html,
                }}
              />
            </GridItem>
            <GridItem display="flex" flexDirection="column" alignItems="center">
              <img src={blogImage} alt={pageContext.article?.title} />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default BlogPage
