import * as React from "react";
import { Container, Box, Text, Grid, Center } from "@chakra-ui/layout";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import DiamondButton from "../DiamondButton/DiamondButton"
import { convertToBgImage } from "gbimage-bridge";

import "./BlockGrid.scss"

const BlockGrid = () => {

    const { JewelryImg, FlowerImg, AcrylicImg } = useStaticQuery(
        graphql`
            query {
                JewelryImg: file(relativePath: { eq: "jewelry.jpg" } ) {
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
                FlowerImg: file(relativePath: { eq: "flower.jpg" } ) {
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
                AcrylicImg: file(relativePath: { eq: "acrylic-pour.jpg" } ) {
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

    const JewelryImage = getImage(JewelryImg)
    const JewelryBgImg = convertToBgImage(JewelryImage)

    const FlowerImage = getImage(FlowerImg)
    const FlowerBgImg = convertToBgImage(FlowerImage)

    const AcrylicImage = getImage(AcrylicImg)
    const AcrylicBgImg = convertToBgImage(AcrylicImage)
    
    return(
        <Container maxWidth="container.lg">
            <Grid className="block-grid" templateColumns={["repeat(2, 1fr)"]} gap={25}>
                <Box className="block-grid-item">
                    <BackgroundImage className="block-grid-image" Tag="section" {...FlowerBgImg} preserveStackingContext />
                </Box>
                <Box className="block-grid-item" py="5">
                    <Text style={{ fontSize: `25px`, color: `#3FA7B6`, paddingBottom: `5px`, textTransform: `uppercase` }}>Create Your Masterpiece</Text>
                    <Text>The Acrylic Pour on Metal Flowers Class is back with more classes and we are adding resin for no extra charge.</Text>
                    <Center my="10">
                    <DiamondButton buttonStyle="btn--primary" buttonSize="btn--medium" style={{ textAlign: `center`, margin: `0 auto` }} py="10">Book a Class</DiamondButton>
                    </Center>
                </Box>
                <Box className="block-grid-item">
                    <BackgroundImage 
                        className="block-grid-image" 
                        Tag="section" 
                        {...AcrylicBgImg} 
                        preserveStackingContext>
                        <Center className="center-grid-diamond">
                            <DiamondButton 
                                className="grid-diamond-btn" 
                                buttonStyle="btn--primary-transparent" 
                                buttonSize="btn--xl"
                                m="0"
                                p="0">
                                    Custom Art Kits
                            </DiamondButton>
                        </Center>
                    </BackgroundImage>
                </Box>
                <Box className="block-grid-item">
                    <BackgroundImage 
                        className="block-grid-image" 
                        Tag="section" 
                        {...JewelryBgImg} 
                        preserveStackingContext>
                        <Center className="center-grid-diamond">
                            <DiamondButton 
                                className="grid-diamond-btn" 
                                buttonStyle="btn--primary-transparent" 
                                buttonSize="btn--xl">
                                Jewelry
                            </DiamondButton>
                        </Center>
                    </BackgroundImage>
                </Box>
            </Grid>
        </Container>
    )
}

export default BlockGrid