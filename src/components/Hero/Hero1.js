import * as React from "react"
import { Portal, Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Spacer from "../Spacer/index"
import { StaticImage } from "gatsby-plugin-image"


const Hero1 = () => {
    return (
        <Box>
            <StaticImage
                src="../../images/hero-banner.jpg"
                formats={["WEBP", "AVIF", "JPG"]}
                alt=""
                layout="fullWidth"
            />

            <Portal>
                <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(3, 1fr)" gap={2} style={{height:"800px"}}>
                    <GridItem colSpan={2} rowSpan={2} rowStart={2} colStart={4}>
                        <Box bg="green.100">This is only a test on Hero1.</Box>
                    </GridItem>
                </Grid>
            </Portal>
        </Box>
    )
}

export default Hero1