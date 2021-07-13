import { Box, Grid } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/Layout/Layout"

const NewsPage = data => {
  const { articles } = data?.pageContext
  return (
    <Layout>
      <Box>
        <Grid>
          <Box>
            <h1>News</h1>
          </Box>
          <Box></Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default NewsPage
