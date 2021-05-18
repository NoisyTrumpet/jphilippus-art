import React from "react"
import Layout from "../components/Layout/Layout"
import { Container, Box, Text, useColorModeValue } from "@chakra-ui/react"
import SEO from "../components/SEO"

const PolicyPage = ({ pageContext }) => {
  const gray = useColorModeValue(`bgGray`)
  return (
    <Layout>
      <SEO title={pageContext.policy?.title} />
      <Box backgroundColor={gray} py={6}>
        <Container my={[16, 16, 16, 16]}>
          <Text
            as="h1"
            color="primary"
            textTransform="uppercase"
            fontSize="3xl"
            textAlign="center"
          >
            {pageContext.policy?.title}
          </Text>
          <Box
            my={8}
            dangerouslySetInnerHTML={{
              __html: pageContext.policy?.body,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export default PolicyPage
