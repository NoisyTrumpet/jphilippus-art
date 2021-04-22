import * as React from "react";
import { Container, Box, Text, Grid, Center } from "@chakra-ui/layout";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import DiamondButton from "../DiamondButton/DiamondButton"
import { convertToBgImage } from "gbimage-bridge";

import "./BlockGrid.scss"

const BlockGrid = () => {

    const { GridImage } = useStaticQuery(
        graphql`
            query {
                GridImage: file(relativePath: { eq: "texas.webp" } ) {
                childImageSharp {
                    gatsbyImageData(
                    width: 500
                    quality: 90
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
        `
    )
    const image = getImage(GridImage)
    const bgImage = convertToBgImage(image)
    
    return(
        <Container maxWidth="container.md">
            <Grid templateColumns="repeat(2, 1fr)" gap={25}>
                <Box className="block-grid-item">
                    <BackgroundImage className="block-grid-image" Tag="section" {...bgImage} preserveStackingContext style={{ minHeight: `300px` }} />
                </Box>
                <Box className="block-grid-item" style={{ minHeight: `300px` }}>
                    <Text style={{ fontSize: `25px`, color: `#3FA7B6`, paddingBottom: `5px`, textTransform: `uppercase` }}>Create Your Masterpiece</Text>
                    <Text>The Acrylic Pour on Metal Flowers Class is back with more classes and we are adding resin for no extra charge.</Text>
                    <Center>
                    <DiamondButton buttonStyle="btn--primary" buttonSize="btn--small" style={{ textAlign: `center`, margin: `0 auto` }} py="10">Book a Class</DiamondButton>
                    </Center>
                </Box>
                <Box className="block-grid-item">
                    <BackgroundImage className="block-grid-image" Tag="section" {...bgImage} preserveStackingContext style={{ minHeight: `300px` }}>
                        <DiamondButton 
                            className="grid-diamond-btn" 
                            buttonStyle="btn--primary" 
                            buttonSize="btn--medium"
                            m="0"
                            p="0">
                                Custom Art Kits
                        </DiamondButton>
                    </BackgroundImage>
                </Box>
                <Box className="block-grid-item">
                    <BackgroundImage 
                        className="block-grid-image" 
                        Tag="section" 
                        {...bgImage} 
                        preserveStackingContext 
                        style={{ minHeight: `300px` }}>

                        <DiamondButton 
                        className="grid-diamond-btn" 
                        buttonStyle="btn--primary" 
                        buttonSize="btn--medium">Jewelry</DiamondButton>

                    </BackgroundImage>
                </Box>
            </Grid>
        </Container>
    )
}

export default BlockGrid