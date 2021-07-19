import { Box, Grid, Heading, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/Layout/Layout"
import BlogCard from "../components/BlogCard/index"

const NewsPage = data => {
  const { articles } = data?.pageContext
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  return (
    <Layout>
      <Box>
        <Grid>
          <Box mb={8} bg={`gray.100`}>
            <Box maxW={`90%`} m={`auto`} py={8}>
              <Heading
                as="h1"
                size="xl"
                mb="2"
                lineHeight="base"
                color={themeBlue}
              >
                Blog
              </Heading>
              {articles.slice(0, 1).map(blog => (
                <BlogCard
                  featured={true}
                  title={blog.title}
                  href={blog.handle}
                  description={blog.summary_html}
                  date={blog.published_at}
                  blogImage={blog.image.src}
                />
              ))}
            </Box>
          </Box>
          <Grid
            templateColumns={[
              `repeat(1, 1fr)`,
              `repeat(2, 1fr)`,
              `repeat(2, 1fr)`,
              `repeat(3, 1fr)`,
            ]}
            gridGap={8}
            maxW={`90%`}
            m={`auto`}
          >
            {articles.slice(1, 20).map(blog => (
              <BlogCard
                title={blog.title}
                href={blog.handle}
                description={blog.summary_html}
                date={blog.published_at}
                blogImage={blog.image.src}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default NewsPage
