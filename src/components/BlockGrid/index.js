import * as React from "react";
import { Container, Box, Text, Grid } from "@chakra-ui/layout";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { DiamondButton } from "../DiamondButton/DiamondButton";
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
                    <BackgroundImage className="block-grid-image" Tag="section" {...bgImage} preserveStackingContext style={{ minHeight: `250px` }} />
                </Box>
                <Box className="block-grid-item" style={{ minHeight: `250px` }}>
                    <Text style={{ fontSize: `25px`, color: `#3FA7B6`, paddingBottom: `5px` }}>Create Your Masterpiece</Text>
                    <Text>The Acrylic Pour on Metal Flowers Class is back with more classes and we are adding resin for no extra charge.</Text>
                    {/* <DiamondButton buttonStyle="btn--primary" buttonSize="btn--small" style={{ textAlign: `center` }}>Book a Class</DiamondButton> */}
                </Box>
                <Box className="block-grid-item">
                    <BackgroundImage className="block-grid-image" Tag="section" {...bgImage} preserveStackingContext style={{ minHeight: `250px` }}>
                    {/* <DiamondButton className="grid-diamond-btn" buttonStyle="btn--primary" buttonSize="btn--small">Test</DiamondButton> */}
                    </BackgroundImage>
                </Box>
                <Box className="block-grid-item">
                    <BackgroundImage className="block-grid-image" Tag="section" {...bgImage} preserveStackingContext style={{ minHeight: `250px` }}>
                    <Text className="grid-item-btn" style={{ fontSize: `20px` }}>Test</Text>
                    {/* <DiamondButton buttonStyle="btn--primary" buttonSize="btn--small">Test</DiamondButton> */}
                    </BackgroundImage>
                </Box>
            </Grid>
        </Container>
    )
}

export default BlockGrid