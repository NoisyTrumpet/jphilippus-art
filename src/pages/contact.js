import React from "react"
import Layout from "../components/Layout/Layout"
import { Text, Heading, Grid, GridItem, Box } from "@chakra-ui/react"

const Contact = () => {
    return (
        <Layout>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                templateRows={["repeat(4 ,1fr)", "repeat(3 ,1fr)"]}
                gap={8}
                px="4rem"
                py="2rem"
            >
                <GridItem
                    colStart={1}
                    colSpan={1}
                    rowStart={1}
                    rowSpan={3}
                >
                    <Box bg="blue.100" h="100%">Map</Box>
                </GridItem>
                <GridItem
                    colStart={2}
                    colSpan={1}
                    rowStart={1}
                    rowSpan={1}
                >
                    <Heading as="h3" color="#3FA7B6">Address</Heading>
                    <Text fontSize="21px">1846 North Loop 1604W Suite 104</Text>
                    <Text fontSize="21px">San Antonio, Tx 78248</Text>
                    <Text fontSize="21px">210.474.0440</Text>
                    <Text fontSize="21px" mt={4}>Open M-F 11am-6pm | Sat 11am-5pm</Text>
                </GridItem>
                <GridItem
                    colStart={2}
                    colSpan={1}
                    rowStart={2}
                    rowSpan={1}
                >
                    <Heading as="h3" color="#3FA7B6">Have Questions?</Heading>
                    <Text fontSize="21px">Our knowledgeable staff will provide answers to any of your questions. You can expect an email response by the next business day.</Text>
                </GridItem>
                <GridItem
                    colStart={2}
                    colSpan={1}
                    rowStart={3}
                    rowSpan={1}
                >
                    <Box>Form</Box>
                </GridItem>
            </Grid>
        </Layout>
    )
}

export default Contact