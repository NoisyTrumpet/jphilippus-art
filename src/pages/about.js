import * as React from "react";
import {
    Box,
    Grid,
    Text,
    Container,
    Center,
  } from "@chakra-ui/react";

const AboutPage = () => {
    return(
        <div>
            <Container className="about-bio">
                <Grid
                    templateColumns={["repeat(2, 1fr)"]}        
                    templateRows="repeat(1, 1fr)"
                    gap={2}>
                <span>Image here</span>
                <Box className="bio-text" p="5" style={{ backgroundColor: `#F2F2F2` }}>
                    <Text Tag="h1" style={{ color: `#3FA7B6`, fontSize: `25px`, fontWeight: `600`, textTransform: `uppercase` }}>About Jeanne</Text>
                    <Text py="5">Jeanne grew up on a farm in Shiner, Texas. Inspired by her father's love of art, she developed her own style using leftover paint and items she found on the farm. In her late twenties, Jeanne lost her husband to cancer after only a few short years of marriage. While grieving such a loss, Jeanne began incorporating broken glass in her art as a metaphor for life. Creating art from the broken and discarded materials was a crucial part of her healing process. Combining acrylics, resins and recycled glass, Jeanne began creating unique art that set the stage for her future career.</Text>
                    <Text>Jeanne currently lives in San Antonio, Texas where she owns J. Philippus Art Studio & Gallery. One of her greatest passions is her love of people and art. She feels blessed to teach classes and create abstract, contemporary and coastal art every day.</Text>
                </Box>
                </Grid>
                <Center className="quote-block">
                    <Text p="10" style={{ color: `#3FA7B6`, fontStyle: `italic`, fontSize: `25px` }}>"Creating Art From The Broken Pieces"</Text>
                </Center>
            </Container>
        </div>
    )
}

export default AboutPage