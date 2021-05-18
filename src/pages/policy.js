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

const PolicyPage = ({ pageContext }) => {
  const gray = useColorModeValue(`bgGray`)
  return (
    <Layout>
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
