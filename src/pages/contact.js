import React from "react"
import Layout from "../components/Layout/Layout"
import {
    Text,
    Heading,
    Grid,
    GridItem,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
    Container,
} from "@chakra-ui/react"

const Contact = () => {
    return (
        <Layout>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2 ,1fr)"]}
                templateRows={["repeat(3 ,1fr)", "repeat(2 ,1fr)", "repeat(2 ,1fr)"]}
                gap={2, 6, 6}
                px={["1rem", "2rem", "4rem"]}
                py="2rem"
            >
                <GridItem
                    colStart={1}
                    colSpan={[1, 2, 1]}
                    rowStart={1}
                    rowSpan={[1, 1, 2]}
                >
                    <Box bg="blue.100" h="100%">Map</Box>
                </GridItem>
                <GridItem
                    colStart={[1, 1, 2]}
                    colSpan={1}
                    rowStart={[2, 2, 1]}
                    rowSpan={1}
                >
                    <Heading as="h3" color="#3FA7B6">Address</Heading>
                    <Text fontSize="21px">1846 North Loop 1604W Suite 104</Text>
                    <Text fontSize="21px">San Antonio, Tx 78248</Text>
                    <Text fontSize="21px">210.474.0440</Text>
                    <Text fontSize="21px" mt={4}>Open M-F 11am-6pm | Sat 11am-5pm</Text>

                    <Heading as="h3" color="#3FA7B6" mt={4, 8, 16}>Have Questions?</Heading>
                    <Text fontSize="21px">Our knowledgeable staff will provide answers to any of your questions. You can expect an email response by the next business day.</Text>
                </GridItem>
                <GridItem
                    colStart={[1, 2, 2]}
                    colSpan={1}
                    rowStart={[3, 2, 2]}
                    rowSpan={1}
                >
                    <FormControl id="first-name" isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder="First name" />
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder="Last name" />
                        <FormLabel>Email Address</FormLabel>
                        <Input placeholder="Email Address" />
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Message Area" />
                        <Container display="flex" justifyContent="flex-end">
                            <Button
                                mt={4}
                                bg="#3FA7B6"
                                w="80px"
                                h="80px"
                                borderRadius="15px"
                                color="white"
                                _hover={{ background: "#c09559" }}
                                transform="rotate(45deg)"
                                // isLoading={props.isSubmitting}
                                type="submit"
                            >
                                <Text transform="rotate(-45deg)">
                                    Submit
                            </Text>
                            </Button>
                        </Container>
                    </FormControl>
                </GridItem>

            </Grid>
        </Layout>
    )
}

export default Contact