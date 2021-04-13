import * as React from "react"
import { Portal, Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Spacer from "../Spacer/index"
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
    return (
        <Box
        bgImage="url('../../images/hero-banner.jpg')"
        bgPosition="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bg="red.100"
        maxH={600}
        >

            <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(3, 1fr)" gap={2} style={{height:"800px"}}>
                <GridItem colSpan={2} rowSpan={2} rowStart={2} colStart={4}>
                    <Box bg="blue.100">This is only a test on just Hero.</Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Hero